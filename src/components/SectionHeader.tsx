import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-3xl ${isCenter ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase mb-3 ${
            isDark ? "text-covenant-gold-light" : "text-covenant-gold-dark"
          }`}
        >
          <span className="w-5 h-px bg-covenant-gold" />
          <span>{eyebrow}</span>
          <span className="w-5 h-px bg-covenant-gold" />
        </div>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] ${
          isDark ? "text-white" : "text-covenant-navy"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg font-normal leading-relaxed ${
            isDark ? "text-gray-300" : "text-covenant-muted"
          } ${isCenter ? "max-w-2xl mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
