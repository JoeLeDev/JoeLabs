'use client'

import { useState, FormEvent, useEffect } from 'react'
import Link from 'next/link'
import { CONTACT_EMAIL, LINKEDIN_URL } from '@/lib/site'

export default function ContactPage() {
  const [formLoadedAt, setFormLoadedAt] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    setFormLoadedAt(Date.now())
  }, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          company: formData.company,
          formLoadedAt,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '', company: '' })
        setFormLoadedAt(Date.now())
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        const data = (await response.json().catch(() => null)) as { error?: string } | null
        throw new Error(data?.error ?? "Erreur lors de l'envoi")
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue lors de l'envoi. Veuillez réessayer."
      )
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Parlons de votre projet
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Vous avez un projet en tête ? Besoin d&apos;un devis ? Je suis à votre écoute pour discuter de vos besoins et vous proposer une solution adaptée.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start justify-center">
          <div className="lg:col-span-1 space-y-6 justify-center mx-auto">
            <div className="bg-slate-900 border border-slate-700 p-6 rounded-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-brand bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">E-mail</h3>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline text-sm">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💼</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">LinkedIn</h3>
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline text-sm">
                    Voir mon profil
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-700 p-6 rounded-lg">
              <h3 className="text-white font-bold mb-3">Disponibilité</h3>
              <p className="text-gray-300 text-sm mb-4">
                Actuellement disponible pour de nouveaux projets.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand rounded-full animate-pulse"></div>
                <span className="text-brand text-sm font-medium">Réponse sous 24 h</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-700 p-8 rounded-lg space-y-6 w-full">
              {status === 'success' && (
                <div className="bg-brand bg-opacity-10 border border-brand text-brand px-4 py-3 rounded-lg" role="status">
                  <strong>Message envoyé !</strong> Je vous répondrai dans les plus brefs délais.
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-500 bg-opacity-10 border border-red-500 text-red-500 px-4 py-3 rounded-lg" role="alert">
                  <strong>Erreur !</strong> {errorMessage}
                </div>
              )}

              <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Entreprise</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Nom complet <span className="text-brand">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand transition-colors"
                  placeholder="Jean Dupont"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  E-mail <span className="text-brand">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand transition-colors"
                  placeholder="vous@exemple.fr"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Sujet <span className="text-brand">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand transition-colors"
                  placeholder="Création d'un site vitrine"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message <span className="text-brand">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand transition-colors resize-none"
                  placeholder="Décrivez votre projet, vos besoins, vos délais..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || !formData.name || !formData.email || !formData.subject || !formData.message}
                className="w-full bg-brand text-slate-900 px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>

              <p className="text-gray-400 text-sm text-center">
                Vos données sont traitées conformément à la{' '}
                <Link href="/politique-de-confidentialite" className="text-brand hover:underline">
                  politique de confidentialité
                </Link>.
              </p>
            </form>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">Vous préférez un premier contact rapide ?</p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Demande de devis&body=Bonjour,`}
            className="inline-flex items-center gap-2 text-brand hover:underline font-medium"
          >
            📧 Envoyez-moi un e-mail directement
          </a>
        </div>
      </div>
    </div>
  )
}
