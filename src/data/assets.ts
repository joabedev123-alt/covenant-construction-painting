/**
 * COVENANT CONSTRUCTION & PAINTING
 * Centralized Asset Management System
 * 
 * Instructions for replacing placeholder images:
 * 1. Drop your new image files into the `/public/images/` directory.
 * 2. Update the corresponding `url` below (e.g. from the Unsplash URL to `/images/your-filename.jpg`).
 * 3. All pages, galleries, hero sections, and Before/After sliders will immediately reflect the new images.
 */

export interface ImageAsset {
  id: string;
  title: string;
  category: "kitchen" | "bathroom" | "painting" | "improvement" | "brand" | "about";
  url: string;
  alt: string;
  isPlaceholder: boolean;
  notes?: string;
}

export const COMPANY_INFO = {
  name: "Covenant Construction & Painting",
  shortName: "Covenant",
  tagline: "Built With Purpose. Finished With Excellence.",
  subheadline: "Thoughtful remodeling, quality craftsmanship, and professional painting designed to transform your home with confidence.",
  phone: "508-405-6918",
  phoneDisplay: "508-405-6918",
  phoneHref: "tel:5084056918",
  email: "damascenoluiz31@gmail.com",
  pillars: [
    { title: "BUILT ON FAITH", desc: "Integrity, honesty, and purposeful dedication in every project we undertake." },
    { title: "FOCUSED ON QUALITY", desc: "Premium materials, rigorous preparation, and uncompromising standards." },
    { title: "COMMITTED TO EXCELLENCE", desc: "Meticulous execution from initial consultation through the final walkthrough." },
  ],
};

