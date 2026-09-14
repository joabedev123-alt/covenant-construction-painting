import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Phone } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { MasterBathroomCaseShowcase } from "@/components/MasterBathroomCaseShowcase";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { FinalCTA } from "@/components/FinalCTA";
import { SITE_ASSETS, COMPANY_INFO } from "@/data/assets";

export const metadata: Metadata = {
  title: "Bathroom Remodeling | Covenant Construction & Painting",
  description:
    "Elevate your daily routine with a spa-grade bathroom renovation. Walk-in curbless showers, custom vanities, multi-layer waterproofing, and master tilework.",
};

export default function BathroomRemodelingPage() {
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
                <span>BATHROOM REMODELING</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-covenant-navy leading-[1.1]">
                Comfort, Function and a Fresh New Finish.
              </h1>

              <p className="text-base sm:text-lg text-covenant-muted font-light leading-relaxed max-w-xl">
                Elevate your home with a tranquil, beautifully appointed bathroom suite. We combine rigorous waterproofing, zero-threshold showers, and fine tile craftsmanship to build spaces of enduring luxury.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 bg-covenant-navy hover:bg-covenant-navy-light text-white font-bold text-xs uppercase tracking-widest px-7 py-4 rounded-md shadow-card transition-colors border border-covenant-gold/40"
                >
                  <span>REQUEST BATHROOM ESTIMATE</span>
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
                  src={SITE_ASSETS.bathroomHero.url}
                  alt={SITE_ASSETS.bathroomHero.alt}
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
      {/* REAL PROJECT SHOWCASE (CAROUSEL)                     */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-white border-b border-covenant-border/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
          <SectionHeader
            eyebrow="SEE THE DIFFERENCE"
            title="Real Spaces. Real Transformations."
            subtitle="Explore how meticulous renovation elevates a tired bathroom into a breathtaking, spa-grade retreat."
          />

          <div className="bg-covenant-offwhite p-4 sm:p-7 rounded-3xl border border-covenant-border shadow-card">
            <MasterBathroomCaseShowcase />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-left">
            <div className="p-6 rounded-xl bg-covenant-offwhite border border-covenant-border/80">
              <div className="text-xs font-bold uppercase text-covenant-gold-dark mb-1">01. Demolition & Prep</div>
              <p className="text-xs text-covenant-muted leading-relaxed font-light">
                Complete strip-down to studs to inspect subflooring, level surfaces, and update plumbing lines.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-covenant-offwhite border border-covenant-border/80">
              <div className="text-xs font-bold uppercase text-covenant-gold-dark mb-1">02. 100% Waterproofing</div>
              <p className="text-xs text-covenant-muted leading-relaxed font-light">
                Continuous waterproof barriers behind all shower walls and floors with flood-tested shower pans.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-covenant-offwhite border border-covenant-border/80">
              <div className="text-xs font-bold uppercase text-covenant-gold-dark mb-1">03. Master Tilework</div>
              <p className="text-xs text-covenant-muted leading-relaxed font-light">
                Laser-aligned tile layout, precision mitered niche corners, and stain-resistant epoxy grouting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* OUR SPECIALIZED PROCESS                              */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-covenant-offwhite border-b border-covenant-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 text-center">
          <SectionHeader
            eyebrow="OUR PROCESS"
            title="Step-by-Step Bathroom Renovation"
            subtitle="From moisture protection to the final mirror mount, our structured approach guarantees worry-free results."
          />

          <ProcessTimeline />
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* PROJECT GALLERY                                      */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-white border-b border-covenant-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeader
            eyebrow="OUR WORK"
            title="Selected Bathroom Projects"
            subtitle="Explore master bathroom retreats, powder rooms, and guest bathroom transformations."
          />

          <ProjectGallery initialFilter="bathrooms" showFilters={false} />
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA
        title="Ready to Upgrade Your Bathroom?"
        subtitle="Call Covenant Construction & Painting for an honest assessment and personalized estimate."
      />
    </div>
  );
}
