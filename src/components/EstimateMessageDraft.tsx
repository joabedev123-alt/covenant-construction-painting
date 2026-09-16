"use client";
import { useState } from "react";
import type { EstimateDraft } from "@/lib/estimates/compose";

export function EstimateMessageDraft({ draft, onEdit }: { draft: EstimateDraft; onEdit: () => void }) {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  return (
    <div className="py-6 space-y-5" aria-live="polite">
      <h3 className="font-serif text-2xl font-bold text-covenant-navy">Your Message Is Ready</h3>
      <p className="text-sm text-covenant-muted leading-relaxed">Review the message in your phone’s messaging app and tap Send to 508-405-6918. Your request has not been sent by this website.</p>
      <label className="block text-sm font-medium text-covenant-navy">Prepared message
        <textarea readOnly value={draft.body} rows={9} className="mt-2 w-full p-3 border border-covenant-border rounded-lg text-sm" onFocus={e => e.currentTarget.select()} />
      </label>
      <p className="text-sm text-covenant-muted">Tap Open Text Message to continue. If your app does not open or fill the text, copy the prepared message. You can also send it by email.</p>
      <div className="flex flex-wrap gap-3">
        <a href={draft.smsHref} className="px-4 py-3 rounded-lg bg-covenant-navy text-white text-sm font-bold">Open Text Message</a>
        <a href={draft.emailHref} className="px-4 py-3 rounded-lg border border-covenant-border text-sm font-bold">Open Email</a>
        <button type="button" className="px-4 py-3 rounded-lg border border-covenant-border text-sm font-bold" onClick={async () => {
          try { await navigator.clipboard.writeText(draft.body); setCopied(true); setCopyError(false); }
          catch { setCopied(false); setCopyError(true); }
        }}>{copied ? "Copied!" : "Copy Message"}</button>
        <button type="button" onClick={onEdit} className="px-4 py-3 text-sm underline">Edit Details</button>
      </div>
      {copyError && <p role="status" className="text-sm text-covenant-muted">Select the prepared message above and use your device’s Copy option.</p>}
    </div>
  );
}
