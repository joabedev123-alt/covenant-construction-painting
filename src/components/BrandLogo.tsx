"use client";

import React, { useState } from "react";
import Link from "next/link";

interface BrandLogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg" | "xl" | "3cm";
  className?: string;
  showText?: boolean;
}

export function BrandLogo({
  variant = "light",
  size = "md",
  className = "",
  showText = true,
}: BrandLogoProps) {
  const [imageError, setImageError] = useState(false);

  // Size configurations (3cm = ~114px, garante no mínimo 3cm quando size="3cm")
  const dimensions = {
    sm: { icon: 38, iconStyle: { width: 38, height: 38 }, title: "text-lg", sub: "text-[9px]" },
    md: { icon: 48, iconStyle: { width: 48, height: 48 }, title: "text-xl", sub: "text-[10px]" },
    lg: { icon: 64, iconStyle: { width: 64, height: 64 }, title: "text-2xl", sub: "text-[11px]" },
    xl: { icon: 84, iconStyle: { width: 84, height: 84 }, title: "text-3xl", sub: "text-xs" },
    "3cm": { icon: 116, iconStyle: { width: "3.2cm", height: "3.2cm", minWidth: "3cm", minHeight: "3cm" }, title: "text-2xl", sub: "text-xs" },
  }[size];

  const textColor = variant === "dark" ? "text-white" : "text-covenant-navy";
  const subColor = variant === "dark" ? "text-covenant-gold-light" : "text-covenant-gold-dark";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3.5 group cursor-pointer select-none transition-opacity duration-200 hover:opacity-95 ${className}`}
      aria-label="Covenant Construction & Painting - Home"
    >
      <div
        className="relative flex items-center justify-center shrink-0 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-[1.03]"
        style={dimensions.iconStyle}
      >
        {!imageError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/images/logo.png"
            alt="Covenant Construction & Painting Logo"
            className="w-full h-full object-contain drop-shadow-sm"
            onError={() => setImageError(true)}
          />
        ) : (
          <svg
            width={dimensions.icon}
            height={dimensions.icon}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-sm"
          >
            <rect width="100" height="100" rx="20" fill="#071F41" />
            <rect x="3" y="3" width="94" height="94" rx="17" stroke="#C79A3B" strokeWidth="1.2" strokeOpacity="0.45" />
            <path d="M50 20L22 45H30V76H70V45H78L50 20Z" stroke="#FFFFFF" strokeWidth="2.5" strokeLinejoin="round" fill="none" opacity="0.9" />
            <path d="M50 30L34 44V76" stroke="#C79A3B" strokeWidth="1.8" strokeLinecap="round" opacity="0.75" />
            <rect x="44" y="46" width="12" height="12" rx="1.5" stroke="#FFFFFF" strokeWidth="1.4" opacity="0.8" />
            <line x1="50" y1="46" x2="50" y2="58" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.8" />
            <line x1="44" y1="52" x2="56" y2="52" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.8" />
            <path d="M18 72C30 68 40 76 56 68C68 62 76 66 84 62" stroke="#C79A3B" strokeWidth="3.2" strokeLinecap="round" />
            <path d="M24 77C34 74 44 80 58 73C66 69 74 72 80 68" stroke="#C79A3B" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
          </svg>
        )}
      </div>

      {showText && (
        <div className="flex flex-col text-left leading-none tracking-tight">
          <span
            className={`font-serif font-bold tracking-[0.12em] ${textColor} ${dimensions.title} uppercase`}
          >
            Covenant
          </span>
          <span
            className={`font-sans font-semibold tracking-[0.24em] ${subColor} ${dimensions.sub} uppercase mt-1 hidden min-[380px]:flex items-center gap-1.5`}
          >
            <span>Construction</span>
            <span className="inline-block w-1 h-1 rounded-full bg-covenant-gold opacity-80" />
            <span>Painting</span>
          </span>
        </div>
      )}
    </Link>
  );
}
