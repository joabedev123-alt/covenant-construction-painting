export interface Project {
  id: string;
  title: string;
  category: "kitchens" | "bathrooms" | "painting" | "other";
  categoryLabel: string;
  image: string;
  summary: string;
  description: string;
  highlights: string[];
  beforeImage?: string;
  afterImage?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "project-kitchen-01",
    title: "Open-Concept Coastal Kitchen",
    category: "kitchens",
    categoryLabel: "Kitchen Remodeling",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85",
    summary: "Complete redesign introducing custom inset shaker cabinets, waterfall quartz, and recessed architectural lighting.",
    description: "This project re-engineered a previously compartmentalized kitchen into a bright, flowing culinary center. Every element was chosen to balance daily durability with understated luxury.",
    highlights: ["Solid Wood Custom Cabinets", "Quartz Island with Waterfall Edge", "Concealed Smart Storage", "Designer Pendant Integration"],
    beforeImage: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80",
    afterImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "project-bathroom-01",
    title: "Minimalist Master Bath Suite",
    category: "bathrooms",
    categoryLabel: "Bathroom Remodeling",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=85",
    summary: "Spa-grade transformation featuring floor-to-ceiling porcelain slab, frameless glass enclosure, and matte gold fixtures.",
    description: "Designed for relaxation and effortless maintenance, this master bathroom combines natural daylighting with precise tile waterproofing and custom floating double vanity.",
    highlights: ["Zero-Threshold Walk-In Shower", "Linear Drain & Waterproof Membrane", "Floating Walnut Vanity", "Brushed Brass Fixtures"],
    beforeImage: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80",
    afterImage: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "project-painting-01",
    title: "Historic Colonial Interior Refresh",
    category: "painting",
    categoryLabel: "Professional Painting",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=85",
    summary: "Precision surface preparation, trim restoration, and low-VOC satin finish throughout main living areas.",
    description: "The secret to enduring paint work lies in relentless surface prep. We smoothed aged millwork, caulked every seam, and applied uniform coats that elevate the natural light in every room.",
    highlights: ["Exhaustive Caulking & Sanding", "Low-VOC Premium Architectural Coatings", "Crisp Cut-Lines on Millwork", "Durable Washable Wall Finishes"],
  },
  {
    id: "project-kitchen-02",
    title: "Transitional Gourmet Kitchen",
    category: "kitchens",
    categoryLabel: "Kitchen Remodeling",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    summary: "Spacious layout with rich contrast cabinetry, paneled appliances, and natural oak hardwood floors.",
    description: "Focused on functional zoning between food prep, entertaining, and clean-up, this remodel offers high-capacity storage within an aesthetically calm environment.",
    highlights: ["Integrated Range Hood", "Hidden Walk-In Pantry Door", "Handcrafted Subway Backsplash", "Under-Cabinet Accent Glow"],
  },
  {
    id: "project-bathroom-02",
    title: "Guest Bath Contemporary Refresh",
    category: "bathrooms",
    categoryLabel: "Bathroom Remodeling",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85",
    summary: "Optimization of a compact footprint with recessed medicine cabinet, subway tile, and high-efficiency plumbing.",
    description: "Small bathrooms demand perfection in alignment. We centered each fixture, maximized vertical storage, and introduced a light-reflecting glass partition.",
    highlights: ["Space-Saving Custom Niche", "Seamless Glass Sliding Panel", "Patterned Floor Ceramic", "Anti-Fog LED Mirror"],
  },
  {
    id: "project-other-01",
    title: "Architectural Staircase & Foyer Refinish",
    category: "other",
    categoryLabel: "Home Improvement",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=85",
    summary: "Refinishing worn stair treads with a rich natural stain coupled with crisp white painted risers and spindles.",
    description: "The entryway creates the first impression of your home. By pairing deep-toned hardwood with immaculate enamel paint on the balusters, the foyer was given new vitality.",
    highlights: ["Hand-Sanded Oak Treads", "Chip-Resistant Enamel on Spindles", "Structural Reinforcement", "Clean Edge Detailing"],
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "project-painting-02",
    title: "Exterior Siding & Trim Preservation",
    category: "painting",
    categoryLabel: "Professional Painting",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=85",
    summary: "Power washing, scraped peeling layers, primed bare wood, and dual coats of weather-shield acrylic.",
    description: "New England weather requires robust exterior defense. We thoroughly scraped, primed, and sealed all soffits, facias, and clapboards for long-lasting protection.",
    highlights: ["Full Moisture & Rot Inspection", "High-Build Elastomeric Priming", "UV & Mildew Resistant Finish", "Window Glazing Restoration"],
  },
  {
    id: "project-other-02",
    title: "Living Room Custom Built-Ins & Millwork",
    category: "other",
    categoryLabel: "Home Improvement",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85",
    summary: "Floor-to-ceiling custom bookcase cabinetry framing a natural stone fireplace mantle.",
    description: "Tailored to fit the room's exact proportions, this architectural centerpiece adds substantial storage, concealed wiring, and classic crown molding detail.",
    highlights: ["Bespoke Cabinet Carpentry", "Integrated Dimmer Backlighting", "Crown & Baseboard Matching", "Durable Lacquer Finish"],
  },
];
