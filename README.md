# JoeLabs - Portfolio Freelance

Portfolio professionnel développé avec Next.js 14 pour présenter mes services de développement web freelance.

## 🚀 Technologies

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **UI Components** : shadcn/ui
- **Déploiement** : Vercel (recommandé)

## ✨ Fonctionnalités

- **Page d'accueil** : Présentation professionnelle avec sections animées
- **Section Work** : Études de cas détaillées avec galeries d'images
- **Formulaire de contact** : Envoi d'e-mails via Resend (route API Next.js)
- **Design responsive** : Optimisé mobile-first
- **Performance** : Lighthouse Score > 90
- **SEO** : Métadonnées optimisées
- **Accessibilité** : Standards WCAG de base

## 📁 Structure du projet

```
JoeLabs/
├── app/
│   ├── work/           # Section travaux
│   │   ├── cases.ts    # Données des études de cas
│   │   ├── page.tsx    # Page index des projets
│   │   └── [slug]/     # Pages détaillées des projets
│   ├── contact/        # Formulaire de contact
│   ├── globals.css     # Styles globaux et animations
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Page d'accueil
├── public/
│   └── work/           # Images des projets
├── tailwind.config.js  # Configuration Tailwind
└── package.json
```

## 🛠️ Installation

1. **Cloner le projet**
```bash
git clone [URL_DU_REPO]
cd JoeLabs
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer en développement**
```bash
npm run dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

## 📝 Configuration

### Resend (Formulaire de contact)

1. Créer un compte sur [Resend](https://resend.com)
2. Générer une clé API et vérifier votre domaine d'envoi (ou utiliser `onboarding@resend.dev` en test)
3. Copier `.env.example` vers `.env.local` et renseigner :

```bash
cp .env.example .env.local
```

```env
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=votreemaillié a votre nom de domaine
RESEND_TO_EMAIL=votre@email.fr
```

> **Important :** le domaine de `RESEND_FROM_EMAIL` doit être vérifié dans le dashboard Resend (*Domains*). Sans cela, l'API renvoie une erreur 502.

4. En production (Vercel), ajouter les mêmes variables dans le dashboard du projet

### Images des projets

Ajouter vos captures dans `/public/work/` (ex. `advalis-accueil.png`, `capitaine-depan-accueil.png`).

La bannière Open Graph du site se trouve dans `/public/og-banner.png`.

## 🎨 Personnalisation

### Couleurs
Modifier la couleur de marque dans `tailwind.config.js` :
```javascript
colors: {
  brand: '#10B981', // Votre couleur principale
}
```

### Contenu
- **Page d'accueil** : `app/page.tsx`
- **Études de cas** : `app/work/cases.ts`
- **Informations de contact** : `app/layout.tsx`

## 🚀 Déploiement

### Vercel (Recommandé)
1. Connecter votre repository GitHub à Vercel
2. Déployer automatiquement sur chaque push

### Autres plateformes
```bash
npm run build
npm start
```

## 📊 Performance

- **Lighthouse Desktop** : > 90
- **Lighthouse Mobile** : > 85
- **Images optimisées** : Next/Image avec WebP/AVIF
- **CSS optimisé** : Tailwind CSS purgé

## 🔧 Scripts disponibles

```bash
npm run dev          # Développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Vérification ESLint
```

## 📞 Support

Pour toute question ou personnalisation :
- Email : [jonathanluembe@yahoo.com]
- Portfolio : [https://jonathanluembe.dev/]

## 📄 Licence

Projet privé - Tous droits réservés

---

**Développé par JoeLeDev**