import {
  ContentBlock,
  ContentPage,
  ContentText,
} from "@/components/cms/Content";
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
    <ContentPage className="space-y-0">
      {/* ---------------------------------------------------- */}
      {/* HERO SECTION                                         */}
      {/* ---------------------------------------------------- */}
      <ContentBlock
        id="app-projects-page-section-1"
        label="Craftsmanship You Can See."
      >
        <section className="py-20 lg:py-28 bg-covenant-offwhite border-b border-covenant-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.24em] text-covenant-gold-dark uppercase">
                <span className="w-6 h-px bg-covenant-gold" />
                <span>
                  <ContentText id="app-projects-page-text-1">
                    {"OUR PORTFOLIO"}
                  </ContentText>
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-covenant-navy leading-[1.1]">
                <ContentText id="app-projects-page-text-2">
                  {"Craftsmanship You Can See."}
                </ContentText>
              </h1>

              <p className="text-lg sm:text-xl text-covenant-muted font-light leading-relaxed">
                <ContentText id="app-projects-page-text-3">
                  {
                    "Every photograph in our portfolio reflects hours of planning, precision craftsmanship, and respectful execution inside real American residences."
                  }
                </ContentText>
              </p>
            </div>
          </div>
        </section>
      </ContentBlock>

      {/* ---------------------------------------------------- */}
      {/* GALLERY GRID WITH DYNAMIC CATEGORY FILTERING         */}
      {/* ---------------------------------------------------- */}
      <ContentBlock id="app-projects-page-section-2" label="PORTFOLIO EXPLORER">
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
      </ContentBlock>

      {/* Final CTA */}
      <ContentBlock id="app-projects-page-section-3" label="Chamada final">
        <FinalCTA />
      </ContentBlock>
    </ContentPage>
  );
}
