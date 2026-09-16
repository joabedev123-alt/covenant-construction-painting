"use client";

import { ContentText } from "@/components/cms/Content";
import React, { useState } from "react";
import { ContentImage as Image } from "@/components/cms/Content";
import { ContentLink as Link } from "@/components/cms/Content";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Grid,
  Eye,
  ArrowRight,
} from "lucide-react";
import { BATHROOM_SHOWCASE_IMAGES, BathroomShowcaseItem } from "@/data/assets";

interface MasterBathroomCaseShowcaseProps {
  className?: string;
}

export function MasterBathroomCaseShowcase({
  className = "",
}: MasterBathroomCaseShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"showcase" | "grid">("showcase");
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const currentItem: BathroomShowcaseItem =
    BATHROOM_SHOWCASE_IMAGES[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? BATHROOM_SHOWCASE_IMAGES.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === BATHROOM_SHOWCASE_IMAGES.length - 1 ? 0 : prev + 1,
    );
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
    <div className={`w-full ${className}`}>
      {/* Header com troca de visualização */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-covenant-border/60">
        <div className="text-left">
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-[0.2em] text-covenant-gold-dark uppercase mb-1">
            <Sparkles className="w-3.5 h-3.5 text-covenant-gold" />
            <span>
              <ContentText id="components-MasterBathroomCaseShowcase-text-1">
                {"REAL PROJECT SHOWCASE • REFORMA DE BANHEIROS"}
              </ContentText>
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-covenant-navy">
            <ContentText id="components-MasterBathroomCaseShowcase-text-2">
              {"Master Bathroom Renovation Case"}
            </ContentText>
          </h3>
          <p className="text-xs sm:text-sm text-covenant-muted mt-0.5">
            <ContentText id="components-MasterBathroomCaseShowcase-text-3">
              {
                "Caso de reforma de banheiro principal — Acabamento de alto padrão, impermeabilização e design sob medida."
              }
            </ContentText>
          </p>
        </div>

        {/* Tab switcher */}
        <div className="inline-flex p-1 bg-covenant-navy/5 rounded-xl border border-covenant-border self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setActiveTab("showcase")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "showcase"
                ? "bg-covenant-navy text-white shadow-sm"
                : "text-covenant-muted hover:text-covenant-navy"
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>
              <ContentText id="components-MasterBathroomCaseShowcase-text-4">
                {"Destaque"}
              </ContentText>
            </span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("grid")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "grid"
                ? "bg-covenant-navy text-white shadow-sm"
                : "text-covenant-muted hover:text-covenant-navy"
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>
              <ContentText id="components-MasterBathroomCaseShowcase-text-5">
                {"Ver Todos ("}
              </ContentText>
              <ContentText id="components-MasterBathroomCaseShowcase-text-6">
                {BATHROOM_SHOWCASE_IMAGES.length}
              </ContentText>
              <ContentText id="components-MasterBathroomCaseShowcase-text-7">
                {")"}
              </ContentText>
            </span>
          </button>
        </div>
      </div>

      <ContentText id="src-components-MasterBathroomCaseShowcase-tsx-dynamic-1">
        {activeTab === "showcase" ? (
          /* MODO SHOWCASE: Layout em 2 colunas perfeitamente ajustado à proporção natural 4:5 da imagem */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center text-left">
            {/* Coluna da Imagem: Proporção nativa 4:5 sem nenhum espaço em branco com suporte a touch swipe */}
            <div className="lg:col-span-6 xl:col-span-6 w-full max-w-[480px] mx-auto lg:max-w-none">
              <div
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated border border-covenant-border bg-neutral-900 group touch-pan-y"
              >
                <Image
                  key={currentItem.url}
                  src={currentItem.url}
                  alt={currentItem.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover object-center"
                  priority
                />

                {/* Tag flutuante superior com contador */}
                <div className="absolute top-3 left-3 z-10 bg-covenant-navy/85 backdrop-blur-md text-white text-[11px] font-bold tracking-widest px-3 py-1.5 rounded-full border border-covenant-gold/40 shadow-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-covenant-gold animate-pulse" />
                  <span>
                    <ContentText id="src-components-MasterBathroomCaseShowcase-tsx-dynamic-2">
                      {String(currentIndex + 1).padStart(2, "0")}
                    </ContentText>
                    <ContentText id="components-MasterBathroomCaseShowcase-text-8">
                      {"/ "}
                    </ContentText>
                    <ContentText id="src-components-MasterBathroomCaseShowcase-tsx-dynamic-3">
                      {String(BATHROOM_SHOWCASE_IMAGES.length).padStart(2, "0")}
                    </ContentText>
                  </span>
                </div>

                {/* Botões de navegação sobrepostos na imagem */}
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Imagem anterior de banheiro"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-covenant-navy/85 hover:bg-covenant-navy text-white border border-white/20 hover:border-covenant-gold shadow-elevated flex items-center justify-center backdrop-blur-sm transition-all hover:scale-110 active:scale-95 touch-manipulation"
                >
                  <ChevronLeft className="w-5 h-5 text-covenant-gold" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Próxima imagem de banheiro"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-covenant-navy/85 hover:bg-covenant-navy text-white border border-white/20 hover:border-covenant-gold shadow-elevated flex items-center justify-center backdrop-blur-sm transition-all hover:scale-110 active:scale-95 touch-manipulation"
                >
                  <ChevronRight className="w-5 h-5 text-covenant-gold" />
                </button>

                {/* Dica para mobile de deslizar */}
                <div className="absolute top-3 right-3 sm:hidden z-10 bg-black/60 backdrop-blur-sm text-white/80 text-[10px] px-2 py-0.5 rounded-full pointer-events-none">
                  <ContentText id="components-MasterBathroomCaseShowcase-text-9">
                    {"Deslize ⇄"}
                  </ContentText>
                </div>

                {/* Gradiente sutil apenas na base para leitura da legenda rápida */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none">
                  <p className="text-xs text-covenant-gold-light font-medium tracking-wide">
                    <ContentText id="components-MasterBathroomCaseShowcase-text-10">
                      {currentItem.subtitle}
                    </ContentText>
                  </p>
                </div>
              </div>
            </div>

            {/* Coluna de Conteúdo & Miniaturas */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-covenant-gold/10 border border-covenant-gold/30 text-covenant-gold-dark text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-covenant-gold" />
                  <span>
                    <ContentText id="components-MasterBathroomCaseShowcase-text-11">
                      {"Projeto Concluído Covenant"}
                    </ContentText>
                  </span>
                </div>

                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-covenant-navy leading-tight">
                  <ContentText id="components-MasterBathroomCaseShowcase-text-12">
                    {currentItem.title}
                  </ContentText>
                </h4>

                <p className="text-sm sm:text-base text-covenant-muted font-light leading-relaxed">
                  <ContentText id="components-MasterBathroomCaseShowcase-text-13">
                    {currentItem.description}
                  </ContentText>
                </p>

                {/* Tags de acabamento */}
                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-covenant-navy/80 block mb-2">
                    <ContentText id="components-MasterBathroomCaseShowcase-text-14">
                      {"Destaques de Acabamento & Materiais:"}
                    </ContentText>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold bg-covenant-offwhite text-covenant-navy border border-covenant-border px-3 py-1.5 rounded-lg shadow-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-covenant-gold" />
                        <ContentText id="components-MasterBathroomCaseShowcase-text-15">
                          {tag}
                        </ContentText>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Seletor de Miniaturas com as 7 fotos — touch friendly com scroll suave no mobile */}
              <div className="pt-4 border-t border-covenant-border/60 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-covenant-navy uppercase tracking-wider">
                    <ContentText id="components-MasterBathroomCaseShowcase-text-16">
                      {"Fotos do Portfólio ("}
                    </ContentText>
                    <ContentText id="components-MasterBathroomCaseShowcase-text-17">
                      {BATHROOM_SHOWCASE_IMAGES.length}
                    </ContentText>
                    <ContentText id="components-MasterBathroomCaseShowcase-text-18">
                      {"Projetos):"}
                    </ContentText>
                  </span>
                  <span className="text-covenant-muted text-[11px]">
                    <ContentText id="components-MasterBathroomCaseShowcase-text-19">
                      {"Toque para alternar"}
                    </ContentText>
                  </span>
                </div>

                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none snap-x sm:grid sm:grid-cols-4 lg:grid-cols-7 sm:overflow-visible sm:snap-none">
                  {BATHROOM_SHOWCASE_IMAGES.map((item, idx) => {
                    const isActive = idx === currentIndex;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setCurrentIndex(idx)}
                        aria-label={`Ver foto ${idx + 1}: ${item.title}`}
                        className={`relative w-[62px] sm:w-auto shrink-0 aspect-[4/5] rounded-xl overflow-hidden border-2 transition-all duration-200 group focus:outline-none snap-start touch-manipulation ${
                          isActive
                            ? "border-covenant-gold ring-2 ring-covenant-gold/50 shadow-md scale-105 z-10"
                            : "border-transparent opacity-65 hover:opacity-100 hover:border-covenant-navy/40"
                        }`}
                      >
                        <Image
                          src={item.url}
                          alt={item.alt}
                          fill
                          sizes="90px"
                          className="object-cover object-center"
                        />
                        <span
                          className={`absolute inset-0 transition-colors ${
                            isActive
                              ? "bg-covenant-gold/15"
                              : "bg-black/20 group-hover:bg-transparent"
                          }`}
                        />
                        <span className="absolute bottom-0.5 right-0.5 bg-black/80 text-white text-[9px] font-bold px-1 rounded">
                          <ContentText id="components-MasterBathroomCaseShowcase-text-20">
                            {"#"}
                          </ContentText>
                          <ContentText id="components-MasterBathroomCaseShowcase-text-21">
                            {idx + 1}
                          </ContentText>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Controles de Próximo / Anterior & Botão de Contato */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-4 py-2 rounded-xl border border-covenant-border bg-white hover:bg-covenant-offwhite text-covenant-navy text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 shadow-sm"
                >
                  <ChevronLeft className="w-4 h-4 text-covenant-gold" />
                  <span>
                    <ContentText id="components-MasterBathroomCaseShowcase-text-22">
                      {"Anterior"}
                    </ContentText>
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="px-4 py-2 rounded-xl border border-covenant-border bg-white hover:bg-covenant-offwhite text-covenant-navy text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 shadow-sm"
                >
                  <span>
                    <ContentText id="components-MasterBathroomCaseShowcase-text-23">
                      {"Próxima"}
                    </ContentText>
                  </span>
                  <ChevronRight className="w-4 h-4 text-covenant-gold" />
                </button>

                <Link
                  cmsId="components-MasterBathroomCaseShowcase-link-1"
                  href="/services/bathroom-remodeling"
                  className="ml-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-covenant-navy hover:bg-covenant-navy-light text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm group"
                >
                  <span>
                    <ContentText id="components-MasterBathroomCaseShowcase-text-24">
                      {"Saber Mais"}
                    </ContentText>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-covenant-gold group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          /* MODO GRADE: Todas as 7 fotos em proporção 4:5 nativa sem espaço em branco */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 text-left">
            {BATHROOM_SHOWCASE_IMAGES.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  setActiveTab("showcase");
                }}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-covenant-border bg-white shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col"
              >
                {/* Imagem em proporção nativa 4:5 preenchendo 100% da área */}
                <div className="relative w-full aspect-[4/5] bg-neutral-900 overflow-hidden">
                  <Image
                    src={item.url}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-covenant-navy/85 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-covenant-gold/30">
                    <ContentText id="components-MasterBathroomCaseShowcase-text-25">
                      {"PROJETO #"}
                    </ContentText>
                    <ContentText id="components-MasterBathroomCaseShowcase-text-26">
                      {idx + 1}
                    </ContentText>
                  </div>
                </div>

                {/* Legenda compacta */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h5 className="font-serif text-base font-bold text-covenant-navy group-hover:text-covenant-gold-dark transition-colors line-clamp-1">
                      <ContentText id="components-MasterBathroomCaseShowcase-text-27">
                        {item.title}
                      </ContentText>
                    </h5>
                    <p className="text-xs text-covenant-muted line-clamp-2 mt-1 font-light">
                      <ContentText id="components-MasterBathroomCaseShowcase-text-28">
                        {item.description}
                      </ContentText>
                    </p>
                  </div>
                  <div className="pt-2 border-t border-covenant-border/60 flex items-center justify-between text-[11px] font-bold text-covenant-gold-dark uppercase tracking-wider">
                    <span>
                      <ContentText id="components-MasterBathroomCaseShowcase-text-29">
                        {"Ver em Detalhe"}
                      </ContentText>
                    </span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </ContentText>
    </div>
  );
}
