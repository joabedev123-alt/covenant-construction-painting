import React from "react";
import { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectGallery } from "@/components/ProjectGallery";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Projects & Gallery | Covenant Construction & Painting",
  description:
    "Explore our complete portfolio of residential kitchens, bathrooms, architectural painting, and home improvement projects.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-0">
      {/* ---------------------------------------------------- */}
      {/* HERO SECTION                                         */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-covenant-offwhite border-b border-covenant-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.24em] text-covenant-gold-dark uppercase">
              <span className="w-6 h-px bg-covenant-gold" />
              <span>OUR PORTFOLIO</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-covenant-navy leading-[1.1]">
              Craftsmanship You Can See.
            </h1>

            <p className="text-lg sm:text-xl text-covenant-muted font-light leading-relaxed">
              Every photograph in our portfolio reflects hours of planning, precision craftsmanship, and respectful execution inside real American residences.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* GALLERY GRID WITH DYNAMIC CATEGORY FILTERING         */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-white border-b border-covenant-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeader
            eyebrow="PORTFOLIO EXPLORER"
            title="Selected Work by Category"
            subtitle="Filter through our remodeling and painting disciplines or click any project to view detailed craftsmanship highlights."
          />

          <ProjectGallery showFilters={true} />
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
