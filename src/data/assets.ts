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
    url: "/images/cozinha01.jpeg",
    alt: "Reforma de cozinha com ilha de quartzo, armários planejados e pendentes",
    isPlaceholder: false,
    notes: "cozinha01.jpeg",
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
    url: "/images/cozinha01.jpeg",
    alt: "Cozinha gourmet finalizada com bancada em quartzo e armários brancos",
    isPlaceholder: false,
    notes: "cozinha01.jpeg",
  },

  bathroomHero: {
    id: "service-bathroom-hero",
    title: "Spa-Grade Master Bathroom Renovation",
    category: "bathroom" as const,
    url: "/images/banheiros/bathroom-02.jpeg",
    alt: "Reforma de banheiro de luxo com box em porcelanato Calacatta e ferragens pretas",
    isPlaceholder: false,
    notes: "WhatsApp Image 2026-09-12 at 12.37.48 (1)",
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

  // SECTION 05 — REAL BATHROOM SHOWCASE & BEFORE/AFTER
  bathroomBefore: {
    id: "bathroom-before",
    title: "Master Bathroom — Outdated Setup",
    category: "bathroom" as const,
    url: "/images/banheiros/bathroom-03.jpeg",
    alt: "Reforma de banheiro com nicho e acabamento personalizado",
    isPlaceholder: false,
    notes: "WhatsApp Image 2026-09-12 at 12.37.48 (2)",
  },

  bathroomAfter: {
    id: "bathroom-after",
    title: "Master Bathroom — Luxury Completed Suite",
    category: "bathroom" as const,
    url: "/images/banheiros/bathroom-01.jpeg",
    alt: "Suíte de banheiro principal concluída com banheira e acabamento em mármore",
    isPlaceholder: false,
    notes: "WhatsApp Image 2026-09-12 at 12.37.48",
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

export interface BathroomShowcaseItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  alt: string;
  tags: string[];
}

export const BATHROOM_SHOWCASE_IMAGES: BathroomShowcaseItem[] = [
  {
    id: "bath-01",
    title: "Master Suite with Soaking Tub & Custom Wood Vanity",
    subtitle: "Modern Calacatta & Warm Oak Finish",
    description:
      "Revestimento em porcelanato marmorizado, banheira embutida, bancada suspensa em madeira nobre com cuba de apoio e metais pretos foscos.",
    url: "/images/banheiros/bathroom-01.jpeg",
    alt: "Master bathroom with soaking tub, modern wood vanity and matte black fixtures",
    tags: ["Soaking Tub", "Oak Vanity", "Matte Black", "Oval LED Mirror"],
  },
  {
    id: "bath-02",
    title: "Calacatta Gold Walk-In Shower Suite",
    subtitle: "Floor-to-Ceiling Marble & Framed Glass",
    description:
      "Box walk-in com esquadria preta sob medida, revestimento contínuo Calacatta Gold do piso ao teto, cuba esculpida e espelho circular retroiluminado.",
    url: "/images/banheiros/bathroom-02.jpeg",
    alt: "Walk-in shower suite with Calacatta marble and black framed glass enclosure",
    tags: ["Walk-In Shower", "Calacatta Gold", "Framed Glass", "Halo LED Mirror"],
  },
  {
    id: "bath-03",
    title: "Hexagon Accent Tile & Contemporary Vanity",
    subtitle: "Geometric Tile Craftsmanship & Built-in Niche",
    description:
      "Banheira com resguardo de vidro temperado, nicho embutido em pastilhas hexagonais, piso geométrico e iluminação moderna.",
    url: "/images/banheiros/bathroom-03.jpeg",
    alt: "Contemporary bathroom featuring hexagon floor tile, built-in niche and LED mirror",
    tags: ["Hexagon Tiles", "Recessed Niche", "Glass Shield", "Custom Vanity"],
  },
  {
    id: "bath-04",
    title: "Black Hexagon & Contrasting Marble Walk-In",
    subtitle: "Dramatic Contrast & Rain Shower Experience",
    description:
      "Piso hexagonal preto grafite, paredes em mármore acetinado, nicho escuro embutido e ducha de teto em preto fosco de alta vazão.",
    url: "/images/banheiros/bathroom-04.jpeg",
    alt: "Modern walk-in shower with black hexagon floor tile and contrasting marble walls",
    tags: ["Black Hexagon Floor", "Rain Shower", "Contrast Tile", "Modern Vanity"],
  },
  {
    id: "bath-05",
    title: "Ultra-Modern Minimalist Marble & Matte Black Suite",
    subtitle: "Sleek Monolithic Design & Designer Fixtures",
    description:
      "Porcelanato acetinado com veios suaves, vaso sanitário monobloco em preto fosco, cuba de apoio com misturador de bica alta e box minimalista.",
    url: "/images/banheiros/bathroom-05.jpeg",
    alt: "Ultra-modern bathroom with matte black toilet, designer sink and marble tiles",
    tags: ["Matte Black Toilet", "Floating Vanity", "Curbless Glass", "LED Vanity Mirror"],
  },
  {
    id: "bath-06",
    title: "Classic Elegance with Brushed Gold Fixtures",
    subtitle: "Fish Scale Scallop Tile & Heritage Mosaic Floor",
    description:
      "Box com revestimento artesanal tipo escama de peixe, metais e ducha retrô em acabamento ouro escovado / champanhe, e piso em mosaico ornamentado.",
    url: "/images/banheiros/bathroom-06.jpeg",
    alt: "Classic luxury bathroom with brushed gold shower fixtures and scallop tiles",
    tags: ["Brushed Gold Fixtures", "Scallop Tile", "Heritage Floor", "Half-Wall Glass"],
  },
  {
    id: "bath-07",
    title: "Spa-Style Gray Marble with Built-In Shower Bench",
    subtitle: "Built-In Comfort, Wall Niche & Natural Light",
    description:
      "Amplo box de vidro com banco estrutural embutido revestido em mármore, nicho de parede e piso antiderrapante decorado.",
    url: "/images/banheiros/bathroom-07.jpeg",
    alt: "Spa-inspired bathroom featuring gray marble walls and built-in shower bench",
    tags: ["Shower Bench", "Gray Marble", "Floor-to-Ceiling Glass", "Recessed Niche"],
  },
];

export interface KitchenShowcaseItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  alt: string;
  tags: string[];
}

