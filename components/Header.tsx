'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const NAV_LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/work', label: 'Réalisations' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-gray-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4" aria-label="Navigation principale">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <Image
              src="/work/LogoJoe.png"
              alt="JoeLabs Logo"
              width={24}
              height={24}
              className="w-6 h-6 rounded-full object-cover object-center"
            />
            <span className="text-xl font-bold text-brand">JoeLabs</span>
          </Link>

          <ul className="hidden md:flex gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-gray-300 hover:text-brand transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-600 text-gray-200 hover:border-brand hover:text-brand transition-colors"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="sr-only">{open ? 'Fermer' : 'Menu'}</span>
            {open ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {open && (
          <ul id="mobile-menu" className="md:hidden mt-4 pb-2 flex flex-col gap-1 border-t border-slate-700 pt-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-2 py-3 text-gray-200 hover:text-brand rounded-lg hover:bg-slate-800 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
