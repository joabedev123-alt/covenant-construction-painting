import { EstimateInput } from "./model";

export const ESTIMATE_RECIPIENT = "+15084056918";
export const ESTIMATE_EMAIL = "damascenoluiz31@gmail.com";
export function composeEstimate(input: EstimateInput, ios: boolean) {
  const body = `Hello, I'd like to request a project estimate.\n\nName: ${input.name.trim()}\nPhone: ${input.phone.trim()}\nEmail: ${input.email.trim()}\nProject: ${input.projectType.trim()}\nMessage: ${input.message.trim() || "Not provided"}`;
  return {
    body,
    smsHref: `sms:${ESTIMATE_RECIPIENT}${ios ? "&" : "?"}body=${encodeURIComponent(body)}`,
    emailHref: `mailto:${ESTIMATE_EMAIL}?subject=${encodeURIComponent("Project estimate request")}&body=${encodeURIComponent(body)}`,
  };
}
export type EstimateDraft = ReturnType<typeof composeEstimate>;
