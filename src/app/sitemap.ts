import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://warmtepompkenner.nl';
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/kosten`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/subsidies`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/merken`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/besparing`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/soorten`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/installatie`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
