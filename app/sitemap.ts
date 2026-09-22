import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://musadvocates.co.ke'

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: '2026-08-20', changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/about`, lastModified: '2026-08-20', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/practice-areas`, lastModified: '2026-08-20', changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/team`, lastModified: '2026-08-20', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/insights`, lastModified: '2026-08-20', changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: '2026-08-20', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/gallery`, lastModified: '2026-08-20', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/careers`, lastModified: '2026-08-20', changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: '2026-08-20', changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms-of-use`, lastModified: '2026-08-20', changeFrequency: 'yearly', priority: 0.3 },
  ]

  const blogUrls: MetadataRoute.Sitemap = [
    { url: `${base}/insights/how-to-enforce-a-foreign-judgment-in-kenya`, lastModified: '2026-05-19', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/insights/acquisition-of-land-in-kenya-due-diligence-and-investigating-the-title`, lastModified: '2026-05-19', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/insights/change-of-name-process-in-kenya`, lastModified: '2026-05-19', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/insights/contesting-unconsented-use-of-photograph-in-kenya`, lastModified: '2026-05-19', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/insights/all-you-need-to-know-about-debt-collection-in-kenya`, lastModified: '2026-05-20', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/insights/summary-dismissal-in-kenya`, lastModified: '2026-05-31', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/insights/injured-during-your-holiday-in-kenya`, lastModified: '2026-07-12', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/insights/divorce-and-judicial-separation-in-kenya-what-you-need-to-know`, lastModified: '2026-08-20', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/insights/norwich-pharmacal-orders-in-kenya`, lastModified: '2026-09-12', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/insights/annulment-of-marriage-in-kenya`, lastModified: '2026-08-22', changeFrequency: 'monthly', priority: 0.7 },
  ]

  const practiceAreaUrls = [{
    url: `${base}/practice-areas`,
    lastModified: '2026-07-12',
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }]

  const teamMembers = [
    { slug: 'susan-moraa-1', lastMod: '2026-05-23' },
    { slug: 'musa-mwana-amutuku-1', lastMod: '2026-08-02' },
    { slug: 'omondi-elphas', lastMod: '2026-07-13' },
  ]

  const teamUrls = teamMembers.map(({ slug, lastMod }) => ({
    url: `${base}/team/${slug}`,
    lastModified: lastMod,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...practiceAreaUrls, ...teamUrls, ...blogUrls]
}
