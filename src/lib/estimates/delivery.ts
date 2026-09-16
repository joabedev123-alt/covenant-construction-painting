import { EstimateRequest, estimateSms } from "./model";
import { SmsError } from "./sms";
export type EstimateRecord = {
  request: EstimateRequest;
  status: "unavailable" | "sending" | "accepted" | "failed" | "unknown";
  createdAt: string;
  updatedAt: string;
  smsSid?: string;
  errorCode?: number;
};
export type EstimateRepository = {
  load: (id: string) => Promise<EstimateRecord | null>;
  save: (record: EstimateRecord) => Promise<void>;
  exclusive: <T>(operation: () => Promise<T>) => Promise<T>;
};
export type DeliveryResult = {
  status: number;
  body: { ok?: boolean; id?: string; smsStatus?: string; error?: string };
};
const failure =
  "We couldn't send your request. Please call 508-405-6918 for assistance. Your details are still available in this form.";
const unknown =
  "We couldn't confirm the message status. Please call 508-405-6918 before submitting another request.";
export async function deliverEstimate(
  request: EstimateRequest,
  repository: EstimateRepository,
  sender: ((body: string) => Promise<string>) | null,
): Promise<DeliveryResult> {
  const smsBody = estimateSms(request);
  const initial = await repository.exclusive(async () => {
    const existing = await repository.load(request.id);
    if (
      existing &&
      JSON.stringify(existing.request) !== JSON.stringify(request)
    )
      return {
        reply: {
          status: 409,
          body: {
            error: "This request was already used. Please refresh the page.",
          },
        } as DeliveryResult,
      };
    if (existing?.status === "accepted")
      return {
        reply: {
          status: 201,
          body: { ok: true, id: request.id, smsStatus: "accepted" },
        } as DeliveryResult,
      };
    if (existing && ["sending", "unknown"].includes(existing.status))
      return {
        reply: { status: 409, body: { error: unknown } } as DeliveryResult,
      };
    const now = new Date().toISOString();
    const record: EstimateRecord = {
      request,
      status: sender ? "sending" : "unavailable",
      createdAt: existing?.createdAt || now,
      updatedAt: now,
    };
    await repository.save(record);
    if (!sender)
      return {
        reply: { status: 503, body: { error: failure } } as DeliveryResult,
      };
    return { record };
  });
  if (initial.reply) return initial.reply;
  const record = initial.record!;
  try {
    record.smsSid = await sender!(smsBody);
    record.status = "accepted";
  } catch (error) {
    record.status =
      error instanceof SmsError && !error.uncertain ? "failed" : "unknown";
    if (error instanceof SmsError) record.errorCode = error.code;
  }
  record.updatedAt = new Date().toISOString();
  await repository.save(record);
  return record.status === "accepted"
    ? { status: 201, body: { ok: true, id: request.id, smsStatus: "accepted" } }
    : {
        status: 503,
        body: { error: record.status === "unknown" ? unknown : failure },
      };
}
