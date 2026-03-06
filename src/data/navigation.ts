import { cities } from "./cities";
import { services } from "./services";

export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Reviews", href: "/reviews/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export const footerQuickLinks: NavItem[] = [
  ...primaryNav,
  { label: "Service Areas", href: "/service-areas/" },
];

export const servicePageLinks: NavItem[] = services.map((service) => ({
  label: service.name,
  href: `/services/${service.slug}/`,
}));

export const cityPageLinks: NavItem[] = cities.map((city) => ({
  label: `${city.name}, AZ`,
  href: `/service-areas/${city.slug}/`,
}));
