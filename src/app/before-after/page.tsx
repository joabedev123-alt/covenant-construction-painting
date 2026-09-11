import React from "react";
import { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
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
      afterImage: SITE_ASSETS.kitchenAfter.url,
      beforeAlt: "Enclosed, dark kitchen before remodel",
      afterAlt: "Bright open-concept gourmet kitchen after remodel",
      description:
        "This project opened an enclosed, dark floor plan into an expansive culinary kitchen complete with a massive quartz island, custom inset cabinets, and architectural task illumination.",
      highlights: [
        "Removed partition wall to create natural room flow",
        "Solid wood custom cabinetry with soft-close mechanisms",
        "Stain-resistant quartz island with waterfall edge",
        "Integrated modern exhaust hood and undermount sink",
      ],
    },
  ];

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
              <span>REAL TRANSFORMATIONS</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-covenant-navy leading-[1.1]">
              Transformation Speaks for Itself.
            </h1>

            <p className="text-lg sm:text-xl text-covenant-muted font-light leading-relaxed">
              Slide back and forth to examine the craftsmanship, alignment, and immaculate attention to detail that define our residential remodels.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* BEFORE & AFTER SHOWCASE LIST                         */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-white space-y-24 divide-y divide-covenant-border/70">
        {transformations.map((item, idx) => (
          <div key={item.id} className="pt-20 first:pt-0">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
              <div className="text-left space-y-2 max-w-3xl">
                <span className="text-xs font-bold tracking-widest text-covenant-gold-dark uppercase">
                  CASE 0{idx + 1} • {item.category}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-covenant-navy">
                  {item.title}
                </h2>
                <p className="text-sm sm:text-base text-covenant-muted font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Interactive Comparison Slider */}
              <div className="bg-covenant-offwhite p-4 sm:p-7 rounded-2xl border border-covenant-border shadow-card">
                <BeforeAfterSlider
                  singleImage={item.singleImage}
                  beforeImage={item.beforeImage}
                  afterImage={item.afterImage}
                  beforeAlt={item.beforeAlt}
                  afterAlt={item.afterAlt}
                  aspectRatio="16/9"
                />
              </div>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
                {item.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-covenant-offwhite border border-covenant-border/70 text-xs text-covenant-charcoal font-medium"
                  >
                    <span className="text-covenant-gold font-bold block mb-1">✓ Detail 0{i + 1}</span>
                    <span className="text-covenant-muted font-light leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Final CTA */}
      <FinalCTA
        title="Ready to Transform Your Home?"
        subtitle="Call Covenant Construction & Painting to schedule your free estimate and consultation."
      />
    </div>
  );
}
