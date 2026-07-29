import { motion } from 'framer-motion';
import { BadgeCheck, Building2, FileSignature, GraduationCap, Umbrella } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Badge {
  icon: LucideIcon;
  label: string;
  tooltip: string;
}

const BADGES: Badge[] = [
  {
    icon: BadgeCheck,
    label: 'Agréée Ministère de la Santé',
    tooltip: 'Agrément officiel délivré par le Ministère de la Santé tunisien.',
  },
  {
    icon: Building2,
    label: 'Cliniques certifiées ISO',
    tooltip: 'Nos cliniques partenaires sont certifiées ISO 9001 pour leur management qualité.',
  },
  {
    icon: GraduationCap,
    label: "Chirurgiens diplômés d'État",
    tooltip: "Tous nos chirurgiens sont diplômés d'État et inscrits à l'Ordre des médecins.",
  },
  {
    icon: Umbrella,
    label: 'Assurance partenaire',
    tooltip: 'Une assurance complication couvre chaque séjour médical organisé.',
  },
  {
    icon: FileSignature,
    label: 'Charte qualité signée',
    tooltip: 'Chaque partenaire signe notre charte qualité : hygiène, transparence, suivi.',
  },
];

/**
 * Section 3 — Accréditations & garanties (bandeau lilac-mist).
 * Badges hexagonaux glacier : pop stagger 0.08s (scale 0.8→1, spring), tooltip au survol.
 */
export default function Accreditations() {
  return (
    <section className="bg-lilac-mist py-[72px] md:py-[110px]">
      <div className="mx-auto max-w-[1200px] px-6 text-center lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="surtitre justify-center"
        >
          Accréditations &amp; garanties
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-5 max-w-[640px] text-[30px] font-medium leading-[1.12] tracking-[-0.01em] md:text-[42px]"
        >
          Une exigence <em className="italic text-bronze">certifiée</em>
        </motion.h2>

        {/* Rangée de badges hexagonaux */}
        <div className="mt-12 flex flex-wrap items-start justify-center gap-x-6 gap-y-8 md:gap-x-10">
          {BADGES.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-12% 0px' }}
              transition={{ type: 'spring', stiffness: 280, damping: 18, delay: i * 0.08 }}
              className="group relative flex w-[132px] flex-col items-center gap-3"
            >
              {/* Hexagone glacier + coche */}
              <div
                className="flex h-[76px] w-[68px] items-center justify-center bg-glacier shadow-soft transition-transform duration-300 group-hover:-translate-y-1"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              >
                <b.icon className="h-7 w-7 text-glacier-deep" strokeWidth={1.6} />
              </div>
              <p className="text-[12px] font-bold uppercase leading-[1.4] tracking-[0.08em] text-plum">{b.label}</p>

              {/* Tooltip au survol */}
              <div
                role="tooltip"
                className="pointer-events-none absolute -top-2 left-1/2 z-10 w-[220px] -translate-x-1/2 -translate-y-full rounded-[14px] bg-plum px-4 py-3 text-[12px] font-medium leading-[1.5] text-ivory opacity-0 shadow-card transition-all duration-300 group-hover:-translate-y-[calc(100%+4px)] group-hover:opacity-100"
              >
                {b.tooltip}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Paragraphe SEO */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-12 max-w-[780px] text-[15px] leading-[1.75] text-plum-soft md:text-[16px]"
        >
          Health Travel est une agence de tourisme médical agréée par le Ministère de la Santé tunisien. Cet agrément
          gouvernemental, renouvelé chaque année après audit, encadre l'ensemble de notre activité : sélection des
          cliniques partenaires, vérification des diplômes des chirurgiens, traçabilité des protocoles de soins et
          information loyale des patients. Nos cliniques partenaires sont certifiées ISO et inspectées trimestriellement
          par notre direction médicale — parce que la confiance ne se décrète pas, elle se prouve.
        </motion.p>
      </div>
    </section>
  );
}