export const SITE_ASSETS = {
  // Brand
  logo: {
    id: "brand-logo",
    title: "Covenant Construction & Painting Logo",
    category: "brand" as const,
    url: "/images/logo.png",
    alt: "Covenant Construction & Painting Official Logo",
    isPlaceholder: false,
    notes: "If logo.png is placed in /public/images/, it can replace the custom vector SVG logo.",
  },

  // Hero Photography (High-end realistic American residential renovation)
  heroMain: {
    id: "hero-residential-remodel",
    title: "Covenant Transformations — Before & After Showcase",
    category: "improvement" as const,
    url: "/images/fotos/WhatsApp Image 2026-09-08 at 14.06.04 (1).jpeg",
    alt: "Transformações residenciais Antes e Depois por Covenant Construction & Painting",
    isPlaceholder: false,
    notes: "WhatsApp Image 2026-09-08 at 14.06.04 (1)",
  },

  heroAbout: {
    id: "hero-about-craftsmanship",
    title: "Architectural Detailing & Craftsmanship",
    category: "about" as const,
    url: "/images/fotos/WhatsApp Image 2026-09-08 at 14.06.04.jpeg",
    alt: "The Covenant Standard - Transformação residencial e restauração",
    isPlaceholder: false,
    notes: "WhatsApp Image 2026-09-08 at 14.06.04",
  },

  covenantStandard: {
    id: "covenant-standard-quality",
    title: "The Covenant Standard — Exterior Transformation",
    category: "improvement" as const,
    url: "/images/fotos/WhatsApp Image 2026-09-08 at 14.06.04.jpeg",
    alt: "The Covenant Standard - Mais do que uma reforma, um compromisso com a qualidade",
    isPlaceholder: false,
    notes: "WhatsApp Image 2026-09-08 at 14.06.04",
  },

  heroServices: {
    id: "hero-services-residential",
    title: "Full Home Transformation Overview",
    category: "improvement" as const,
    url: "/images/hero-main.jpeg",
    alt: "Modern remodeled residential interior and exterior with fine finishes",
    isPlaceholder: false,
  },

  // Services Heroes & Highlights
  kitchenHero: {
    id: "service-kitchen-hero",
    title: "Custom Kitchen Cabinetry & Stone Countertops",
    category: "kitchen" as const,
    url: "/images/cozinha pintada.jpeg",
    alt: "Reforma de cozinha com armários planejados e pintura",
    isPlaceholder: false,
    notes: "cozinha pintada.jpeg",
  },

  kitchenBefore: {
    id: "kitchen-before",
    title: "Kitchen Preparation & Painting — Before",
    category: "kitchen" as const,
    url: "/images/fotos/WhatsApp Image 2026-09-08 at 14.05.51.jpeg",
    alt: "Cozinha antes da reforma e pintura de armários",
    isPlaceholder: false,
    notes: "WhatsApp Image 2026-09-08 at 14.05.51",
  },

  kitchenAfter: {
    id: "kitchen-after",
    title: "Kitchen Transformation — After",
    category: "kitchen" as const,
    url: "/images/cozinha001.jpeg",
    alt: "Cozinha finalizada após pintura e reforma completa",
    isPlaceholder: false,
    notes: "cozinha001.jpeg",
  },

  bathroomHero: {
    id: "service-bathroom-hero",
    title: "Spa-Grade Master Bathroom Renovation",
    category: "bathroom" as const,
    url: "/images/fotos/WhatsApp Image 2026-09-08 at 14.06.06 (2).jpeg",
    alt: "Reforma de banheiro com box em revestimento cerâmico e nicho",
    isPlaceholder: false,
    notes: "WhatsApp Image 2026-09-08 at 14.06.06 (2)",
  },

  paintingHero: {
    id: "service-painting-hero",
    title: "Precision Interior & Exterior Painting",
    category: "painting" as const,
    url: "/images/painting-finished.jpeg",
    alt: "Pintura residencial com acabamento impecável e linhas limpas",
    isPlaceholder: false,
    notes: "WhatsApp Image 2026-09-08 at 14.02.58",
  },

  // SECTION 05 — REAL BATHROOM BEFORE & AFTER (TRANSFORMAÇÃO)
  bathroomBefore: {
    id: "bathroom-before",
    title: "Transformation — Before",
    category: "painting" as const,
    url: "/images/painting-prep-before.jpeg",
    alt: "Espaço antes da transformação e preparação de pintura",
    isPlaceholder: false,
    notes: "WhatsApp Image 2026-09-08 at 14.02.57",
  },

  bathroomAfter: {
    id: "bathroom-after",
    title: "Transformation — After",
    category: "painting" as const,
    url: "/images/painting-finished.jpeg",
    alt: "Espaço após transformação completa com acabamento de pintura impecável",
    isPlaceholder: false,
    notes: "WhatsApp Image 2026-09-08 at 14.02.58",
  },

  // SECTION 06 — REAL STAIRCASE BEFORE & AFTER
  staircaseBefore: {
    id: "staircase-before",
    title: "Staircase Refinishing — Before",
    category: "improvement" as const,
    url: "/images/staircase-before.jpeg",
    alt: "Escada antes da restauração e pintura",
    isPlaceholder: false,
    notes: "WhatsApp Image 2026-09-08 at 14.01.42",
  },

  staircaseAfter: {
    id: "staircase-after",
    title: "Staircase Refinishing — After",
    category: "improvement" as const,
    url: "/images/staircase-after.jpeg",
    alt: "Escada após revitalização, degraus envernizados e pintura",
    isPlaceholder: false,
    notes: "WhatsApp Image 2026-09-08 at 14.01.44",
  },

  entrywayTransformation: {
    id: "entryway-transformation",
    title: "Entryway Architectural Finish",
    category: "improvement" as const,
    url: "/images/WhatsApp Image 2026-09-08 at 14.02.00.jpeg",
    alt: "Acabamento arquitetônico de entrada - Antes e Depois",
    isPlaceholder: false,
    notes: "WhatsApp Image 2026-09-08 at 14.02.00",
  },

  // SECTION 04 — FEATURE PROJECT
  featureProject: {
    id: "feature-project-luxury-residence",
    title: "Comprehensive Residential Remodel",
    category: "improvement" as const,
    url: "/images/featured-project.jpeg",
    alt: "Construído em torno da sua casa. Projetado em torno da sua vida.",
    isPlaceholder: false,
    notes: "WhatsApp Image 2026-09-08 at 14.05.48 (3)",
  },

  // About Team / Craftsmanship Placeholder
  aboutCraftsmanship: {
    id: "about-craftsmanship-hands",
    title: "Meticulous Attention to Detail",
    category: "about" as const,
    url: "/images/finishing-detail.jpeg",
    alt: "Skilled craftsmanship and residential remodeling",
    isPlaceholder: false,
  },
};
