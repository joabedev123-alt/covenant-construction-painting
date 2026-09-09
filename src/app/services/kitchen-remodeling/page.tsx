import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2, Phone, Sparkles, ChefHat, Layers, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { ProjectGallery } from "@/components/ProjectGallery";
import { FinalCTA } from "@/components/FinalCTA";
import { SITE_ASSETS, COMPANY_INFO } from "@/data/assets";

export const metadata: Metadata = {
  title: "Kitchen Remodeling | Covenant Construction & Painting",
  description:
    "Transform your kitchen into a functional, beautiful, and inviting culinary space with custom cabinetry, premium stone countertops, and master craftsmanship.",
};

export default function KitchenRemodelingPage() {
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
                <span>KITCHEN REMODELING</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-covenant-navy leading-[1.1]">
                A Kitchen Designed for the Way You Live.
              </h1>

              <p className="text-base sm:text-lg text-covenant-muted font-light leading-relaxed max-w-xl">
                From layout and finishes to the details that bring everything together, Covenant Construction & Painting helps transform kitchens into more functional, beautiful, and inviting spaces.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 bg-covenant-navy hover:bg-covenant-navy-light text-white font-bold text-xs uppercase tracking-widest px-7 py-4 rounded-md shadow-card transition-colors border border-covenant-gold/40"
                >
                  <span>REQUEST KITCHEN ESTIMATE</span>
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
                  src={SITE_ASSETS.kitchenHero.url}
                  alt={SITE_ASSETS.kitchenHero.alt}
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
      {/* DESIGN & FUNCTION SECTION                            */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-white border-b border-covenant-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeader
            eyebrow="DESIGN & FUNCTION"
            title="Where Practical Workflow Meets Enduring Beauty."
            subtitle="A truly successful kitchen remodel balances everyday utility with refined architectural presence."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-covenant-offwhite border border-covenant-border/80 space-y-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-covenant-navy text-covenant-gold flex items-center justify-center">
                <ChefHat className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-covenant-navy">
                Intuitive Workflow
              </h3>
              <p className="text-sm text-covenant-muted font-light leading-relaxed">
                We analyze your prep, cooking, and gathering zones to create effortless movement and maximize accessible storage.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-covenant-offwhite border border-covenant-border/80 space-y-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-covenant-navy text-covenant-gold flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-covenant-navy">
                Custom Cabinetry
              </h3>
              <p className="text-sm text-covenant-muted font-light leading-relaxed">
                Durable dovetail drawers, soft-close hardware, pull-out spice racks, and pantry organizers customized for your daily routine.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-covenant-offwhite border border-covenant-border/80 space-y-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-covenant-navy text-covenant-gold flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-covenant-navy">
                Quality Finishes
              </h3>
              <p className="text-sm text-covenant-muted font-light leading-relaxed">
                Stain-resistant quartz countertops, handmade ceramic tile backsplashes, and commercial-grade under-cabinet task illumination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* BEFORE & AFTER SECTION                               */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-covenant-offwhite border-b border-covenant-border/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
          <SectionHeader
            eyebrow="KITCHEN TRANSFORMATION"
            title="See The Difference"
            subtitle="Compare an outdated enclosed kitchen with our open-concept coastal remodel."
          />

          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-covenant-border shadow-card">
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=80"
              afterImage={SITE_ASSETS.kitchenHero.url}
              beforeAlt="Dated kitchen before renovation"
              afterAlt="Completed gourmet kitchen after renovation"
              title="Transitional Gourmet Kitchen Transformation"
              category="KITCHEN BEFORE & AFTER"
              aspectRatio="16/9"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* PROJECT GALLERY                                      */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-white border-b border-covenant-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeader
            eyebrow="OUR WORK"
            title="Featured Kitchen Remodels"
            subtitle="Browse selected residential kitchens designed and completed by Covenant Construction & Painting."
          />

          <ProjectGallery initialFilter="kitchens" showFilters={false} />
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA
        title="Ready for Your Dream Kitchen?"
        subtitle="Call Covenant Construction & Painting to schedule your preliminary in-home consultation."
      />
    </div>
  );
}
