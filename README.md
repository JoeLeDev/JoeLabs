# JoeLabs — Portfolio Freelance

Portfolio professionnel développé avec Next.js 14 (App Router), TypeScript et Tailwind CSS.

## 🚀 Technologies

- **Next.js 14** (App Router)
- **TypeScript** (mode strict)
- **Tailwind CSS 3** (couleur de marque : #1EA5D4)
- **Next/Image** (optimisation automatique des images)

## 📦 Installation

```bash
npm install
```

## 🔧 Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Build de production

```bash
npm run build
npm start
```

## 📁 Structure du projet

```
├── app/
│   ├── layout.tsx          # Layout racine avec navigation
│   ├── page.tsx            # Page d'accueil
│   ├── contact/            # Page de contact
│   │   └── page.tsx
│   └── work/               # Section études de cas
│       ├── cases.ts        # Données typées des projets
│       ├── page.tsx        # Index des projets
│       └── [slug]/         # Pages de détail dynamiques
│           └── page.tsx
├── public/
│   └── work/               # Images des projets
│       ├── andre-hero.png
│       ├── andre-1.png
│       ├── andre-2.png
│       ├── andre-3.png
│       ├── sarah-hero.png
│       ├── sarah-1.png
│       ├── sarah-2.png
│       ├── sarah-3.png
│       ├── advalis-hero.png
│       ├── advalis-1.png
│       ├── advalis-2.png
│       └── advalis-3.png
└── tailwind.config.js      # Configuration Tailwind (couleur brand)
```

## 🖼️ Images des projets

Placez vos images dans le dossier `public/work/` en respectant la nomenclature suivante :
- **André Déco** : `andre-hero.png`, `andre-1.png`, `andre-2.png`, `andre-3.png`
- **Portfolio Sarah** : `sarah-hero.png`, `sarah-1.png`, `sarah-2.png`, `sarah-3.png`
- **Advalis SaaS** : `advalis-hero.png`, `advalis-1.png`, `advalis-2.png`, `advalis-3.png`

## 🎨 Personnalisation

### Couleur de marque
La couleur principale est définie dans `tailwind.config.js` :
```js
colors: {
  brand: '#1EA5D4',
}
```

### Ajouter un nouveau projet
Éditez `app/work/cases.ts` et ajoutez un nouvel objet dans le tableau `CASES`.

## 📊 Performance

- **Target Lighthouse** : > 90 (desktop)
- **Optimisation images** : Next/Image avec formats AVIF/WebP
- **Responsive** : Mobile-first avec breakpoints Tailwind
- **Accessibilité** : WCAG basics

## 🌐 Déploiement

Le projet est prêt pour être déployé sur [Vercel](https://vercel.com) :

```bash
# Push sur GitHub puis connectez votre repo à Vercel
git init
git add .
git commit -m "Initial commit"
git remote add origin <votre-repo>
git push -u origin main
```

## 📝 À faire avant mise en ligne

- [ ] Ajouter vos vraies images de projets dans `public/work/`
- [ ] Personnaliser la page de contact avec vos informations
- [ ] Ajouter votre vrai contenu sur la page d'accueil
- [ ] Configurer les métadonnées SEO (Open Graph, etc.)
- [ ] Tester sur mobile et desktop
- [ ] Vérifier les scores Lighthouse

## 📄 Licence

© 2025 JoeLabs. Tous droits réservés.

# JoeLabs
