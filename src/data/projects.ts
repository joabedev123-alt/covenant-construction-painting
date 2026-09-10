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
    title: "Open-Concept Custom Kitchen Remodel",
    category: "kitchens",
    categoryLabel: "Kitchen Remodeling",
    image: "/images/kitchen-remodel.jpeg",
    summary: "Complete redesign introducing custom cabinets, subway tile, and recessed architectural lighting.",
    description: "This project re-engineered a previously compartmentalized kitchen into a bright, flowing culinary center. Every element was chosen to balance daily durability with understated luxury.",
    highlights: ["Solid Wood Custom Cabinets", "Modern Clean Backsplash", "Smart Storage & Prep Space", "Professional Installation"],
    beforeImage: "/images/kitchen-remodel.jpeg",
    afterImage: "/images/kitchen-remodel.jpeg",
  },
  {
    id: "project-bathroom-01",
    title: "Spa Master Bath Suite & Custom Tile",
    category: "bathrooms",
    categoryLabel: "Bathroom Remodeling",
    image: "/images/bathroom-remodel.jpeg",
    summary: "Walk-in shower renovation featuring detailed tile work, built-in recessed niche, and mosaic floor.",
    description: "Designed for relaxation and effortless maintenance, this bathroom combines precise tile waterproofing and custom mosaic craftsmanship.",
    highlights: ["Walk-In Shower With Recessed Niche", "Tile & Mosaic Craftsmanship", "Waterproof System & Clean Seals", "Brushed Hardware"],
    beforeImage: "/images/painting-prep-before.jpeg",
    afterImage: "/images/bathroom-remodel.jpeg",
  },
  {
    id: "project-painting-01",
    title: "Precision Interior Wall & Trim Painting",
    category: "painting",
    categoryLabel: "Professional Painting",
    image: "/images/painting-finished.jpeg",
    summary: "Meticulous surface preparation, taping, and satin architectural coating across main living spaces.",
    description: "The secret to enduring paint work lies in relentless surface prep. We smoothed millwork, caulked every seam, and applied uniform coats that elevate the natural light in every room.",
    highlights: ["Exhaustive Masking & Sanding", "Low-VOC Premium Architectural Coatings", "Crisp Cut-Lines on Trim", "Durable Washable Finishes"],
    beforeImage: "/images/painting-prep-before.jpeg",
    afterImage: "/images/painting-finished.jpeg",
  },
  {
    id: "project-kitchen-02",
    title: "Residential Patio & Exterior Construction",
    category: "other",
    categoryLabel: "Home Improvement",
    image: "/images/hero-main.jpeg",
    summary: "High-durability outdoor concrete patio design and architectural entry improvement.",
    description: "Expanding outdoor living space with clean grading, precise joints, and durable construction designed for all New England seasons.",
    highlights: ["Reinforced Concrete Structure", "Clean Architectural Contours", "Seamless Step Transitions", "Enduring Outdoor Finish"],
  },
  {
    id: "project-other-01",
    title: "Staircase Refinish & Lower Level Accent",
    category: "other",
    categoryLabel: "Home Improvement",
    image: "/images/staircase-after.jpeg",
    summary: "Restored stair treads with rich finish, crisp white risers, and bold accent wall paint.",
    description: "By pairing warm hardwood treads with immaculate enamel on the risers and deep contrast wall paint, the space was given dramatic new energy.",
    highlights: ["Refinished Solid Wood Treads", "Chip-Resistant Enamel on Risers", "Accent Wall Finishing", "Clean Edge Transitions"],
    beforeImage: "/images/staircase-before.jpeg",
    afterImage: "/images/staircase-after.jpeg",
  },
  {
    id: "project-painting-02",
    title: "Multi-Story Exterior Siding & Trim Preservation",
    category: "painting",
    categoryLabel: "Professional Painting",
    image: "/images/featured-project.jpeg",
    summary: "Comprehensive scaffolding, exterior prep, and architectural siding coating.",
    description: "Complete exterior modernization delivering weather resistance and curb appeal for multi-story residential architecture.",
    highlights: ["Complete Exterior Preparation", "Weather-Shield Coatings", "Architectural Trim Painting", "Balcony & Siding Restoration"],
  },
  {
    id: "project-other-02",
    title: "Custom Stone Walkway & Entry Finish",
    category: "other",
    categoryLabel: "Home Improvement",
    image: "/images/finishing-detail.jpeg",
    summary: "Precision stamped paver walkway and porch integration with brick accents.",
    description: "Custom exterior masonry walkway designed to elevate home curb appeal with fine joints and durable materials.",
    highlights: ["Stamped Paver Pattern", "Brick Step Transition", "Clean Edging", "High Curb Appeal"],
  },
];
