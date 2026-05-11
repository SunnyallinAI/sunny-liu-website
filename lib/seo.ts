import { Metadata } from 'next'

export const siteConfig = {
  title: 'SUNNY LIU | Global Growth Strategist',
  description:
    'Global Growth Strategist specializing in Affiliate Marketing, AdTech, Gaming Growth, and International Partnerships.',
  url: 'https://sunnyliu.com',
  ogImage: '/og-image.jpg',
  author: 'Sunny Liu',
}

export function generateMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    title: overrides?.title || siteConfig.title,
    description: overrides?.description || siteConfig.description,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      title: overrides?.title || siteConfig.title,
      description: overrides?.description || siteConfig.description,
      url: siteConfig.url,
      siteName: 'Sunny Liu',
      images: siteConfig.ogImage,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: overrides?.title || siteConfig.title,
      description: overrides?.description || siteConfig.description,
      images: siteConfig.ogImage,
    },
    alternates: {
      canonical: siteConfig.url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
    ...overrides,
  }
}