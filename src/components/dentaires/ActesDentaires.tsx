import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, ChevronDown, Plus, Scan, ShieldCheck, Smile, Sun } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import PriceChip from '@/components/PriceChip';

interface Acte {
  title: string;
  icon: LucideIcon;
  pitch: string;
  price: string;
  details?: string[];
}

const ACTES: Acte[] = [
  {
    title: 'Implants dentaires',
    icon: Plus,
    pitch: 'Racine artificielle en titane + couronne : la solution définitive.',
    price: 'Dès 650 €/implant',
    details: [
      'Marques premium utilisées : implants en titane grade 4, certifiés CE',
      'Séjour 1 : pose de l’implant, 4–5 jours sur place',
      'Séjour 2 : pose de la couronne définitive, après 3–4 mois de cicatrisation',
      'Alternative « All-on-4/6 » pour la réhabilitation d’une arcade complète',
      'Garantie écrite sur l’implant et la prothèse',
    ],
  },
  {
    title: 'Facettes dentaires',
    icon: Smile,
    pitch: 'Le secret des sourires de stars : céramique E-max ultra-fine.',
    price: 'Dès 290 €/facette',
    details: [
      'Indications : couleur, forme, alignement léger des dents de devant',
      '2 séances sur 5–7 jours : préparation minimale puis collage',
      'Rendu naturel garanti : translucidité et teinte sur mesure',
      'Durée de vie de 15 ans et plus avec un bon entretien',
    ],
  },
  {
    title: 'Couronne dentaire',
    icon: ShieldCheck,
    pitch: 'Zircone ou céramo-métallique : solidité et esthétique.',
    price: 'Dès 220 €',
    details: [
      'Quand couronner : dent dévitalisée, très restaurée ou fracturée',
      'Empreinte numérique 3D, sans pâte désagréable',
      '5 jours sur place suffisent, laboratoire partenaire sur place',
    ],
  },
  {
    title: 'Bridge',
    icon: Plus,
    pitch: 'Remplacer une dent absente en s’appuyant sur les dents voisines.',
    price: 'Dès 550 €',
    details: [
      'Solution fixe rapide lorsque l’implant n’est pas indiqué',
      'Zircone monolithique : solidité et esthétique naturelle',
      'Réalisé en un seul séjour de 5 jours',
    ],
  },
  {
    title: 'Prothèse dentaire esthétique',
    icon: Smile,
    pitch: 'Stabilité et confort retrouvés, finition invisible.',
    price: 'Dès 480 €',
    details: [
      'Prothèses amovibles à finition haute esthétique, crochets discrets',
      'Possibilité de stabilisation sur implants pour un confort maximal',
      'Essayages inclus pour un ajustement parfait',
    ],
  },
  {
    title: 'Blanchiment dentaire',
    icon: Sun,
    pitch: 'Jusqu’à 8 teintes en une séance au fauteuil.',
    price: 'Dès 190 €',
    details: [
      'Protocole LED au fauteuil + gouttières sur mesure pour l’entretien',
      'Résultats immédiats et durables, teinte contrôlée',
      'Sensibilité gérée : protocole doux et produit désensibilisant',
    ],
  },
];

/**
 * Section 3 — Les actes dentaires : grille 3×2 de cartes dépliables.
 * Stagger 0.08s, hover : icône qui se redresse + fond cream→peach-mist,
 * accordéon 0.5s.
 */
export default function ActesDentaires() {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {ACTES.map((acte, i) => {
        const isOpen = open === i;
        const Icon = acte.icon;
        return (
          <motion.article
            key={acte.title}
            initial={{ opacity: 0, y: 56 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-12% 0px' }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col rounded-[28px] bg-cream p-7 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:bg-peach-mist hover:shadow-card"
            style={{ border: isOpen ? '1px solid rgba(217, 185, 130, 0.5)' : '1px solid transparent' }}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blush-mist transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                <Icon className="h-6 w-6 text-bronze" strokeWidth={1.5} />
              </span>
              <PriceChip>{acte.price}</PriceChip>
            </div>

            <h3 className="mt-5 font-display text-[24px] font-medium leading-[1.2] text-plum">{acte.title}</h3>
            <p className="mt-2 text-[15px] leading-[1.65] text-plum-soft">{acte.pitch}</p>

            {acte.details && (
              <>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="mt-4 inline-flex items-center gap-2 self-start text-[14px] font-bold text-bronze-deep transition-colors hover:text-bronze"
                >
                  {isOpen ? 'Masquer le détail' : 'Voir le détail'}
                  <ChevronDown
                    className={`h-4 w-4 text-bronze transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 space-y-2.5 border-t border-gold-light/40 pt-4">
                        {acte.details.map((d) => (
                          <li key={d} className="flex items-start gap-2.5 text-[14px] leading-[1.6] text-plum-soft">
                            <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-bronze" />
                            {d}
                          </li>
                        ))}
                      </div>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </>
            )}

            <span className="mt-auto pt-4">
              <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-glacier-deep">
                <Scan className="h-4 w-4" />
                Devis sur radio panoramique
              </span>
            </span>
          </motion.article>
        );
      })}
    </div>
  );
}
