"use client";

import {
  ContentAnchor,
  ContentBlock,
  ContentInput,
  ContentOption,
  ContentPage,
  ContentText,
  ContentTextarea,
} from "@/components/cms/Content";
import React, { useState } from "react";
import { EstimateMessageDraft } from "@/components/EstimateMessageDraft";
import { useEstimateRequest } from "@/hooks/useEstimateRequest";
import {
  Phone,
  Mail,
  Send,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/assets";

export default function ContactPage() {
  const { submitted, sending, error, submit, draft, edit } = useEstimateRequest("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Kitchen Remodeling",
    message: "",
  });

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submit(
      formData,
      String(new FormData(e.currentTarget).get("website") || ""),
    );
  };

  return (
    <ContentPage className="space-y-0">
      {/* ---------------------------------------------------- */}
      {/* HERO / PRIMARY CALL TO ACTION                        */}
      {/* ---------------------------------------------------- */}
      <ContentBlock
        id="app-contact-page-section-1"
        label="Let's Talk About Your Project."
      >
        <section className="py-20 lg:py-28 bg-covenant-offwhite border-b border-covenant-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.24em] text-covenant-gold-dark uppercase">
                <span className="w-6 h-px bg-covenant-gold" />
                <span>
                  <ContentText id="app-contact-page-text-1">
                    {"GET IN TOUCH"}
                  </ContentText>
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-covenant-navy leading-[1.1]">
                <ContentText id="app-contact-page-text-2">
                  {"Let's Talk About Your Project."}
                </ContentText>
              </h1>

              <p className="text-lg sm:text-xl text-covenant-muted font-light leading-relaxed">
                <ContentText id="app-contact-page-text-3">
                  {
                    "Call Covenant Construction & Painting to discuss your remodeling, construction, or painting project. Direct phone communication is our primary and fastest scheduling method."
                  }
                </ContentText>
              </p>
            </div>
          </div>
        </section>
      </ContentBlock>

      {/* ---------------------------------------------------- */}
      {/* TWO COLUMN CONTACT: PHONE FOCUS + EMAIL & FORM        */}
      {/* ---------------------------------------------------- */}
      <ContentBlock
        id="app-contact-page-section-2"
        label="Tell Us About Your Project"
      >
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
                    <span>
                      <ContentText id="app-contact-page-text-4">
                        {"PRIMARY CONTACT METHOD"}
                      </ContentText>
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs text-gray-300 font-light">
                      <ContentText id="app-contact-page-text-5">
                        {"Fastest Way to Schedule:"}
                      </ContentText>
                    </div>
                    <div className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
                      <ContentText id="app-contact-page-text-6">
                        {COMPANY_INFO.phoneDisplay}
                      </ContentText>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                    <ContentText id="app-contact-page-text-7">
                      {
                        "Call directly to speak with our team about your renovation timeline, scope, and to arrange an on-site evaluation."
                      }
                    </ContentText>
                  </p>

                  <ContentAnchor
                    cmsId="app-contact-page-link-1"
                    href={COMPANY_INFO.phoneHref}
                    className="inline-flex items-center justify-center gap-3 w-full bg-covenant-gold hover:bg-covenant-gold-light text-covenant-navy font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-lg shadow-gold transition-all duration-200 cursor-pointer active:scale-[0.98]"
                  >
                    <Phone className="w-4 h-4 text-covenant-navy fill-current" />
                    <span>
                      <ContentText id="app-contact-page-text-8">
                        {"CALL NOW ("}
                      </ContentText>
                      <ContentText id="app-contact-page-text-9">
                        {COMPANY_INFO.phoneDisplay}
                      </ContentText>
                      <ContentText id="app-contact-page-text-10">
                        {")"}
                      </ContentText>
                    </span>
                  </ContentAnchor>
                </div>

                {/* SECONDARY EMAIL CARD */}
                <div className="bg-covenant-offwhite p-8 rounded-2xl border border-covenant-border/80 space-y-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-covenant-border flex items-center justify-center text-covenant-navy shadow-subtle">
                    <Mail className="w-5 h-5 text-covenant-gold" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-bold tracking-widest text-covenant-gold-dark uppercase">
                      <ContentText id="app-contact-page-text-11">
                        {"EMAIL INQUIRIES"}
                      </ContentText>
                    </span>
                    <div className="font-sans font-semibold text-base text-covenant-navy truncate">
                      <ContentText id="app-contact-page-text-12">
                        {COMPANY_INFO.email}
                      </ContentText>
                    </div>
                  </div>

                  <p className="text-xs text-covenant-muted font-light leading-relaxed">
                    <ContentText id="app-contact-page-text-13">
                      {
                        "Send plans, measurements, or initial inquiries directly to our project inbox."
                      }
                    </ContentText>
                  </p>

                  <ContentAnchor
                    cmsId="app-contact-page-link-2"
                    href={`mailto:${COMPANY_INFO.email}?subject=Project%20Inquiry%20-%20Covenant`}
                    className="inline-flex items-center justify-center gap-2 w-full bg-white hover:bg-covenant-border/40 text-covenant-navy font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-lg border border-covenant-border transition-colors shadow-subtle"
                  >
                    <span>
                      <ContentText id="app-contact-page-text-14">
                        {"SEND AN EMAIL"}
                      </ContentText>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-covenant-gold" />
                  </ContentAnchor>
                </div>

                {/* Service Areas Note */}
                <div className="p-6 rounded-xl bg-white border border-covenant-border/70 space-y-2">
                  <div className="text-xs font-bold tracking-widest text-covenant-gold-dark uppercase">
                    <ContentText id="app-contact-page-text-15">
                      {"Service Area Coverage"}
                    </ContentText>
                  </div>
                  <p className="text-xs text-covenant-muted leading-relaxed font-light">
                    <ContentText id="app-contact-page-text-16">
                      {
                        "We provide dedicated residential services across our regional operational territory. Give us a quick call to confirm project availability for your neighborhood."
                      }
                    </ContentText>
                  </p>
                </div>
              </div>

              {/* Right Column: Estimate Request Form (7 cols) */}
              <div className="lg:col-span-7">
                <div className="bg-white p-8 sm:p-12 rounded-2xl border border-covenant-border shadow-card space-y-8 text-left">
                  <div className="space-y-2">
                    <div className="text-xs font-bold tracking-widest text-covenant-gold-dark uppercase">
                      <ContentText id="app-contact-page-text-17">
                        {"ONLINE ESTIMATE REQUEST"}
                      </ContentText>
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-covenant-navy">
                      <ContentText id="app-contact-page-text-18">
                        {"Tell Us About Your Project"}
                      </ContentText>
                    </h2>
                    <p className="text-sm text-covenant-muted font-light leading-relaxed">
                      <ContentText id="app-contact-page-text-19">
                        {
                          "Complete this form to prepare your message, then send it from your text messaging or email app."
                        }
                      </ContentText>
                    </p>
                  </div>

                  <ContentText id="src-app-contact-page-tsx-dynamic-1">
                    {submitted && draft ? (
                      <EstimateMessageDraft draft={draft} onEdit={edit} />
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="sr-only" aria-hidden="true">
                          <label htmlFor="contact-website">
                            Leave this field empty
                          </label>
                          <input
                            id="contact-website"
                            type="text"
                            name="website"
                            tabIndex={-1}
                            autoComplete="off"
                          />
                        </div>
                        {error && (
                          <p
                            role="alert"
                            className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3"
                          >
                            {error}
                          </p>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label
                              htmlFor="contact-name"
                              className="block text-xs font-semibold text-covenant-navy mb-1.5"
                            >
                              <ContentText id="app-contact-page-text-25">
                                {"Full Name *"}
                              </ContentText>
                            </label>
                            <ContentInput
                              cmsId="app-contact-page-attr-1"
                              id="contact-name"
                              name="name"
                              disabled={sending}
                              maxLength={100}
                              type="text"
                              required
                              placeholder="Jane Doe"
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  name: e.target.value,
                                })
                              }
                              className="w-full text-base sm:text-sm px-4 py-3 rounded-lg border border-covenant-border focus:border-covenant-gold focus:outline-none focus:ring-1 focus:ring-covenant-gold bg-covenant-offwhite/50 transition-colors"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="contact-phone"
                              className="block text-xs font-semibold text-covenant-navy mb-1.5"
                            >
                              <ContentText id="app-contact-page-text-26">
                                {"Phone Number *"}
                              </ContentText>
                            </label>
                            <ContentInput
                              cmsId="app-contact-page-attr-2"
                              id="contact-phone"
                              name="phone"
                              disabled={sending}
                              maxLength={30}
                              type="tel"
                              required
                              placeholder="(508) 000-0000"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  phone: e.target.value,
                                })
                              }
                              className="w-full text-base sm:text-sm px-4 py-3 rounded-lg border border-covenant-border focus:border-covenant-gold focus:outline-none focus:ring-1 focus:ring-covenant-gold bg-covenant-offwhite/50 transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="contact-email"
                            className="block text-xs font-semibold text-covenant-navy mb-1.5"
                          >
                            <ContentText id="app-contact-page-text-27">
                              {"Email Address *"}
                            </ContentText>
                          </label>
                          <ContentInput
                            cmsId="app-contact-page-attr-3"
                            id="contact-email"
                            name="email"
                            disabled={sending}
                            maxLength={254}
                            type="email"
                            required
                            placeholder="jane@example.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            className="w-full text-base sm:text-sm px-4 py-3 rounded-lg border border-covenant-border focus:border-covenant-gold focus:outline-none focus:ring-1 focus:ring-covenant-gold bg-covenant-offwhite/50 transition-colors"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="contact-projectType"
                            className="block text-xs font-semibold text-covenant-navy mb-1.5"
                          >
                            <ContentText id="app-contact-page-text-28">
                              {"Project Type *"}
                            </ContentText>
                          </label>
                          <select
                            id="contact-projectType"
                            name="projectType"
                            required
                            disabled={sending}
                            value={formData.projectType}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                projectType: e.target.value,
                              })
                            }
                            className="w-full text-base sm:text-sm px-4 py-3 rounded-lg border border-covenant-border focus:border-covenant-gold focus:outline-none focus:ring-1 focus:ring-covenant-gold bg-covenant-offwhite/50 transition-colors cursor-pointer"
                          >
                            <ContentOption
                              cmsId="app-contact-page-attr-4"
                              value="Kitchen Remodeling"
                            >
                              Kitchen Remodeling
                            </ContentOption>
                            <ContentOption
                              cmsId="app-contact-page-attr-5"
                              value="Bathroom Remodeling"
                            >
                              Bathroom Remodeling
                            </ContentOption>
                            <ContentOption
                              cmsId="app-contact-page-attr-6"
                              value="Painting"
                            >
                              Painting (Interior / Exterior)
                            </ContentOption>
                            <ContentOption
                              cmsId="app-contact-page-attr-7"
                              value="Other"
                            >
                              Other / Home Improvements
                            </ContentOption>
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="contact-message"
                            className="block text-xs font-semibold text-covenant-navy mb-1.5"
                          >
                            <ContentText id="app-contact-page-text-29">
                              {"Project Message"}
                            </ContentText>
                          </label>
                          <ContentTextarea
                            cmsId="app-contact-page-attr-8"
                            id="contact-message"
                            name="message"
                            disabled={sending}
                            maxLength={1000}
                            rows={4}
                            placeholder="Tell us a little about your space, goals, or ideal timing..."
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                message: e.target.value,
                              })
                            }
                            className="w-full text-base sm:text-sm px-4 py-3 rounded-lg border border-covenant-border focus:border-covenant-gold focus:outline-none focus:ring-1 focus:ring-covenant-gold bg-covenant-offwhite/50 transition-colors resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={sending}
                          aria-busy={sending}
                          className="w-full inline-flex items-center justify-center gap-2.5 bg-covenant-navy hover:bg-covenant-navy-light text-white font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-lg shadow-card hover:shadow-elevated transition-all duration-200 cursor-pointer border border-covenant-gold/40 hover:border-covenant-gold"
                        >
                          <Send className="w-4 h-4 text-covenant-gold" />
                          <span>
                            <ContentText id="app-contact-page-text-30">
                              {sending ? "OPENING…" : "CONTINUE TO TEXT MESSAGE"}
                            </ContentText>
                          </span>
                        </button>

                        <div className="pt-2 flex items-center justify-center gap-2 text-xs text-covenant-muted">
                          <ShieldCheck className="w-4 h-4 text-covenant-gold" />
                          <span>
                            <ContentText id="app-contact-page-text-31">
                              {
                                "Opens your messaging app • Review and tap Send there"
                              }
                            </ContentText>
                          </span>
                        </div>
                      </form>
                    )}
                  </ContentText>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ContentBlock>
    </ContentPage>
  );
}
