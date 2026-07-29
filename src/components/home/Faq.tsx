import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const FAQ_ITEMS = [
  {
    q: 'Combien coûte une chirurgie esthétique en Tunisie ?',
    a: "Les tarifs varient selon l'intervention : comptez par exemple 1 990 € pour des facettes dentaires, 2 400 € pour une chirurgie du sein et 3 900 € pour une sleeve gastrectomie — soit jusqu'à 60 % d'économie par rapport à l'Europe. Tous nos prix sont tout inclus : clinique, chirurgien, hôtel 5★, transferts et suivi.",
  },
  {
    q: 'Le séjour est-il vraiment tout inclus ?',
    a: "Oui : l'hébergement en hôtel 5★, les transferts VIP, l'intervention en clinique certifiée, les soins post-opératoires et le suivi médical sont inclus. Seuls les vols restent à votre charge — mais notre équipe vous aide à les réserver au meilleur tarif.",
  },
  {
    q: 'Qui sont les chirurgiens partenaires ?',
    a: "Nous collaborons avec le Dr Hallan Khenissi et une équipe de chirurgiens diplômés, agréés par les instances gouvernementales de santé tunisiennes et formés aux techniques les plus récentes. Chaque praticien est sélectionné pour son excellence reconnue et ses accréditations.",
  },
  {
    q: 'Combien de temps dure la convalescence sur place ?',
    a: "Selon l'acte, votre séjour dure entre 5 et 10 nuits : 5 nuits pour des soins dentaires ou esthétiques légers, 7 à 10 nuits pour une chirurgie de l'obésité ou un lifting. Votre chirurgien valide votre aptitude au retour avant le vol.",
  },
  {
    q: 'Mes données médicales sont-elles protégées ?',
    a: "Absolument. Votre dossier médical est couvert par le secret professionnel : il n'est partagé qu'avec l'équipe soignante en charge de votre intervention. Discrétion absolue, du premier appel à votre retour — c'est l'un de nos six engagements.",
  },
];

/**
 * Section 10 — FAQ express (SEO) avec accordéon animé.
 */
export default function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="bg-ivory py-[88px] md:py-[140px]">
      <div className="mx-auto grid max-w-[1200px] gap-14 px-6 lg:grid-cols-[40%_60%] lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="surtitre">FAQ</p>
          <h2 className="mt-5 text-[32px] font-medium leading-[1.12] md:text-[46px]">
            Vos <strong className="font-semibold">questions</strong>, nos{' '}
            <em className="italic text-bronze">réponses</em>
          </h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-plum-soft">
            Tout ce qu'il faut savoir avant d'organiser votre séjour médical en Tunisie. Une autre question ? Notre
            équipe francophone vous répond en moins d'une heure.
          </p>
          <Link to="/devis-gratuit" className="btn-bronze mt-8">
            Obtenir mon devis gratuit
          </Link>
        </motion.div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden rounded-[20px] bg-cream shadow-soft"
                style={{ border: isOpen ? '1px solid rgba(217, 185, 130, 0.5)' : '1px solid transparent' }}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="font-display text-[18px] font-medium leading-snug text-plum">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-bronze transition-transform duration-500 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="px-6 pb-6 text-[15px] leading-[1.7] text-plum-soft">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
