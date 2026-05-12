import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SUNNY LIU | Global Growth Strategist',
  description:
    'Global Growth Strategist specializing in Affiliate Marketing, AdTech, Gaming Growth, and International Partnerships. 10+ years scaling publisher networks and driving $36M+ revenue.',
  metadataBase: new URL('https://www.hellosunny.site'),
  openGraph: {
    title: 'SUNNY LIU | Global Growth Strategist',
    description: 'AI-Era Global Growth Strategist with 10+ years experience in affiliate marketing, AdTech, and gaming growth across APAC markets.',
    images: ['/og-image.jpg'],
    url: 'https://www.hellosunny.site',
    siteName: 'Sunny Liu - Growth Strategist',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SUNNY LIU | Global Growth Strategist',
    description: 'AI-Era Global Growth Strategist with 10+ years experience in affiliate marketing and APAC growth.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.hellosunny.site',
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
  authors: [{ name: 'Sunny Liu' }],
  keywords: [
    'growth strategist',
    'affiliate marketing',
    'AdTech',
    'gaming growth',
    'international partnerships',
    'digital marketing',
    'AI marketing',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/png"
          sizes="180x180"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}