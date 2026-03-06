export type CityFaq = {
  question: string;
  answer: string;
};

export type CityData = {
  slug: string;
  name: string;
  county: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  homeownerNeeds: string[];
  whyChooseUs: string[];
  serviceSlugs: string[];
  faqs: CityFaq[];
  metaTitle: string;
  metaDescription: string;
};

export const cities: CityData[] = [
  {
    slug: "phoenix",
    name: "Phoenix",
    county: "Maricopa County",
    heroTitle: "Residential Painters in Phoenix, AZ",
    heroSubtitle:
      "Interior, exterior, and cabinet painting for Phoenix homeowners who want dependable quality.",
    intro:
      "Phoenix homes face intense sun, long warm seasons, and constant dust exposure. We provide residential painting services built for these conditions while keeping the process clear and homeowner-friendly.",
    homeownerNeeds: [
      "Exterior coatings that stand up to direct UV and heat",
      "Clean interior finishes that look consistent in bright natural light",
      "Reliable scheduling for busy family households",
      "Straightforward communication from estimate through completion",
    ],
    whyChooseUs: [
      "Family-owned service focused on residential projects",
      "Experience with both established neighborhoods and newer communities",
      "Respectful crews who protect your home and clean up daily",
      "Free estimates and practical recommendations without pressure",
    ],
    serviceSlugs: ["interior-painting", "exterior-painting", "cabinet-painting", "custom-track-homes"],
    faqs: [
      {
        question: "Do you paint homes throughout Phoenix?",
        answer:
          "Yes. We serve homeowners across Phoenix and surrounding neighborhoods with residential-only painting services.",
      },
      {
        question: "What paint options work best in Phoenix heat?",
        answer:
          "Product and finish depend on surface type and exposure. We recommend options designed to perform in high-UV conditions.",
      },
      {
        question: "Can I get a free estimate for a Phoenix home?",
        answer:
          "Yes. We offer free residential painting estimates and provide a clear scope before work begins.",
      },
    ],
    metaTitle: "House Painter Phoenix AZ | Sombrero Painting",
    metaDescription:
      "Sombrero Painting provides residential interior, exterior, and cabinet painting in Phoenix, AZ. Free estimates for homeowners.",
  },
  {
    slug: "glendale",
    name: "Glendale",
    county: "Maricopa County",
    heroTitle: "Residential Painters in Glendale, AZ",
    heroSubtitle:
      "Professional house painting for Glendale homes, from interior refreshes to exterior repaint projects.",
    intro:
      "Glendale homeowners need painting teams that combine quality workmanship with reliable service. We help protect and update homes with residential painting that fits neighborhood standards and day-to-day family life.",
    homeownerNeeds: [
      "Exterior paint systems that hold color in Arizona sun",
      "Interior updates that improve comfort and resale appeal",
      "Cabinet refinishing options that avoid full remodel costs",
      "Contractors who respect HOA and neighborhood expectations",
    ],
    whyChooseUs: [
      "Residential specialists focused on homeowner priorities",
      "Clear prep and finish standards for durable results",
      "Experience with tract-home communities and custom properties",
      "Friendly local service with free written estimates",
    ],
    serviceSlugs: ["interior-painting", "exterior-painting", "cabinet-painting", "custom-track-homes"],
    faqs: [
      {
        question: "Do you provide interior painting in Glendale?",
        answer:
          "Yes. We provide interior painting services throughout Glendale for occupied residential homes.",
      },
      {
        question: "Can you repaint stucco exteriors in Glendale neighborhoods?",
        answer:
          "Yes. Stucco repainting is a core part of our exterior service in Glendale and nearby communities.",
      },
      {
        question: "Do you offer cabinet painting for Glendale kitchens?",
        answer:
          "Yes. We paint kitchen and bathroom cabinets as part of our residential painting services.",
      },
    ],
    metaTitle: "House Painter Glendale AZ | Sombrero Painting",
    metaDescription:
      "Local residential painters in Glendale, AZ offering interior painting, exterior painting, and cabinet painting with free estimates.",
  },
];


