import { ContentText } from "@/components/cms/Content";
import React from "react";
import { HeartHandshake, ShieldCheck, Award } from "lucide-react";

interface TrustBadgesProps {
  theme?: "light" | "dark";
  className?: string;
}

export function TrustBadges({
  theme = "light",
  className = "",
}: TrustBadgesProps) {
  const isDark = theme === "dark";

  const badges = [
    {
      title: "BUILT ON FAITH",
      icon: HeartHandshake,
      desc: "Integrity In Every Promise",
    },
    {
      title: "FOCUSED ON QUALITY",
      icon: ShieldCheck,
      desc: "Uncompromising Craftsmanship",
    },
    {
      title: "COMMITTED TO EXCELLENCE",
      icon: Award,
      desc: "Precision Down to the Details",
    },
  ];

  return (
    <div
      className={`py-4 sm:py-5 border-y ${
        isDark ? "border-white/10" : "border-covenant-border/70"
      } ${className}`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-covenant-border/60">
        {badges.map((badge, idx) => {
          const Icon = badge.icon;
          return (
            <div
              key={badge.title}
              className={`flex items-center gap-3.5 w-full md:w-auto justify-center md:justify-start ${
                idx > 0 ? "pt-4 md:pt-0 md:pl-8 lg:pl-12" : ""
              }`}
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                  isDark
                    ? "bg-white/10"
                    : "bg-covenant-offwhite border border-covenant-border/80"
                }`}
              >
                <Icon className="w-4 h-4 text-covenant-gold" />
              </div>
              <div className="text-left">
                <div
                  className={`text-xs font-bold tracking-[0.16em] uppercase font-sans ${
                    isDark ? "text-white" : "text-covenant-navy"
                  }`}
                >
                  <ContentText id="components-TrustBadges-text-1">
                    {badge.title}
                  </ContentText>
                </div>
                <div
                  className={`text-[11px] font-normal tracking-wide ${
                    isDark ? "text-gray-400" : "text-covenant-muted"
                  }`}
                >
                  <ContentText id="components-TrustBadges-text-2">
                    {badge.desc}
                  </ContentText>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
