import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JoeLabs — Portfolio',
  description: 'Portfolio de développement web Next.js, TypeScript & Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
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

