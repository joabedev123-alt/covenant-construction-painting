import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2, ShieldCheck, HeartHandshake, Award } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { TrustBadges } from "@/components/TrustBadges";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ProjectGallery } from "@/components/ProjectGallery";
import { FinalCTA } from "@/components/FinalCTA";
import { SITE_ASSETS, COMPANY_INFO } from "@/data/assets";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* ---------------------------------------------------- */}
      {/* SECTION 01 — HERO                                    */}
      {/* ---------------------------------------------------- */}
      <section className="relative min-h-[calc(100vh-92px)] flex items-center bg-white overflow-hidden border-b border-covenant-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Official Brand Logo in Hero (no mínimo 3cm = ~114px) */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-3.5 bg-covenant-offwhite/90 rounded-2xl border border-covenant-border/80 max-w-full sm:w-fit shadow-subtle">
                <div
                  className="relative shrink-0 rounded-full overflow-hidden shadow-sm bg-white"
                  style={{ width: "3.2cm", height: "3.2cm", minWidth: "3cm", minHeight: "3cm" }}
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
                    <span>COVENANT CONSTRUCTION & PAINTING</span>
                  </div>
                  <div className="font-serif text-base sm:text-lg font-bold text-covenant-navy leading-tight">
                    Built With Purpose • Finished With Excellence
                  </div>
                  <p className="text-xs text-covenant-muted font-medium">
                    Licensed & Insured Residential Craftsmanship
                  </p>
                </div>
              </div>

              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.22em] text-covenant-gold-dark uppercase">
                <span className="w-6 h-px bg-covenant-gold" />
                <span>CONSTRUCTION • REMODELING • PAINTING</span>
              </div>

              {/* Stately H1 */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-covenant-navy leading-[1.08]">
                Built With Purpose. <br />
                <span className="text-covenant-navy">Finished With Excellence.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg lg:text-xl text-covenant-muted font-light leading-relaxed max-w-xl">
                {COMPANY_INFO.subheadline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 bg-covenant-navy hover:bg-covenant-navy-light text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-md shadow-card hover:shadow-elevated transition-all duration-200 border border-covenant-gold/40 hover:border-covenant-gold"
                >
                  <span>GET AN ESTIMATE</span>
                  <ArrowRight className="w-4 h-4 text-covenant-gold" />
                </Link>

                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 bg-covenant-offwhite hover:bg-covenant-border/50 text-covenant-navy font-bold text-xs uppercase tracking-widest px-7 py-4 rounded-md border border-covenant-border hover:border-covenant-gold/50 transition-all duration-200 shadow-subtle"
                >
                  <Phone className="w-4 h-4 text-covenant-gold" />
                  <span>CALL {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>

              {/* Trust Indicators in Sophisticated Horizontal Strip */}
              <div className="pt-6">
                <TrustBadges theme="light" />
              </div>
            </div>

            {/* Right Hero Image (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-elevated border border-covenant-border/80 bg-covenant-navy/5">
                <Image
                  src={SITE_ASSETS.heroMain.url}
                  alt={SITE_ASSETS.heroMain.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-covenant-navy/40 via-transparent to-transparent pointer-events-none" />

                {/* Subtle Floating Editorial Pill */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-card border border-covenant-border/80">
                  <div className="text-[10px] font-bold tracking-widest uppercase text-covenant-gold-dark">
                    High-End Residential Expertise
                  </div>
                  <div className="font-serif text-sm font-semibold text-covenant-navy mt-0.5">
                    Thoughtful Layouts & Master Finishes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 02 — INTRO / VALUE                           */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-covenant-offwhite border-b border-covenant-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Detail Photo (5 cols) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[4/3] sm:aspect-[5/4] rounded-2xl overflow-hidden shadow-card border border-covenant-border bg-white">
                <Image
                  src={SITE_ASSETS.heroAbout.url}
                  alt="Craftsmanship detail in home remodeling"
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
                <span>THE COVENANT STANDARD</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-covenant-navy leading-[1.15]">
                More Than Renovation. <br />
                A Commitment to Quality.
              </h2>

              <p className="text-base sm:text-lg text-covenant-muted leading-relaxed font-light">
                At Covenant Construction & Painting, every project is approached with care, craftsmanship, and attention to detail. From kitchens and bathrooms to painting and home improvements, our goal is to create spaces that feel better, work better, and last.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2.5 text-xs font-bold tracking-widest uppercase text-covenant-navy hover:text-covenant-gold-dark transition-colors py-2 group cursor-pointer"
                >
                  <span className="border-b-2 border-covenant-gold pb-0.5">ABOUT COVENANT</span>
                  <ArrowRight className="w-4 h-4 text-covenant-gold transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 03 — SERVICES                                */}
      {/* ---------------------------------------------------- */}
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
                    01
                  </span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-covenant-muted bg-white px-3 py-1 rounded-full border border-covenant-border">
                    Renovation
                  </span>
                </div>

                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-covenant-navy/5 border border-covenant-border/70">
                  <Image
                    src={SITE_ASSETS.kitchenHero.url}
                    alt="Kitchen Remodeling"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="font-serif text-2xl font-bold text-covenant-navy group-hover:text-covenant-gold-dark transition-colors">
                  KITCHEN REMODELING
                </h3>

                <p className="text-sm text-covenant-muted leading-relaxed font-light">
                  Transform outdated kitchens into functional, beautiful spaces designed around the way you live. Custom cabinets, stone surfaces, and optimized layouts.
                </p>
              </div>

              <div className="pt-8 border-t border-covenant-border/60 mt-6">
                <Link
                  href="/services/kitchen-remodeling"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-covenant-navy group-hover:text-covenant-gold-dark transition-colors cursor-pointer"
                >
                  <span>VIEW SERVICE</span>
                  <ArrowRight className="w-3.5 h-3.5 text-covenant-gold transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Block 02: Bathroom */}
            <div className="bg-covenant-offwhite rounded-2xl p-8 sm:p-10 border border-covenant-border/80 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-4xl font-bold text-covenant-gold-dark">
                    02
                  </span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-covenant-muted bg-white px-3 py-1 rounded-full border border-covenant-border">
                    Specialty
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
                  BATHROOM REMODELING
                </h3>

                <p className="text-sm text-covenant-muted leading-relaxed font-light">
                  Upgrade comfort, functionality, and finish with thoughtful bathroom renovations. Spa suites, curbless walk-in showers, and precision tile craftsmanship.
                </p>
              </div>

              <div className="pt-8 border-t border-covenant-border/60 mt-6">
                <Link
                  href="/services/bathroom-remodeling"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-covenant-navy group-hover:text-covenant-gold-dark transition-colors cursor-pointer"
                >
                  <span>VIEW SERVICE</span>
                  <ArrowRight className="w-3.5 h-3.5 text-covenant-gold transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Block 03: Painting */}
            <div className="bg-covenant-offwhite rounded-2xl p-8 sm:p-10 border border-covenant-border/80 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-4xl font-bold text-covenant-gold-dark">
                    03
                  </span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-covenant-muted bg-white px-3 py-1 rounded-full border border-covenant-border">
                    Finishing
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
                  PAINTING
                </h3>

                <p className="text-sm text-covenant-muted leading-relaxed font-light">
                  Professional painting and finishing that give your home a clean, polished, and renewed appearance. Rigorous surface prep and crisp cut-lines.
                </p>
              </div>

              <div className="pt-8 border-t border-covenant-border/60 mt-6">
                <Link
                  href="/services/painting"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-covenant-navy group-hover:text-covenant-gold-dark transition-colors cursor-pointer"
                >
                  <span>VIEW SERVICE</span>
                  <ArrowRight className="w-3.5 h-3.5 text-covenant-gold transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* 04 Home Improvements Generic Banner */}
          <div className="bg-covenant-navy text-white rounded-2xl p-8 sm:p-10 shadow-elevated border border-covenant-navy-light/70 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-left">
              <span className="text-xs font-bold tracking-widest text-covenant-gold uppercase">
                04 • GENERAL CONSTRUCTION
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Home Improvements & Custom Carpentry
              </h4>
              <p className="text-sm text-gray-300 max-w-2xl font-light">
                Architectural trim, interior door upgrades, built-ins, and structural improvements delivered with the same commitment to precision.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-covenant-gold hover:bg-covenant-gold-light text-covenant-navy font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-md shrink-0 shadow transition-colors"
            >
              <span>EXPLORE ALL SCOPES</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 04 — FEATURE PROJECT                         */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-white border-b border-covenant-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Broad Photography 60% (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-elevated border border-covenant-border bg-covenant-navy/5">
                <Image
                  src={SITE_ASSETS.featureProject.url}
                  alt={SITE_ASSETS.featureProject.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Editorial Text 40% (5 cols) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] text-covenant-gold-dark uppercase">
                <span className="w-5 h-px bg-covenant-gold" />
                <span>FEATURED PROJECT</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-covenant-navy leading-tight">
                Built Around Your Home. <br />
                Designed Around Your Life.
              </h2>

              <p className="text-base text-covenant-muted leading-relaxed font-light">
                A home transformation isn't just about replacing surfaces—it's about creating cohesive harmony between living spaces. From initial teardown through final trim painting, we protect your living environment and execute every phase with clean, conscientious methodology.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs font-semibold text-covenant-navy">
                  <CheckCircle2 className="w-4 h-4 text-covenant-gold shrink-0" />
                  <span>Custom architectural framing and millwork integration</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold text-covenant-navy">
                  <CheckCircle2 className="w-4 h-4 text-covenant-gold shrink-0" />
                  <span>Durable moisture-sealed surfaces in wet zones</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold text-covenant-navy">
                  <CheckCircle2 className="w-4 h-4 text-covenant-gold shrink-0" />
                  <span>Even, dust-free paint finishes across all planes</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2.5 bg-covenant-navy hover:bg-covenant-navy-light text-white font-bold text-xs uppercase tracking-widest px-7 py-4 rounded-md shadow-card transition-colors border border-covenant-gold/40"
                >
                  <span>EXPLORE OUR PROJECTS</span>
                  <ArrowRight className="w-4 h-4 text-covenant-gold" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 05 — BEFORE & AFTER (BATHROOM)               */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-covenant-offwhite border-b border-covenant-border/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
          <SectionHeader
            eyebrow="SEE THE DIFFERENCE"
            title="Real Spaces. Real Transformations."
            subtitle="Explore how meticulous renovation elevates tired spaces into breathtaking rooms that offer daily comfort and enduring luxury."
          />

          {/* Interactive Slider Component */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-covenant-border shadow-card">
            <BeforeAfterSlider
              beforeImage={SITE_ASSETS.bathroomBefore.url}
              afterImage={SITE_ASSETS.bathroomAfter.url}
              beforeAlt="Bathroom before renovation"
              afterAlt="Bathroom after complete renovation"
              title="Master Bathroom Renovation Case"
              category="BATHROOM TRANSFORMATION"
              aspectRatio="16/9"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/before-after"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-covenant-navy hover:text-covenant-gold-dark transition-colors py-2"
            >
              <span className="border-b-2 border-covenant-gold pb-0.5">VIEW MORE BEFORE & AFTER CASES</span>
              <ArrowRight className="w-3.5 h-3.5 text-covenant-gold" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 06 — STAIRCASE TRANSFORMATION                */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-white border-b border-covenant-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text 40% */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] text-covenant-gold-dark uppercase">
                <span className="w-5 h-px bg-covenant-gold" />
                <span>REAL PROJECT SHOWCASE</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-covenant-navy leading-tight">
                Staircase Transformation
              </h2>

              <p className="text-base text-covenant-muted leading-relaxed font-light">
                A refreshed finish can completely change the character of a home's interior or exterior architectural entry. Proper prep, sanding, and high-adhesion coating breathe new life into high-traffic structural focal points.
              </p>

              <div className="pt-2">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2.5 bg-covenant-navy hover:bg-covenant-navy-light text-white font-bold text-xs uppercase tracking-widest px-7 py-3.5 rounded-md shadow-sm transition-colors border border-covenant-gold/40"
                >
                  <span>VIEW MORE PROJECTS</span>
                  <ArrowRight className="w-3.5 h-3.5 text-covenant-gold" />
                </Link>
              </div>
            </div>

            {/* Slider 60% */}
            <div className="lg:col-span-7">
              <div className="bg-covenant-offwhite p-3 sm:p-5 rounded-2xl border border-covenant-border shadow-card">
                <BeforeAfterSlider
                  beforeImage={SITE_ASSETS.staircaseBefore.url}
                  afterImage={SITE_ASSETS.staircaseAfter.url}
                  beforeAlt="Staircase before refinishing"
                  afterAlt="Staircase after refinishing"
                  title="Entryway Architectural Finish"
                  category="BEFORE & AFTER"
                  aspectRatio="16/9"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 07 — PROCESS                                 */}
      {/* ---------------------------------------------------- */}
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

      {/* ---------------------------------------------------- */}
      {/* SECTION 08 — WHY CHOOSE US (NAVY SECTION)            */}
      {/* ---------------------------------------------------- */}
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
                Built on Faith
              </h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                Operating with transparent honesty, fair agreements, and principled respect for your property and family.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm space-y-4 hover:border-covenant-gold/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-covenant-gold/15 flex items-center justify-center text-covenant-gold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Quality-Focused Craftsmanship
              </h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                We refuse to cut corners on waterproofing, structural framing, or primer coats that guarantee long-lasting durability.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm space-y-4 hover:border-covenant-gold/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-covenant-gold/15 flex items-center justify-center text-covenant-gold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Attention to Detail
              </h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                Clean tile seams, precise miters, smooth wall planes, and thorough daily cleanup to minimize disruption.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm space-y-4 hover:border-covenant-gold/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-covenant-gold/15 flex items-center justify-center text-covenant-gold">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Clear Communication
              </h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                No surprises. You will always know what phase is happening, what to expect next, and who is in your home.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm space-y-4 hover:border-covenant-gold/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-covenant-gold/15 flex items-center justify-center text-covenant-gold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Commitment to Excellence
              </h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                We only consider a project complete when you are fully satisfied with every finish during our final walkthrough.
              </p>
            </div>

            {/* Feature 6 / Direct Call Card */}
            <div className="bg-covenant-navy-light/70 border border-covenant-gold/40 p-8 rounded-xl flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-widest text-covenant-gold uppercase">
                  READY TO DISCUSS?
                </span>
                <h3 className="font-serif text-xl font-bold text-white">
                  Speak With Our Team
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  Have questions about your timeline or budget? We are happy to talk through your ideas.
                </p>
              </div>

              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-covenant-gold hover:bg-covenant-gold-light text-covenant-navy font-bold text-xs uppercase tracking-wider py-3 px-4 rounded shadow transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 09 — GALLERY                                 */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-white border-b border-covenant-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeader
            eyebrow="PORTFOLIO"
            title="Selected Work"
            subtitle="A curated glimpse into our recent residential kitchen, bathroom, painting, and architectural improvements."
          />

          <ProjectGallery limit={6} showFilters={false} showViewAllButton={true} />
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 10 — FINAL CTA                               */}
      {/* ---------------------------------------------------- */}
      <FinalCTA />
    </div>
  );
}
