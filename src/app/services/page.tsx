import {
  ContentBlock,
  ContentPage,
  ContentText,
} from "@/components/cms/Content";
import React from "react";
import { ContentImage as Image } from "@/components/cms/Content";
import { ContentLink as Link } from "@/components/cms/Content";
import { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { FinalCTA } from "@/components/FinalCTA";
import { SITE_ASSETS } from "@/data/assets";

export const metadata: Metadata = {
  title: "Residential Services | Covenant Construction & Painting",
  description:
    "Explore our full suite of residential remodeling and painting services: custom kitchens, luxury bathrooms, precision interior & exterior painting, and home improvements.",
};

export default function ServicesPage() {
  const serviceList = [
    {
      id: "kitchen-remodeling",
      number: "01",
      title: "Kitchen Remodeling",
      subtitle:
        "The heart of your home, re-engineered for beauty and workflow.",
      description:
        "From reimagining existing floor plans and removing non-load-bearing partitions to installing bespoke cabinetry, stone countertops, and architectural lighting, we build kitchens you will love for a lifetime.",
      features: [
        "Custom & Semi-Custom Cabinetry",
        "Quartz, Granite & Marble Countertops",
        "Designer Tile Backsplashes",
        "Electrical, Plumbing & Appliance Rough-Ins",
      ],
      image: SITE_ASSETS.kitchenHero.url,
      href: "/services/kitchen-remodeling",
      ctaText: "EXPLORE KITCHEN REMODELING",
    },
    {
      id: "bathroom-remodeling",
      number: "02",
      title: "Bathroom Remodeling",
      subtitle:
        "Tranquil, spa-inspired spaces built with multi-layered waterproofing.",
      description:
        "Upgrade comfort, functionality, and finish with our specialized bathroom renovation service. We focus on curbless walk-in showers, custom floating vanities, linear drains, and master-level tile installation.",
      features: [
        "Zero-Threshold Walk-In Showers",
        "Schluter & RedGard Waterproofing Systems",
        "Designer Tile & Heated Flooring",
        "Custom Vanities & Modern Fixture Packages",
      ],
      image: SITE_ASSETS.bathroomHero.url,
      href: "/services/bathroom-remodeling",
      ctaText: "EXPLORE BATHROOM REMODELING",
    },
    {
      id: "professional-painting",
      number: "03",
      title: "Professional Painting",
      subtitle:
        "Flawless color and enduring protective coatings inside and out.",
      description:
        "A superior finish begins long before the brush touches the wall. We execute thorough scraping, caulking, patching, and priming to deliver smooth, durable, and radiant paint finishes throughout your home.",
      features: [
        "Interior Walls, Ceilings & Trim Enameling",
        "Cabinet Refinishing & Spray Lacquer",
        "Exterior Siding, Trim & Facias",
        "High-Grade Low-VOC Architectural Paints",
      ],
      image: SITE_ASSETS.paintingHero.url,
      href: "/services/painting",
      ctaText: "EXPLORE PROFESSIONAL PAINTING",
    },
    {
      id: "home-improvements",
      number: "04",
      title: "Construction & Home Improvements",
      subtitle:
        "Architectural millwork, door replacements, and structural upgrades.",
      description:
        "Every home features unique architectural character that benefits from periodic refinement. Our team handles interior trim carpentry, staircase renovations, drywall repairs, and tailored general improvements.",
      features: [
        "Wainscoting, Crown Molding & Baseboards",
        "Staircase Treads, Risers & Spindle Refinishing",
        "Interior & Exterior Door Installations",
        "Drywall Repair & Texture Matching",
      ],
      image: SITE_ASSETS.featureProject.url,
      href: "/contact",
      ctaText: "REQUEST A CONSULTATION",
    },
  ];

  return (
    <ContentPage className="space-y-0">
      {/* ---------------------------------------------------- */}
      {/* HERO SECTION                                         */}
      {/* ---------------------------------------------------- */}
      <ContentBlock
        id="app-services-page-section-1"
        label="Services Built Around Your Home."
      >
        <section className="py-20 lg:py-28 bg-covenant-offwhite border-b border-covenant-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.24em] text-covenant-gold-dark uppercase">
                <span className="w-6 h-px bg-covenant-gold" />
                <span>
                  <ContentText id="app-services-page-text-1">
                    {"OUR EXPERTISE"}
                  </ContentText>
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-covenant-navy leading-[1.1]">
                <ContentText id="app-services-page-text-2">
                  {"Services Built Around Your Home."}
                </ContentText>
              </h1>

              <p className="text-lg sm:text-xl text-covenant-muted font-light leading-relaxed">
                <ContentText id="app-services-page-text-3">
                  {
                    "We specialize in the high-impact areas that define your residential experience: gourmet kitchens, peaceful bathroom suites, flawless painting, and fine construction improvements."
                  }
                </ContentText>
              </p>
            </div>
          </div>
        </section>
      </ContentBlock>

      {/* ---------------------------------------------------- */}
      {/* EDITORIAL SERVICE LIST (ALTERNATING LAYOUT)          */}
      {/* ---------------------------------------------------- */}
      <ContentBlock id="app-services-page-section-2" label="">
        <section className="py-24 lg:py-32 bg-white divide-y divide-covenant-border/70">
          {serviceList.map((service, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div key={service.id} className="py-20 first:pt-0 last:pb-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Photo Side (6 cols) */}
                    <div
                      className={`lg:col-span-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}
                    >
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card border border-covenant-border bg-covenant-navy/5 group">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 bg-covenant-navy text-white text-xs font-bold px-3 py-1 rounded shadow border border-covenant-gold/40">
                          <ContentText id="app-services-page-text-4">
                            {service.number}
                          </ContentText>
                        </div>
                      </div>
                    </div>

                    {/* Text Side (6 cols) */}
                    <div
                      className={`lg:col-span-6 space-y-6 text-left ${isReversed ? "lg:order-1" : "lg:order-2"}`}
                    >
                      <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-covenant-gold-dark uppercase">
                        <span>
                          <ContentText id="app-services-page-text-5">
                            {"SERVICE "}
                          </ContentText>
                          <ContentText id="app-services-page-text-6">
                            {service.number}
                          </ContentText>
                        </span>
                      </div>

                      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-covenant-navy">
                        <ContentText id="app-services-page-text-7">
                          {service.title}
                        </ContentText>
                      </h2>

                      <p className="text-sm sm:text-base font-medium text-covenant-charcoal">
                        <ContentText id="app-services-page-text-8">
                          {service.subtitle}
                        </ContentText>
                      </p>

                      <p className="text-sm text-covenant-muted leading-relaxed font-light">
                        <ContentText id="app-services-page-text-9">
                          {service.description}
                        </ContentText>
                      </p>

                      {/* Features Checklist */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                        {service.features.map((feat, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs text-covenant-charcoal"
                          >
                            <Check className="w-4 h-4 text-covenant-gold shrink-0" />
                            <span>
                              <ContentText id="app-services-page-text-10">
                                {feat}
                              </ContentText>
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Dedicated CTA */}
                      <div className="pt-4">
                        <Link
                          cmsId="app-services-page-link-1"
                          href={service.href}
                          className="inline-flex items-center gap-2.5 bg-covenant-navy hover:bg-covenant-navy-light text-white font-bold text-xs uppercase tracking-widest px-7 py-3.5 rounded-md shadow-sm transition-colors border border-covenant-gold/40"
                        >
                          <span>
                            <ContentText id="app-services-page-text-11">
                              {service.ctaText}
                            </ContentText>
                          </span>
                          <ArrowRight className="w-4 h-4 text-covenant-gold" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </ContentBlock>

      {/* Final CTA */}
      <ContentBlock id="app-services-page-section-3" label="Chamada final">
        <FinalCTA />
      </ContentBlock>
    </ContentPage>
  );
}
