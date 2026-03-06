import { cities, type CityData } from "../data/cities";
import { services, type ServiceData } from "../data/services";

export const cityMap = new Map<string, CityData>(cities.map((city) => [city.slug, city]));
export const serviceMap = new Map<string, ServiceData>(services.map((service) => [service.slug, service]));

export function getCityBySlug(slug: string): CityData | undefined {
  return cityMap.get(slug);
}

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return serviceMap.get(slug);
}

export function getServicesBySlugs(slugs: string[]): ServiceData[] {
  return slugs
    .map((slug) => serviceMap.get(slug))
    .filter((service): service is ServiceData => Boolean(service));
}

export function getCitiesBySlugs(slugs: string[]): CityData[] {
  return slugs
    .map((slug) => cityMap.get(slug))
    .filter((city): city is CityData => Boolean(city));
}
