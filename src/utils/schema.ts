import { business } from "../data/business";
import { cities } from "../data/cities";
import type { ReviewData } from "../data/reviews";
import type { ServiceData } from "../data/services";

type FaqItem = {
  question: string;
  answer: string;
};

const areaServed = cities.map((city) => ({
  "@type": "City",
  name: city.name,
  url: `${business.website}/service-areas/${city.slug}/`,
}));

function toAbsoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${business.website}${path}`;
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "PaintingContractor",
    "@id": `${business.website}/#localbusiness`,
    name: business.name,
    url: business.website,
    description: business.tagline,
    image: `${business.website}/images/og-default.svg`,
    telephone: business.phoneHref,
    email: business.email,
    priceRange: "$$",
    areaServed,
    address: {
      "@type": "PostalAddress",
      ...business.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.ratingValue,
      reviewCount: business.reviewCount,
    },
  };
}

export function getServiceSchema(service: ServiceData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: `${service.name} - ${business.name}`,
    description: service.shortDescription,
    provider: {
      "@id": `${business.website}/#localbusiness`,
    },
    areaServed,
    url: `${business.website}/services/${service.slug}/`,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      description: "Free residential painting estimate",
      availability: "https://schema.org/InStock",
    },
  };
}

export function getReviewSchema(reviewList: ReviewData[]) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${business.website}/reviews/#review-collection`,
    name: business.name,
    url: `${business.website}/reviews/`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.ratingValue,
      reviewCount: business.reviewCount,
    },
    review: reviewList.map((review) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
      },
      author: {
        "@type": "Person",
        name: review.name,
      },
      reviewBody: review.text,
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  };
}

export function getFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
