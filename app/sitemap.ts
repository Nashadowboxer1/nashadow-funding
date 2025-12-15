import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.nashadow.com';

  const routes = ['', '/about', '/services', '/process', '/contact', '/disclosures'];

  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));
}
