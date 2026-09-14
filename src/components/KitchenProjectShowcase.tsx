"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from "lucide-react";
import { KITCHEN_SHOWCASE_IMAGES, KitchenShowcaseItem } from "@/data/assets";

interface KitchenProjectShowcaseProps {
  className?: string;
}

export function KitchenProjectShowcase({ className = "" }: KitchenProjectShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const currentItem: KitchenShowcaseItem = KITCHEN_SHOWCASE_IMAGES[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? KITCHEN_SHOWCASE_IMAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === KITCHEN_SHOWCASE_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const minSwipeDistance = 45;
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) handleNext();
    if (distance < -minSwipeDistance) handlePrev();
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Top Header info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-covenant-border/60 text-left">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-covenant-gold-dark uppercase">
            <Sparkles className="w-3.5 h-3.5 text-covenant-gold" />
            <span>PORTFÓLIO DE COZINHA • PROJETO RESIDENCIAL DE LUXO</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-covenant-navy mt-1">
            Gourmet Kitchen Showcase
          </h3>
          <p className="text-xs sm:text-sm text-covenant-muted">
            5 perspectivas completas da reforma: bancadas de quartzo, armários planejados e layout aberto.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-covenant-navy/5 border border-covenant-border text-xs font-bold text-covenant-navy self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-covenant-gold" />
          <span>FOTO {currentIndex + 1} DE {KITCHEN_SHOWCASE_IMAGES.length}</span>
        </div>
      </div>

      {/* Main Image Frame - Proporção exata 16/10 com touch swipe */}
      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-elevated border border-covenant-border bg-neutral-900 group touch-pan-y"
      >
        <Image
          key={currentItem.url}
          src={currentItem.url}
          alt={currentItem.alt}
          fill
          sizes="(max-width: 1280px) 100vw, 1200px"
          className="object-cover object-center transition-all duration-500"
          priority
        />

        {/* Gradiente sutil na base */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

        {/* Botões de navegação sobrepostos */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Foto anterior de cozinha"
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-covenant-navy/85 hover:bg-covenant-navy text-white border border-white/20 hover:border-covenant-gold shadow-elevated flex items-center justify-center backdrop-blur-sm transition-all hover:scale-110 active:scale-95 z-10 touch-manipulation"
        >
          <ChevronLeft className="w-6 h-6 text-covenant-gold" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Próxima foto de cozinha"
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-covenant-navy/85 hover:bg-covenant-navy text-white border border-white/20 hover:border-covenant-gold shadow-elevated flex items-center justify-center backdrop-blur-sm transition-all hover:scale-110 active:scale-95 z-10 touch-manipulation"
        >
          <ChevronRight className="w-6 h-6 text-covenant-gold" />
        </button>

        {/* Dica para mobile de deslizar */}
        <div className="absolute top-3 right-3 sm:hidden z-10 bg-black/60 backdrop-blur-sm text-white/80 text-[10px] px-2 py-0.5 rounded-full pointer-events-none">
          Deslize ⇄
        </div>

        {/* Legenda na base */}
        <div className="absolute bottom-0 inset-x-0 p-4 sm:p-8 text-left text-white space-y-2">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {currentItem.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold bg-white/15 backdrop-blur-md text-covenant-gold-light border border-white/15 px-2 sm:px-2.5 py-0.5 rounded-md"
              >
                <CheckCircle2 className="w-3 h-3 text-covenant-gold" />
                {tag}
              </span>
            ))}
          </div>

          <h4 className="font-serif text-lg sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-snug">
            {currentItem.title}
          </h4>
          <p className="text-xs sm:text-sm text-gray-200 font-light max-w-2xl leading-relaxed hidden sm:block">
            {currentItem.description}
          </p>
        </div>
      </div>

      {/* Miniaturas das 5 fotos com proporção 16/10 touch friendly */}
      <div className="space-y-2 text-left">
        <div className="flex items-center justify-between px-1 text-xs">
          <span className="font-bold text-covenant-navy uppercase tracking-wider">
            Explore Todos os Ângulos da Cozinha:
          </span>
          <span className="text-covenant-muted text-[11px]">Toque em qualquer foto</span>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none snap-x sm:grid sm:grid-cols-5 sm:overflow-visible">
          {KITCHEN_SHOWCASE_IMAGES.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ver ângulo ${idx + 1}: ${item.title}`}
                className={`relative w-[90px] sm:w-auto shrink-0 aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all duration-200 group focus:outline-none snap-start touch-manipulation ${
                  isActive
                    ? "border-covenant-gold ring-2 ring-covenant-gold/50 shadow-gold scale-[1.03]"
                    : "border-transparent opacity-70 hover:opacity-100 hover:border-covenant-navy/40"
                }`}
              >
                <Image
                  src={item.url}
                  alt={item.alt}
                  fill
                  sizes="220px"
                  className="object-cover object-center group-hover:scale-105 transition-transform"
                />
                <span
                  className={`absolute inset-0 transition-colors ${
                    isActive ? "bg-covenant-gold/15" : "bg-black/20 group-hover:bg-transparent"
                  }`}
                />
                <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded backdrop-blur-sm">
                  #{idx + 1}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
