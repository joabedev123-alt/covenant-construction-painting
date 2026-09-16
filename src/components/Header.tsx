"use client";

import { ContentAnchor, ContentText } from "@/components/cms/Content";
import React, { useState, useEffect } from "react";
import { ContentLink as Link } from "@/components/cms/Content";
import { usePathname } from "next/navigation";
import {
  Phone,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { COMPANY_INFO } from "@/data/assets";

interface HeaderProps {
  onOpenEstimate?: () => void;
}

export function Header({ onOpenEstimate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      subItems: [
        {
          name: "Kitchen Remodeling",
          href: "/services/kitchen-remodeling",
          desc: "Custom cabinets, islands & layout reimagining",
        },
        {
          name: "Bathroom Remodeling",
          href: "/services/bathroom-remodeling",
          desc: "Spa suites, walk-in showers & fine tilework",
        },
        {
          name: "Professional Painting",
          href: "/services/painting",
          desc: "Precision interior & weather-proof exterior",
        },
        {
          name: "All Services Overview",
          href: "/services",
          desc: "Explore our complete residential scope",
        },
      ],
    },
    { name: "Projects", href: "/projects" },
    { name: "Before & After", href: "/before-after" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-subtle border-b border-covenant-border/70 py-3.5"
          : "bg-white/90 backdrop-blur-sm border-b border-covenant-border/40 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-6">
          {/* Logo */}
          <div className="shrink-0">
            <BrandLogo size={scrolled ? "sm" : "md"} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.hasDropdown && pathname.startsWith(link.href));

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      cmsId="components-Header-link-1"
                      href={link.href}
                      className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 cursor-pointer py-2 ${
                        isActive
                          ? "text-covenant-navy font-semibold"
                          : "text-covenant-muted hover:text-covenant-navy"
                      }`}
                    >
                      <span>
                        <ContentText id="components-Header-text-1">
                          {link.name}
                        </ContentText>
                      </span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen
                            ? "rotate-180 text-covenant-gold"
                            : "text-covenant-muted"
                        }`}
                      />
                    </Link>

                    {/* Services Dropdown Panel */}
                    <div
                      className={`absolute top-full -left-4 w-72 bg-white rounded-xl shadow-elevated border border-covenant-border p-2 transition-all duration-200 transform origin-top-left ${
                        servicesDropdownOpen
                          ? "opacity-100 scale-100 pointer-events-auto visible"
                          : "opacity-0 scale-95 pointer-events-none invisible"
                      }`}
                    >
                      <div className="text-[10px] font-bold tracking-widest text-covenant-gold-dark uppercase px-3 py-1.5">
                        <ContentText id="components-Header-text-2">
                          {"Our Craftsmanship"}
                        </ContentText>
                      </div>

                      {link.subItems.map((sub) => (
                        <Link
                          cmsId="components-Header-link-2"
                          key={sub.name}
                          href={sub.href}
                          className="block px-3 py-2.5 rounded-lg transition-colors hover:bg-covenant-offwhite group cursor-pointer"
                        >
                          <div className="text-sm font-medium text-covenant-charcoal group-hover:text-covenant-navy flex items-center justify-between">
                            <span>
                              <ContentText id="components-Header-text-3">
                                {sub.name}
                              </ContentText>
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-covenant-gold transition-all duration-200" />
                          </div>
                          <p className="text-xs text-covenant-muted line-clamp-1 mt-0.5">
                            <ContentText id="components-Header-text-4">
                              {sub.desc}
                            </ContentText>
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  cmsId="components-Header-link-3"
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 cursor-pointer relative py-1 ${
                    isActive
                      ? "text-covenant-navy font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-covenant-gold"
                      : "text-covenant-muted hover:text-covenant-navy hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-covenant-gold/60"
                  }`}
                >
                  <ContentText id="components-Header-text-5">
                    {link.name}
                  </ContentText>
                </Link>
              );
            })}
          </nav>

          {/* Right Direct Conversion: Phone & CTA Button */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <ContentAnchor
              cmsId="components-Header-link-4"
              href={COMPANY_INFO.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-covenant-navy hover:text-covenant-gold-dark transition-colors duration-200 cursor-pointer group"
              title="Call Covenant Construction & Painting"
            >
              <div className="w-8 h-8 rounded-full bg-covenant-navy/5 flex items-center justify-center group-hover:bg-covenant-gold/15 transition-colors duration-200">
                <Phone className="w-4 h-4 text-covenant-gold" />
              </div>
              <span className="tracking-tight">
                <ContentText id="components-Header-text-6">
                  {COMPANY_INFO.phoneDisplay}
                </ContentText>
              </span>
            </ContentAnchor>

            <ContentText id="src-components-Header-tsx-dynamic-3">
              {onOpenEstimate ? (
                <button
                  type="button"
                  onClick={onOpenEstimate}
                  className="inline-flex items-center gap-2 bg-covenant-navy hover:bg-covenant-navy-light text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-md shadow-sm hover:shadow transition-all duration-200 cursor-pointer border border-covenant-gold/40 hover:border-covenant-gold"
                >
                  <span>
                    <ContentText id="components-Header-text-7">
                      {"Get An Estimate"}
                    </ContentText>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-covenant-gold" />
                </button>
              ) : (
                <Link
                  cmsId="components-Header-link-5"
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-covenant-navy hover:bg-covenant-navy-light text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-md shadow-sm hover:shadow transition-all duration-200 cursor-pointer border border-covenant-gold/40 hover:border-covenant-gold"
                >
                  <span>
                    <ContentText id="components-Header-text-8">
                      {"Get An Estimate"}
                    </ContentText>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-covenant-gold" />
                </Link>
              )}
            </ContentText>
          </div>

          {/* Mobile Actions: Call Icon & Hamburger */}
          <div className="flex items-center gap-2 sm:hidden">
            <ContentAnchor
              cmsId="components-Header-link-6"
              href={COMPANY_INFO.phoneHref}
              className="w-10 h-10 rounded-full bg-covenant-navy text-white flex items-center justify-center cursor-pointer shadow-sm active:scale-95 transition-transform border border-covenant-gold/40"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4 text-covenant-gold" />
            </ContentAnchor>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-lg border border-covenant-border flex items-center justify-center text-covenant-navy hover:bg-covenant-offwhite cursor-pointer transition-colors"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <ContentText id="src-components-Header-tsx-dynamic-4">
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </ContentText>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-x-0 top-full bg-white/98 backdrop-blur-xl border-b border-covenant-border shadow-elevated lg:hidden transition-all duration-300 overflow-y-auto overscroll-contain ${
          mobileMenuOpen
            ? "max-h-[calc(100dvh-75px)] py-6 px-6 opacity-100"
            : "max-h-0 py-0 px-6 opacity-0 pointer-events-none"
        }`}
      >
        <div className="space-y-4">
          <div className="border-b border-covenant-border pb-4">
            <div className="text-[11px] font-bold tracking-widest text-covenant-gold-dark uppercase mb-2">
              <ContentText id="components-Header-text-9">
                {"Main Menu"}
              </ContentText>
            </div>
            <div className="space-y-2">
              <Link
                cmsId="components-Header-link-7"
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-covenant-charcoal hover:text-covenant-navy"
              >
                <ContentText id="components-Header-text-10">
                  {"Home"}
                </ContentText>
              </Link>
              <Link
                cmsId="components-Header-link-8"
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-covenant-charcoal hover:text-covenant-navy"
              >
                <ContentText id="components-Header-text-11">
                  {"About Us"}
                </ContentText>
              </Link>
              <Link
                cmsId="components-Header-link-9"
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-covenant-charcoal hover:text-covenant-navy"
              >
                <ContentText id="components-Header-text-12">
                  {"Projects & Gallery"}
                </ContentText>
              </Link>
              <Link
                cmsId="components-Header-link-10"
                href="/before-after"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-covenant-charcoal hover:text-covenant-navy"
              >
                <ContentText id="components-Header-text-13">
                  {"Before & After"}
                </ContentText>
              </Link>
              <Link
                cmsId="components-Header-link-11"
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-covenant-charcoal hover:text-covenant-navy"
              >
                <ContentText id="components-Header-text-14">
                  {"Contact"}
                </ContentText>
              </Link>
            </div>
          </div>

          <div className="border-b border-covenant-border pb-4">
            <div className="text-[11px] font-bold tracking-widest text-covenant-gold-dark uppercase mb-2">
              <ContentText id="components-Header-text-15">
                {"Our Services"}
              </ContentText>
            </div>
            <div className="space-y-2">
              <Link
                cmsId="components-Header-link-12"
                href="/services/kitchen-remodeling"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-sm text-covenant-muted hover:text-covenant-navy font-medium"
              >
                <ContentText id="components-Header-text-16">
                  {"• Kitchen Remodeling"}
                </ContentText>
              </Link>
              <Link
                cmsId="components-Header-link-13"
                href="/services/bathroom-remodeling"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-sm text-covenant-muted hover:text-covenant-navy font-medium"
              >
                <ContentText id="components-Header-text-17">
                  {"• Bathroom Remodeling"}
                </ContentText>
              </Link>
              <Link
                cmsId="components-Header-link-14"
                href="/services/painting"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-sm text-covenant-muted hover:text-covenant-navy font-medium"
              >
                <ContentText id="components-Header-text-18">
                  {"• Professional Painting"}
                </ContentText>
              </Link>
              <Link
                cmsId="components-Header-link-15"
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-sm text-covenant-gold-dark font-semibold"
              >
                <ContentText id="components-Header-text-19">
                  {"→ View All Services"}
                </ContentText>
              </Link>
            </div>
          </div>

          {/* Quick Direct Calls inside Drawer */}
          <div className="pt-2 space-y-3">
            <ContentAnchor
              cmsId="components-Header-link-16"
              href={COMPANY_INFO.phoneHref}
              className="flex items-center justify-center gap-2.5 w-full bg-covenant-navy text-white py-3.5 px-4 rounded-lg font-semibold text-sm cursor-pointer shadow-sm border border-covenant-gold/40"
            >
              <Phone className="w-4 h-4 text-covenant-gold" />
              <span>
                <ContentText id="components-Header-text-20">
                  {"Call "}
                </ContentText>
                <ContentText id="components-Header-text-21">
                  {COMPANY_INFO.phoneDisplay}
                </ContentText>
              </span>
            </ContentAnchor>

            <Link
              cmsId="components-Header-link-17"
              href="/contact"
              className="flex items-center justify-center gap-2 w-full bg-covenant-offwhite text-covenant-navy hover:bg-covenant-border/40 py-3 px-4 rounded-lg font-medium text-sm border border-covenant-border cursor-pointer transition-colors"
            >
              <Sparkles className="w-4 h-4 text-covenant-gold" />
              <span>
                <ContentText id="components-Header-text-22">
                  {"Schedule A Consultation"}
                </ContentText>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
