export type GalleryCategory = "interior" | "exterior" | "cabinets";

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  title: string;
  src: string;
  alt: string;
};

export const galleryCategoryLabels: Record<GalleryCategory, string> = {
  interior: "Interior Painting",
  exterior: "Exterior Painting",
  cabinets: "Cabinet Painting",
};

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    category: "interior",
    title: "Open living room repaint",
    src: "/images/gallery/interior-living-room.svg",
    alt: "Freshly painted interior living room in a Phoenix home",
  },
  {
    id: "gallery-2",
    category: "interior",
    title: "Bedroom and trim refresh",
    src: "/images/gallery/interior-bedroom-trim.svg",
    alt: "Crisp bedroom walls and white trim after interior painting",
  },
  {
    id: "gallery-3",
    category: "exterior",
    title: "Stucco exterior repaint",
    src: "/images/gallery/exterior-stucco-home.svg",
    alt: "Arizona stucco home with new exterior paint finish",
  },
  {
    id: "gallery-4",
    category: "exterior",
    title: "Front entry transformation",
    src: "/images/gallery/exterior-front-door.svg",
    alt: "Exterior painting project with refreshed front entry and trim",
  },
  {
    id: "gallery-5",
    category: "cabinets",
    title: "Kitchen cabinet refinishing",
    src: "/images/gallery/cabinet-kitchen-white.svg",
    alt: "Kitchen cabinets refinished in a clean white paint color",
  },
  {
    id: "gallery-6",
    category: "cabinets",
    title: "Two-tone cabinet update",
    src: "/images/gallery/cabinet-island-charcoal.svg",
    alt: "Two-tone painted kitchen cabinets with darker island finish",
  },
];
