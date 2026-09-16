import { mkdir } from "node:fs/promises";
import path from "node:path";
import { sameOrigin } from "@/lib/cms/auth";
import { dataDir, exclusive, readJson, writeJson } from "@/lib/cms/store";
import { validateEstimate } from "@/lib/estimates/model";
import { deliverEstimate, EstimateRecord } from "@/lib/estimates/delivery";
import { sendSms, smsConfig } from "@/lib/estimates/sms";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const attempts = new Map<string, { count: number; expires: number }>();
function allowed(request: Request) {
  const now = Date.now();
  for (const [key, entry] of attempts)
    if (entry.expires < now) attempts.delete(key);
  const key =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (!attempts.has(key) && attempts.size >= 10000) return false;
  const entry = attempts.get(key) || { count: 0, expires: now + 10 * 60000 };
  attempts.set(key, entry);
  return ++entry.count <= 5;
}
const json = (body: unknown, status: number) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
export async function POST(request: Request) {
  if (!sameOrigin(request))
    return json({ error: "Unable to submit this request." }, 403);
  if (!allowed(request))
    return json(
      {
        error:
          "Too many requests. Please wait ten minutes or call 508-405-6918.",
      },
      429,
    );
  if (Number(request.headers.get("content-length")) > 10000)
    return json({ error: "Please shorten your project message." }, 413);
  let input;
  try {
    const text = await request.text();
    if (text.length > 10000)
      return json({ error: "Please shorten your project message." }, 413);
    input = validateEstimate(JSON.parse(text));
  } catch (error) {
    return json(
      {
        error:
          error instanceof SyntaxError
            ? "Invalid request."
            : (error as Error).message,
      },
      400,
    );
  }
  try {
    await mkdir(path.join(dataDir, "estimates"), { recursive: true });
    const config = smsConfig(process.env);
    const result = await deliverEstimate(
      input,
      {
        load: (id) => readJson<EstimateRecord>(`estimates/${id}.json`),
        save: (record) =>
          writeJson(`estimates/${record.request.id}.json`, record),
        exclusive,
      },
      config ? (body) => sendSms(config, body) : null,
    );
    return json(result.body, result.status);
  } catch {
    return json(
      {
        error:
          "We couldn't confirm your request. Please call 508-405-6918 for assistance.",
      },
      503,
    );
  }
}
