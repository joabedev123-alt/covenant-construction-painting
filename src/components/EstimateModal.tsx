"use client";

import React, { useState } from "react";
import { X, Phone, Mail, Send, CheckCircle2, ShieldCheck } from "lucide-react";
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

  const handleSubmit = (e: React.FormEvent) => {
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
            Start Your Renovation
          </div>
          <h3 className="font-serif text-2xl font-bold text-covenant-navy">
            Request An Estimate
          </h3>
          <p className="text-xs text-covenant-muted leading-relaxed font-light">
            Share a few details about your home. For immediate scheduling, you can also call us directly at{" "}
            <a href={COMPANY_INFO.phoneHref} className="text-covenant-navy font-semibold underline">
              {COMPANY_INFO.phoneDisplay}
            </a>.
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-green-50 text-green-600 mx-auto flex items-center justify-center border border-green-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-xl font-bold text-covenant-navy">
              Thank You for Reaching Out
            </h4>
            <p className="text-sm text-covenant-muted max-w-sm mx-auto font-light leading-relaxed">
              We have received your estimate inquiry. Our team will review the details and contact you shortly.
            </p>
            <div className="pt-2">
              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex items-center gap-2 bg-covenant-navy text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-lg shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-covenant-gold" />
                <span>Call Us Direct</span>
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-covenant-navy mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-base sm:text-sm px-3.5 py-2.5 rounded-lg border border-covenant-border focus:border-covenant-gold focus:outline-none focus:ring-1 focus:ring-covenant-gold bg-covenant-offwhite/40"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-covenant-navy mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(508) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-base sm:text-sm px-3.5 py-2.5 rounded-lg border border-covenant-border focus:border-covenant-gold focus:outline-none focus:ring-1 focus:ring-covenant-gold bg-covenant-offwhite/40"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-covenant-navy mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full text-base sm:text-sm px-3.5 py-2.5 rounded-lg border border-covenant-border focus:border-covenant-gold focus:outline-none focus:ring-1 focus:ring-covenant-gold bg-covenant-offwhite/40"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-covenant-navy mb-1">
                Project Category
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full text-base sm:text-sm px-3.5 py-2.5 rounded-lg border border-covenant-border focus:border-covenant-gold focus:outline-none focus:ring-1 focus:ring-covenant-gold bg-covenant-offwhite/40"
              >
                <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                <option value="Painting">Professional Painting</option>
                <option value="General Construction / Improvement">General Construction / Improvement</option>
                <option value="Multiple Projects">Multiple Projects</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-covenant-navy mb-1">
                Project Details
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe what you would like to remodel or paint..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full text-base sm:text-sm px-3.5 py-2.5 rounded-lg border border-covenant-border focus:border-covenant-gold focus:outline-none focus:ring-1 focus:ring-covenant-gold bg-covenant-offwhite/40 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-covenant-navy hover:bg-covenant-navy-light text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-lg shadow-sm transition-all duration-200 cursor-pointer border border-covenant-gold/40"
            >
              <Send className="w-3.5 h-3.5 text-covenant-gold" />
              <span>Submit Estimate Request</span>
            </button>

            <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-covenant-muted">
              <ShieldCheck className="w-3.5 h-3.5 text-covenant-gold" />
              <span>Direct communication • Your privacy is strictly protected</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
