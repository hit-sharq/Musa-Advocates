import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://musadvocates.co.ke'),
  title: { default: 'Musa & Musa Advocates | Trusted Legal Counsel in Kenya', template: '%s | Musa & Musa Advocates' },
  description: 'Musa & Musa Advocates is a Nairobi-based law firm providing trusted legal counsel in civil litigation, criminal defence, family law, corporate law, property and compensation claims across Kenya.',
  keywords: ['law firm in Kenya', 'advocates in Nairobi', 'Kenyan lawyers', 'civil litigation Kenya', 'Musa and Musa Advocates'],
  alternates: { canonical: 'https://musadvocates.co.ke' },
  openGraph: { title: 'Musa & Musa Advocates | Trusted Legal Counsel in Kenya', description: 'Duty, trust and precision in every legal matter.', url: 'https://musadvocates.co.ke', siteName: 'Musa & Musa Advocates', locale: 'en_KE', type: 'website', images: [{ url: '/images/logo.png', width: 1024, height: 1024, alt: 'Musa & Musa Advocates crest' }] },
  twitter: { card: 'summary', title: 'Musa & Musa Advocates', description: 'Trusted legal counsel in Kenya.' },
  robots: { index: true, follow: true },
  icons: { icon: '/images/logo.png', apple: '/images/logo.png' },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#081b3a', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-KE" suppressHydrationWarning><body suppressHydrationWarning>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'LegalService', name: 'Musa & Musa Advocates', url: 'https://musadvocates.co.ke', email: 'info@musadvocates.co.ke', telephone: '+254758251399', address: { '@type': 'PostalAddress', streetAddress: '6076 Rhapta Road', addressLocality: 'Nairobi', addressCountry: 'KE' }, areaServed: 'Kenya' }) }} />{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
