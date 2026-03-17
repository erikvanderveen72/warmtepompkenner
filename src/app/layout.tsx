import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: {
    template: '%s | Warmtepompkenner.nl',
    default: 'Warmtepompkenner.nl - Vergelijk Warmtepompen 2026 | Onafhankelijk & Gratis',
  },
  description: 'Vergelijk warmtepompen van 20+ merken. Bereken je besparing, ontdek subsidies (ISDE) en vind de beste warmtepomp voor jouw woning. 100% onafhankelijk.',
  keywords: ['warmtepomp', 'warmtepomp vergelijken', 'warmtepomp kosten', 'ISDE subsidie', 'warmtepomp besparing', 'hybride warmtepomp', 'lucht-water warmtepomp'],
  metadataBase: new URL('https://warmtepompkenner.nl'),
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://warmtepompkenner.nl',
    siteName: 'Warmtepompkenner.nl',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Warmtepompkenner.nl - Vergelijk Warmtepompen' }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.png'] },
  alternates: {
    canonical: 'https://warmtepompkenner.nl',
    languages: { 'nl-NL': 'https://warmtepompkenner.nl' },
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large' as const,
    'max-video-preview': -1,
  },
  verification: {
    google: 'wVVI8HPqD4xk3plH9zbbk7CHOgZ6rvc1npxPD4H7jBk',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-M4M0S10JYV" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-M4M0S10JYV');
        ` }} />
        {/* Geo meta tags */}
        <meta name="geo.country" content="NL" />
        <meta name="geo.placename" content="Netherlands" />
        <meta name="geo.position" content="52.3676;4.9041" />
        {/* JSON-LD structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebSite',
              name: 'Warmtepompkenner.nl',
              url: 'https://warmtepompkenner.nl',
              description: 'Onafhankelijk vergelijkingsplatform voor warmtepompen in Nederland',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://warmtepompkenner.nl/zoeken?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            },
            {
              '@type': 'Organization',
              name: 'Warmtepompkenner.nl',
              url: 'https://warmtepompkenner.nl',
              logo: 'https://warmtepompkenner.nl/logo.svg',
              description: 'Onafhankelijk platform voor het vergelijken van warmtepompen, subsidies en installatiekosten in Nederland.',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                availableLanguage: 'Dutch',
              },
            },
          ],
        }) }} />
      </head>
      <body className={`${inter.variable} antialiased bg-surface`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
