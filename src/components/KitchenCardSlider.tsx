"use client";

import { ContentText } from "@/components/cms/Content";
import React, { useState } from "react";
import { ContentImage as Image } from "@/components/cms/Content";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { KITCHEN_SHOWCASE_IMAGES } from "@/data/assets";

interface KitchenCardSliderProps {
  className?: string;
  aspectRatio?: "16/10" | "16/9" | "4/3";
}

export function KitchenCardSlider({
  className = "",
  aspectRatio = "16/10",
}: KitchenCardSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? KITCHEN_SHOWCASE_IMAGES.length - 1 : prev - 1,
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === KITCHEN_SHOWCASE_IMAGES.length - 1 ? 0 : prev + 1,
    );
  };

  const currentItem = KITCHEN_SHOWCASE_IMAGES[currentIndex];

  const aspectClass = {
    "16/10": "aspect-[16/10]",
    "16/9": "aspect-[16/9]",
    "4/3": "aspect-[4/3]",
  }[aspectRatio];

  return (
    <div
      className={`relative w-full ${aspectClass} rounded-xl overflow-hidden bg-neutral-900 border border-covenant-border/70 group/slider select-none ${className}`}
    >
      {/* Imagem ativa com proporção exata preenchendo 100% sem cortes nem espaço em branco */}
      <Image
        key={currentItem.url}
        src={currentItem.url}
        alt={currentItem.alt}
        fill
        sizes="(max-width: 768px) 100vw, 400px"
        className="object-cover object-center transition-all duration-300"
        priority={currentIndex === 0}
      />

      {/* Gradiente sutil para contraste dos controles */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

      {/* Badge com contador no topo */}
      <div className="absolute top-2.5 left-2.5 bg-covenant-navy/85 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-covenant-gold/40 flex items-center gap-1.5 shadow-sm">
        <Sparkles className="w-2.5 h-2.5 text-covenant-gold" />
        <span>
          <ContentText id="components-KitchenCardSlider-text-1">
            {"FOTO "}
          </ContentText>
          <ContentText id="components-KitchenCardSlider-text-2">
            {currentIndex + 1}
          </ContentText>
          <ContentText id="components-KitchenCardSlider-text-3">
            {"/ "}
          </ContentText>
          <ContentText id="components-KitchenCardSlider-text-4">
            {KITCHEN_SHOWCASE_IMAGES.length}
          </ContentText>
        </span>
      </div>

      {/* Botões de navegação Anterior / Próxima */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Foto anterior da cozinha"
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-covenant-navy/80 hover:bg-covenant-navy text-white flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all opacity-80 group-hover/slider:opacity-100 hover:scale-110 active:scale-95 z-10"
      >
        <ChevronLeft className="w-4 h-4 text-covenant-gold" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        aria-label="Próxima foto da cozinha"
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-covenant-navy/80 hover:bg-covenant-navy text-white flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all opacity-80 group-hover/slider:opacity-100 hover:scale-110 active:scale-95 z-10"
      >
        <ChevronRight className="w-4 h-4 text-covenant-gold" />
      </button>

      {/* Legenda rápida da foto */}
      <div className="absolute bottom-6 inset-x-2 text-center pointer-events-none px-2">
        <span className="text-[11px] font-medium text-white/95 drop-shadow-md line-clamp-1">
          <ContentText id="components-KitchenCardSlider-text-5">
            {currentItem.tags[0]}
          </ContentText>
          <ContentText id="components-KitchenCardSlider-text-6">
            {"• "}
          </ContentText>
          <ContentText id="components-KitchenCardSlider-text-7">
            {currentItem.tags[1]}
          </ContentText>
        </span>
      </div>

      {/* Bullets indicadores na base */}
      <div className="absolute bottom-2 inset-x-0 flex items-center justify-center gap-1.5 z-10">
        {KITCHEN_SHOWCASE_IMAGES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            aria-label={`Ir para foto de cozinha ${idx + 1}`}
            className={`transition-all rounded-full ${
              idx === currentIndex
                ? "w-4 h-1.5 bg-covenant-gold shadow-sm"
                : "w-1.5 h-1.5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
