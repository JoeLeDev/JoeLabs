# Configuration Formspree pour le formulaire de contact

## Étapes de configuration

### 1. Créer un compte Formspree
1. Aller sur [formspree.io](https://formspree.io)
2. Créer un compte gratuit
3. Créer un nouveau formulaire

### 2. Obtenir l'ID du formulaire
1. Dans votre dashboard Formspree, copier l'ID du formulaire
2. Remplacer `YOUR_FORM_ID` dans le fichier `app/contact/page.tsx` ligne 23

### 3. Configuration avancée (optionnel)
- Ajouter un redirect après envoi
- Personnaliser les emails de notification
- Ajouter des validations côté serveur

## Exemple de remplacement

```typescript
// Remplacer cette ligne :
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {

// Par :
const response = await fetch('https://formspree.io/f/xpzgqjqr', {
```

## Alternative : EmailJS

Si vous préférez EmailJS, voici la configuration :

1. Créer un compte sur [emailjs.com](https://emailjs.com)
2. Configurer un service email (Gmail, Outlook, etc.)
3. Créer un template d'email
4. Remplacer la logique d'envoi par EmailJS

## Alternative : API Route Next.js

Pour une solution complètement custom, créer une API route dans `app/api/contact/route.ts` avec votre service email préféré (Resend, SendGrid, etc.).
