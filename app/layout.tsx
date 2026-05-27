import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { LINKEDIN_URL, OWNER_NAME, SITE_NAME, SITE_URL } from '@/lib/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'JoeLabs — Développeur Web Freelance | React & TypeScript',
    template: '%s | JoeLabs',
  },
  description:
    'Développeur web freelance spécialisé en React, TypeScript et applications web performantes. Sites vitrines, portfolios et projets sur mesure. Expert SEO et optimisation.',
  keywords: [
    'développeur web',
    'freelance',
    'React',
    'TypeScript',
    'Next.js',
    'site vitrine',
    'application web',
    'SEO',
    'performance',
  ],
  authors: [{ name: OWNER_NAME, url: `${SITE_URL}/` }],
  creator: OWNER_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'JoeLabs — Développeur Web Freelance | React & TypeScript',
    description:
      'Développeur web freelance spécialisé en React et TypeScript. Création de sites vitrines et applications web performantes.',
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: '/og-banner.png',
        width: 1200,
        height: 630,
        alt: 'JoeLabs — Développeur Web Freelance React & TypeScript',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JoeLabs — Développeur Web Freelance',
    description: 'Développeur web freelance spécialisé en React et TypeScript.',
    images: ['/og-banner.png'],
    creator: '@JoeLeDev',
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
  icons: {
    icon: [{ url: '/work/LogoJoe.png', type: 'image/png' }],
    apple: [{ url: '/work/LogoJoe.png', sizes: '180x180', type: 'image/png' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: OWNER_NAME,
    jobTitle: 'Développeur Web Freelance',
    description:
      'Développeur web freelance spécialisé en React, TypeScript et applications web performantes.',
    url: SITE_URL,
    sameAs: [SITE_URL, LINKEDIN_URL],
    knowsAbout: ['React', 'TypeScript', 'Next.js', 'Développement Web', 'SEO', 'Performance Web'],
    offers: {
      '@type': 'Service',
      name: 'Développement Web',
      description: 'Création de sites vitrines et applications web avec React et TypeScript',
      provider: {
        '@type': 'Person',
        name: OWNER_NAME,
      },
    },
  }

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
