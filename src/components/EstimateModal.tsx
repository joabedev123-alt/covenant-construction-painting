"use client";

import {
  ContentAnchor,
  ContentInput,
  ContentOption,
  ContentText,
  ContentTextarea,
} from "@/components/cms/Content";
import React, { useState } from "react";
import { X, Phone, Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/data/assets";

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EstimateModal({ isOpen, onClose }: EstimateModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "Kitchen Remodeling",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate prompt dispatch / ready for backend API or mailto
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-covenant-navy/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg max-h-[90dvh] overflow-y-auto rounded-2xl shadow-elevated border border-covenant-border p-6 sm:p-8 space-y-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-covenant-offwhite hover:bg-covenant-border/60 text-covenant-navy flex items-center justify-center cursor-pointer transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-left space-y-1.5 pr-8">
          <div className="text-[11px] font-bold tracking-[0.2em] text-covenant-gold-dark uppercase">
            <ContentText id="components-EstimateModal-text-1">
              {"Start Your Renovation"}
            </ContentText>
          </div>
          <h3 className="font-serif text-2xl font-bold text-covenant-navy">
            <ContentText id="components-EstimateModal-text-2">
              {"Request An Estimate"}
            </ContentText>
          </h3>
          <p className="text-xs text-covenant-muted leading-relaxed font-light">
            <ContentText id="components-EstimateModal-text-3">
              {
                "Share a few details about your home. For immediate scheduling, you can also call us directly at"
              }
            </ContentText>
            <ContentText id="components-EstimateModal-text-4"> </ContentText>
            <ContentAnchor
              cmsId="components-EstimateModal-link-1"
              href={COMPANY_INFO.phoneHref}
              className="text-covenant-navy font-semibold underline"
            >
              <ContentText id="components-EstimateModal-text-5">
                {COMPANY_INFO.phoneDisplay}
              </ContentText>
            </ContentAnchor>
            <ContentText id="components-EstimateModal-text-6">
              {"."}
            </ContentText>
          </p>
        </div>

        <ContentText id="src-components-EstimateModal-tsx-dynamic-1">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-green-50 text-green-600 mx-auto flex items-center justify-center border border-green-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-xl font-bold text-covenant-navy">
                <ContentText id="components-EstimateModal-text-7">
                  {"Thank You for Reaching Out"}
                </ContentText>
              </h4>
              <p className="text-sm text-covenant-muted max-w-sm mx-auto font-light leading-relaxed">
                <ContentText id="components-EstimateModal-text-8">
                  {
                    "We have received your estimate inquiry. Our team will review the details and contact you shortly."
                  }
                </ContentText>
              </p>
              <div className="pt-2">
                <ContentAnchor
                  cmsId="components-EstimateModal-link-2"
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center gap-2 bg-covenant-navy text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-lg shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-covenant-gold" />
                  <span>
                    <ContentText id="components-EstimateModal-text-9">
                      {"Call Us Direct"}
                    </ContentText>
                  </span>
                </ContentAnchor>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-covenant-navy mb-1">
                    <ContentText id="components-EstimateModal-text-10">
                      {"Your Name *"}
                    </ContentText>
                  </label>
                  <ContentInput
                    cmsId="components-EstimateModal-attr-1"
                    type="text"
                    required
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full text-base sm:text-sm px-3.5 py-2.5 rounded-lg border border-covenant-border focus:border-covenant-gold focus:outline-none focus:ring-1 focus:ring-covenant-gold bg-covenant-offwhite/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-covenant-navy mb-1">
                    <ContentText id="components-EstimateModal-text-11">
                      {"Phone Number *"}
                    </ContentText>
                  </label>
                  <ContentInput
                    cmsId="components-EstimateModal-attr-2"
                    type="tel"
                    required
                    placeholder="(508) 000-0000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full text-base sm:text-sm px-3.5 py-2.5 rounded-lg border border-covenant-border focus:border-covenant-gold focus:outline-none focus:ring-1 focus:ring-covenant-gold bg-covenant-offwhite/40"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-covenant-navy mb-1">
                  <ContentText id="components-EstimateModal-text-12">
                    {"Email Address *"}
                  </ContentText>
                </label>
                <ContentInput
                  cmsId="components-EstimateModal-attr-3"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full text-base sm:text-sm px-3.5 py-2.5 rounded-lg border border-covenant-border focus:border-covenant-gold focus:outline-none focus:ring-1 focus:ring-covenant-gold bg-covenant-offwhite/40"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-covenant-navy mb-1">
                  <ContentText id="components-EstimateModal-text-13">
                    {"Project Category"}
                  </ContentText>
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                  className="w-full text-base sm:text-sm px-3.5 py-2.5 rounded-lg border border-covenant-border focus:border-covenant-gold focus:outline-none focus:ring-1 focus:ring-covenant-gold bg-covenant-offwhite/40"
                >
                  <ContentOption
                    cmsId="components-EstimateModal-attr-4"
                    value="Kitchen Remodeling"
                  >
                    Kitchen Remodeling
                  </ContentOption>
                  <ContentOption
                    cmsId="components-EstimateModal-attr-5"
                    value="Bathroom Remodeling"
                  >
                    Bathroom Remodeling
                  </ContentOption>
                  <ContentOption
                    cmsId="components-EstimateModal-attr-6"
                    value="Painting"
                  >
                    Professional Painting
                  </ContentOption>
                  <ContentOption
                    cmsId="components-EstimateModal-attr-7"
                    value="General Construction / Improvement"
                  >
                    General Construction / Improvement
                  </ContentOption>
                  <ContentOption
                    cmsId="components-EstimateModal-attr-8"
                    value="Multiple Projects"
                  >
                    Multiple Projects
                  </ContentOption>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-covenant-navy mb-1">
                  <ContentText id="components-EstimateModal-text-14">
                    {"Project Details"}
                  </ContentText>
                </label>
                <ContentTextarea
                  cmsId="components-EstimateModal-attr-9"
                  rows={3}
                  placeholder="Briefly describe what you would like to remodel or paint..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full text-base sm:text-sm px-3.5 py-2.5 rounded-lg border border-covenant-border focus:border-covenant-gold focus:outline-none focus:ring-1 focus:ring-covenant-gold bg-covenant-offwhite/40 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-covenant-navy hover:bg-covenant-navy-light text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-lg shadow-sm transition-all duration-200 cursor-pointer border border-covenant-gold/40"
              >
                <Send className="w-3.5 h-3.5 text-covenant-gold" />
                <span>
                  <ContentText id="components-EstimateModal-text-15">
                    {"Submit Estimate Request"}
                  </ContentText>
                </span>
              </button>

              <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-covenant-muted">
                <ShieldCheck className="w-3.5 h-3.5 text-covenant-gold" />
                <span>
                  <ContentText id="components-EstimateModal-text-16">
                    {
                      "Direct communication • Your privacy is strictly protected"
                    }
                  </ContentText>
                </span>
              </div>
            </form>
          )}
        </ContentText>
      </div>
    </div>
  );
}
