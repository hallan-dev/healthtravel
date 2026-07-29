import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import PriceChip from '@/components/PriceChip';

const UNIVERS = [
  {
    to: '/chirurgie-obesite-tunisie',
    img: '/med-obesite.jpg',
    alt: "Chirurgien en salle d'opération moderne — chirurgie de l'obésité en Tunisie",
    chip: 'À partir de 3 900 € tout inclus',
    title: "Chirurgie de l'obésité",
    acts: 'Sleeve, bypass, ballon gastrique',
  },
  {
    to: '/fiv-pma-tunisie',
    img: '/med-fertilite.jpg',
    alt: 'Laboratoire de FIV — embryologiste sous microscope, FIV et PMA en Tunisie',
    chip: 'À partir de 2 900 € tout inclus',
    title: 'Fertilité & FIV',
    acts: "FIV, ICSI, IMSI, IIU, congélation d'embryons",
  },
  {
    to: '/soins-dentaires-tunisie',
    img: '/med-dentaire.jpg',
    alt: 'Sourire parfait et facette dentaire — soins dentaires en Tunisie',
    chip: 'À partir de 1 990 € tout inclus',
    title: 'Soins dentaires',
    acts: 'Implants, facettes, couronnes, blanchiment',
  },
  {
    to: '/chirurgie-esthetique-tunisie',
    img: '/med-esthetique.jpg',
    alt: 'Consultation esthétique du visage — chirurgie esthétique en Tunisie',
    chip: 'À partir de 2 400 € tout inclus',
    title: 'Soins esthétiques',
    acts: 'Chirurgie du sein, botox, fillers, réparation cicatrices',
  },
];

/**
 * Section 4 — Nos univers d'excellence (grille 2×2 de grandes cartes photos).
 */
export default function Univers() {
  return (
    <section className="bg-ivory py-[88px] md:py-[140px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <SectionHeader
          surtitre="Nos interventions"
          title={
            <>
              Quatre univers, une même <em className="italic text-bronze">exigence</em>
            </>
          }
          text="Le tourisme médical en Tunisie combine l'excellence chirurgicale et des prix maîtrisés : chirurgie esthétique, sleeve gastrectomie, FIV ou implants dentaires, chaque acte est pratiqué dans des cliniques certifiées par des chirurgiens d'élite, avec un séjour tout inclus — hôtel 5★, transferts VIP et suivi francophone 24/7. Comparez nos forfaits, demandez votre devis gratuit et découvrez pourquoi des milliers de patients nous confient leur transformation."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {UNIVERS.map((u, i) => (
            <motion.div
              key={u.to}
              initial={{ opacity: 0, y: 56 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-12% 0px' }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to={u.to}
                className="group relative block overflow-hidden rounded-[28px] shadow-soft transition-shadow duration-500 hover:shadow-card"
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: '3 / 2' }}>
                  <img
                    src={u.img}
                    alt={u.alt}
                    loading="lazy"
                    className="h-full w-full scale-105 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay dégradé pêche en bas */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-70"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(247, 233, 220, 0.96) 0%, rgba(247, 233, 220, 0.55) 38%, transparent 68%)',
                    }}
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="transition-transform duration-500 group-hover:-translate-y-1">
                    <PriceChip>{u.chip}</PriceChip>
                  </div>
                  <h3 className="mt-3 text-[26px] font-medium text-plum md:text-[30px]">{u.title}</h3>
                  <p className="mt-1 text-[15px] font-medium text-plum-soft">{u.acts}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[14px] font-bold text-bronze-deep">
                    Découvrir l'univers
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
