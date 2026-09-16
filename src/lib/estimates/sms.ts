export const SMS_DESTINATION = "+15084056918";
export type SmsConfig = {
  accountSid: string;
  authToken: string;
  messagingServiceSid?: string;
  from?: string;
};
export class SmsError extends Error {
  constructor(
    public uncertain: boolean,
    public code?: number,
  ) {
    super("SMS submission failed.");
  }
}
export function smsConfig(
  env: Record<string, string | undefined>,
): SmsConfig | null {
  const accountSid = env.TWILIO_ACCOUNT_SID?.trim();
  const authToken = env.TWILIO_AUTH_TOKEN?.trim();
  const messagingServiceSid = env.TWILIO_MESSAGING_SERVICE_SID?.trim();
  const from = env.TWILIO_FROM_NUMBER?.trim();
  if (!accountSid || !/^AC[\da-f]{32}$/i.test(accountSid) || !authToken)
    return null;
  if (
    messagingServiceSid
      ? !/^MG[\da-f]{32}$/i.test(messagingServiceSid)
      : !from || !/^\+[1-9]\d{7,14}$/.test(from)
  )
    return null;
  if (from === SMS_DESTINATION && !messagingServiceSid) return null;
  return { accountSid, authToken, messagingServiceSid, from };
}
export async function sendSms(
  config: SmsConfig,
  body: string,
  transport: typeof fetch = fetch,
): Promise<string> {
  const payload = new URLSearchParams({ To: SMS_DESTINATION, Body: body });
  if (config.messagingServiceSid)
    payload.set("MessagingServiceSid", config.messagingServiceSid);
  else if (config.from) payload.set("From", config.from);
  else throw new SmsError(false);
  let response: Response;
  try {
    response = await transport(
      `https://api.twilio.com/2010-04-01/Accounts/${config.accountSid}/Messages.json`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`${config.accountSid}:${config.authToken}`).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: payload.toString(),
        signal: AbortSignal.timeout(12000),
        redirect: "error",
        cache: "no-store",
      },
    );
  } catch {
    throw new SmsError(true);
  }
  let data: { sid?: string; status?: string; code?: number };
  try {
    data = await response.json();
  } catch {
    throw new SmsError(response.ok || response.status >= 500);
  }
  if (!response.ok)
    throw new SmsError(
      response.status >= 500,
      typeof data.code === "number" ? data.code : undefined,
    );
  if (
    !data.sid ||
    !/^SM[\da-f]{32}$/i.test(data.sid) ||
    !["queued", "accepted", "sending", "sent", "delivered"].includes(
      data.status || "",
    )
  )
    throw new SmsError(true);
  return data.sid;
}
