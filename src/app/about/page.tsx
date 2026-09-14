import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { HeartHandshake, ShieldCheck, Award, CheckCircle2, Phone } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { FinalCTA } from "@/components/FinalCTA";
import { SITE_ASSETS, COMPANY_INFO } from "@/data/assets";

export const metadata: Metadata = {
  title: "About Us | Covenant Construction & Painting",
  description:
    "Learn about Covenant Construction & Painting's dedication to faith, craftsmanship, and uncompromised quality across every residential remodeling project.",
};

export default function AboutPage() {
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
              <span>ABOUT COVENANT</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-covenant-navy leading-[1.1]">
              Built on Faith. <br />
              Driven by Quality.
            </h1>

            <p className="text-lg sm:text-xl text-covenant-muted font-light leading-relaxed">
              At Covenant Construction & Painting, we believe a house is more than walls and finishes—it is a sanctuary for families. We approach every remodeling and painting endeavor with purposeful dedication, honesty, and master craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* STORY & CRAFTSMANSHIP COMPOSITION                    */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-white border-b border-covenant-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-[3/2] w-full rounded-2xl overflow-hidden shadow-elevated border border-covenant-border bg-covenant-navy/5">
                <Image
                  src={SITE_ASSETS.heroAbout.url}
                  alt="Craftsmanship and care in residential construction"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Architectural Promise Card */}
              <div className="bg-covenant-navy text-white p-5 sm:p-6 rounded-xl shadow-card border border-covenant-gold/30 text-left">
                <div className="text-xs font-bold tracking-widest text-covenant-gold uppercase mb-1">
                  Our Promise
                </div>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  Treating every home with the same consideration and detail we would expect for our own.
                </p>
              </div>
            </div>

            {/* Narrative (6 cols) */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] text-covenant-gold-dark uppercase">
                <span className="w-5 h-px bg-covenant-gold" />
                <span>OUR PHILOSOPHY</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-covenant-navy leading-tight">
                More Than Just Building. <br />
                A Covenant with Homeowners.
              </h2>

              <p className="text-base text-covenant-muted leading-relaxed font-light">
                When you invite a construction and painting team into your private residence, trust is the single most crucial element. Covenant Construction & Painting was built to provide homeowners with an elevated, respectful experience where craftsmanship and open communication are never compromised.
              </p>

              <p className="text-base text-covenant-muted leading-relaxed font-light">
                Whether reconfiguring a gourmet kitchen, upgrading a master bathroom into a peaceful retreat, or delivering flawless painting coats across an entire residence, our dedication to precision ensures spaces that look stunning today and endure for decades.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 bg-covenant-navy hover:bg-covenant-navy-light text-white font-bold text-xs uppercase tracking-widest px-7 py-4 rounded-md shadow-sm transition-colors border border-covenant-gold/40"
                >
                  <Phone className="w-4 h-4 text-covenant-gold" />
                  <span>Call {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* OUR VALUES — THE 3 PILLARS                           */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-covenant-navy text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeader
            theme="dark"
            eyebrow="OUR FOUNDATION"
            title="Our Three Guiding Pillars"
            subtitle="These core principles dictate every handshake, every cut of lumber, and every brush of paint."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white/5 border border-white/10 p-8 sm:p-10 rounded-2xl backdrop-blur-sm space-y-6 hover:border-covenant-gold/50 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-covenant-gold/15 flex items-center justify-center text-covenant-gold">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <div className="text-xs font-bold tracking-widest text-covenant-gold uppercase">
                  Pillar One
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Built on Faith
                </h3>
              </div>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                Faith provides the compass for how we do business. It means honest evaluations, clear pricing without hidden surprises, and working with moral integrity even when no one is watching.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white/5 border border-white/10 p-8 sm:p-10 rounded-2xl backdrop-blur-sm space-y-6 hover:border-covenant-gold/50 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-covenant-gold/15 flex items-center justify-center text-covenant-gold">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <div className="text-xs font-bold tracking-widest text-covenant-gold uppercase">
                  Pillar Two
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Focused on Quality
                </h3>
              </div>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                True quality is hidden beneath the surface: in the precision of the substructure framing, the rigorous multi-step waterproofing membranes, and the proper primer coats that prevent peeling.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white/5 border border-white/10 p-8 sm:p-10 rounded-2xl backdrop-blur-sm space-y-6 hover:border-covenant-gold/50 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-covenant-gold/15 flex items-center justify-center text-covenant-gold">
                <Award className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <div className="text-xs font-bold tracking-widest text-covenant-gold uppercase">
                  Pillar Three
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Committed to Excellence
                </h3>
              </div>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                We take immense pride in the craft. From arriving on time and protecting your flooring to the final inspection where we review every line together, excellence is our standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* OUR APPROACH & CRAFTSMANSHIP PHOTO                   */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-white border-b border-covenant-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeader
            eyebrow="OUR APPROACH"
            title="The Art of Clean, Disciplined Work."
            subtitle="We treat your home with the care, cleanliness, and protection it deserves at every hour."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Steps & Disciplines (6 cols) */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-xl bg-covenant-offwhite border border-covenant-border/80">
                  <CheckCircle2 className="w-5 h-5 text-covenant-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-covenant-navy">
                      Thorough Surface Protection
                    </h4>
                    <p className="text-xs text-covenant-muted leading-relaxed font-light mt-1">
                      Before work begins, floors, adjoining rooms, and furniture are covered with protective ram-board and plastic barriers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-covenant-offwhite border border-covenant-border/80">
                  <CheckCircle2 className="w-5 h-5 text-covenant-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-covenant-navy">
                      Daily Cleanliness & Order
                    </h4>
                    <p className="text-xs text-covenant-muted leading-relaxed font-light mt-1">
                      Our workspace is swept, vacuumed, and organized daily. We respect your daily routine and minimize dust and disruptions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-covenant-offwhite border border-covenant-border/80">
                  <CheckCircle2 className="w-5 h-5 text-covenant-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-covenant-navy">
                      Direct Principal Accountability
                    </h4>
                    <p className="text-xs text-covenant-muted leading-relaxed font-light mt-1">
                      You are always in direct communication with the craftsmen responsible for your space. Questions are answered promptly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team / Craftsmanship Realistic Placeholder Image (6 cols) */}
            <div className="lg:col-span-6">
              {/* Clearly marked placeholder in code for future team photo replacement */}
              <div
                data-asset-slot="about-team-photo"
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card border border-covenant-border bg-covenant-navy/5"
              >
                <Image
                  src={SITE_ASSETS.aboutCraftsmanship.url}
                  alt={SITE_ASSETS.aboutCraftsmanship.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-lg border border-covenant-border/80 text-left">
                  <div className="text-[10px] font-bold tracking-widest uppercase text-covenant-gold-dark">
                    Craftsmanship in Action
                  </div>
                  <div className="text-xs text-covenant-muted">
                    Dedicated attention to every cut, joint, and surface coating.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
