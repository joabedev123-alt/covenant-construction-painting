import {
  ContentBlock,
  ContentImage,
  ContentPage,
  ContentText,
} from "@/components/cms/Content";
import React from "react";
import { Metadata } from "next";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { MasterBathroomCaseShowcase } from "@/components/MasterBathroomCaseShowcase";
import { FinalCTA } from "@/components/FinalCTA";
import { SITE_ASSETS } from "@/data/assets";

export const metadata: Metadata = {
  title: "Before & After Transformations | Covenant Construction & Painting",
  description:
    "Explore dramatic Before & After home renovations by Covenant Construction & Painting. Interactive sliders showing bathroom, staircase, and kitchen transformations.",
};

export default function BeforeAfterPage() {
  const transformations = [
    {
      id: "case-bathroom-transformation",
      title: "Master Bathroom Renovation",
      category: "BATHROOM TRANSFORMATION",
      beforeImage: SITE_ASSETS.bathroomBefore.url,
      afterImage: SITE_ASSETS.bathroomAfter.url,
      beforeAlt: "Outdated master bathroom before renovation",
      afterAlt: "Completed luxury bathroom suite after renovation",
      description:
        "A full structural remodel taking an outdated 1980s bathroom and transforming it into a modern, spa-grade sanctuary with custom tilework, walk-in shower, and refined fixtures.",
      highlights: [
        "Eliminated dated tub to build a seamless curbless shower",
        "Complete multi-layer waterproofing membrane system",
        "Laser-straight porcelain wall and floor tiles",
        "Modern double vanity with brushed gold hardware",
      ],
    },
    {
      id: "case-staircase-transformation",
      title: "Staircase Refinish & Precision Enamel",
      category: "STAIRCASE TRANSFORMATION",
      singleImage: SITE_ASSETS.entrywayTransformation.url,
      beforeImage: SITE_ASSETS.staircaseBefore.url,
      afterImage: SITE_ASSETS.staircaseAfter.url,
      beforeAlt: "Worn staircase entry before refinishing",
      afterAlt: "Stunning two-tone architectural staircase after refinishing",
      description:
        "The entryway staircase sets the tone for the entire residence. By hand-sanding the oak treads, applying a rich stain, and coating the risers and spindles in high-durability white enamel, the foyer gained dramatic elegance.",
      highlights: [
        "Complete removal of old yellowed polyurethane finish",
        "Hand-sanded solid hardwood treads",
        "Semi-gloss scuff-resistant paint on all spindles and risers",
        "Clean, razor-sharp paint cut-lines along adjoining drywall",
      ],
    },
    {
      id: "case-kitchen-transformation",
      title: "Transitional Kitchen Layout Reconfiguration",
      category: "KITCHEN TRANSFORMATION",
      beforeImage: SITE_ASSETS.kitchenBefore.url,
      afterImage: "/images/PHOTO-2026-09-11-12-20-24.jpg",
      beforeAlt: "Enclosed, dark kitchen before remodel",
      afterAlt: "Renovated kitchen with white cabinets and subway tile backsplash",
      description:
        "This project opened an enclosed, dark floor plan into an expansive culinary kitchen complete with a massive quartz island, custom inset cabinets, and architectural task illumination.",
      highlights: [
        "Removed partition wall to create natural room flow",
        "Solid wood custom cabinetry with soft-close mechanisms",
        "Stain-resistant quartz island with waterfall edge",
        "Integrated modern exhaust hood and undermount sink",
      ],
    },
    {
      id: "case-exterior-transformation",
      title: "Exterior Facade Painting & Restoration",
      category: "EXTERIOR TRANSFORMATION",
      beforeImage: SITE_ASSETS.exteriorAfter.url,
      afterImage: SITE_ASSETS.exteriorBefore.url,
      beforeAlt: "Building exterior facade before painting",
      afterAlt:
        "Building exterior facade after complete painting and restoration",
      description:
        "A full exterior refresh combining thorough pressure washing, surface repair, and weather-resistant coatings to restore curb appeal and protect the structure for years to come.",
      highlights: [
        "Complete pressure washing and surface preparation",
        "Patched and sealed stucco and trim imperfections",
        "High-adhesion primer for long-lasting coverage",
        "Weather-resistant exterior-grade paint finish",
      ],
    },
  ];

  return (
    <ContentPage className="space-y-0">
      {/* ---------------------------------------------------- */}
      {/* HERO SECTION                                         */}
      {/* ---------------------------------------------------- */}
      <ContentBlock
        id="app-before-after-page-section-1"
        label="Transformation Speaks for Itself."
      >
        <section className="py-20 lg:py-28 bg-covenant-offwhite border-b border-covenant-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.24em] text-covenant-gold-dark uppercase">
                <span className="w-6 h-px bg-covenant-gold" />
                <span>
                  <ContentText id="app-before-after-page-text-1">
                    {"REAL TRANSFORMATIONS"}
                  </ContentText>
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-covenant-navy leading-[1.1]">
                <ContentText id="app-before-after-page-text-2">
                  {"Transformation Speaks for Itself."}
                </ContentText>
              </h1>

              <p className="text-lg sm:text-xl text-covenant-muted font-light leading-relaxed">
                <ContentText id="app-before-after-page-text-3">
                  {
                    "Slide back and forth to examine the craftsmanship, alignment, and immaculate attention to detail that define our residential remodels."
                  }
                </ContentText>
              </p>
            </div>
          </div>
        </section>
      </ContentBlock>

      {/* ---------------------------------------------------- */}
      {/* BEFORE & AFTER SHOWCASE LIST                         */}
      {/* ---------------------------------------------------- */}
      <ContentBlock id="app-before-after-page-section-2" label="">
        <section className="py-24 lg:py-32 bg-white space-y-24 divide-y divide-covenant-border/70">
          {transformations.map((item, idx) => (
            <div key={item.id} className="pt-20 first:pt-0">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                <div className="text-left space-y-2 max-w-3xl">
                  <span className="text-xs font-bold tracking-widest text-covenant-gold-dark uppercase">
                    <ContentText id="app-before-after-page-text-4">
                      {"CASE 0"}
                    </ContentText>
                    <ContentText id="app-before-after-page-text-5">
                      {idx + 1}
                    </ContentText>
                    <ContentText id="app-before-after-page-text-6">
                      {"• "}
                    </ContentText>
                    <ContentText id="app-before-after-page-text-7">
                      {item.category}
                    </ContentText>
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-covenant-navy">
                    <ContentText id="app-before-after-page-text-8">
                      {item.title}
                    </ContentText>
                  </h2>
                  <p className="text-sm sm:text-base text-covenant-muted font-light leading-relaxed">
                    <ContentText id="app-before-after-page-text-9">
                      {item.description}
                    </ContentText>
                  </p>
                </div>

                {/* Interactive Comparison Slider / Photo Carousel */}
                <ContentText id="src-app-before-after-page-tsx-dynamic-2">
                  {item.id === "case-bathroom-transformation" ? (
                    <div className="bg-covenant-offwhite p-4 sm:p-7 rounded-3xl border border-covenant-border shadow-card">
                      <MasterBathroomCaseShowcase />
                    </div>
                  ) : (
                    <div className="bg-covenant-offwhite p-4 sm:p-7 rounded-2xl border border-covenant-border shadow-card w-full">
                      <BeforeAfterSlider
                        singleImage={item.singleImage}
                        beforeImage={item.beforeImage}
                        afterImage={item.afterImage}
                        beforeAlt={item.beforeAlt}
                        afterAlt={item.afterAlt}
                        aspectRatio="16/9"
                      />
                    </div>
                  )}
                </ContentText>

                {item.id === "case-staircase-transformation" && (
                  <div className="bg-covenant-offwhite p-4 sm:p-7 rounded-2xl border border-covenant-border shadow-card w-full">
                    <ContentImage
                      src="/images/PHOTO-2026-09-16-08-47-28.jpg"
                      alt="Staircase before and after renovation, with carpet replaced by wood treads and white risers"
                      width={1125}
                      height={743}
                      sizes="(max-width: 1152px) 100vw, 1152px"
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                )}

                {/* Highlights List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
                  {item.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-covenant-offwhite border border-covenant-border/70 text-xs text-covenant-charcoal font-medium"
                    >
                      <span className="text-covenant-gold font-bold block mb-1">
                        <ContentText id="app-before-after-page-text-10">
                          {"✓ Detail 0"}
                        </ContentText>
                        <ContentText id="app-before-after-page-text-11">
                          {i + 1}
                        </ContentText>
                      </span>
                      <span className="text-covenant-muted font-light leading-relaxed">
                        <ContentText id="app-before-after-page-text-12">
                          {h}
                        </ContentText>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
      </ContentBlock>

      {/* Final CTA */}
      <ContentBlock
        id="app-before-after-page-section-3"
        label="Ready to Transform Your Home?"
      >
        <FinalCTA
          title="Ready to Transform Your Home?"
          subtitle="Call Covenant Construction & Painting to schedule your free estimate and consultation."
        />
      </ContentBlock>
    </ContentPage>
  );
}
