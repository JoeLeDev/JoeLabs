import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTACT_EMAIL, OWNER_NAME, SITE_NAME, SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: `Mentions légales du site ${SITE_NAME} — ${OWNER_NAME}, développeur web freelance.`,
  alternates: { canonical: '/mentions-legales' },
}

export default function MentionsLegalesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-3xl mx-auto space-y-8 text-gray-300 leading-relaxed">
        <Link href="/" className="text-brand hover:underline text-sm inline-block">
          ← Retour à l&apos;accueil
        </Link>

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Mentions légales</h1>
          <p className="text-gray-500 text-sm">Dernière mise à jour : mai 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">1. Éditeur du site</h2>
          <p>Le site <strong className="text-white">{SITE_URL}</strong> est édité par :</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-white">Nom :</strong> {OWNER_NAME}</li>
            <li><strong className="text-white">Activité :</strong> Développeur web freelance ({SITE_NAME})</li>
            <li>
              <strong className="text-white">E-mail :</strong>{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline">{CONTACT_EMAIL}</a>
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">2. Directeur de la publication</h2>
          <p>{OWNER_NAME}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">3. Hébergement</h2>
          <p>Le site est hébergé par :</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-white">Vercel Inc.</strong></li>
            <li>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
            <li>
              Site web :{' '}
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
                vercel.com
              </a>
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">4. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site est protégé par le droit d&apos;auteur. Toute reproduction ou
            exploitation sans autorisation préalable de {OWNER_NAME} est interdite.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">5. Responsabilité</h2>
          <p>
            {OWNER_NAME} s&apos;efforce d&apos;assurer l&apos;exactitude des informations publiées. Il ne saurait
            être tenu responsable des omissions, inexactitudes ou indisponibilité temporaire du service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">6. Données personnelles</h2>
          <p>
            Consultez la{' '}
            <Link href="/politique-de-confidentialite" className="text-brand hover:underline">
              politique de confidentialité
            </Link>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">7. Contact</h2>
          <p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline">{CONTACT_EMAIL}</a>
          </p>
        </section>
      </article>
    </div>
  )
}
