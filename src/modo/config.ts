// Configuration de la page d'accueil dynamique (template Modo adapté — Health Travel)

export interface SiteConfig { language: string; title: string; description: string }
export interface NavLink { label: string; href: string }
export interface SocialLink { label: string; href: string }

export interface HeroConfig {
  brandLeft: string; brandRight: string; tagline: string; badge: string; since: string;
  email: string; heroImage: string; heroImageAlt: string; scrollText: string; copyrightText: string;
  navLinks: NavLink[]; socialLinks: SocialLink[];
}

export interface GalleryImage { src: string; alt: string; label: string }
export interface StatItem { value: string; label: string }
export interface AboutConfig {
  label: string; headline: string; description: string; bottomText: string;
  galleryImages: GalleryImage[]; stats: StatItem[];
}

export interface Exhibition { id: number; title: string; image: string; date: string; href: string }
export interface ExhibitionsConfig { label: string; headline: string; ctaText: string; ctaHref: string; exhibitions: Exhibition[] }

export interface Collection { id: number; title: string; year: string; description: string; image: string }
export interface CollectionsConfig { label: string; headline: string; ctaText: string; ctaHref: string; collections: Collection[] }

export interface TestimonialsConfig { quote: string; authorName: string; authorTitle: string; authorImage: string }

export interface InfoCard { icon: string; title: string; content: string }
export interface VisitConfig { label: string; headline: string; description: string; ctaText: string; ctaHref: string; infoCards: InfoCard[] }

export interface FooterLink { label: string; href: string }
export interface FooterConfig {
  marqueeText: string; brandName: string; brandDescription: string;
  socialLinks: SocialLink[]; quickLinks: FooterLink[]; quickLinksTitle: string;
  contactTitle: string; contactItems: string[]; bottomLinks: FooterLink[];
}

export const siteConfig: SiteConfig = {
  language: 'fr',
  title: 'Chirurgie esthétique Tunisie | Health Travel — Tourisme médical premium',
  description: 'Health Travel, agence de tourisme médical en Tunisie. Chirurgie esthétique premium avec chirurgiens certifiés et accompagnement personnalisé de A à Z.',
};

