import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTACT_EMAIL, OWNER_NAME, SITE_NAME, SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: `Politique de confidentialité et protection des données — ${SITE_NAME}.`,
  alternates: { canonical: '/politique-de-confidentialite' },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-3xl mx-auto space-y-8 text-gray-300 leading-relaxed">
        <Link href="/" className="text-brand hover:underline text-sm inline-block">
          ← Retour à l&apos;accueil
        </Link>

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Politique de confidentialité</h1>
          <p className="text-gray-500 text-sm">Dernière mise à jour : mai 2026</p>
        </div>

        <p>
          La présente politique décrit comment <strong className="text-white">{OWNER_NAME}</strong> ({SITE_NAME}),
          éditeur du site <strong className="text-white">{SITE_URL}</strong>, traite les données personnelles
          conformément au RGPD.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">1. Responsable du traitement</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-white">Responsable :</strong> {OWNER_NAME}</li>
            <li>
              <strong className="text-white">Contact :</strong>{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline">{CONTACT_EMAIL}</a>
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">2. Données collectées</h2>
          <p>Via le formulaire de contact :</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nom complet</li>
            <li>Adresse e-mail</li>
            <li>Sujet et contenu du message</li>
          </ul>
          <p>
            Des données techniques minimales (adresse IP, horodatage) peuvent être traitées temporairement
            pour la sécurité et la lutte contre le spam.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">3. Finalités</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Répondre à vos demandes de contact</li>
            <li>Assurer la sécurité du formulaire</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">4. Sous-traitants</h2>
          <p>Messages transmis via <strong className="text-white">Resend</strong>. Hébergement par <strong className="text-white">Vercel</strong>.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">5. Durée de conservation</h2>
          <p>
            Les messages sont conservés le temps du traitement de votre demande, puis archivés ou supprimés
            dans un délai maximal de 3 ans sauf obligation légale contraire ou demande de suppression de votre part.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">6. Cookies</h2>
          <p>
            Ce site n&apos;utilise pas de cookies publicitaires ni de traceurs analytics. Seuls des cookies
            strictement nécessaires au fonctionnement technique peuvent être déposés par l&apos;hébergeur.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">7. Vos droits</h2>
          <p>Accès, rectification, effacement, limitation, opposition, portabilité — contactez :</p>
          <p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline">{CONTACT_EMAIL}</a>
          </p>
          <p>
            Réclamation possible auprès de la CNIL :{' '}
            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
              www.cnil.fr
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">8. Sécurité</h2>
          <p>HTTPS, validation des envois et filtrage anti-spam. Aucune transmission sur Internet n&apos;est invulnérable.</p>
        </section>
      </article>
    </div>
  )
}
