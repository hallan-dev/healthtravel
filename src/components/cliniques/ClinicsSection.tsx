import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, GraduationCap, HeartPulse, Microscope, ShieldCheck } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

interface ClinicCard {
  img: string;
  alt: string;
  title: string;
  text: string;
  badges: string[];
}

const CLINICS: ClinicCard[] = [
  {
    img: '/clinique-facade.jpg',
    alt: "Façade moderne de la Clinique Les Jasmins à Tunis, architecture blanche et verre entourée de palmiers",
    title: 'Clinique Les Jasmins, Tunis',
    text: "Établissement privé agréé par le Ministère de la Santé, blocs opératoires récents, soins intensifs sur place, laboratoire d'analyses intégré.",
    badges: ['Agréée Ministère', 'ISO', 'Blocs 2021', 'Soins intensifs'],
  },
  {
    img: '/clinique-chambre.jpg',
    alt: 'Chambre VIP de clinique en Tunisie ressemblant à une suite d’hôtel 5 étoiles, touches bleu glacier',
    title: 'Votre chambre VIP',
    text: "Une chambre qui ressemble à une suite d'hôtel : lit médical discret, fauteuil pour votre accompagnant, room service, vue apaisante.",
    badges: ['Chambre individuelle', 'Accompagnant accepté', 'WiFi & TV'],
  },
];

const GUARANTEES: { icon: typeof ShieldCheck; label: string }[] = [
  { icon: GraduationCap, label: "Chirurgiens diplômés d'État" },
  { icon: HeartPulse, label: 'Anesthésistes seniors' },
  { icon: ShieldCheck, label: 'Protocoles hygiène audités' },
  { icon: Microscope, label: 'Équipement dernière génération' },
];

/**
 * Badge certification glacier — pop spring.
 */
function CertBadge({ label, delay }: { label: string; delay: number }): ReactNode {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ type: 'spring', stiffness: 320, damping: 16, delay }}
      className="inline-flex items-center gap-1.5 rounded-full bg-glacier/20 px-3.5 py-1.5 text-[12px] font-bold text-glacier-deep"
      style={{ border: '1px solid rgba(169, 198, 216, 0.55)' }}
    >
      <BadgeCheck className="h-3.5 w-3.5" />
      {label}
    </motion.span>
  );
}

/**
 * Section 2 — Nos cliniques (Framer Motion).
 * Deux grandes cartes alternées : reveal clip-path gauche/droite, badges pop
 * spring stagger, photo zoom 1.05 + liseré or au survol. Bandeau 4 garanties.
 */
export default function ClinicsSection() {
  return (
    <section id="cliniques" className="scroll-mt-[var(--nav-h)] bg-ivory py-[88px] md:py-[140px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <SectionHeader
          surtitre="Nos cliniques"
          title={
            <>
              La <strong className="font-semibold text-bronze-deep">sécurité</strong> d'abord
            </>
          }
          text="Deux établissements partenaires à Tunis, choisis pour leur excellence médicale et leur confort hôtelier — et audités chaque année par notre équipe."
        />

        <div className="mt-16 space-y-16 md:space-y-24">
          {CLINICS.map((clinic, idx) => {
            const reversed = idx % 2 === 1;
            // Reveal clip-path alterné : gauche → droite ou droite → gauche
            const hiddenClip = reversed ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)';
            return (
              <div key={clinic.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <motion.div
                  initial={{ clipPath: hiddenClip }}
                  whileInView={{ clipPath: 'inset(0 0% 0 0%)' }}
                  viewport={{ once: true, margin: '-15% 0px' }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative overflow-hidden rounded-[32px] shadow-soft ${reversed ? 'lg:order-2' : ''}`}
                >
                  <img
                    src={clinic.img}
                    alt={clinic.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ aspectRatio: '16 / 10' }}
                  />
                  {/* Liseré or au survol */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-8 right-8 h-[2px] origin-left scale-x-0 rounded-full transition-transform duration-500 group-hover:scale-x-100"
                    style={{ background: 'linear-gradient(90deg, transparent, #D9B982, transparent)' }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-15% 0px' }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={reversed ? 'lg:order-1' : ''}
                >
                  <h3 className="font-display text-[28px] font-medium leading-[1.2] text-plum md:text-[30px]">
                    {clinic.title}
                  </h3>
                  <p className="mt-4 text-[17px] leading-[1.7] text-plum-soft">{clinic.text}</p>
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {clinic.badges.map((badge, i) => (
                      <CertBadge key={badge} label={badge} delay={0.2 + i * 0.08} />
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Bandeau 4 garanties */}
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GUARANTEES.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-4 rounded-[20px] bg-cream px-6 py-5 shadow-soft"
                style={{ border: '1px solid rgba(217, 185, 130, 0.3)' }}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-glacier/20">
                  <Icon className="h-5 w-5 text-glacier-deep" />
                </span>
                <span className="text-[15px] font-bold leading-snug text-plum">{g.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
