import React from "react";
import Image from "next/image";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/assets";

interface FinalCTAProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function FinalCTA({
  title = "Ready to Transform Your Home?",
  subtitle = "Let's talk about your next remodeling or painting project.",
  className = "",
}: FinalCTAProps) {
  return (
    <section className={`relative py-24 sm:py-32 overflow-hidden bg-covenant-navy text-white ${className}`}>
      {/* Background Architectural Photo with Navy Overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Home interior transformation"
          fill
          className="object-cover object-center opacity-25 filter brightness-75 contrast-125"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-covenant-navy via-covenant-navy/90 to-covenant-navy/80" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        {/* Small Gold Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.24em] text-covenant-gold-light uppercase">
          <span className="w-6 h-px bg-covenant-gold" />
          <span>START YOUR CONVERSATION</span>
          <span className="w-6 h-px bg-covenant-gold" />
        </div>

        {/* Big Stately Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          {title}
        </h2>

        <p className="text-base sm:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* Two CTAs: Primary Phone & Secondary Email */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={COMPANY_INFO.phoneHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-covenant-gold hover:bg-covenant-gold-light text-covenant-navy font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-md shadow-gold hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-[0.98]"
          >
            <Phone className="w-4 h-4 text-covenant-navy fill-current" />
            <span>CALL {COMPANY_INFO.phoneDisplay}</span>
          </a>

          <a
            href={`mailto:${COMPANY_INFO.email}?subject=Project%20Inquiry%20-%20Covenant%20Construction%20%26%20Painting`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-medium text-sm uppercase tracking-wider px-7 py-4 rounded-md border border-white/20 hover:border-white/40 backdrop-blur-sm transition-all duration-200 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-covenant-gold-light" />
            <span>SEND AN EMAIL</span>
            <ArrowRight className="w-3.5 h-3.5 text-gray-300" />
          </a>
        </div>

        {/* Small reassurance note */}
        <p className="text-xs text-gray-400 pt-2 font-light">
          No obligation consultation. We answer directly and respect your time.
        </p>
      </div>
    </section>
  );
}
