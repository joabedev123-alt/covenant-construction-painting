import React from "react";
import Link from "next/link";
import { Phone, Mail, ArrowUpRight, ShieldCheck, HeartHandshake, Award } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { COMPANY_INFO } from "@/data/assets";

export function Footer() {
  return (
    <footer className="bg-covenant-navy text-white pt-16 pb-12 border-t border-covenant-navy-light/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Brand Statement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <BrandLogo variant="dark" size="lg" />
            <p className="text-sm text-gray-300 max-w-md font-light leading-relaxed">
              Quality craftsmanship for remodeling, construction, and painting projects. Designed around your home and built to endure with unwavering care and precision.
            </p>

            {/* Core Values Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-covenant-gold-light tracking-wide uppercase font-semibold">
              <span className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-covenant-gold" />
                Built On Faith
              </span>
              <span className="text-gray-500">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-covenant-gold" />
                Focused On Quality
              </span>
              <span className="text-gray-500">•</span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-covenant-gold" />
                Committed To Excellence
              </span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-bold tracking-widest text-covenant-gold uppercase">
              Navigation
            </div>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Projects & Gallery
                </Link>
              </li>
              <li>
                <Link href="/before-after" className="hover:text-white transition-colors">
                  Before & After
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Confirmed Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-bold tracking-widest text-covenant-gold uppercase">
              Specialties
            </div>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/services/kitchen-remodeling" className="hover:text-white transition-colors">
                  Kitchen Remodeling
                </Link>
              </li>
              <li>
                <Link href="/services/bathroom-remodeling" className="hover:text-white transition-colors">
                  Bathroom Remodeling
                </Link>
              </li>
              <li>
                <Link href="/services/painting" className="hover:text-white transition-colors">
                  Professional Painting
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Home Improvements
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-bold tracking-widest text-covenant-gold uppercase">
              Direct Contact
            </div>
            <p className="text-xs text-gray-400">
              Speak directly with our team to discuss your remodeling or painting goals.
            </p>

            <div className="space-y-3 pt-1">
              <a
                href={COMPANY_INFO.phoneHref}
                className="flex items-center gap-3 text-white hover:text-covenant-gold-light transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-covenant-gold/20 transition-colors">
                  <Phone className="w-4 h-4 text-covenant-gold" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">Direct Call</div>
                  <div className="text-sm font-semibold tracking-tight">{COMPANY_INFO.phoneDisplay}</div>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3 text-white hover:text-covenant-gold-light transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-covenant-gold/20 transition-colors">
                  <Mail className="w-4 h-4 text-covenant-gold" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">Email Us</div>
                  <div className="text-sm font-medium tracking-tight truncate max-w-[200px]">
                    {COMPANY_INFO.email}
                  </div>
                </div>
              </a>
            </div>

            {/* Areas We Serve Note (Structured & Neutral) */}
            <div className="pt-2 border-t border-white/10">
              <div className="text-[11px] font-semibold text-covenant-gold-light uppercase tracking-wider mb-1">
                Areas We Serve
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Serving residential properties across our regional coverage area. Call us to verify project scheduling in your neighborhood.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Subtle Architectural Accent */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-gray-500">Residential Construction • Remodeling • Painting</span>
            <Link href="/contact" className="text-covenant-gold hover:underline inline-flex items-center gap-1">
              <span>Get An Estimate</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
