export type EstimateInput = {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
};
export type EstimateRequest = EstimateInput & {
  id: string;
  source: "contact" | "estimate-modal";
};
export const ESTIMATE_LIMITS = {
  name: 100,
  phone: 30,
  email: 254,
  projectType: 80,
  message: 1000,
};
export function validateEstimate(value: unknown): EstimateRequest {
  if (!value || typeof value !== "object" || Array.isArray(value))
    throw new Error("Please check your project details.");
  const raw = value as Record<string, unknown>;
  if (typeof raw.website !== "string" || raw.website !== "")
    throw new Error("Unable to submit this request.");
  if (
    typeof raw.id !== "string" ||
    !/^[\da-f]{8}-(?:[\da-f]{4}-){3}[\da-f]{12}$/i.test(raw.id)
  )
    throw new Error("Invalid request. Please refresh the page.");
  if (raw.source !== "contact" && raw.source !== "estimate-modal")
    throw new Error("Invalid form.");
  const fields = {} as EstimateInput;
  for (const key of Object.keys(ESTIMATE_LIMITS) as (keyof EstimateInput)[]) {
    if (typeof raw[key] !== "string")
      throw new Error("Please check your project details.");
    const text = (raw[key] as string).trim();
    if (
      text.length > ESTIMATE_LIMITS[key] ||
      /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(text) ||
      (key !== "message" && /[\r\n]/.test(text))
    )
      throw new Error(
        `Please check the ${key === "projectType" ? "project type" : key} field.`,
      );
    fields[key] = text;
  }
  if (fields.name.length < 2) throw new Error("Please enter your full name.");
  if (
    !/^[+\d() .-]+$/.test(fields.phone) ||
    fields.phone.replace(/\D/g, "").length < 7 ||
    fields.phone.replace(/\D/g, "").length > 15
  )
    throw new Error("Please enter a valid phone number.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    throw new Error("Please enter a valid email address.");
  if (
    ![
      "Kitchen Remodeling",
      "Bathroom Remodeling",
      "Painting",
      "Other",
      "General Construction / Improvement",
      "Multiple Projects",
    ].includes(fields.projectType)
  )
    throw new Error("Please select a project type.");
  return { id: raw.id, source: raw.source, ...fields };
}
export function estimateSms(input: EstimateRequest) {
  const body = `Covenant: New estimate request\nName: ${input.name}\nPhone: ${input.phone}\nEmail: ${input.email}\nProject: ${input.projectType}\nMessage: ${input.message || "Not provided"}`;
  if (body.length > 1600)
    throw new Error("Your request is too long. Please shorten the message.");
  return body;
}
