"use client";

import React from "react";
import { Phone, Calendar } from "lucide-react";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/assets";

export function MobileCallBar() {
  return (
    <aside
      aria-label="Mobile quick contact bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-covenant-border shadow-elevated p-2.5 sm:hidden"
    >
      <div className="grid grid-cols-2 gap-2">
        <a
          href={COMPANY_INFO.phoneHref}
          className="flex items-center justify-center gap-2 bg-covenant-navy active:bg-covenant-navy-dark text-white py-3 px-3 rounded-lg font-bold text-xs uppercase tracking-wider shadow-sm border border-covenant-gold/40 transition-transform active:scale-[0.98]"
        >
          <Phone className="w-4 h-4 text-covenant-gold shrink-0 animate-pulse" />
          <span className="truncate">Call Now</span>
        </a>

        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 bg-covenant-offwhite active:bg-covenant-border/50 text-covenant-navy py-3 px-3 rounded-lg font-bold text-xs uppercase tracking-wider border border-covenant-border transition-transform active:scale-[0.98]"
        >
          <Calendar className="w-4 h-4 text-covenant-gold shrink-0" />
          <span className="truncate">Get Estimate</span>
        </Link>
      </div>
    </aside>
  );
}
