import {
  ContentAnchor,
  ContentBlock,
  ContentPage,
  ContentText,
} from "@/components/cms/Content";
import React from "react";
import { ContentImage as Image } from "@/components/cms/Content";
import { ContentLink as Link } from "@/components/cms/Content";
import { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Paintbrush,
  Home,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectGallery } from "@/components/ProjectGallery";
import { FinalCTA } from "@/components/FinalCTA";
import { SITE_ASSETS, COMPANY_INFO } from "@/data/assets";

export const metadata: Metadata = {
  title: "Professional Painting | Covenant Construction & Painting",
  description:
    "Transform your home with professional interior and exterior painting. Relentless surface preparation, crisp cut-lines, and enduring architectural finishes.",
};

export default function PaintingPage() {
  return (
    <ContentPage className="space-y-0">
      {/* ---------------------------------------------------- */}
      {/* HERO SECTION                                         */}
      {/* ---------------------------------------------------- */}
      <ContentBlock
        id="app-services-painting-page-section-1"
        label="A Better Finish"
      >
        <section className="py-20 lg:py-28 bg-covenant-offwhite border-b border-covenant-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.24em] text-covenant-gold-dark uppercase">
                  <span className="w-6 h-px bg-covenant-gold" />
                  <span>
                    <ContentText id="app-services-painting-page-text-1">
                      {"PROFESSIONAL PAINTING"}
                    </ContentText>
                  </span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-covenant-navy leading-[1.1]">
                  <ContentText id="app-services-painting-page-text-2">
                    {"A Better Finish "}
                  </ContentText>
                  <br />
                  <ContentText id="app-services-painting-page-text-3">
                    {"Changes Everything."}
                  </ContentText>
                </h1>

                <p className="text-base sm:text-lg text-covenant-muted font-light leading-relaxed max-w-xl">
                  <ContentText id="app-services-painting-page-text-4">
                    {
                      "A renewed paint coat completely revives the atmosphere and character of a residence. Covenant Construction & Painting brings disciplined preparation, sharp lines, and lasting beauty to every room."
                    }
                  </ContentText>
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Link
                    cmsId="app-services-painting-page-link-1"
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2.5 bg-covenant-navy hover:bg-covenant-navy-light text-white font-bold text-xs uppercase tracking-widest px-7 py-4 rounded-md shadow-card transition-colors border border-covenant-gold/40"
                  >
                    <span>
                      <ContentText id="app-services-painting-page-text-5">
                        {"REQUEST PAINTING ESTIMATE"}
                      </ContentText>
                    </span>
                    <ArrowRight className="w-4 h-4 text-covenant-gold" />
                  </Link>

                  <ContentAnchor
                    cmsId="app-services-painting-page-link-2"
                    href={COMPANY_INFO.phoneHref}
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-covenant-border/40 text-covenant-navy font-bold text-xs uppercase tracking-widest px-6 py-4 rounded-md border border-covenant-border transition-colors"
                  >
                    <Phone className="w-4 h-4 text-covenant-gold" />
                    <span>
                      <ContentText id="app-services-painting-page-text-6">
                        {"Call "}
                      </ContentText>
                      <ContentText id="app-services-painting-page-text-7">
                        {COMPANY_INFO.phoneDisplay}
                      </ContentText>
                    </span>
                  </ContentAnchor>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] sm:aspect-[1/1] rounded-2xl overflow-hidden shadow-elevated border border-covenant-border bg-covenant-navy/5">
                  <Image
                    src={SITE_ASSETS.paintingHero.url}
                    alt={SITE_ASSETS.paintingHero.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ContentBlock>

      {/* ---------------------------------------------------- */}
      {/* INTERIOR & EXTERIOR CATEGORIES                       */}
      {/* ---------------------------------------------------- */}
      <ContentBlock
        id="app-services-painting-page-section-2"
        label="SCOPES OF WORK"
      >
        <section className="py-24 lg:py-32 bg-white border-b border-covenant-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <SectionHeader
              eyebrow="SCOPES OF WORK"
              title="Interior & Exterior Painting Specialties"
              subtitle="Whether brightening an open living space or protecting exterior siding from New England elements, we deliver uniform coverage and enduring results."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Interior Painting Card */}
              <div className="bg-covenant-offwhite p-8 sm:p-10 rounded-2xl border border-covenant-border/80 shadow-subtle space-y-6 text-left">
                <div className="w-12 h-12 rounded-xl bg-covenant-navy text-covenant-gold flex items-center justify-center">
                  <Paintbrush className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-covenant-navy">
                  <ContentText id="app-services-painting-page-text-8">
                    {"Interior Painting"}
                  </ContentText>
                </h3>
                <p className="text-sm text-covenant-muted leading-relaxed font-light">
                  <ContentText id="app-services-painting-page-text-9">
                    {
                      "Interior painting requires clean boundaries, surgical protection of furniture, and meticulous sanding. We eliminate minor drywall imperfections, caulk baseboard seams, and roll smooth, uniform coats of premium washable paint."
                    }
                  </ContentText>
                </p>
                <div className="space-y-2.5 pt-2 border-t border-covenant-border/60">
                  <div className="flex items-center gap-2.5 text-xs text-covenant-charcoal font-medium">
                    <CheckCircle2 className="w-4 h-4 text-covenant-gold shrink-0" />
                    <span>
                      <ContentText id="app-services-painting-page-text-10">
                        {"Walls, Ceilings, and Stairwell Foyers"}
                      </ContentText>
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-covenant-charcoal font-medium">
                    <CheckCircle2 className="w-4 h-4 text-covenant-gold shrink-0" />
                    <span>
                      <ContentText id="app-services-painting-page-text-11">
                        {"Doors, Window Casings, and Baseboard Enameling"}
                      </ContentText>
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-covenant-charcoal font-medium">
                    <CheckCircle2 className="w-4 h-4 text-covenant-gold shrink-0" />
                    <span>
                      <ContentText id="app-services-painting-page-text-12">
                        {"Cabinet Spraying and Surface Refinishing"}
                      </ContentText>
                    </span>
                  </div>
                </div>
              </div>

              {/* Exterior Painting Card */}
              <div className="bg-covenant-offwhite p-8 sm:p-10 rounded-2xl border border-covenant-border/80 shadow-subtle space-y-6 text-left">
                <div className="w-12 h-12 rounded-xl bg-covenant-navy text-covenant-gold flex items-center justify-center">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-covenant-navy">
                  <ContentText id="app-services-painting-page-text-13">
                    {"Exterior Painting"}
                  </ContentText>
                </h3>
                <p className="text-sm text-covenant-muted leading-relaxed font-light">
                  <ContentText id="app-services-painting-page-text-14">
                    {
                      "Exterior durability begins with thorough pressure washing, peeling paint removal, and targeted priming. We seal wood trim against moisture intrusion and coat siding with weather-resilient paints that retain their color and luster."
                    }
                  </ContentText>
                </p>
                <div className="space-y-2.5 pt-2 border-t border-covenant-border/60">
                  <div className="flex items-center gap-2.5 text-xs text-covenant-charcoal font-medium">
                    <CheckCircle2 className="w-4 h-4 text-covenant-gold shrink-0" />
                    <span>
                      <ContentText id="app-services-painting-page-text-15">
                        {"Soffits, Facias, and Architectural Trim"}
                      </ContentText>
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-covenant-charcoal font-medium">
                    <CheckCircle2 className="w-4 h-4 text-covenant-gold shrink-0" />
                    <span>
                      <ContentText id="app-services-painting-page-text-16">
                        {"Wood Siding and Composite Cladding"}
                      </ContentText>
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-covenant-charcoal font-medium">
                    <CheckCircle2 className="w-4 h-4 text-covenant-gold shrink-0" />
                    <span>
                      <ContentText id="app-services-painting-page-text-17">
                        {"Exterior Doors, Porticos, and Entry Staircases"}
                      </ContentText>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ContentBlock>

      {/* ---------------------------------------------------- */}
      {/* ATTENTION TO PREPARATION                             */}
      {/* ---------------------------------------------------- */}
      <ContentBlock
        id="app-services-painting-page-section-3"
        label="THE SECRET TO LONGEVITY"
      >
        <section className="py-24 lg:py-32 bg-covenant-navy text-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
            <SectionHeader
              theme="dark"
              eyebrow="THE SECRET TO LONGEVITY"
              title="80% of Painting Quality is In The Preparation."
              subtitle="Anyone can apply paint—true craftsmen invest hours preparing the surface so the paint adheres smoothly without bubbling, peeling, or cracking."
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <span className="font-serif text-3xl font-bold text-covenant-gold">
                  <ContentText id="app-services-painting-page-text-18">
                    {"01"}
                  </ContentText>
                </span>
                <h4 className="font-bold text-base text-white">
                  <ContentText id="app-services-painting-page-text-19">
                    {"Scrape & Sand"}
                  </ContentText>
                </h4>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  <ContentText id="app-services-painting-page-text-20">
                    {
                      "We remove loose paint and sand surfaces smooth so the new layer bonds permanently."
                    }
                  </ContentText>
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <span className="font-serif text-3xl font-bold text-covenant-gold">
                  <ContentText id="app-services-painting-page-text-21">
                    {"02"}
                  </ContentText>
                </span>
                <h4 className="font-bold text-base text-white">
                  <ContentText id="app-services-painting-page-text-22">
                    {"Caulk & Patch"}
                  </ContentText>
                </h4>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  <ContentText id="app-services-painting-page-text-23">
                    {
                      "Every nail hole, seam, and joint is filled and caulked with flexible, paintable sealant."
                    }
                  </ContentText>
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <span className="font-serif text-3xl font-bold text-covenant-gold">
                  <ContentText id="app-services-painting-page-text-24">
                    {"03"}
                  </ContentText>
                </span>
                <h4 className="font-bold text-base text-white">
                  <ContentText id="app-services-painting-page-text-25">
                    {"Dedicated Prime"}
                  </ContentText>
                </h4>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  <ContentText id="app-services-painting-page-text-26">
                    {
                      "High-adhesion primers seal stains and raw substrates before topcoats are carefully rolled or sprayed."
                    }
                  </ContentText>
                </p>
              </div>
            </div>
          </div>
        </section>
      </ContentBlock>

      {/* ---------------------------------------------------- */}
      {/* PAINTING GALLERY                                     */}
      {/* ---------------------------------------------------- */}
      <ContentBlock
        id="app-services-painting-page-section-4"
        label="OUR PORTFOLIO"
      >
        <section className="py-24 lg:py-32 bg-white border-b border-covenant-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <SectionHeader
              eyebrow="OUR PORTFOLIO"
              title="Recent Painting Projects"
              subtitle="Examine the clean lines, even satin reflections, and transformative finishes delivered by our team."
            />

            <ProjectGallery initialFilter="painting" showFilters={false} />
          </div>
        </section>
      </ContentBlock>

      {/* Final CTA */}
      <ContentBlock
        id="app-services-painting-page-section-5"
        label="Ready to Refresh Your Home's Colors?"
      >
        <FinalCTA
          title="Ready to Refresh Your Home's Colors?"
          subtitle="Call Covenant Construction & Painting for an honest quote and prompt scheduling."
        />
      </ContentBlock>
    </ContentPage>
  );
}
