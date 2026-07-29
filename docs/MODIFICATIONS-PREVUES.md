# Modifications prévues — branche fix-site

**Statut : EN ATTENTE DE VALIDATION — aucune correction de code n'a encore été faite.**
Règle : travail uniquement sur `fix-site`, jamais sur `main`. Aucune publication sur www.healthtravel.fr sans autorisation écrite.

## P0 — Critiques (corrections immédiates après validation)

1. **Corriger le domaine** `healthtravel.tn` → `healthtravel.fr` dans `index.html` (canonical, OG, hreflang, Schema.org), `public/robots.txt`, `public/sitemap.xml`
2. **Corriger Schema.org** : vrai téléphone `+216 55 000 260`, vrai email `contact@healthtravel.fr`, adresse Tanit Business Center ; **supprimer `aggregateRating`** tant qu'aucune source d'avis vérifiable n'existe
3. **Rendre les formulaires fonctionnels** : brancher Devis / Rendez-vous / Contact / Newsletter sur un vrai endpoint (Formspree en solution immédiate, backend maison en phase 2) — avec page de confirmation et notification email à l'équipe
4. **Créer les pages légales** : `/mentions-legales` et `/politique-confidentialite` + liens footer fonctionnels + case de consentement RGPD dans les formulaires
5. **Créer une vraie page 404** (`NotFound.tsx`) remplaçant le renvoi silencieux vers l'accueil
6. **Retirer les liens hreflang** vers `/fr/ /en/ /ar/ /de/ /it/` tant que les traductions n'existent pas (réintroduction lors de la phase i18n)

## P1 — Importants (après P0)

7. **Sitemap** : ajouter les 8 interventions manquantes + dates `lastmod` ; vérifier que robots.txt pointe vers le bon domaine
8. **Témoignages stars** : remplacer les citations brouillon par les textes validés par Hallan (⚠️ nécessite votre validation — voir section décisions)
9. **Suppression du code mort** : 43 composants UI inutilisés, `src/App.css`, dépendances npm inutilisées (~15) — réduit le bundle et la maintenance
10. **Accessibilité du Header** : `aria-expanded`, navigation clavier du dropdown, focus trap du menu mobile
11. **SEO par route** : étendre `Seo.tsx` (canonical + OG dynamiques par page)
12. **Anti-spam formulaires** : honeypot + temps minimum de remplissage

## P2 — Mineurs / optimisation

13. Dédupliquer `.hero-video` dans `index.css`
14. Code-splitting par route (`React.lazy`) pour passer le chunk sous 500 Ko
15. Préchargeur : mémorisation durable (`localStorage`) + bouton « passer »
16. Régénérer et commiter `package-lock.json`
17. Remplacer le cast `behavior: 'instant' as ScrollBehavior` par une solution propre

## Décisions nécessaires de votre part ⚠️

1. **Domaine final** : je pars sur `healthtravel.fr` partout. Confirmez (ou si `healthtravel.tn` doit être conservé en alias/redirection).
2. **Citations stars** : validez-vous les 6 témoignages rédigés (Fanny J, Marichou, Penola Lawson, Bijoux Ngoné, Awa Baldé, Sasha Caprice) ou fournissez-vous les textes exacts ? En l'absence de validation, ils seront retirés avant publication.
3. **Réception des formulaires** : Formspree (gratuit, 50 envois/mois, email direct) ou attente du backend maison (phase ERP) ?
4. **Profils chirurgiens** : les 3 fiches actuelles (Dr. Ben Salah, Dr. Trabelsi, Dr. Mansour) sont génériques — fournir les vrais profils ou garder des fiches anonymisées ?

## Import du dépôt — état d'avancement

- ✅ Configuration (package.json, Vite, TS, Tailwind, ESLint), SEO de base, design system
- ✅ Composants (Layout, Header, Footer, Preloader, CountUp, Reveal, ScrollToTop, YoutubeLite, Seo, Faq)
- ✅ Données : `content.ts`, `interventions.ts` (23 fiches), `faq.ts`, `blog.ts`
- ⏳ **Reste à importer** : `src/pages/*` (11 fichiers), composants `ui/*` utilisés, assets binaires (images WebP, vidéos MP4 — 13,5 Mo, non transférables via l'API GitHub : push git classique requis, archive fournie séparément)