export const heroConfig: HeroConfig = {
  brandLeft: 'HEALTH',
  brandRight: 'TRAVEL',
  tagline: 'Tourisme médical premium en Tunisie. Chirurgie esthétique d’exception, accompagnement humain de A à Z.',
  badge: 'CHIRURGIE ESTHÉTIQUE · TUNISIE',
  since: 'DEPUIS 2018 — TUNIS',
  email: 'contact@healthtravel.fr',
  heroImage: '/assets/founder.webp',
  heroImageAlt: 'Hallan Khenissi, fondatrice de Health Travel',
  scrollText: 'DÉFILER POUR DÉCOUVRIR',
  copyrightText: '© 2026 HEALTH TRAVEL',
  navLinks: [
    { label: 'Interventions', href: '/interventions' },
    { label: 'Chirurgiens', href: '/chirurgiens' },
    { label: 'Avant / Après', href: '/avant-apres' },
    { label: 'Devis', href: '/devis' },
  ],
  socialLinks: [
    { label: 'Instagram', href: 'https://www.instagram.com/healthtraveltunisie/' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@healthtraveltunisie' },
    { label: 'YouTube', href: 'https://www.youtube.com/@healthtraveltunisie39' },
  ],
};

export const aboutConfig: AboutConfig = {
  label: 'LE MOT DE LA FONDATRICE',
  headline: 'Vous ne serez jamais seule.',
  description:
    '« Nous ne vendons pas des opérations. Nous construisons une relation de confiance. Chaque patiente devient membre de notre famille — du premier message jusqu’au dernier suivi post-opératoire. »',
  bottomText: 'Hallan Khenissi — Fondatrice & directrice',
  galleryImages: [
    { src: '/assets/hallan-portrait.webp', alt: 'Hallan Khenissi', label: 'LA FONDATRICE' },
    { src: '/assets/consult-1.webp', alt: 'Consultation personnalisée', label: 'CONSULTATION' },
    { src: '/assets/team-surgeons.webp', alt: 'Équipe chirurgicale', label: 'NOS CHIRURGIENS' },
    { src: '/assets/founder-office.webp', alt: 'Bureau Health Travel Tunis', label: 'TANIT BUSINESS CENTER' },
    { src: '/assets/team-meeting.webp', alt: 'Réunion médicale', label: 'STAFF MÉDICAL' },
    { src: '/assets/hallan-surgeon.webp', alt: 'Hallan avec un chirurgien partenaire', label: 'PARTENARIATS' },
    { src: '/assets/consult-2.webp', alt: 'Échange avec une patiente', label: 'ACCOMPAGNEMENT' },
    { src: '/assets/team-corridor.webp', alt: 'Équipe à la clinique', label: 'CLINIQUE PARTENAIRE' },
    { src: '/assets/hallan-window.webp', alt: 'Hallan Khenissi à Tunis', label: 'TUNIS' },
  ],
  stats: [
    { value: '2 000+', label: 'PATIENTES ACCOMPAGNÉES' },
    { value: '15', label: 'PAYS D’ORIGINE' },
    { value: '4,9/5', label: 'NOTE MOYENNE DES AVIS' },
    { value: '24h', label: 'DÉLAI DE RÉPONSE DEVIS' },
  ],
};

export const exhibitionsConfig: ExhibitionsConfig = {
  label: 'NOS INTERVENTIONS',
  headline: 'L’excellence chirurgicale',
  ctaText: 'TOUTES LES INTERVENTIONS',
  ctaHref: '/interventions',
  exhibitions: [
    { id: 1, title: 'BBL & Liposuccion', image: '/assets/interventions/bbl.webp', date: 'SILHOUETTE — SCULPTURE DU CORPS', href: '/interventions/bbl' },
    { id: 2, title: 'Rhinoplastie', image: '/assets/interventions/rhinoplastie.webp', date: 'VISAGE — HARMONIE DU PROFIL', href: '/interventions/rhinoplastie' },
    { id: 3, title: 'Augmentation mammaire', image: '/assets/interventions/augmentation-mammaire.webp', date: 'SEINS — RÉSULTAT NATUREL', href: '/interventions/augmentation-mammaire' },
    { id: 4, title: 'Facettes dentaires', image: '/assets/interventions/facettes-dentaires.webp', date: 'DENTAIRE — HOLLYWOOD SMILE', href: '/interventions/facettes-dentaires' },
  ],
};

export const collectionsConfig: CollectionsConfig = {
  label: 'VOTRE PARCOURS',
  headline: 'Un accompagnement sans faille',
  ctaText: 'DEMANDER UN DEVIS GRATUIT',
  ctaHref: '/devis',
  collections: [
    {
      id: 1, title: 'Devis sous 24 heures', year: 'ÉTAPE 01',
      description: 'Formulaire en ligne ou message WhatsApp : vous recevez une réponse personnalisée sous 24h, puis un devis sur mesure après étude de votre dossier médical.',
      image: '/assets/consult-desk.webp',
    },
    {
      id: 2, title: 'Consultation vidéo avec le chirurgien', year: 'ÉTAPE 02',
      description: 'Échange en direct avec le chirurgien qui vous opérera : analyse de vos photos, réponses à toutes vos questions, plan chirurgical sur mesure.',
      image: '/assets/consult-3.webp',
    },
    {
      id: 3, title: 'Séjour organisé de A à Z', year: 'ÉTAPE 03',
      description: 'Vol, transferts privés, séjour médical adapté à votre récupération, accompagnatrice dédiée, clinique certifiée : vous n’avez qu’à vous concentrer sur vous.',
      image: '/assets/team-table.webp',
    },
    {
      id: 4, title: 'Suivi post-opératoire illimité', year: 'ÉTAPE 04',
      description: 'Consultations vidéo à J+7, J+30, J+90 et au-delà. WhatsApp illimité et coordination avec votre médecin traitant après votre retour.',
      image: '/assets/hallan-premium.webp',
    },
  ],
};

export const testimonialsConfig: TestimonialsConfig = {
  quote: 'La chirurgie esthétique n’est pas un caprice. C’est un choix profond, personnel. Et ce choix mérite un accompagnement à la hauteur de son importance.',
  authorName: 'Hallan Khenissi',
  authorTitle: 'FONDATRICE & DIRECTRICE — HEALTH TRAVEL',
  authorImage: '/assets/hallan-smile.webp',
};

export const visitConfig: VisitConfig = {
  label: 'CONTACT',
  headline: 'Parlons de votre projet',
  description: 'Une question, une hésitation, un projet ? Notre équipe vous répond sous 2 heures, 7j/7, en français, anglais, arabe, allemand ou italien.',
  ctaText: 'DISCUTER SUR WHATSAPP',
  ctaHref: 'https://wa.me/21655000260',
  infoCards: [
    { icon: 'MapPin', title: 'Adresse', content: 'Tanit Business Center<br/>Bureau 601, 6ème étage<br/>Tunis 1053, Tunisie' },
    { icon: 'Phone', title: 'Téléphone & WhatsApp', content: '<a href="tel:+21655000260">+216 55 000 260</a><br/>WhatsApp disponible 24/7' },
    { icon: 'Clock', title: 'Horaires', content: 'Lun – Ven : 8h – 18h<br/>Sam : 8h – 14h' },
    { icon: 'Mail', title: 'Email', content: '<a href="mailto:contact@healthtravel.fr">contact@healthtravel.fr</a><br/>Réponse sous 24h' },
  ],
};

export const footerConfig: FooterConfig = {
  marqueeText: 'HEALTH TRAVEL',
  brandName: 'Health Travel',
  brandDescription: 'Agence de tourisme médical premium spécialisée en chirurgie esthétique en Tunisie. Chirurgiens d’exception, cliniques certifiées, accompagnement humain de A à Z.',
  socialLinks: [
    { label: 'Instagram', href: 'https://www.instagram.com/healthtraveltunisie/' },
    { label: 'Youtube', href: 'https://www.youtube.com/@healthtraveltunisie39' },
    { label: 'Facebook', href: 'https://www.facebook.com/Chirurgieesthetiquetunisie' },
  ],
  quickLinks: [
    { label: 'Interventions', href: '/interventions' },
    { label: 'Nos chirurgiens', href: '/chirurgiens' },
    { label: 'Avant / Après', href: '/avant-apres' },
    { label: 'Blog & conseils', href: '/blog' },
    { label: 'FAQ — 100 questions', href: '/faq' },
    { label: 'Devis gratuit', href: '/devis' },
    { label: 'Rendez-vous vidéo', href: '/rendez-vous' },
    { label: 'Contact', href: '/contact' },
  ],
  quickLinksTitle: 'LE SITE',
  contactTitle: 'CONTACT',
  contactItems: [
    'Tanit Business Center, Bureau 601<br/>Tunis 1053, Tunisie',
    '<a href="tel:+21655000260">+216 55 000 260</a>',
    '<a href="mailto:contact@healthtravel.fr">contact@healthtravel.fr</a>',
  ],
  bottomLinks: [
    { label: 'Mentions légales', href: '/contact' },
    { label: 'Politique de confidentialité', href: '/contact' },
  ],
};
