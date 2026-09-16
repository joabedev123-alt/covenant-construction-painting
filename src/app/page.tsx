import {
  ContentAnchor,
  ContentBlock,
  ContentPage,
  ContentText,
} from "@/components/cms/Content";
import React from "react";
import { ContentImage as Image } from "@/components/cms/Content";
import { ContentLink as Link } from "@/components/cms/Content";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  HeartHandshake,
  Award,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { TrustBadges } from "@/components/TrustBadges";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { MasterBathroomCaseShowcase } from "@/components/MasterBathroomCaseShowcase";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ProjectGallery } from "@/components/ProjectGallery";
import { FinalCTA } from "@/components/FinalCTA";
import { SITE_ASSETS, COMPANY_INFO } from "@/data/assets";

export default function HomePage() {
  return (
    <ContentPage className="space-y-0">
      {/* ---------------------------------------------------- */}
      {/* SECTION 01 — HERO                                    */}
      {/* ---------------------------------------------------- */}
      <ContentBlock id="app-page-section-1" label="Built With Purpose.">
        <section className="relative min-h-[calc(100svh-92px)] flex items-center bg-white overflow-hidden border-b border-covenant-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* Left Content (7 cols) */}
              <div className="lg:col-span-7 space-y-6 text-left">
                {/* Official Brand Logo in Hero (no mínimo 3cm = ~114px) */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-3.5 bg-covenant-offwhite/90 rounded-2xl border border-covenant-border/80 max-w-full sm:w-fit shadow-subtle">
                  <div
                    className="relative shrink-0 rounded-full overflow-hidden shadow-sm bg-white"
                    style={{
                      width: "3.2cm",
                      height: "3.2cm",
                      minWidth: "3cm",
                      minHeight: "3cm",
                    }}
                  >
                    <Image
                      src="/images/logo.png"
                      alt="Covenant Construction & Painting Official Logo"
                      fill
                      priority
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div className="pr-3 space-y-1">
                    <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.24em] text-covenant-gold-dark uppercase">
                      <span className="w-5 h-px bg-covenant-gold" />
                      <span>
                        <ContentText id="app-page-text-1">
                          {"COVENANT CONSTRUCTION & PAINTING"}
                        </ContentText>
                      </span>
                    </div>
                    <div className="font-serif text-base sm:text-lg font-bold text-covenant-navy leading-tight">
                      <ContentText id="app-page-text-2">
                        {"Built With Purpose • Finished With Excellence"}
                      </ContentText>
                    </div>
                    <p className="text-xs text-covenant-muted font-medium">
                      <ContentText id="app-page-text-3">
                        {"Licensed & Insured Residential Craftsmanship"}
                      </ContentText>
                    </p>
                  </div>
                </div>

                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.22em] text-covenant-gold-dark uppercase">
                  <span className="w-6 h-px bg-covenant-gold" />
                  <span>
                    <ContentText id="app-page-text-4">
                      {"CONSTRUCTION • REMODELING • PAINTING"}
                    </ContentText>
                  </span>
                </div>

                {/* Stately H1 */}
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-covenant-navy leading-[1.08]">
                  <ContentText id="app-page-text-5">
                    {"Built With Purpose. "}
                  </ContentText>
                  <br />
                  <span className="text-covenant-navy">
                    <ContentText id="app-page-text-6">
                      {"Finished With Excellence."}
                    </ContentText>
                  </span>
                </h1>

                {/* Subheadline */}
                <p className="text-base sm:text-lg lg:text-xl text-covenant-muted font-light leading-relaxed max-w-xl">
                  <ContentText id="app-page-text-7">
                    {COMPANY_INFO.subheadline}
                  </ContentText>
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Link
                    cmsId="app-page-link-1"
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2.5 bg-covenant-navy hover:bg-covenant-navy-light text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-md shadow-card hover:shadow-elevated transition-all duration-200 border border-covenant-gold/40 hover:border-covenant-gold"
                  >
                    <span>
                      <ContentText id="app-page-text-8">
                        {"GET AN ESTIMATE"}
                      </ContentText>
                    </span>
                    <ArrowRight className="w-4 h-4 text-covenant-gold" />
                  </Link>

                  <ContentAnchor
                    cmsId="app-page-link-2"
                    href={COMPANY_INFO.phoneHref}
                    className="inline-flex items-center justify-center gap-2.5 bg-covenant-offwhite hover:bg-covenant-border/50 text-covenant-navy font-bold text-xs uppercase tracking-widest px-7 py-4 rounded-md border border-covenant-border hover:border-covenant-gold/50 transition-all duration-200 shadow-subtle"
                  >
                    <Phone className="w-4 h-4 text-covenant-gold" />
                    <span>
                      <ContentText id="app-page-text-9">{"CALL "}</ContentText>
                      <ContentText id="app-page-text-10">
                        {COMPANY_INFO.phoneDisplay}
                      </ContentText>
                    </span>
                  </ContentAnchor>
                </div>

                {/* Trust Indicators in Sophisticated Horizontal Strip */}
                <div className="pt-6">
                  <TrustBadges theme="light" />
                </div>
              </div>

              {/* Right Hero Image (5 cols) */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[3/2] w-full rounded-2xl overflow-hidden shadow-elevated border border-covenant-border/80 bg-covenant-navy/5 hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src={SITE_ASSETS.heroMain.url}
                    alt={SITE_ASSETS.heroMain.alt}
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
      {/* SECTION 02 — INTRO / VALUE                           */}
      {/* ---------------------------------------------------- */}
      <ContentBlock id="app-page-section-2" label="More Than Renovation.">
        <section className="py-20 lg:py-28 bg-covenant-offwhite border-b border-covenant-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Detail Photo (5 cols) */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-card border border-covenant-border bg-white hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src={SITE_ASSETS.covenantStandard.url}
                    alt={SITE_ASSETS.covenantStandard.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Editorial Content (7 cols) */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] text-covenant-gold-dark uppercase">
                  <span className="w-5 h-px bg-covenant-gold" />
                  <span>
                    <ContentText id="app-page-text-11">
                      {"THE COVENANT STANDARD"}
                    </ContentText>
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-covenant-navy leading-[1.15]">
                  <ContentText id="app-page-text-12">
                    {"More Than Renovation. "}
                  </ContentText>
                  <br />
                  <ContentText id="app-page-text-13">
                    {"A Commitment to Quality."}
                  </ContentText>
                </h2>

                <p className="text-base sm:text-lg text-covenant-muted leading-relaxed font-light">
                  <ContentText id="app-page-text-14">
                    {
                      "At Covenant Construction & Painting, every project is approached with care, craftsmanship, and attention to detail. From kitchens and bathrooms to painting and home improvements, our goal is to create spaces that feel better, work better, and last."
                    }
                  </ContentText>
                </p>

                <div className="pt-2">
                  <Link
                    cmsId="app-page-link-3"
                    href="/about"
                    className="inline-flex items-center gap-2.5 text-xs font-bold tracking-widest uppercase text-covenant-navy hover:text-covenant-gold-dark transition-colors py-2 group cursor-pointer"
                  >
                    <span className="border-b-2 border-covenant-gold pb-0.5">
                      <ContentText id="app-page-text-15">
                        {"ABOUT COVENANT"}
                      </ContentText>
                    </span>
                    <ArrowRight className="w-4 h-4 text-covenant-gold transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ContentBlock>

      {/* ---------------------------------------------------- */}
      {/* SECTION 03 — SERVICES                                */}
      {/* ---------------------------------------------------- */}
      <ContentBlock id="app-page-section-3" label="WHAT WE DO">
        <section className="py-24 lg:py-32 bg-white border-b border-covenant-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <SectionHeader
              eyebrow="WHAT WE DO"
              title="Craftsmanship Across Every Detail."
              subtitle="Thoughtfully structured services designed to enhance the beauty, utility, and enduring value of your home."
            />

            {/* Three Large Editorial Service Blocks + 4th Improvement Block */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Block 01: Kitchen */}
              <div className="bg-covenant-offwhite rounded-2xl p-8 sm:p-10 border border-covenant-border/80 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-4xl font-bold text-covenant-gold-dark">
                      <ContentText id="app-page-text-16">{"01"}</ContentText>
                    </span>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-covenant-muted bg-white px-3 py-1 rounded-full border border-covenant-border">
                      <ContentText id="app-page-text-17">
                        {"Renovation"}
                      </ContentText>
                    </span>
                  </div>

                  {/* Foto única de destaque da cozinha na proporção nativa 16/10 sem bordas brancas */}
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-covenant-navy/5 border border-covenant-border/70 group/img">
                    <Image
                      src={SITE_ASSETS.kitchenHero.url}
                      alt="Kitchen Remodeling"
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-covenant-navy group-hover:text-covenant-gold-dark transition-colors">
                    <ContentText id="app-page-text-18">
                      {"KITCHEN REMODELING"}
                    </ContentText>
                  </h3>

                  <p className="text-sm text-covenant-muted leading-relaxed font-light">
                    <ContentText id="app-page-text-19">
                      {
                        "Transform outdated kitchens into functional, beautiful spaces designed around the way you live. Custom cabinets, stone surfaces, and optimized layouts."
                      }
                    </ContentText>
                  </p>
                </div>

                <div className="pt-8 border-t border-covenant-border/60 mt-6">
                  <Link
                    cmsId="app-page-link-4"
                    href="/services/kitchen-remodeling"
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-covenant-navy group-hover:text-covenant-gold-dark transition-colors cursor-pointer"
                  >
                    <span>
                      <ContentText id="app-page-text-20">
                        {"VIEW SERVICE"}
                      </ContentText>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-covenant-gold transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Block 02: Bathroom */}
              <div className="bg-covenant-offwhite rounded-2xl p-8 sm:p-10 border border-covenant-border/80 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-4xl font-bold text-covenant-gold-dark">
                      <ContentText id="app-page-text-21">{"02"}</ContentText>
                    </span>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-covenant-muted bg-white px-3 py-1 rounded-full border border-covenant-border">
                      <ContentText id="app-page-text-22">
                        {"Specialty"}
                      </ContentText>
                    </span>
                  </div>

                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-covenant-navy/5 border border-covenant-border/70">
                    <Image
                      src={SITE_ASSETS.bathroomHero.url}
                      alt="Bathroom Remodeling"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-covenant-navy group-hover:text-covenant-gold-dark transition-colors">
                    <ContentText id="app-page-text-23">
                      {"BATHROOM REMODELING"}
                    </ContentText>
                  </h3>

                  <p className="text-sm text-covenant-muted leading-relaxed font-light">
                    <ContentText id="app-page-text-24">
                      {
                        "Upgrade comfort, functionality, and finish with thoughtful bathroom renovations. Spa suites, curbless walk-in showers, and precision tile craftsmanship."
                      }
                    </ContentText>
                  </p>
                </div>

                <div className="pt-8 border-t border-covenant-border/60 mt-6">
                  <Link
                    cmsId="app-page-link-5"
                    href="/services/bathroom-remodeling"
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-covenant-navy group-hover:text-covenant-gold-dark transition-colors cursor-pointer"
                  >
                    <span>
                      <ContentText id="app-page-text-25">
                        {"VIEW SERVICE"}
                      </ContentText>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-covenant-gold transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Block 03: Painting */}
              <div className="bg-covenant-offwhite rounded-2xl p-8 sm:p-10 border border-covenant-border/80 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-4xl font-bold text-covenant-gold-dark">
                      <ContentText id="app-page-text-26">{"03"}</ContentText>
                    </span>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-covenant-muted bg-white px-3 py-1 rounded-full border border-covenant-border">
                      <ContentText id="app-page-text-27">
                        {"Finishing"}
                      </ContentText>
                    </span>
                  </div>

                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-covenant-navy/5 border border-covenant-border/70">
                    <Image
                      src={SITE_ASSETS.paintingHero.url}
                      alt="Professional Painting"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-covenant-navy group-hover:text-covenant-gold-dark transition-colors">
                    <ContentText id="app-page-text-28">
                      {"PAINTING"}
                    </ContentText>
                  </h3>

                  <p className="text-sm text-covenant-muted leading-relaxed font-light">
                    <ContentText id="app-page-text-29">
                      {
                        "Professional painting and finishing that give your home a clean, polished, and renewed appearance. Rigorous surface prep and crisp cut-lines."
                      }
                    </ContentText>
                  </p>
                </div>

                <div className="pt-8 border-t border-covenant-border/60 mt-6">
                  <Link
                    cmsId="app-page-link-6"
                    href="/services/painting"
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-covenant-navy group-hover:text-covenant-gold-dark transition-colors cursor-pointer"
                  >
                    <span>
                      <ContentText id="app-page-text-30">
                        {"VIEW SERVICE"}
                      </ContentText>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-covenant-gold transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* 04 Home Improvements Generic Banner */}
            <div className="bg-covenant-navy text-white rounded-2xl p-8 sm:p-10 shadow-elevated border border-covenant-navy-light/70 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-left">
                <span className="text-xs font-bold tracking-widest text-covenant-gold uppercase">
                  <ContentText id="app-page-text-31">
                    {"04 • GENERAL CONSTRUCTION"}
                  </ContentText>
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  <ContentText id="app-page-text-32">
                    {"Home Improvements & Custom Carpentry"}
                  </ContentText>
                </h4>
                <p className="text-sm text-gray-300 max-w-2xl font-light">
                  <ContentText id="app-page-text-33">
                    {
                      "Architectural trim, interior door upgrades, built-ins, and structural improvements delivered with the same commitment to precision."
                    }
                  </ContentText>
                </p>
              </div>
              <Link
                cmsId="app-page-link-7"
                href="/services"
                className="inline-flex items-center gap-2 bg-covenant-gold hover:bg-covenant-gold-light text-covenant-navy font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-md shrink-0 shadow transition-colors"
              >
                <span>
                  <ContentText id="app-page-text-34">
                    {"EXPLORE ALL SCOPES"}
                  </ContentText>
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </ContentBlock>

      {/* ---------------------------------------------------- */}
      {/* SECTION 04 — FEATURE PROJECT                         */}
      {/* ---------------------------------------------------- */}
      <ContentBlock id="app-page-section-4" label="Built Around Your Home.">
        <section className="py-20 lg:py-28 bg-white border-b border-covenant-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* Photography (5 cols) */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none w-full rounded-2xl overflow-hidden shadow-elevated border border-covenant-border bg-covenant-navy/5">
                  <Image
                    src="/images/PHOTO-2026-09-16-07-30-39.jpg"
                    alt="Residential facade and balconies illuminated at night, with the construction team outside"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Editorial Text (7 cols) */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] text-covenant-gold-dark uppercase">
                  <span className="w-5 h-px bg-covenant-gold" />
                  <span>
                    <ContentText id="app-page-text-35">
                      {"FEATURED PROJECT"}
                    </ContentText>
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-covenant-navy leading-tight">
                  <ContentText id="app-page-text-36">
                    {"Built Around Your Home. "}
                  </ContentText>
                  <br />
                  <ContentText id="app-page-text-37">
                    {"Designed Around Your Life."}
                  </ContentText>
                </h2>

                <p className="text-base text-covenant-muted leading-relaxed font-light">
                  <ContentText id="app-page-text-38">
                    {
                      "A home transformation isn't just about replacing surfaces—it's about creating cohesive harmony between living spaces. From initial teardown through final trim painting, we protect your living environment and execute every phase with clean, conscientious methodology."
                    }
                  </ContentText>
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs font-semibold text-covenant-navy">
                    <CheckCircle2 className="w-4 h-4 text-covenant-gold shrink-0" />
                    <span>
                      <ContentText id="app-page-text-39">
                        {
                          "Custom architectural framing and millwork integration"
                        }
                      </ContentText>
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-covenant-navy">
                    <CheckCircle2 className="w-4 h-4 text-covenant-gold shrink-0" />
                    <span>
                      <ContentText id="app-page-text-40">
                        {"Durable moisture-sealed surfaces in wet zones"}
                      </ContentText>
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-covenant-navy">
                    <CheckCircle2 className="w-4 h-4 text-covenant-gold shrink-0" />
                    <span>
                      <ContentText id="app-page-text-41">
                        {"Even, dust-free paint finishes across all planes"}
                      </ContentText>
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    cmsId="app-page-link-8"
                    href="/projects"
                    className="inline-flex items-center gap-2.5 bg-covenant-navy hover:bg-covenant-navy-light text-white font-bold text-xs uppercase tracking-widest px-7 py-4 rounded-md shadow-card transition-colors border border-covenant-gold/40"
                  >
                    <span>
                      <ContentText id="app-page-text-42">
                        {"EXPLORE OUR PROJECTS"}
                      </ContentText>
                    </span>
                    <ArrowRight className="w-4 h-4 text-covenant-gold" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ContentBlock>

      {/* ---------------------------------------------------- */}
      {/* SECTION 05 — BEFORE & AFTER (BATHROOM)               */}
      {/* ---------------------------------------------------- */}
      <ContentBlock id="app-page-section-5" label="SEE THE DIFFERENCE">
        <section className="py-24 lg:py-32 bg-covenant-offwhite border-b border-covenant-border/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
            <SectionHeader
              eyebrow="SEE THE DIFFERENCE"
              title="Real Spaces. Real Transformations."
              subtitle="Explore how meticulous renovation elevates tired spaces into breathtaking rooms that offer daily comfort and enduring luxury."
            />

            {/* Interactive Showcase with all images from the banheiros folder */}
            <div className="bg-white p-4 sm:p-7 rounded-3xl border border-covenant-border shadow-card">
              <MasterBathroomCaseShowcase />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                cmsId="app-page-link-9"
                href="/before-after"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-covenant-navy hover:text-covenant-gold-dark transition-colors py-2"
              >
                <span className="border-b-2 border-covenant-gold pb-0.5">
                  <ContentText id="app-page-text-43">
                    {"VIEW MORE BEFORE & AFTER CASES"}
                  </ContentText>
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-covenant-gold" />
              </Link>
            </div>
          </div>
        </section>
      </ContentBlock>

      {/* ---------------------------------------------------- */}
      {/* SECTION 06 — STAIRCASE TRANSFORMATION                */}
      {/* ---------------------------------------------------- */}
      <ContentBlock
        id="app-page-section-6"
        label="Entryway Architectural Finish"
      >
        <section className="py-20 lg:py-28 bg-white border-b border-covenant-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Text 40% */}
              <div className="lg:col-span-5 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] text-covenant-gold-dark uppercase">
                  <span className="w-5 h-px bg-covenant-gold" />
                  <span>
                    <ContentText id="app-page-text-44">
                      {"REAL PROJECT SHOWCASE"}
                    </ContentText>
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-covenant-navy leading-tight">
                  <ContentText id="app-page-text-45">
                    {"Staircase Transformation"}
                  </ContentText>
                </h2>

                <p className="text-base text-covenant-muted leading-relaxed font-light">
                  <ContentText id="app-page-text-46">
                    {
                      "A refreshed finish can completely change the character of a home's interior or exterior architectural entry. Proper prep, sanding, and high-adhesion coating breathe new life into high-traffic structural focal points."
                    }
                  </ContentText>
                </p>

                <div className="pt-2">
                  <Link
                    cmsId="app-page-link-10"
                    href="/projects"
                    className="inline-flex items-center gap-2.5 bg-covenant-navy hover:bg-covenant-navy-light text-white font-bold text-xs uppercase tracking-widest px-7 py-3.5 rounded-md shadow-sm transition-colors border border-covenant-gold/40"
                  >
                    <span>
                      <ContentText id="app-page-text-47">
                        {"VIEW MORE PROJECTS"}
                      </ContentText>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-covenant-gold" />
                  </Link>
                </div>
              </div>

              {/* Slider 60% */}
              <div className="lg:col-span-7">
                <div className="bg-covenant-offwhite p-3 sm:p-5 rounded-2xl border border-covenant-border shadow-card">
                  <BeforeAfterSlider
                    singleImage={SITE_ASSETS.entrywayTransformation.url}
                    title="Entryway Architectural Finish"
                    category="BEFORE & AFTER"
                    aspectRatio="4/3"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ContentBlock>

      {/* ---------------------------------------------------- */}
      {/* SECTION 07 — PROCESS                                 */}
      {/* ---------------------------------------------------- */}
      <ContentBlock id="app-page-section-7" label="OUR PROCESS">
        <section className="py-24 lg:py-32 bg-covenant-offwhite border-b border-covenant-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 text-center">
            <SectionHeader
              eyebrow="OUR PROCESS"
              title="A Clear Process. From First Call to Final Detail."
              subtitle="We believe an enjoyable remodeling experience begins with transparent communication, realistic timelines, and respectful clean work."
            />

            <ProcessTimeline />
          </div>
        </section>
      </ContentBlock>

      {/* ---------------------------------------------------- */}
      {/* SECTION 08 — WHY CHOOSE US (NAVY SECTION)            */}
      {/* ---------------------------------------------------- */}
      <ContentBlock id="app-page-section-8" label="WHY COVENANT">
        <section className="py-24 lg:py-32 bg-covenant-navy text-white relative overflow-hidden">
          {/* Subtle architectural gold grid accent */}
          <div className="absolute inset-0 bg-[radial-gradient(#C79A3B_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.07] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
            <SectionHeader
              theme="dark"
              eyebrow="WHY COVENANT"
              title="Built on Trust. Focused on the Details."
              subtitle="Our founding values are not marketing slogans—they guide how we prepare every room, cut every tile, and speak to every homeowner."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm space-y-4 hover:border-covenant-gold/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-covenant-gold/15 flex items-center justify-center text-covenant-gold">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  <ContentText id="app-page-text-48">
                    {"Built on Faith"}
                  </ContentText>
                </h3>
                <p className="text-sm text-gray-300 font-light leading-relaxed">
                  <ContentText id="app-page-text-49">
                    {
                      "Operating with transparent honesty, fair agreements, and principled respect for your property and family."
                    }
                  </ContentText>
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm space-y-4 hover:border-covenant-gold/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-covenant-gold/15 flex items-center justify-center text-covenant-gold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  <ContentText id="app-page-text-50">
                    {"Quality-Focused Craftsmanship"}
                  </ContentText>
                </h3>
                <p className="text-sm text-gray-300 font-light leading-relaxed">
                  <ContentText id="app-page-text-51">
                    {
                      "We refuse to cut corners on waterproofing, structural framing, or primer coats that guarantee long-lasting durability."
                    }
                  </ContentText>
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm space-y-4 hover:border-covenant-gold/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-covenant-gold/15 flex items-center justify-center text-covenant-gold">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  <ContentText id="app-page-text-52">
                    {"Attention to Detail"}
                  </ContentText>
                </h3>
                <p className="text-sm text-gray-300 font-light leading-relaxed">
                  <ContentText id="app-page-text-53">
                    {
                      "Clean tile seams, precise miters, smooth wall planes, and thorough daily cleanup to minimize disruption."
                    }
                  </ContentText>
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm space-y-4 hover:border-covenant-gold/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-covenant-gold/15 flex items-center justify-center text-covenant-gold">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  <ContentText id="app-page-text-54">
                    {"Clear Communication"}
                  </ContentText>
                </h3>
                <p className="text-sm text-gray-300 font-light leading-relaxed">
                  <ContentText id="app-page-text-55">
                    {
                      "No surprises. You will always know what phase is happening, what to expect next, and who is in your home."
                    }
                  </ContentText>
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm space-y-4 hover:border-covenant-gold/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-covenant-gold/15 flex items-center justify-center text-covenant-gold">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  <ContentText id="app-page-text-56">
                    {"Commitment to Excellence"}
                  </ContentText>
                </h3>
                <p className="text-sm text-gray-300 font-light leading-relaxed">
                  <ContentText id="app-page-text-57">
                    {
                      "We only consider a project complete when you are fully satisfied with every finish during our final walkthrough."
                    }
                  </ContentText>
                </p>
              </div>

              {/* Feature 6 / Direct Call Card */}
              <div className="bg-covenant-navy-light/70 border border-covenant-gold/40 p-8 rounded-xl flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-bold tracking-widest text-covenant-gold uppercase">
                    <ContentText id="app-page-text-58">
                      {"READY TO DISCUSS?"}
                    </ContentText>
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white">
                    <ContentText id="app-page-text-59">
                      {"Speak With Our Team"}
                    </ContentText>
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-light">
                    <ContentText id="app-page-text-60">
                      {
                        "Have questions about your timeline or budget? We are happy to talk through your ideas."
                      }
                    </ContentText>
                  </p>
                </div>

                <ContentAnchor
                  cmsId="app-page-link-11"
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-2 bg-covenant-gold hover:bg-covenant-gold-light text-covenant-navy font-bold text-xs uppercase tracking-wider py-3 px-4 rounded shadow transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>
                    <ContentText id="app-page-text-61">{"Call "}</ContentText>
                    <ContentText id="app-page-text-62">
                      {COMPANY_INFO.phoneDisplay}
                    </ContentText>
                  </span>
                </ContentAnchor>
              </div>
            </div>
          </div>
        </section>
      </ContentBlock>

      {/* ---------------------------------------------------- */}
      {/* SECTION 09 — GALLERY                                 */}
      {/* ---------------------------------------------------- */}
      <ContentBlock id="app-page-section-9" label="PORTFOLIO">
        <section className="py-24 lg:py-32 bg-white border-b border-covenant-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <SectionHeader
              eyebrow="PORTFOLIO"
              title="Selected Work"
              subtitle="A curated glimpse into our recent residential kitchen, bathroom, painting, and architectural improvements."
            />

            <ProjectGallery
              limit={6}
              showFilters={false}
              showViewAllButton={true}
            />
          </div>
        </section>
      </ContentBlock>

      {/* ---------------------------------------------------- */}
      {/* SECTION 10 — FINAL CTA                               */}
      {/* ---------------------------------------------------- */}
      <ContentBlock id="app-page-section-10" label="Chamada final">
        <FinalCTA />
      </ContentBlock>
    </ContentPage>
  );
}
