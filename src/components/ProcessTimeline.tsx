import React from "react";
import { MessageSquare, ClipboardCheck, Hammer, CheckCircle2 } from "lucide-react";

export function ProcessTimeline() {
  const steps = [
    {
      num: "01",
      name: "LET'S TALK",
      icon: MessageSquare,
      desc: "Tell us about your project, your timeline, and what you want to improve in your home.",
    },
    {
      num: "02",
      name: "PROJECT REVIEW",
      icon: ClipboardCheck,
      desc: "We review the space, assess structural or aesthetic needs, and align on clear expectations.",
    },
    {
      num: "03",
      name: "BUILD & TRANSFORM",
      icon: Hammer,
      desc: "Our team carries out the project with clean craftsmanship, daily care, and attention to detail.",
    },
    {
      num: "04",
      name: "FINAL WALKTHROUGH",
      icon: CheckCircle2,
      desc: "We inspect every finish together to ensure every corner meets the Covenant standard.",
    },
  ];

  return (
    <div className="relative">
      {/* Connecting Horizontal Architectural Line for Desktop */}
      <div className="hidden lg:block absolute top-12 left-16 right-16 h-px bg-gradient-to-r from-covenant-gold/20 via-covenant-gold to-covenant-gold/20 -z-0" />

      {/* Grid of Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="bg-white p-6 sm:p-7 rounded-xl border border-covenant-border/80 shadow-subtle hover:shadow-card transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                {/* Step Number & Icon Header */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-serif text-3xl font-bold text-covenant-gold-dark group-hover:text-covenant-gold transition-colors">
                    {step.num}
                  </span>
                  <div className="w-11 h-11 rounded-full bg-covenant-offwhite border border-covenant-border/70 flex items-center justify-center group-hover:bg-covenant-navy group-hover:border-covenant-navy transition-colors duration-300">
                    <Icon className="w-5 h-5 text-covenant-navy group-hover:text-covenant-gold transition-colors duration-300" />
                  </div>
                </div>

                <h3 className="font-sans font-bold text-sm tracking-wider uppercase text-covenant-navy mb-2.5">
                  {step.name}
                </h3>
                <p className="text-sm text-covenant-muted leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-covenant-border/50 flex items-center gap-2 text-[11px] font-semibold tracking-wider text-covenant-gold-dark uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-covenant-gold" />
                <span>Step {step.num}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
