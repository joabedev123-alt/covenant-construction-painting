"use client";
import { useState } from "react";
import { validateEstimate, type EstimateInput, type EstimateRequest } from "@/lib/estimates/model";
import { composeEstimate, type EstimateDraft } from "@/lib/estimates/compose";

export function useEstimateRequest(source: EstimateRequest["source"]) {
  const [draft, setDraft] = useState<EstimateDraft | null>(null);
  const [error, setError] = useState("");
  function submit(form: EstimateInput, website: string) {
    setError("");
    try {
      const input = validateEstimate({ ...form, source, website, id: "00000000-0000-4000-8000-000000000000" });
      const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
      const next = composeEstimate(input, ios);
      setDraft(next);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Please check your project details.");
    }
  }
  return { submitted: !!draft, sending: false, error, submit, draft, edit: () => setDraft(null) };
}
