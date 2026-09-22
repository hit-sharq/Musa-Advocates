import type { MetadataRoute } from 'next'
import { insights } from '@/components/site-chrome'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://blog.musadvocates.co.ke'

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: '2026-08-20', changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/about`, lastModified: '2026-08-20', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/practice-areas`, lastModified: '2026-08-20', changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/team`, lastModified: '2026-08-20', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/insights`, lastModified: '2026-08-20', changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: '2026-08-20', changeFrequency: 'monthly', priority: 0.8 },
  ]

  const insightUrls: MetadataRoute.Sitemap = insights.map((item) => ({
    url: `${base}/insights/${item.slug}`,
    lastModified: item.modified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...insightUrls]
}
