import { test, expect } from "@playwright/test";
import { composeEstimate } from "../src/lib/estimates/compose";
import { randomUUID } from "node:crypto";
import {
  validateEstimate,
  estimateSms,
  EstimateRequest,
} from "../src/lib/estimates/model";
import {
  sendSms,
  smsConfig,
  SmsError,
  SMS_DESTINATION,
} from "../src/lib/estimates/sms";
import {
  deliverEstimate,
  EstimateRecord,
  EstimateRepository,
} from "../src/lib/estimates/delivery";
const input = () => ({
  id: randomUUID(),
  source: "contact",
  name: "Jane Smith",
  phone: "508-222-3344",
  email: "jane@example.com",
  projectType: "Kitchen Remodeling",
  message: "New cabinets and counters.\nAvailable next month.",
  website: "",
});
const config = {
  accountSid: `AC${"a".repeat(32)}`,
  authToken: "unit-test-only",
  messagingServiceSid: `MG${"b".repeat(32)}`,
};
const sid = `SM${"c".repeat(32)}`;
function memoryRepository() {
  const records = new Map<string, EstimateRecord>();
  let queue = Promise.resolve();
  const repository: EstimateRepository = {
    load: async (id) => structuredClone(records.get(id) || null),
    save: async (record) => {
      records.set(record.request.id, structuredClone(record));
    },
    exclusive<T>(fn: () => Promise<T>) {
      const next = queue.then(fn, fn);
      queue = next.then(
        () => undefined,
        () => undefined,
      );
      return next;
    },
  };
  return { repository, records };
}
test("SMS includes all visitor data, supports both forms and rejects invalid requests", () => {
  const data = validateEstimate(input());
  const body = estimateSms(data);
  for (const value of [
    data.name,
    data.phone,
    data.email,
    data.projectType,
    data.message,
  ])
    expect(body).toContain(value);
  expect(body.length).toBeLessThanOrEqual(1600);
  for (const change of [
    { name: "" },
    { phone: "abc" },
    { email: "invalid" },
    { projectType: "Invalid" },
    { message: "x".repeat(1001) },
    { website: "spam" },
    { name: "Jane\nInjected header" },
  ])
    expect(() => validateEstimate({ ...input(), ...change })).toThrow();
  expect(
    validateEstimate({
      ...input(),
      source: "estimate-modal",
      projectType: "Multiple Projects",
    }).projectType,
  ).toBe("Multiple Projects");
});
test("provider posts only to the owner's fixed number with credentials outside form data", async () => {
  let sent: URLSearchParams | undefined;
  const transport: typeof fetch = async (url, init) => {
    expect(String(url)).toBe(
      `https://api.twilio.com/2010-04-01/Accounts/${config.accountSid}/Messages.json`,
    );
    expect(init?.method).toBe("POST");
    expect(init?.redirect).toBe("error");
    expect((init?.headers as Record<string, string>).Authorization).toMatch(
      /^Basic /,
    );
    sent = new URLSearchParams(String(init?.body));
    return Response.json({ sid, status: "accepted" }, { status: 201 });
  };
  expect(
    await sendSms(
      config,
      estimateSms(validateEstimate({ ...input(), to: "+19999999999" })),
      transport,
    ),
  ).toBe(sid);
  expect(sent!.get("To")).toBe(SMS_DESTINATION);
  expect(sent!.get("MessagingServiceSid")).toBe(config.messagingServiceSid);
  expect(sent!.has("From")).toBe(false);
  await sendSms(
    { ...config, messagingServiceSid: undefined, from: "+18005550123" },
    "Test",
    async (_url, init) => {
      const body = new URLSearchParams(String(init?.body));
      expect(body.get("From")).toBe("+18005550123");
      expect(body.has("MessagingServiceSid")).toBe(false);
      return Response.json({ sid, status: "queued" }, { status: 201 });
    },
  );
  expect(smsConfig({})).toBeNull();
  expect(
    smsConfig({
      TWILIO_ACCOUNT_SID: config.accountSid,
      TWILIO_AUTH_TOKEN: config.authToken,
      TWILIO_FROM_NUMBER: SMS_DESTINATION,
    }),
  ).toBeNull();
});
test("provider errors and ambiguous responses never become successful delivery", async () => {
  await expect(
    sendSms(config, "Test", async () =>
      Response.json({ code: 21610 }, { status: 400 }),
    ),
  ).rejects.toMatchObject({ uncertain: false, code: 21610 });
  await expect(
    sendSms(config, "Test", async () => {
      throw new Error("network");
    }),
  ).rejects.toMatchObject({ uncertain: true });
  await expect(
    sendSms(config, "Test", async () =>
      Response.json({ sid, status: "failed" }, { status: 201 }),
    ),
  ).rejects.toMatchObject({ uncertain: true });
});
test("requests are saved before sending; successful retries do not duplicate SMS", async () => {
  const { repository, records } = memoryRepository();
  const request = validateEstimate(input());
  let count = 0;
  const sender = async (body: string) => {
    count++;
    expect(records.get(request.id)?.status).toBe("sending");
    expect(body).toContain(request.message);
    return sid;
  };
  expect((await deliverEstimate(request, repository, sender)).status).toBe(201);
  expect(records.get(request.id)?.smsSid).toBe(sid);
  expect((await deliverEstimate(request, repository, sender)).body.ok).toBe(
    true,
  );
  expect(count).toBe(1);
  expect(
    (
      await deliverEstimate(
        { ...request, message: "Different request" },
        repository,
        sender,
      )
    ).status,
  ).toBe(409);
  expect(count).toBe(1);
});
test("concurrent submissions and uncertain provider failures are protected against duplicates", async () => {
  const { repository, records } = memoryRepository();
  const request = validateEstimate(input());
  let start!: () => void, finish!: (id: string) => void;
  const started = new Promise<void>((resolve) => {
    start = resolve;
  });
  const completed = new Promise<string>((resolve) => {
    finish = resolve;
  });
  let count = 0;
  const first = deliverEstimate(request, repository, async () => {
    count++;
    start();
    return completed;
  });
  await started;
  expect(
    (
      await deliverEstimate(request, repository, async () => {
        count++;
        return sid;
      })
    ).status,
  ).toBe(409);
  finish(sid);
  expect((await first).status).toBe(201);
  expect(count).toBe(1);
  const uncertain = validateEstimate(input());
  expect(
    (
      await deliverEstimate(uncertain, repository, async () => {
        throw new SmsError(true);
      })
    ).status,
  ).toBe(503);
  expect(records.get(uncertain.id)?.status).toBe("unknown");
  expect(
    (
      await deliverEstimate(uncertain, repository, async () => {
        throw new Error("should not send");
      })
    ).status,
  ).toBe(409);
});
test("missing credentials and rejected SMS preserve requests without false confirmation", async () => {
  const { repository, records } = memoryRepository();
  const request = validateEstimate(input());
  const unavailable = await deliverEstimate(request, repository, null);
  expect(unavailable.status).toBe(503);
  expect(unavailable.body.ok).toBeUndefined();
  expect(records.get(request.id)?.status).toBe("unavailable");
  expect(
    (
      await deliverEstimate(request, repository, async () => {
        throw new SmsError(false, 20003);
      })
    ).status,
  ).toBe(503);
  expect(records.get(request.id)?.status).toBe("failed");
  expect(
    (await deliverEstimate(request, repository, async () => sid)).status,
  ).toBe(201);
});
test("public API validates origin and fields and never reports success without SMS configuration", async ({
  request,
}) => {
  const headers = {
    origin: "http://localhost:3100",
    "x-forwarded-for": "estimate-api-test",
  };
  expect(
    (await request.post("/api/estimates", { data: input() })).status(),
  ).toBe(403);
  expect(
    (
      await request.post("/api/estimates", {
        headers,
        data: { ...input(), email: "bad" },
      })
    ).status(),
  ).toBe(400);
  const data = input();
  const response = await request.post("/api/estimates", { headers, data });
  expect(response.status()).toBe(503);
  expect((await response.json()).ok).toBeUndefined();
  expect((await request.get("/api/estimates")).status()).toBe(405);
  const limited = { ...headers, "x-forwarded-for": "estimate-rate-test" };
  for (let i = 0; i < 5; i++)
    expect(
      (
        await request.post("/api/estimates", {
          headers: limited,
          data: { ...input(), email: "bad" },
        })
      ).status(),
    ).toBe(400);
  expect(
    (
      await request.post("/api/estimates", { headers: limited, data: input() })
    ).status(),
  ).toBe(429);
  expect(
    (await request.get(`/storage/estimates/${data.id}.json`)).status(),
  ).toBe(404);
});
test("contact form prepares SMS and email without server sending and preserves details for editing", async ({ page }) => {
  let requests = 0;
  await page.route("**/api/estimates", async route => { requests++; await route.abort(); });
  await page.goto("/contact");
  await page.getByLabel("Full Name", { exact: false }).fill("Jane Smith");
  await page.getByLabel("Phone Number", { exact: false }).fill("508-222-3344");
  await page.getByLabel("Email Address", { exact: false }).fill("jane@example.com");
  await page.getByLabel("Project Type", { exact: false }).selectOption("Painting");
  await page.getByLabel("Project Message", { exact: false }).fill("Paint kitchen & bath? Café #1.");
  await page.getByRole("button", { name: "CONTINUE TO TEXT MESSAGE", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Your Message Is Ready" })).toBeVisible();
  const body = await page.getByLabel("Prepared message").inputValue();
  for (const detail of ["Jane Smith", "508-222-3344", "jane@example.com", "Painting", "Paint kitchen & bath? Café #1."]) expect(body).toContain(detail);
  const sms = await page.getByRole("link", { name: "Open Text Message", exact: true }).getAttribute("href");
  expect(sms).toBe(`sms:+15084056918?body=${encodeURIComponent(body)}`);
  const email = new URL((await page.getByRole("link", { name: "Open Email", exact: true }).getAttribute("href"))!);
  expect(email.pathname).toBe("damascenoluiz31@gmail.com");
  expect(email.searchParams.get("body")).toBe(body);
  await expect(page.getByText("Your request has not been sent by this website.", { exact: false })).toBeVisible();
  await page.getByRole("button", { name: "Edit Details" }).click();
  await expect(page.locator("#contact-name")).toHaveValue("Jane Smith");
  await expect(page.locator("#contact-message")).toHaveValue("Paint kitchen & bath? Café #1.");
  expect(requests).toBe(0);
});

test("SMS composer encodes special characters for Android and iPhone", async () => {
  const input = { name: "José & Jane", phone: "508-222-3344", email: "jane@example.com", projectType: "Painting", message: "A&B? #1\nSecond line" };
  const android = composeEstimate(input, false);
  const ios = composeEstimate(input, true);
  expect(android.smsHref).toBe(`sms:+15084056918?body=${encodeURIComponent(android.body)}`);
  expect(ios.smsHref).toBe(`sms:+15084056918&body=${encodeURIComponent(ios.body)}`);
  expect(decodeURIComponent(android.smsHref.split("body=")[1])).toBe(android.body);
});
