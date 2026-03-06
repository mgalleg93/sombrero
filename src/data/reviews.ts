export type ReviewData = {
  id: string;
  name: string;
  city: string;
  citySlug: string;
  rating: number;
  text: string;
  serviceSlug: string;
};

export const reviews: ReviewData[] = [
  {
    id: "review-1",
    name: "Rachel M.",
    city: "Phoenix",
    citySlug: "phoenix",
    rating: 5,
    serviceSlug: "interior-painting",
    text:
      "Sombrero Painting made our living room and hallways look brand new. The crew was on time, careful around furniture, and cleaned up each day.",
  },
  {
    id: "review-2",
    name: "Daniel T.",
    city: "Glendale",
    citySlug: "glendale",
    rating: 5,
    serviceSlug: "exterior-painting",
    text:
      "Our stucco home had serious sun wear and they brought it back to life. Great communication and no surprises in the estimate.",
  },
  {
    id: "review-3",
    name: "Maria C.",
    city: "Phoenix",
    citySlug: "phoenix",
    rating: 5,
    serviceSlug: "cabinet-painting",
    text:
      "We were considering replacing cabinets, but painting was the better move. Finish quality is smooth and durable and the kitchen feels updated.",
  },
  {
    id: "review-4",
    name: "Anthony P.",
    city: "Glendale",
    citySlug: "glendale",
    rating: 5,
    serviceSlug: "custom-track-homes",
    text:
      "They handled our tract home repaint with real attention to detail. The team respected our schedule and kept the project moving.",
  },
  {
    id: "review-5",
    name: "Lisa R.",
    city: "Phoenix",
    citySlug: "phoenix",
    rating: 5,
    serviceSlug: "exterior-painting",
    text:
      "Professional from start to finish. They explained prep, paint options for Arizona heat, and delivered exactly what they promised.",
  },
];

export const featuredReviewIds = ["review-1", "review-2", "review-3"];
