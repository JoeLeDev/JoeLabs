import { NextResponse } from 'next/server'
import { Resend } from 'resend'

type ContactPayload = {
  name?: string
  email?: string
  subject?: string
  message?: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function getResendErrorMessage(message: string) {
  if (message.includes('domain is not verified')) {
    return "Le domaine d'envoi n'est pas vérifié dans Resend. Ajoutez et vérifiez votre domaine sur resend.com/domains."
  }
  if (message.includes('only send testing emails to your own email')) {
    return "En mode test Resend, l'envoi est limité à l'adresse de votre compte. Vérifiez un domaine pour envoyer vers d'autres destinataires."
  }
  return "Impossible d'envoyer le message pour le moment."
}

function buildFromAddress() {
  const address = process.env.RESEND_FROM_EMAIL?.trim()

  if (!address) return null
  return address
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  const from = buildFromAddress()
  const to = process.env.RESEND_TO_EMAIL?.trim()

  if (!apiKey || !from || !to) {
    return NextResponse.json(
      { error: 'Configuration e-mail manquante.' },
      { status: 500 }
    )
  }

  let body: ContactPayload

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Corps de requête invalide.' }, { status: 400 })
  }

  const name = body.name?.trim()
  const email = body.email?.trim()
  const subject = body.subject?.trim()
  const message = body.message?.trim()

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'Tous les champs sont requis.' }, { status: 400 })
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Adresse e-mail invalide.' }, { status: 400 })
  }

  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    html: `
      <h2>Nouveau message depuis le portfolio</h2>
      <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
      <p><strong>E-mail :</strong> ${escapeHtml(email)}</p>
      <p><strong>Sujet :</strong> ${escapeHtml(subject)}</p>
      <p><strong>Message :</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
    `,
  })

  if (error) {
    console.error('Resend error:', error)
    const message =
      typeof error.message === 'string'
        ? getResendErrorMessage(error.message)
        : "Impossible d'envoyer le message pour le moment."
    return NextResponse.json({ error: message }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
