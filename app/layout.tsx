import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'JoeLabs — Développeur Web Freelance | Next.js & TypeScript',
    template: '%s | JoeLabs'
  },
  description: 'Développeur web freelance spécialisé en Next.js, TypeScript et React. Création de sites vitrines, portfolios et applications SaaS performantes. Expert en SEO et optimisation.',
  keywords: ['développeur web', 'freelance', 'Next.js', 'TypeScript', 'React', 'portfolio', 'site vitrine', 'application web', 'SEO', 'performance'],
  authors: [{ name: 'Jonathan Luembe', url: 'https://portfolio-dev-2025.vercel.app/' }],
  creator: 'Jonathan Luembe',
  publisher: 'JoeLabs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://portfolio-dev-2025.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'JoeLabs — Développeur Web Freelance | Next.js & TypeScript',
    description: 'Développeur web freelance spécialisé en Next.js, TypeScript et React. Création de sites vitrines, portfolios et applications SaaS performantes.',
    url: 'https://portfolio-dev-2025.vercel.app',
    siteName: 'JoeLabs',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JoeLabs - Développeur Web Freelance',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JoeLabs — Développeur Web Freelance',
    description: 'Développeur web freelance spécialisé en Next.js, TypeScript et React.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
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
    name: 'Jonathan Luembe',
    jobTitle: 'Développeur Web Freelance',
    description: 'Développeur web freelance spécialisé en Next.js, TypeScript et React. Création de sites vitrines, portfolios et applications SaaS.',
    url: 'https://portfolio-dev-2025.vercel.app',
    sameAs: [
      'https://github.com/JoeLeDev',
      'https://portfolio-dev-2025.vercel.app'
    ],
    knowsAbout: ['Next.js', 'TypeScript', 'React', 'Développement Web', 'SEO', 'Performance Web'],
    offers: {
      '@type': 'Service',
      name: 'Développement Web',
      description: 'Création de sites vitrines, portfolios et applications web avec Next.js et TypeScript',
      provider: {
        '@type': 'Person',
        name: 'Jonathan Luembe'
      }
    }
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
        <header className="border-b border-gray-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold text-brand">
                JoeLabs
              </Link>
              <ul className="flex gap-6">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-brand transition-colors">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="text-gray-300 hover:text-brand transition-colors">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-brand transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="border-t border-gray-800 mt-20 bg-slate-900">
          <div className="container mx-auto px-4 py-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} JoeLabs. Tous droits réservés.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

