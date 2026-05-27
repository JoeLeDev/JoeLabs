/** URL canonique du portfolio (avec https:// obligatoire). */
function normalizeSiteUrl(raw?: string): string {
  const fallback = 'https://freelance.jonathanluembe.dev'
  const value = raw?.trim() || fallback

  if (value.startsWith('http://') || value.startsWith('https://')) {
    return value.replace(/\/$/, '')
  }

  return `https://${value.replace(/\/$/, '')}`
}

export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL)

export const LINKEDIN_URL = 'https://www.linkedin.com/in/jonathanluembe/'

export const CONTACT_EMAIL = 'jonathanluembe@yahoo.com'

export const SITE_NAME = 'JoeLabs'

export const OWNER_NAME = 'Jonathan Luembe'
