import Link from 'next/link'
import { CONTACT_EMAIL, LINKEDIN_URL, OWNER_NAME, SITE_NAME } from '@/lib/site'

const FOOTER_LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/work', label: 'Réalisations' },
  { href: '/contact', label: 'Contact' },
]

const LEGAL_LINKS = [
  { href: '/mentions-legales', label: 'Mentions légales' },
  { href: '/politique-de-confidentialite', label: 'Politique de confidentialité' },
]

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20 bg-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-left">
          <div>
            <p className="text-brand font-bold text-lg mb-3">{SITE_NAME}</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Développeur web freelance — sites vitrines et applications React performantes, orientées conversion et SEO.
            </p>
          </div>

          <div>
            <p className="text-white font-semibold mb-3">Navigation</p>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-brand transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold mb-3">Contact</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-400 hover:text-brand transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand transition-colors"
                >
                  LinkedIn — {OWNER_NAME}
                </a>
              </li>
              <li>
                <a href="https://jonathanluembe.dev" className="text-gray-400 hover:text-brand transition-colors">
                  Portfolio personnel
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. Tous droits réservés.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-brand transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
