import React from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from "next";
import "./globals.css";
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://asafespaceformen.org'), 
  title: {
    default: 'A Safe Space For Men',
    template: '%s | A Safe Space For Men'
  },
  description: 'Creating community for men\'s mental health in Detroit and beyond. Breaking barriers, building community, and fostering resilience.',
  keywords: ['men\'s mental health', 'Detroit', 'support groups', 'mental wellness', 'community'],
  authors: [{ name: 'A Safe Space For Men' }],
  creator: 'A Safe Space For Men',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://asafespaceformen.org', 
    siteName: 'A Safe Space For Men',
    title: 'A Safe Space For Men',
    description: 'Creating community for men\'s mental health in Detroit and beyond. Breaking barriers, building community, and fostering resilience.',
    images: [
      {
        url: '/images/bts_banner.jpeg', 
        width: 1536,
        height: 698,
        alt: 'A Safe Space For Men - Creating community for men\'s mental health',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Safe Space For Men',
    description: 'Creating community for men\'s mental health in Detroit and beyond.',
    images: ['/images/bts_banner.jpeg'], 
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
    google: '03svPl1ktx8ZGY35rq0rbhagndpKt0ady5cGGA74GcU',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NonprofitOrganization",
              "name": "A Safe Space For Men",
              "url": "https://asafespaceformen.org",
              "logo": "https://asafespaceformen.org/images/handshake_wordcloud.png",
              "description": "Community-based mental health support for men in Detroit. Free support groups, resources, and connections for men dealing with stress, anxiety, depression, and life's challenges.",
              "email": "william@asafespaceformen.org",
              "telephone": "+13139005214",
              "areaServed": {
                "@type": "City",
                "name": "Detroit",
                "sameAs": "https://www.wikidata.org/wiki/Q12439"
              },
              "knowsAbout": [
                "Men's Mental Health",
                "Suicide Prevention",
                "Community Support Groups",
                "Mental Health Resources"
              ],
              "sameAs": [],
              "nonprofit501Status": "501c3",
              "foundingLocation": {
                "@type": "Place",
                "name": "Detroit, Michigan"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}