"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ChevronDown, Menu, X, ArrowRight, Sparkles } from "lucide-react";
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
        { name: "Kitchen Remodeling", href: "/services/kitchen-remodeling", desc: "Custom cabinets, islands & layout reimagining" },
        { name: "Bathroom Remodeling", href: "/services/bathroom-remodeling", desc: "Spa suites, walk-in showers & fine tilework" },
        { name: "Professional Painting", href: "/services/painting", desc: "Precision interior & weather-proof exterior" },
        { name: "All Services Overview", href: "/services", desc: "Explore our complete residential scope" },
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
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <div className="shrink-0">
            <BrandLogo size={scrolled ? "sm" : "md"} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.hasDropdown && pathname.startsWith(link.href));

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 cursor-pointer py-2 ${
                        isActive
                          ? "text-covenant-navy font-semibold"
                          : "text-covenant-muted hover:text-covenant-navy"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180 text-covenant-gold" : "text-covenant-muted"
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
                        Our Craftsmanship
                      </div>
                      {link.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-3 py-2.5 rounded-lg transition-colors hover:bg-covenant-offwhite group cursor-pointer"
                        >
                          <div className="text-sm font-medium text-covenant-charcoal group-hover:text-covenant-navy flex items-center justify-between">
                            <span>{sub.name}</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-covenant-gold transition-all duration-200" />
                          </div>
                          <p className="text-xs text-covenant-muted line-clamp-1 mt-0.5">
                            {sub.desc}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 cursor-pointer relative py-1 ${
                    isActive
                      ? "text-covenant-navy font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-covenant-gold"
                      : "text-covenant-muted hover:text-covenant-navy hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-covenant-gold/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Direct Conversion: Phone & CTA Button */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={COMPANY_INFO.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-covenant-navy hover:text-covenant-gold-dark transition-colors duration-200 cursor-pointer group"
              title="Call Covenant Construction & Painting"
            >
              <div className="w-8 h-8 rounded-full bg-covenant-navy/5 flex items-center justify-center group-hover:bg-covenant-gold/15 transition-colors duration-200">
                <Phone className="w-4 h-4 text-covenant-gold" />
              </div>
              <span className="tracking-tight">{COMPANY_INFO.phoneDisplay}</span>
            </a>

            {onOpenEstimate ? (
              <button
                type="button"
                onClick={onOpenEstimate}
                className="inline-flex items-center gap-2 bg-covenant-navy hover:bg-covenant-navy-light text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-md shadow-sm hover:shadow transition-all duration-200 cursor-pointer border border-covenant-gold/40 hover:border-covenant-gold"
              >
                <span>Get An Estimate</span>
                <ArrowRight className="w-3.5 h-3.5 text-covenant-gold" />
              </button>
            ) : (
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-covenant-navy hover:bg-covenant-navy-light text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-md shadow-sm hover:shadow transition-all duration-200 cursor-pointer border border-covenant-gold/40 hover:border-covenant-gold"
              >
                <span>Get An Estimate</span>
                <ArrowRight className="w-3.5 h-3.5 text-covenant-gold" />
              </Link>
            )}
          </div>

          {/* Mobile Actions: Call Icon & Hamburger */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={COMPANY_INFO.phoneHref}
              className="w-10 h-10 rounded-full bg-covenant-navy text-white flex items-center justify-center cursor-pointer shadow-sm active:scale-95 transition-transform border border-covenant-gold/40"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4 text-covenant-gold" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-lg border border-covenant-border flex items-center justify-center text-covenant-navy hover:bg-covenant-offwhite cursor-pointer transition-colors"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-x-0 top-full bg-white/98 backdrop-blur-xl border-b border-covenant-border shadow-elevated lg:hidden transition-all duration-300 overflow-y-auto overscroll-contain ${
          mobileMenuOpen ? "max-h-[calc(100dvh-75px)] py-6 px-6 opacity-100" : "max-h-0 py-0 px-6 opacity-0 pointer-events-none"
        }`}
      >
        <div className="space-y-4">
          <div className="border-b border-covenant-border pb-4">
            <div className="text-[11px] font-bold tracking-widest text-covenant-gold-dark uppercase mb-2">
              Main Menu
            </div>
            <div className="space-y-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-covenant-charcoal hover:text-covenant-navy"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-covenant-charcoal hover:text-covenant-navy"
              >
                About Us
              </Link>
              <Link
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-covenant-charcoal hover:text-covenant-navy"
              >
                Projects & Gallery
              </Link>
              <Link
                href="/before-after"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-covenant-charcoal hover:text-covenant-navy"
              >
                Before & After
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-covenant-charcoal hover:text-covenant-navy"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="border-b border-covenant-border pb-4">
            <div className="text-[11px] font-bold tracking-widest text-covenant-gold-dark uppercase mb-2">
              Our Services
            </div>
            <div className="space-y-2">
              <Link
                href="/services/kitchen-remodeling"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-sm text-covenant-muted hover:text-covenant-navy font-medium"
              >
                • Kitchen Remodeling
              </Link>
              <Link
                href="/services/bathroom-remodeling"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-sm text-covenant-muted hover:text-covenant-navy font-medium"
              >
                • Bathroom Remodeling
              </Link>
              <Link
                href="/services/painting"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-sm text-covenant-muted hover:text-covenant-navy font-medium"
              >
                • Professional Painting
              </Link>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-sm text-covenant-gold-dark font-semibold"
              >
                → View All Services
              </Link>
            </div>
          </div>

          {/* Quick Direct Calls inside Drawer */}
          <div className="pt-2 space-y-3">
            <a
              href={COMPANY_INFO.phoneHref}
              className="flex items-center justify-center gap-2.5 w-full bg-covenant-navy text-white py-3.5 px-4 rounded-lg font-semibold text-sm cursor-pointer shadow-sm border border-covenant-gold/40"
            >
              <Phone className="w-4 h-4 text-covenant-gold" />
              <span>Call {COMPANY_INFO.phoneDisplay}</span>
            </a>

            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full bg-covenant-offwhite text-covenant-navy hover:bg-covenant-border/40 py-3 px-4 rounded-lg font-medium text-sm border border-covenant-border cursor-pointer transition-colors"
            >
              <Sparkles className="w-4 h-4 text-covenant-gold" />
              <span>Schedule A Consultation</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
