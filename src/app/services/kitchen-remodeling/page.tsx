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
import { ArrowRight, Phone, ChefHat, Layers, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { KitchenProjectShowcase } from "@/components/KitchenProjectShowcase";
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
    <ContentPage className="space-y-0">
      {/* ---------------------------------------------------- */}
      {/* HERO SECTION                                         */}
      {/* ---------------------------------------------------- */}
      <ContentBlock
        id="app-services-kitchen-remodeling-page-section-1"
        label="A Kitchen Designed for the Way You Live."
      >
        <section className="py-20 lg:py-28 bg-covenant-offwhite border-b border-covenant-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.24em] text-covenant-gold-dark uppercase">
                  <span className="w-6 h-px bg-covenant-gold" />
                  <span>
                    <ContentText id="app-services-kitchen-remodeling-page-text-1">
                      {"KITCHEN REMODELING"}
                    </ContentText>
                  </span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-covenant-navy leading-[1.1]">
                  <ContentText id="app-services-kitchen-remodeling-page-text-2">
                    {"A Kitchen Designed for the Way You Live."}
                  </ContentText>
                </h1>

                <p className="text-base sm:text-lg text-covenant-muted font-light leading-relaxed max-w-xl">
                  <ContentText id="app-services-kitchen-remodeling-page-text-3">
                    {
                      "From layout and finishes to the details that bring everything together, Covenant Construction & Painting helps transform kitchens into more functional, beautiful, and inviting spaces."
                    }
                  </ContentText>
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Link
                    cmsId="app-services-kitchen-remodeling-page-link-1"
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2.5 bg-covenant-navy hover:bg-covenant-navy-light text-white font-bold text-xs uppercase tracking-widest px-7 py-4 rounded-md shadow-card transition-colors border border-covenant-gold/40"
                  >
                    <span>
                      <ContentText id="app-services-kitchen-remodeling-page-text-4">
                        {"REQUEST KITCHEN ESTIMATE"}
                      </ContentText>
                    </span>
                    <ArrowRight className="w-4 h-4 text-covenant-gold" />
                  </Link>

                  <ContentAnchor
                    cmsId="app-services-kitchen-remodeling-page-link-2"
                    href={COMPANY_INFO.phoneHref}
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-covenant-border/40 text-covenant-navy font-bold text-xs uppercase tracking-widest px-6 py-4 rounded-md border border-covenant-border transition-colors"
                  >
                    <Phone className="w-4 h-4 text-covenant-gold" />
                    <span>
                      <ContentText id="app-services-kitchen-remodeling-page-text-5">
                        {"Call "}
                      </ContentText>
                      <ContentText id="app-services-kitchen-remodeling-page-text-6">
                        {COMPANY_INFO.phoneDisplay}
                      </ContentText>
                    </span>
                  </ContentAnchor>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-elevated border border-covenant-border bg-covenant-navy/5">
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
      </ContentBlock>

      {/* ---------------------------------------------------- */}
      {/* DESIGN & FUNCTION SECTION                            */}
      {/* ---------------------------------------------------- */}
      <ContentBlock
        id="app-services-kitchen-remodeling-page-section-2"
        label="DESIGN & FUNCTION"
      >
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
                  <ContentText id="app-services-kitchen-remodeling-page-text-7">
                    {"Intuitive Workflow"}
                  </ContentText>
                </h3>
                <p className="text-sm text-covenant-muted font-light leading-relaxed">
                  <ContentText id="app-services-kitchen-remodeling-page-text-8">
                    {
                      "We analyze your prep, cooking, and gathering zones to create effortless movement and maximize accessible storage."
                    }
                  </ContentText>
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-covenant-offwhite border border-covenant-border/80 space-y-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-covenant-navy text-covenant-gold flex items-center justify-center">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-covenant-navy">
                  <ContentText id="app-services-kitchen-remodeling-page-text-9">
                    {"Custom Cabinetry"}
                  </ContentText>
                </h3>
                <p className="text-sm text-covenant-muted font-light leading-relaxed">
                  <ContentText id="app-services-kitchen-remodeling-page-text-10">
                    {
                      "Durable dovetail drawers, soft-close hardware, pull-out spice racks, and pantry organizers customized for your daily routine."
                    }
                  </ContentText>
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-covenant-offwhite border border-covenant-border/80 space-y-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-covenant-navy text-covenant-gold flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-covenant-navy">
                  <ContentText id="app-services-kitchen-remodeling-page-text-11">
                    {"Quality Finishes"}
                  </ContentText>
                </h3>
                <p className="text-sm text-covenant-muted font-light leading-relaxed">
                  <ContentText id="app-services-kitchen-remodeling-page-text-12">
                    {
                      "Stain-resistant quartz countertops, handmade ceramic tile backsplashes, and commercial-grade under-cabinet task illumination."
                    }
                  </ContentText>
                </p>
              </div>
            </div>
          </div>
        </section>
      </ContentBlock>

      {/* ---------------------------------------------------- */}
      {/* KITCHEN SHOWCASE GALLERY (COZINHA 01 A 05)           */}
      {/* ---------------------------------------------------- */}
      <ContentBlock
        id="app-services-kitchen-remodeling-page-section-3"
        label="REAL PROJECT SHOWCASE"
      >
        <section className="py-24 lg:py-32 bg-covenant-offwhite border-b border-covenant-border/60">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
            <SectionHeader
              eyebrow="REAL PROJECT SHOWCASE"
              title="Every Angle of a Master Kitchen"
              subtitle="Explore all 5 architectural perspectives of this luxury open-concept gourmet kitchen remodel."
            />

            <div className="bg-white p-4 sm:p-8 rounded-3xl border border-covenant-border shadow-card">
              <KitchenProjectShowcase />
            </div>
          </div>
        </section>
      </ContentBlock>

      {/* ---------------------------------------------------- */}
      {/* BEFORE & AFTER SECTION                               */}
      {/* ---------------------------------------------------- */}
      <ContentBlock
        id="app-services-kitchen-remodeling-page-section-4"
        label="KITCHEN TRANSFORMATION"
      >
        <section className="py-24 lg:py-32 bg-white border-b border-covenant-border/60">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
            <SectionHeader
              eyebrow="KITCHEN TRANSFORMATION"
              title="See The Difference"
              subtitle="Compare an outdated enclosed kitchen with our open-concept coastal remodel."
            />

            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-covenant-border shadow-card">
              <BeforeAfterSlider
                beforeImage={SITE_ASSETS.kitchenBefore.url}
                afterImage={SITE_ASSETS.kitchenAfter.url}
                beforeAlt="Dated kitchen before renovation"
                afterAlt="Completed gourmet kitchen after renovation"
                title="Transitional Gourmet Kitchen Transformation"
                category="KITCHEN BEFORE & AFTER"
                aspectRatio="4/3"
              />
            </div>
          </div>
        </section>
      </ContentBlock>

      {/* ---------------------------------------------------- */}
      {/* PROJECT GALLERY                                      */}
      {/* ---------------------------------------------------- */}
      <ContentBlock
        id="app-services-kitchen-remodeling-page-section-5"
        label="OUR WORK"
      >
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
      </ContentBlock>

      {/* Final CTA */}
      <ContentBlock
        id="app-services-kitchen-remodeling-page-section-6"
        label="Ready for Your Dream Kitchen?"
      >
        <FinalCTA
          title="Ready for Your Dream Kitchen?"
          subtitle="Call Covenant Construction & Painting to schedule your preliminary in-home consultation."
        />
      </ContentBlock>
    </ContentPage>
  );
}
