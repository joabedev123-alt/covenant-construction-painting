"use client";

import React, { useState } from "react";
import { Phone, Mail, Send, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/assets";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Kitchen Remodeling",
    message: "",
  });

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-0">
      {/* ---------------------------------------------------- */}
      {/* HERO / PRIMARY CALL TO ACTION                        */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-covenant-offwhite border-b border-covenant-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.24em] text-covenant-gold-dark uppercase">
              <span className="w-6 h-px bg-covenant-gold" />
              <span>GET IN TOUCH</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-covenant-navy leading-[1.1]">
              Let's Talk About Your Project.
            </h1>

            <p className="text-lg sm:text-xl text-covenant-muted font-light leading-relaxed">
              Call Covenant Construction & Painting to discuss your remodeling, construction, or painting project. Direct phone communication is our primary and fastest scheduling method.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* TWO COLUMN CONTACT: PHONE FOCUS + EMAIL & FORM        */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Direct Phone & Email Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-8 text-left">
              {/* PRIMARY PHONE HERO CARD */}
              <div className="bg-covenant-navy text-white p-8 sm:p-10 rounded-2xl shadow-elevated border border-covenant-gold/40 relative overflow-hidden space-y-6">
                <div className="absolute top-0 right-0 w-32 h-32 bg-covenant-gold/10 rounded-full blur-2xl pointer-events-none" />

                <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-covenant-gold uppercase bg-white/10 px-3 py-1 rounded-full border border-covenant-gold/30">
                  <Phone className="w-3 h-3 text-covenant-gold" />
                  <span>PRIMARY CONTACT METHOD</span>
                </div>

                <div className="space-y-2">
                  <div className="text-xs text-gray-300 font-light">Fastest Way to Schedule:</div>
                  <div className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    {COMPANY_INFO.phoneDisplay}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                  Call directly to speak with our team about your renovation timeline, scope, and to arrange an on-site evaluation.
                </p>

                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-3 w-full bg-covenant-gold hover:bg-covenant-gold-light text-covenant-navy font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-lg shadow-gold transition-all duration-200 cursor-pointer active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4 text-covenant-navy fill-current" />
                  <span>CALL NOW ({COMPANY_INFO.phoneDisplay})</span>
                </a>
              </div>

              {/* SECONDARY EMAIL CARD */}
              <div className="bg-covenant-offwhite p-8 rounded-2xl border border-covenant-border/80 space-y-5">
                <div className="w-12 h-12 rounded-xl bg-white border border-covenant-border flex items-center justify-center text-covenant-navy shadow-subtle">
                  <Mail className="w-5 h-5 text-covenant-gold" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold tracking-widest text-covenant-gold-dark uppercase">
                    EMAIL INQUIRIES
                  </span>
                  <div className="font-sans font-semibold text-base text-covenant-navy truncate">
                    {COMPANY_INFO.email}
                  </div>
                </div>

                <p className="text-xs text-covenant-muted font-light leading-relaxed">
                  Send plans, measurements, or initial inquiries directly to our project inbox.
                </p>

                <a
                  href={`mailto:${COMPANY_INFO.email}?subject=Project%20Inquiry%20-%20Covenant`}
                  className="inline-flex items-center justify-center gap-2 w-full bg-white hover:bg-covenant-border/40 text-covenant-navy font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-lg border border-covenant-border transition-colors shadow-subtle"
                >
                  <span>SEND AN EMAIL</span>
                  <ArrowRight className="w-3.5 h-3.5 text-covenant-gold" />
                </a>
              </div>

              {/* Service Areas Note */}
              <div className="p-6 rounded-xl bg-white border border-covenant-border/70 space-y-2">
                <div className="text-xs font-bold tracking-widest text-covenant-gold-dark uppercase">
                  Service Area Coverage
                </div>
                <p className="text-xs text-covenant-muted leading-relaxed font-light">
                  We provide dedicated residential services across our regional operational territory. Give us a quick call to confirm project availability for your neighborhood.
                </p>
              </div>
            </div>

            {/* Right Column: Estimate Request Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-12 rounded-2xl border border-covenant-border shadow-card space-y-8 text-left">
                <div className="space-y-2">
                  <div className="text-xs font-bold tracking-widest text-covenant-gold-dark uppercase">
                    ONLINE ESTIMATE REQUEST
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-covenant-navy">
                    Tell Us About Your Project
                  </h2>
                  <p className="text-sm text-covenant-muted font-light leading-relaxed">
                    Prefer to write? Complete this form and our team will review your project details and follow up promptly.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-12 text-center space-y-5">
                    <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 mx-auto flex items-center justify-center border border-green-200">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-covenant-navy">
                      Inquiry Received Successfully
                    </h3>
                    <p className="text-sm text-covenant-muted max-w-md mx-auto font-light leading-relaxed">
                      Thank you for contacting Covenant Construction & Painting. We will review your request and get in touch with you shortly.
                    </p>
                    <div className="pt-3">
                      <a
                        href={COMPANY_INFO.phoneHref}
                        className="inline-flex items-center gap-2 bg-covenant-navy text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-lg shadow-sm"
                      >
                        <Phone className="w-4 h-4 text-covenant-gold" />
                        <span>Call {COMPANY_INFO.phoneDisplay} For Immediate Assistance</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-covenant-navy mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Jane Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full text-base sm:text-sm px-4 py-3 rounded-lg border border-covenant-border focus:border-covenant-gold focus:outline-none focus:ring-1 focus:ring-covenant-gold bg-covenant-offwhite/50 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-covenant-navy mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="(508) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full text-base sm:text-sm px-4 py-3 rounded-lg border border-covenant-border focus:border-covenant-gold focus:outline-none focus:ring-1 focus:ring-covenant-gold bg-covenant-offwhite/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-covenant-navy mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-base sm:text-sm px-4 py-3 rounded-lg border border-covenant-border focus:border-covenant-gold focus:outline-none focus:ring-1 focus:ring-covenant-gold bg-covenant-offwhite/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-covenant-navy mb-1.5">
                        Project Type *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full text-base sm:text-sm px-4 py-3 rounded-lg border border-covenant-border focus:border-covenant-gold focus:outline-none focus:ring-1 focus:ring-covenant-gold bg-covenant-offwhite/50 transition-colors cursor-pointer"
                      >
                        <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                        <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                        <option value="Painting">Painting (Interior / Exterior)</option>
                        <option value="Other">Other / Home Improvements</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-covenant-navy mb-1.5">
                        Project Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us a little about your space, goals, or ideal timing..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full text-base sm:text-sm px-4 py-3 rounded-lg border border-covenant-border focus:border-covenant-gold focus:outline-none focus:ring-1 focus:ring-covenant-gold bg-covenant-offwhite/50 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2.5 bg-covenant-navy hover:bg-covenant-navy-light text-white font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-lg shadow-card hover:shadow-elevated transition-all duration-200 cursor-pointer border border-covenant-gold/40 hover:border-covenant-gold"
                    >
                      <Send className="w-4 h-4 text-covenant-gold" />
                      <span>SEND REQUEST</span>
                    </button>

                    <div className="pt-2 flex items-center justify-center gap-2 text-xs text-covenant-muted">
                      <ShieldCheck className="w-4 h-4 text-covenant-gold" />
                      <span>No spam • We respect your privacy and communicate directly</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
