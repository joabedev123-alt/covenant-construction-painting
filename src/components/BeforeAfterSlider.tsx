"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  title?: string;
  category?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "custom";
  className?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Before renovation",
  afterAlt = "After renovation",
  title,
  category,
  aspectRatio = "16/9",
  className = "",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    let percentage = (x / width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    },
    [handleMove]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const aspectClass = {
    "16/9": "aspect-[16/10] sm:aspect-[16/9]",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "custom": "h-[460px] sm:h-[560px]",
  }[aspectRatio];

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Optional Title & Category Header */}
      {(title || category) && (
        <div className="flex items-baseline justify-between gap-4 px-1">
          {title && (
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-covenant-navy">
              {title}
            </h3>
          )}
          {category && (
            <span className="text-xs font-bold tracking-widest text-covenant-gold-dark uppercase">
              {category}
            </span>
          )}
        </div>
      )}

      {/* Comparison Frame */}
      <div
        ref={containerRef}
        className={`relative w-full ${aspectClass} overflow-hidden rounded-xl select-none shadow-card cursor-ew-resize bg-covenant-navy/5 border border-covenant-border touch-none`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={(e) => {
          if (e.touches.length > 0) handleMove(e.touches[0].clientX);
        }}
        onTouchMove={handleTouchMove}
        role="region"
        aria-label="Before and After interactive comparison slider"
      >
        {/* AFTER Image (Full Background) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover object-center"
            priority
          />
          {/* Subtle After Label */}
          <div className="absolute bottom-4 right-4 bg-covenant-navy/85 backdrop-blur-sm text-white text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 rounded shadow-sm border border-covenant-gold/30">
            AFTER
          </div>
        </div>

        {/* BEFORE Image (Clipped Left Side) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none transition-[clip-path] duration-75"
          style={{
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          }}
        >
          <Image
            src={beforeImage}
            alt={beforeAlt}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover object-center"
            priority
          />
          {/* Subtle Before Label */}
          <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-sm text-white text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 rounded shadow-sm border border-white/20">
            BEFORE
          </div>
        </div>

        {/* Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-covenant-gold shadow-gold pointer-events-none transition-[left] duration-75"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Center Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-covenant-navy border-2 border-covenant-gold text-white shadow-elevated flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
            <MoveHorizontal className="w-4 h-4 text-covenant-gold" />
          </div>
        </div>

        {/* Top Floating Helper Instructions */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-covenant-navy/80 backdrop-blur-sm text-white text-[10px] tracking-widest uppercase px-3.5 py-1 rounded-full pointer-events-none opacity-80 border border-white/10">
          Drag to compare
        </div>
      </div>
    </div>
  );
}
