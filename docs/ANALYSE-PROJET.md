# Analyse technique du projet Health Travel

**Date :** 29 juillet 2026 · **Branche :** fix-site · **État :** analyse avant toute correction
**Périmètre :** nouveau site React/Vite (ce dépôt) — l'audit du site WordPress en production fait l'objet d'un rapport séparé (`docs/Rapport-audit-healthtravel.fr.md`).

## État du build

- `npm run build` : ✅ succès (11,8 s)
- ⚠️ 1 chunk JS > 500 Ko après minification → code-splitting à prévoir
- 35 routes SPA (11 pages + 23 fiches interventions + 6 articles)

## Bugs et problèmes identifiés

### Critiques 🔴

| # | Problème | Détail | Fichier(s) |
|---|---|---|---|
| B1 | **Mauvais domaine partout** | Canonical, Open Graph, hreflang, Schema.org pointent vers `healthtravel.tn` alors que le domaine réel est `healthtravel.fr` | `index.html`, `public/robots.txt`, `public/sitemap.xml` |
| B2 | **Coordonnées factices dans Schema.org** | Téléphone placeholder `+216-00-000-000` et email `contact@healthtravel.tn` (réels : `+216 55 000 260`, `contact@healthtravel.fr`) | `index.html` |
| B3 | **Formulaires sans destination** | Devis (5 étapes), Rendez-vous vidéo, Contact, Newsletter : soumission = état local React uniquement. **Aucune donnée n'arrive à l'équipe.** | `src/pages/Devis.tsx`, `RendezVous.tsx`, `Contact.tsx`, `src/components/Footer.tsx` |
| B4 | **Pages légales absentes (RGPD)** | Le footer affiche « Mentions légales · Politique de confidentialité · RGPD » en texte simple, sans pages. Collecte de données de santé via les formulaires sans cadre légal affiché. | `src/components/Footer.tsx` + routes manquantes |
| B5 | **404 déguisé (soft 404)** | `<Route path="*" element={<Home />}` : toute URL inconnue affiche l'accueil avec statut 200 → pénalité SEO et navigation trompeuse | `src/App.tsx` |
| B6 | **Hreflang vers des routes inexistantes** | 5 liens `hreflang` (`/fr/`, `/en/`, `/ar/`, `/de/`, `/it/`) alors que le site n'a aucune version traduite → Google suit des URLs qui retombent sur l'accueil français | `index.html` |

### Importants 🟠

| # | Problème | Détail | Fichier(s) |
|---|---|---|---|
| B7 | **Sitemap incomplet** | 8 interventions manquantes : sleeve, bypass, body-lift, nymphoplastie, implants-dentaires, facettes-dentaires, fiv, botox (15 URLs listées au lieu de 23) | `public/sitemap.xml` |
| B8 | **Citations « stars » non validées** | Les 6 témoignages de célébrités sont des **brouillons rédigés** en attente de validation — risque juridique et réputationnel si publiés tels quels | `src/data/content.ts` |
| B9 | **Note fictive dans Schema.org** | `aggregateRating 4.9 / 347 avis` sans source vérifiable → sanction possible des rich snippets Google | `index.html` |
| B10 | **Code mort massif** | 43 des 53 composants `src/components/ui/*` inutilisés ; `src/App.css` = gabarit Vite par défaut inutilisé ; ~15 dépendances npm inutilisées (recharts, embla, vaul, cmdk, zod…) | `src/components/ui/`, `src/App.css`, `package.json` |
| B11 | **Accessibilité du menu** | Dropdown « Interventions » au survol seulement (inaccessible au clavier), pas d'`aria-expanded`, menu mobile sans focus trap | `src/components/Header.tsx` |
| B12 | **SEO par page limité** | Le composant `Seo` ne met à jour que title + meta description côté client : pas de canonical/OG par route ; Google ne voit que les balises d'`index.html` sur les sous-pages | `src/components/Seo.tsx` |

### Mineurs 🟡

| # | Problème | Détail |
|---|---|---|
| B13 | CSS dupliqué | `.hero-video` défini 2 fois dans `index.css` (kenburns + position absolute) |
| B14 | Préchargeur bloquant | 2,6 s à chaque première visite de session, sans bouton « passer » |
| B15 | Chunk JS > 500 Ko | Pas de code-splitting par route (React.lazy) |
| B16 | `package-lock.json` | Non importé dans ce dépôt — à régénérer (`npm install`) pour des builds reproductibles |
| B17 | Formulaires sans anti-spam ni consentement | Aucun honeypot/captcha, pas de case consentement RGPD |

## Points forts ✅

- Architecture claire : données centralisées (`src/data/`), pages découplées, composants réutilisables
- 23 fiches interventions complètes avec structure médicale rigoureuse (indications, contre-indications, déroulement, suites, FAQ, prix)
- 100+ questions FAQ en 7 thèmes, 6 articles blog optimisés SEO
- WhatsApp flottant + `tel:+21655000260` cohérent partout
- Design system complet (tokens CSS, palette bleu/or/ivoire, animations Villa)
- Build TypeScript strict sans erreur
