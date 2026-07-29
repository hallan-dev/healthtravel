import { motion } from 'framer-motion';
import { BadgeCheck, CalendarCheck, Leaf, Lock, ShieldCheck, Stethoscope } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const ENGAGEMENTS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Stethoscope,
    title: 'Médecins expérimentés',
    text: 'Des chirurgiens diplômés, sélectionnés pour leur excellence reconnue.',
  },
  {
    icon: BadgeCheck,
    title: 'Cliniques certifiées',
    text: 'Établissements agréés et accrédités par les instances gouvernementales de santé.',
  },
  {
    icon: Leaf,
    title: 'Résultats naturels',
    text: "L'art du sur-mesure : révéler, jamais transformer.",
  },
  {
    icon: ShieldCheck,
    title: 'Sécurité optimale',
    text: 'Protocoles médicaux rigoureux, du bilan pré-opératoire au suivi post-opératoire.',
  },
  {
    icon: CalendarCheck,
    title: 'Consultations personnalisées',
    text: 'Un plan de traitement unique, pensé pour vous et avec vous.',
  },
  {
    icon: Lock,
    title: 'Confidentialité',
    text: 'Discrétion absolue, du premier appel à votre retour.',
  },
];

/**
 * Section 6 — Pourquoi Health Travel (6 engagements, cartes verre dépoli).
 */
export default function Engagements() {
  return (
    <section className="relative overflow-hidden bg-cream py-[88px] md:py-[140px]">
      <div aria-hidden="true" className="floral-bg pointer-events-none absolute inset-0 opacity-[0.08]" />
      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-12">
        <SectionHeader
          surtitre="Pourquoi Health Travel"
          title={
            <>
              Six engagements, une <em className="italic text-bronze">promesse</em>
            </>
          }
          text="Votre santé mérite l'excellence absolue. Voici ce qui fait de Health Travel l'agence de tourisme médical la plus exigeante de Tunisie."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ENGAGEMENTS.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 56 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-12% 0px' }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="glass-card group rounded-[28px] p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-peach-mist transition-colors duration-300 group-hover:bg-glacier/30">
                <e.icon className="h-7 w-7 text-bronze transition-all duration-300 group-hover:-rotate-6 group-hover:text-glacier-deep" />
              </div>
              <h3 className="mt-5 text-[22px] font-medium text-plum">{e.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.65] text-plum-soft">{e.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
