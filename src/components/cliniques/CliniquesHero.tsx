import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Building2, Hotel } from 'lucide-react';

/**
 * Section 1 — Héros Cliniques & Hôtels (Framer Motion).
 * Fond dégradé signature, H1 animé mot par mot, ancres-puces en stagger pop.
 */
export default function CliniquesHero() {
  // H1 découpé en mots pour l'animation mot par mot
  const words: ReactNode[] = [
    'Des',
    'cliniques',
    <strong key="certifiees" className="font-semibold text-bronze-deep">
      certifiées,
    </strong>,
    'des',
    'hôtels',
    <em key="cinq" className="italic text-bronze">
      cinq&nbsp;étoiles
    </em>,
  ];

  return (
    <section className="bg-signature relative overflow-hidden py-[88px] md:py-[130px]">
      {/* Grain de film */}
      <div aria-hidden="true" className="noise-overlay pointer-events-none absolute inset-0" />
      {/* Formes organiques en dérive */}
      <div
        aria-hidden="true"
        className="animate-drift-a pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-peach-mist opacity-70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-drift-b pointer-events-none absolute -right-24 bottom-1/4 h-[380px] w-[380px] rounded-full bg-lilac-mist opacity-80 blur-3xl"
      />

      <div className="relative mx-auto max-w-[860px] px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="surtitre justify-center"
        >
          Nos partenaires
        </motion.p>

        <h1 className="mt-6 text-[40px] font-semibold leading-[1.06] tracking-[-0.015em] md:text-[60px]">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              {w}
              {i < words.length - 1 ? ' ' : ''}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-[720px] text-[17px] font-medium leading-[1.6] text-plum-soft md:text-[18px]"
        >
          Chez Health Travel, aucun partenaire n'est retenu par hasard. Chaque clinique et chaque hôtel de notre
          réseau tunisien est visité sur place, audité par notre équipe médicale et validé par les agréments
          gouvernementaux en vigueur. Nous exigeons des blocs opératoires récents, des protocoles d'hygiène stricts et
          un confort hôtelier irréprochable. C'est notre double promesse : une sécurité médicale aux standards
          européens et un cadre de convalescence digne d'un palace en bord de Méditerranée.
        </motion.p>

        {/* Ancres-puces */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <motion.a
            href="#cliniques"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.95 }}
            className="btn-bronze"
          >
            <Building2 className="h-4 w-4" />
            Les cliniques
          </motion.a>
          <motion.a
            href="#hotels"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 1.1 }}
            className="btn-ghost"
          >
            <Hotel className="h-4 w-4" />
            Les hôtels
          </motion.a>
        </div>
      </div>
    </section>
  );
}
