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
    title: "Editorial Residential Living & Kitchen Remodel",
    category: "kitchen" as const,
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
    alt: "Luxurious open-concept kitchen and living space remodeled to perfection",
    isPlaceholder: true,
    notes: "Replace with high-res client hero photo if desired.",
  },

  heroAbout: {
    id: "hero-about-craftsmanship",
    title: "Architectural Detailing & Craftsmanship",
    category: "about" as const,
    url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2000&q=85",
    alt: "Master craftsmanship architectural interior detail",
    isPlaceholder: true,
  },

  heroServices: {
    id: "hero-services-residential",
    title: "Full Home Transformation Overview",
    category: "improvement" as const,
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85",
    alt: "Modern remodeled residential interior with fine finishes",
    isPlaceholder: true,
  },

  // Services Heroes & Highlights
  kitchenHero: {
    id: "service-kitchen-hero",
    title: "Custom Kitchen Cabinetry & Stone Countertops",
    category: "kitchen" as const,
    url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1800&q=85",
    alt: "Sophisticated kitchen renovation with island and pendant lighting",
    isPlaceholder: true,
  },

  bathroomHero: {
    id: "service-bathroom-hero",
    title: "Spa-Grade Master Bathroom Renovation",
    category: "bathroom" as const,
    url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1800&q=85",
    alt: "Elegant master bathroom renovation with walk-in shower and freestanding tub",
    isPlaceholder: true,
  },

  paintingHero: {
    id: "service-painting-hero",
    title: "Precision Interior & Exterior Painting",
    category: "painting" as const,
    url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1800&q=85",
    alt: "Flawless wall finishing and precision architectural paint application",
    isPlaceholder: true,
  },

  // SECTION 05 — REAL BATHROOM BEFORE & AFTER
  // Ready to receive real files at /images/bathroom-before.jpg and /images/bathroom-after.jpg
  bathroomBefore: {
    id: "bathroom-before",
    title: "Bathroom Transformation — Before",
    category: "bathroom" as const,
    url: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=80",
    alt: "Original outdated bathroom space before renovation",
    isPlaceholder: true,
    notes: "Swap with real client file: /images/bathroom-before.jpg",
  },

  bathroomAfter: {
    id: "bathroom-after",
    title: "Bathroom Transformation — After",
    category: "bathroom" as const,
    url: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1400&q=85",
    alt: "Completed modern bathroom remodel with custom tilework and premium fixtures",
    isPlaceholder: true,
    notes: "Swap with real client file: /images/bathroom-after.jpg",
  },

  // SECTION 06 — REAL STAIRCASE BEFORE & AFTER
  staircaseBefore: {
    id: "staircase-before",
    title: "Staircase Refinishing — Before",
    category: "improvement" as const,
    url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80",
    alt: "Staircase prior to refinishing and precision painting",
    isPlaceholder: true,
    notes: "Swap with real client file: /images/staircase-before.jpg",
  },

  staircaseAfter: {
    id: "staircase-after",
    title: "Staircase Refinishing — After",
    category: "improvement" as const,
    url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1400&q=85",
    alt: "Beautifully restored staircase with contrasting handrail and crisp risers",
    isPlaceholder: true,
    notes: "Swap with real client file: /images/staircase-after.jpg",
  },

  // SECTION 04 — FEATURE PROJECT
  featureProject: {
    id: "feature-project-luxury-residence",
    title: "Comprehensive Residential Remodel",
    category: "improvement" as const,
    url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85",
    alt: "Bespoke architectural home transformation featuring open living and refined finishes",
    isPlaceholder: true,
  },

  // About Team / Craftsmanship Placeholder
  aboutCraftsmanship: {
    id: "about-craftsmanship-hands",
    title: "Meticulous Attention to Detail",
    category: "about" as const,
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85",
    alt: "Skilled craftsman working with precision tools on residential woodwork",
    isPlaceholder: true,
  },
};
