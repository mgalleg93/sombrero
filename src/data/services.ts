export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceData = {
  slug: string;
  name: string;
  shortDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  whatsIncluded: string[];
  benefits: string[];
  localWhyItMatters: string;
  process: ServiceProcessStep[];
  faqs: ServiceFaq[];
  relatedServiceSlugs: string[];
  applicableCitySlugs: string[];
  metaTitle: string;
  metaDescription: string;
};

export const services: ServiceData[] = [
  {
    slug: "interior-painting",
    name: "Interior Painting",
    shortDescription:
      "Clean, careful painting for walls, ceilings, trim, and doors in occupied homes.",
    heroTitle: "Interior Painting for Phoenix and Glendale Homes",
    heroSubtitle:
      "Residential interior painting with detailed prep, tidy work areas, and durable finishes.",
    intro:
      "A quality interior paint job should improve how your home feels every day. We focus on clean lines, even coverage, and respectful in-home work practices so your project is smooth from start to finish.",
    whatsIncluded: [
      "Room-by-room prep including masking and floor protection",
      "Minor wall patching and surface sanding before painting",
      "Application on walls, ceilings, doors, and trim as requested",
      "Daily cleanup and final walkthrough with touch-ups",
    ],
    benefits: [
      "Brighter, cleaner spaces with a consistent finish",
      "Protection against normal interior wear and scuffs",
      "A straightforward update before selling or moving in",
      "Professional work that saves you time and disruption",
    ],
    localWhyItMatters:
      "Phoenix-area homes get heavy sunlight through large windows, which can reveal uneven paint quickly. Solid prep and the right sheen selection help interiors hold their look longer.",
    process: [
      {
        title: "In-home estimate",
        description: "We review rooms, surfaces, and priorities so you get clear scope and pricing.",
      },
      {
        title: "Prep and protection",
        description: "Furniture and floors are protected, surfaces are patched, and transitions are masked.",
      },
      {
        title: "Professional application",
        description: "We apply paint for durable coverage with careful attention to corners and trim lines.",
      },
      {
        title: "Walkthrough and final details",
        description: "We review the completed work with you and handle final touch-ups before sign-off.",
      },
    ],
    faqs: [
      {
        question: "Can you paint while we are still living in the home?",
        answer:
          "Yes. Most interior projects are completed in occupied homes. We stage work room by room and keep areas as clean and usable as possible.",
      },
      {
        question: "Do you help with paint color decisions?",
        answer:
          "We can guide sheen and color direction based on lighting, room use, and existing finishes.",
      },
      {
        question: "How long does interior painting usually take?",
        answer:
          "It depends on square footage and prep needs, but most residential interior projects are completed in a few days to about a week.",
      },
    ],
    relatedServiceSlugs: ["cabinet-painting", "exterior-painting", "custom-track-homes"],
    applicableCitySlugs: ["phoenix", "glendale"],
    metaTitle: "Interior Painting in Phoenix & Glendale, AZ | Sombrero Painting",
    metaDescription:
      "Residential interior painting in Phoenix and Glendale with careful prep, clean workmanship, and free estimates.",
  },
  {
    slug: "exterior-painting",
    name: "Exterior Painting",
    shortDescription:
      "Long-lasting exterior painting for stucco homes, trim, and garage doors in Arizona climates.",
    heroTitle: "Exterior House Painting Built for Arizona Weather",
    heroSubtitle:
      "Protect your home and refresh curb appeal with professional exterior painting in Phoenix and Glendale.",
    intro:
      "Exterior painting in the Valley is about more than color. Sun exposure, heat, and dust all impact how coatings perform. We prep thoroughly and apply products suited for desert conditions so your home looks good and stays protected.",
    whatsIncluded: [
      "Pressure washing and surface cleaning as needed",
      "Scraping, sanding, and caulking for solid adhesion",
      "Coating application on stucco, fascia, trim, and doors",
      "Site protection for walkways, landscaping, and fixtures",
    ],
    benefits: [
      "Improved curb appeal and neighborhood presentation",
      "Better protection from sun and seasonal weather shifts",
      "Reduced cracking and early paint failure from poor prep",
      "Professional finish consistency across all exterior surfaces",
    ],
    localWhyItMatters:
      "Phoenix and Glendale homes face intense UV exposure for most of the year. Correct prep and quality exterior coatings are key for keeping color and preventing premature breakdown.",
    process: [
      {
        title: "Exterior evaluation",
        description: "We inspect stucco, trim, and previous coatings to define prep and product needs.",
      },
      {
        title: "Surface prep",
        description: "Cleaning, repairs, and caulking are completed so new paint bonds correctly.",
      },
      {
        title: "Prime and paint",
        description: "We apply systems matched to your surfaces and sun exposure for durable performance.",
      },
      {
        title: "Detail check",
        description: "Final walkthrough confirms edges, coverage, and clean project completion.",
      },
    ],
    faqs: [
      {
        question: "How often should a Phoenix home be repainted outside?",
        answer:
          "It varies by exposure and materials, but many homes need repainting every 6 to 10 years with proper prep and maintenance.",
      },
      {
        question: "Do you paint stucco homes?",
        answer:
          "Yes. Stucco is common in our service area and we follow prep steps specific to stucco texture and condition.",
      },
      {
        question: "Can you help with HOA-friendly color choices?",
        answer:
          "Yes. We can work within HOA palettes and help you choose exterior colors that fit your neighborhood.",
      },
    ],
    relatedServiceSlugs: ["interior-painting", "custom-track-homes", "cabinet-painting"],
    applicableCitySlugs: ["phoenix", "glendale"],
    metaTitle: "Exterior House Painting in Phoenix & Glendale | Sombrero Painting",
    metaDescription:
      "Exterior house painting for Phoenix and Glendale homes, including stucco prep, durable coatings, and free estimates.",
  },
  {
    slug: "cabinet-painting",
    name: "Cabinet Painting",
    shortDescription:
      "Factory-style cabinet painting for kitchens and bathrooms without a full cabinet replacement.",
    heroTitle: "Cabinet Painting for a Clean, Updated Kitchen",
    heroSubtitle:
      "Give your cabinets a fresh look with professional prep and smooth, durable finishes.",
    intro:
      "Cabinet painting can transform kitchens and bathrooms at a fraction of full replacement costs. We focus on prep, sanding, and finish quality so cabinets look refined and hold up to daily use.",
    whatsIncluded: [
      "Door and drawer removal, labeling, and prep",
      "Degreasing, sanding, and priming for strong adhesion",
      "Sprayed or brushed finish based on project scope",
      "Reassembly and detail inspection for alignment and finish quality",
    ],
    benefits: [
      "Major visual update without full remodel disruption",
      "Durable finish suited for frequent touch points",
      "Cost-effective kitchen refresh for resale or personal use",
      "Cleaner, brighter look with modern color options",
    ],
    localWhyItMatters:
      "Many Phoenix-area homeowners want an updated kitchen without the cost of full cabinet replacement. Professional cabinet painting creates a high-impact upgrade while keeping the existing layout.",
    process: [
      {
        title: "Cabinet condition review",
        description: "We confirm cabinet material, existing coating, and best finish system for your goals.",
      },
      {
        title: "Prep and masking",
        description: "Surfaces are cleaned and prepped while surrounding spaces are protected.",
      },
      {
        title: "Finish application",
        description: "We apply durable coatings for a smooth, uniform cabinet appearance.",
      },
      {
        title: "Reinstall and inspect",
        description: "Doors and drawers are reinstalled and adjusted for clean final presentation.",
      },
    ],
    faqs: [
      {
        question: "Is cabinet painting durable enough for a busy kitchen?",
        answer:
          "Yes. Proper cleaning, prep, and product selection are what make cabinet finishes last in high-use spaces.",
      },
      {
        question: "Can you paint bathroom cabinets too?",
        answer:
          "Absolutely. We paint kitchen, bathroom, laundry, and built-in cabinet surfaces.",
      },
      {
        question: "How long before cabinets can be used normally?",
        answer:
          "Most projects are functional quickly, but full cure time can take longer. We provide clear care guidance at completion.",
      },
    ],
    relatedServiceSlugs: ["interior-painting", "custom-track-homes", "exterior-painting"],
    applicableCitySlugs: ["phoenix", "glendale"],
    metaTitle: "Cabinet Painting in Phoenix & Glendale, AZ | Sombrero Painting",
    metaDescription:
      "Professional cabinet painting for Phoenix and Glendale homes with durable finishes and careful prep.",
  },
  {
    slug: "custom-track-homes",
    name: "Custom & Tract Homes",
    shortDescription:
      "Residential painting workflows tailored to both custom homes and tract-home neighborhoods.",
    heroTitle: "Painting Services for Custom and Tract Homes",
    heroSubtitle:
      "From one-of-a-kind homes to planned communities, we adapt scope and finish standards to your property.",
    intro:
      "Every home has different needs. Custom homes often involve specialty surfaces and design-driven finishes, while tract homes may prioritize consistency, scheduling, and neighborhood standards. We handle both with a clear process.",
    whatsIncluded: [
      "Project planning matched to home style and timeline",
      "Attention to architectural details, trim profiles, and feature areas",
      "Consistent production workflow for repeatable tract-home scopes",
      "Coordination for occupied homes and HOA neighborhoods",
    ],
    benefits: [
      "A painting plan that fits your home type and priorities",
      "Consistent quality from prep through final walkthrough",
      "Flexible scheduling around family routines",
      "Trusted execution in both high-detail and high-efficiency projects",
    ],
    localWhyItMatters:
      "The Phoenix metro includes everything from newer planned communities to highly customized homes. A one-size approach does not work across both. Matching process to property type leads to better outcomes.",
    process: [
      {
        title: "Scope alignment",
        description: "We define where detail focus and efficiency are most important for your project type.",
      },
      {
        title: "Materials and prep strategy",
        description: "Products and prep methods are selected for surfaces, exposure, and expected wear.",
      },
      {
        title: "Execution",
        description: "Work is completed with clear communication and minimal disruption to your routine.",
      },
      {
        title: "Final walkthrough",
        description: "We confirm quality and consistency across all completed spaces and elevations.",
      },
    ],
    faqs: [
      {
        question: "Do you handle both smaller homes and larger custom homes?",
        answer:
          "Yes. We paint homes of different sizes and layouts, and tailor prep and production plans accordingly.",
      },
      {
        question: "Can you work in HOA communities?",
        answer:
          "Yes. We regularly coordinate with HOA requirements and approved color selections.",
      },
      {
        question: "Is this service interior or exterior?",
        answer:
          "Both. This service highlights how we adapt our painting process to the property type across interior and exterior scopes.",
      },
    ],
    relatedServiceSlugs: ["interior-painting", "exterior-painting", "cabinet-painting"],
    applicableCitySlugs: ["phoenix", "glendale"],
    metaTitle: "Custom & Tract Home Painters in Phoenix Metro | Sombrero Painting",
    metaDescription:
      "Residential painting tailored to custom homes and tract homes across Phoenix and Glendale, with clear process and reliable workmanship.",
  },
];
