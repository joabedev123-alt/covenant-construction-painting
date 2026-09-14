import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2, Phone, Paintbrush, Home } from "lucide-react";
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
    <div className="space-y-0">
      {/* ---------------------------------------------------- */}
      {/* HERO SECTION                                         */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-covenant-offwhite border-b border-covenant-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.24em] text-covenant-gold-dark uppercase">
                <span className="w-6 h-px bg-covenant-gold" />
                <span>PROFESSIONAL PAINTING</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-covenant-navy leading-[1.1]">
                A Better Finish <br />
                Changes Everything.
              </h1>

              <p className="text-base sm:text-lg text-covenant-muted font-light leading-relaxed max-w-xl">
                A renewed paint coat completely revives the atmosphere and character of a residence. Covenant Construction & Painting brings disciplined preparation, sharp lines, and lasting beauty to every room.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 bg-covenant-navy hover:bg-covenant-navy-light text-white font-bold text-xs uppercase tracking-widest px-7 py-4 rounded-md shadow-card transition-colors border border-covenant-gold/40"
                >
                  <span>REQUEST PAINTING ESTIMATE</span>
                  <ArrowRight className="w-4 h-4 text-covenant-gold" />
                </Link>

                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-covenant-border/40 text-covenant-navy font-bold text-xs uppercase tracking-widest px-6 py-4 rounded-md border border-covenant-border transition-colors"
                >
                  <Phone className="w-4 h-4 text-covenant-gold" />
                  <span>Call {COMPANY_INFO.phoneDisplay}</span>
                </a>
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

      {/* ---------------------------------------------------- */}
      {/* INTERIOR & EXTERIOR CATEGORIES                       */}
      {/* ---------------------------------------------------- */}
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
                Interior Painting
              </h3>
              <p className="text-sm text-covenant-muted leading-relaxed font-light">
                Interior painting requires clean boundaries, surgical protection of furniture, and meticulous sanding. We eliminate minor drywall imperfections, caulk baseboard seams, and roll smooth, uniform coats of premium washable paint.
              </p>
              <div className="space-y-2.5 pt-2 border-t border-covenant-border/60">
                <div className="flex items-center gap-2.5 text-xs text-covenant-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-covenant-gold shrink-0" />
                  <span>Walls, Ceilings, and Stairwell Foyers</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-covenant-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-covenant-gold shrink-0" />
                  <span>Doors, Window Casings, and Baseboard Enameling</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-covenant-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-covenant-gold shrink-0" />
                  <span>Cabinet Spraying and Surface Refinishing</span>
                </div>
              </div>
            </div>

            {/* Exterior Painting Card */}
            <div className="bg-covenant-offwhite p-8 sm:p-10 rounded-2xl border border-covenant-border/80 shadow-subtle space-y-6 text-left">
              <div className="w-12 h-12 rounded-xl bg-covenant-navy text-covenant-gold flex items-center justify-center">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-covenant-navy">
                Exterior Painting
              </h3>
              <p className="text-sm text-covenant-muted leading-relaxed font-light">
                Exterior durability begins with thorough pressure washing, peeling paint removal, and targeted priming. We seal wood trim against moisture intrusion and coat siding with weather-resilient paints that retain their color and luster.
              </p>
              <div className="space-y-2.5 pt-2 border-t border-covenant-border/60">
                <div className="flex items-center gap-2.5 text-xs text-covenant-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-covenant-gold shrink-0" />
                  <span>Soffits, Facias, and Architectural Trim</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-covenant-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-covenant-gold shrink-0" />
                  <span>Wood Siding and Composite Cladding</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-covenant-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-covenant-gold shrink-0" />
                  <span>Exterior Doors, Porticos, and Entry Staircases</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* ATTENTION TO PREPARATION                             */}
      {/* ---------------------------------------------------- */}
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
              <span className="font-serif text-3xl font-bold text-covenant-gold">01</span>
              <h4 className="font-bold text-base text-white">Scrape & Sand</h4>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                We remove loose paint and sand surfaces smooth so the new layer bonds permanently.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-3">
              <span className="font-serif text-3xl font-bold text-covenant-gold">02</span>
              <h4 className="font-bold text-base text-white">Caulk & Patch</h4>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                Every nail hole, seam, and joint is filled and caulked with flexible, paintable sealant.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-3">
              <span className="font-serif text-3xl font-bold text-covenant-gold">03</span>
              <h4 className="font-bold text-base text-white">Dedicated Prime</h4>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                High-adhesion primers seal stains and raw substrates before topcoats are carefully rolled or sprayed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* PAINTING GALLERY                                     */}
      {/* ---------------------------------------------------- */}
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

      {/* Final CTA */}
      <FinalCTA
        title="Ready to Refresh Your Home's Colors?"
        subtitle="Call Covenant Construction & Painting for an honest quote and prompt scheduling."
      />
    </div>
  );
}
