import { ContentAnchor, ContentText } from "@/components/cms/Content";
import React from "react";
import { ContentLink as Link } from "@/components/cms/Content";
import {
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  HeartHandshake,
  Award,
} from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { COMPANY_INFO } from "@/data/assets";

export function Footer() {
  return (
    <footer className="bg-covenant-navy text-white pt-16 pb-28 sm:pb-14 border-t border-covenant-navy-light/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Brand Statement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <BrandLogo variant="dark" size="3cm" />
            <p className="text-sm text-gray-300 max-w-md font-light leading-relaxed">
              <ContentText id="components-Footer-text-1">
                {
                  "Quality craftsmanship for remodeling, construction, and painting projects. Designed around your home and built to endure with unwavering care and precision."
                }
              </ContentText>
            </p>

            {/* Core Values Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-covenant-gold-light tracking-wide uppercase font-semibold">
              <span className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-covenant-gold" />
                <ContentText id="components-Footer-text-2">
                  {"Built On Faith"}
                </ContentText>
              </span>
              <span className="text-gray-500">
                <ContentText id="components-Footer-text-3">{"•"}</ContentText>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-covenant-gold" />
                <ContentText id="components-Footer-text-4">
                  {"Focused On Quality"}
                </ContentText>
              </span>
              <span className="text-gray-500">
                <ContentText id="components-Footer-text-5">{"•"}</ContentText>
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-covenant-gold" />
                <ContentText id="components-Footer-text-6">
                  {"Committed To Excellence"}
                </ContentText>
              </span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-bold tracking-widest text-covenant-gold uppercase">
              <ContentText id="components-Footer-text-7">
                {"Navigation"}
              </ContentText>
            </div>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link
                  cmsId="components-Footer-link-1"
                  href="/"
                  className="hover:text-white transition-colors"
                >
                  <ContentText id="components-Footer-text-8">
                    {"Home"}
                  </ContentText>
                </Link>
              </li>
              <li>
                <Link
                  cmsId="components-Footer-link-2"
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  <ContentText id="components-Footer-text-9">
                    {"About Us"}
                  </ContentText>
                </Link>
              </li>
              <li>
                <Link
                  cmsId="components-Footer-link-3"
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  <ContentText id="components-Footer-text-10">
                    {"Services"}
                  </ContentText>
                </Link>
              </li>
              <li>
                <Link
                  cmsId="components-Footer-link-4"
                  href="/projects"
                  className="hover:text-white transition-colors"
                >
                  <ContentText id="components-Footer-text-11">
                    {"Projects & Gallery"}
                  </ContentText>
                </Link>
              </li>
              <li>
                <Link
                  cmsId="components-Footer-link-5"
                  href="/before-after"
                  className="hover:text-white transition-colors"
                >
                  <ContentText id="components-Footer-text-12">
                    {"Before & After"}
                  </ContentText>
                </Link>
              </li>
              <li>
                <Link
                  cmsId="components-Footer-link-6"
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  <ContentText id="components-Footer-text-13">
                    {"Contact"}
                  </ContentText>
                </Link>
              </li>
            </ul>
          </div>

          {/* Confirmed Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-bold tracking-widest text-covenant-gold uppercase">
              <ContentText id="components-Footer-text-14">
                {"Specialties"}
              </ContentText>
            </div>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link
                  cmsId="components-Footer-link-7"
                  href="/services/kitchen-remodeling"
                  className="hover:text-white transition-colors"
                >
                  <ContentText id="components-Footer-text-15">
                    {"Kitchen Remodeling"}
                  </ContentText>
                </Link>
              </li>
              <li>
                <Link
                  cmsId="components-Footer-link-8"
                  href="/services/bathroom-remodeling"
                  className="hover:text-white transition-colors"
                >
                  <ContentText id="components-Footer-text-16">
                    {"Bathroom Remodeling"}
                  </ContentText>
                </Link>
              </li>
              <li>
                <Link
                  cmsId="components-Footer-link-9"
                  href="/services/painting"
                  className="hover:text-white transition-colors"
                >
                  <ContentText id="components-Footer-text-17">
                    {"Professional Painting"}
                  </ContentText>
                </Link>
              </li>
              <li>
                <Link
                  cmsId="components-Footer-link-10"
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  <ContentText id="components-Footer-text-18">
                    {"Home Improvements"}
                  </ContentText>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-bold tracking-widest text-covenant-gold uppercase">
              <ContentText id="components-Footer-text-19">
                {"Direct Contact"}
              </ContentText>
            </div>
            <p className="text-xs text-gray-400">
              <ContentText id="components-Footer-text-20">
                {
                  "Speak directly with our team to discuss your remodeling or painting goals."
                }
              </ContentText>
            </p>

            <div className="space-y-3 pt-1">
              <ContentAnchor
                cmsId="components-Footer-link-11"
                href={COMPANY_INFO.phoneHref}
                className="flex items-center gap-3 text-white hover:text-covenant-gold-light transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-covenant-gold/20 transition-colors">
                  <Phone className="w-4 h-4 text-covenant-gold" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">
                    <ContentText id="components-Footer-text-21">
                      {"Direct Call"}
                    </ContentText>
                  </div>
                  <div className="text-sm font-semibold tracking-tight">
                    <ContentText id="components-Footer-text-22">
                      {COMPANY_INFO.phoneDisplay}
                    </ContentText>
                  </div>
                </div>
              </ContentAnchor>

              <ContentAnchor
                cmsId="components-Footer-link-12"
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3 text-white hover:text-covenant-gold-light transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-covenant-gold/20 transition-colors">
                  <Mail className="w-4 h-4 text-covenant-gold" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">
                    <ContentText id="components-Footer-text-23">
                      {"Email Us"}
                    </ContentText>
                  </div>
                  <div className="text-sm font-medium tracking-tight truncate max-w-[200px]">
                    <ContentText id="components-Footer-text-24">
                      {COMPANY_INFO.email}
                    </ContentText>
                  </div>
                </div>
              </ContentAnchor>
            </div>

            {/* Areas We Serve Note (Structured & Neutral) */}
            <div className="pt-2 border-t border-white/10">
              <div className="text-[11px] font-semibold text-covenant-gold-light uppercase tracking-wider mb-1">
                <ContentText id="components-Footer-text-25">
                  {"Areas We Serve"}
                </ContentText>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                <ContentText id="components-Footer-text-26">
                  {
                    "Serving residential properties across our regional coverage area. Call us to verify project scheduling in your neighborhood."
                  }
                </ContentText>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, CAMALY credit & Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 text-center md:text-left">
          <div>
            <ContentText id="components-Footer-text-27">{"© "}</ContentText>
            <ContentText id="src-components-Footer-tsx-dynamic-1">
              {new Date().getFullYear()}
            </ContentText>{" "}
            <ContentText id="components-Footer-text-28">
              {COMPANY_INFO.name}
            </ContentText>
            <ContentText id="components-Footer-text-29">
              {". All rights reserved."}
            </ContentText>
          </div>

          {/* Produzida com💚por CAMALY */}
          <div className="flex items-center justify-center">
            <ContentAnchor
              cmsId="components-Footer-link-13"
              href="https://camaly.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-gray-400 hover:text-covenant-gold transition-colors font-medium group"
            >
              <span>
                <ContentText id="components-Footer-text-30">
                  {"Produzida com💚por "}
                </ContentText>
                <strong className="font-bold text-gray-200 group-hover:text-covenant-gold transition-colors">
                  <ContentText id="components-Footer-text-31">
                    {"CAMALY"}
                  </ContentText>
                </strong>
              </span>
            </ContentAnchor>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span className="text-gray-500 hidden sm:inline">
              <ContentText id="components-Footer-text-32">
                {"Residential Construction • Remodeling • Painting"}
              </ContentText>
            </span>
            <Link
              cmsId="components-Footer-link-14"
              href="/contact"
              className="text-covenant-gold hover:underline inline-flex items-center gap-1 font-semibold"
            >
              <span>
                <ContentText id="components-Footer-text-33">
                  {"Get An Estimate"}
                </ContentText>
              </span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