export const KITCHEN_SHOWCASE_IMAGES: KitchenShowcaseItem[] = [
  {
    id: "kitchen-01",
    title: "Gourmet Open-Concept Kitchen & Calacatta Quartz Island",
    subtitle: "Custom Shaker Cabinetry, Stone Surfaces & Farmhouse Sink",
    description:
      "Cozinha integrada de luxo com ampla ilha em bancada de quartzo calacatta, cuba esculpida, armários planejados brancos até o teto e pendentes artesanais.",
    url: "/images/cozinha01.jpeg",
    alt: "Reforma de cozinha gourmet com ilha de quartzo calacatta e armários planejados",
    tags: ["Ilha Gourmet", "Quartzo Calacatta", "Armários Planejados", "Cuba Farmhouse"],
  },
  {
    id: "kitchen-02",
    title: "Center Island Breakfast Bar & Designer Pendant Lighting",
    subtitle: "Seamless Food Prep & Casual Gathering Space",
    description:
      "Visão detalhada da bancada da ilha com banquetas estofadas, prateleiras em madeira nobre e refrigerador embutido em inox.",
    url: "/images/cozinha02.jpeg",
    alt: "Bancada da ilha de cozinha com banquetas e pendentes de iluminação",
    tags: ["Bancada de Refeições", "Prateleiras em Madeira", "Pendentes Decorativos", "Refrigerador Inox"],
  },
  {
    id: "kitchen-03",
    title: "Scenic Window Bay & Professional Chef Range",
    subtitle: "Natural Daylight Integration & High-Output Cooking Center",
    description:
      "Área de cocção gourmet com fogão profissional de alta potência, coifa personalizada em marcenaria e amplas janelas com luz natural.",
    url: "/images/cozinha03.jpeg",
    alt: "Área de cocção gourmet com fogão profissional e janelas panorâmicas",
    tags: ["Fogão Profissional", "Coifa Embutida", "Luz Natural", "Gaveteiros Amplos"],
  },
  {
    id: "kitchen-04",
    title: "Symmetrical Island Layout & Premium Quartz Finish",
    subtitle: "Architectural Balance & Durable Stain-Resistant Surfaces",
    description:
      "Vista frontal simétrica destacando a cascata da bancada de quartzo, misturador monocomando em tom bronze e circulação fluida.",
    url: "/images/cozinha04.jpeg",
    alt: "Vista frontal da ilha de cozinha gourmet com bancada de quartzo e banquetas",
    tags: ["Bancada em Cascata", "Torneira Bronze", "Circulação Otimizada", "Design Simétrico"],
  },
  {
    id: "kitchen-05",
    title: "Full-Height Custom Pantry & Prep Workflow Corridor",
    subtitle: "Floor-to-Ceiling Storage Capacity & Smart Ergonomics",
    description:
      "Corredor de trabalho ergonômico entre a bancada principal e a ilha, com marcenaria sob medida de piso a teto para máxima despensa.",
    url: "/images/cozinha05.jpeg",
    alt: "Corredor de preparo da cozinha com armários planejados piso ao teto",
    tags: ["Despensa Piso ao Teto", "Fluxo de Trabalho", "Bancada Estendida", "Torre de Armários"],
  },
];


