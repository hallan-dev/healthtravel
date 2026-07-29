import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

interface HotelCard {
  img: string;
  alt: string;
  title: string;
  text: string;
}

const HOTELS: HotelCard[] = [
  {
    img: '/hotel-suite.jpg',
    alt: 'Suite vue mer dans un hôtel 5 étoiles tunisien, lit king avec linge crème et grande baie vitrée',
    title: 'Suite vue mer',
    text: 'Chambres spacieuses en bord de mer, linge premium, silence garanti, service en chambre 24/7.',
  },
  {
    img: '/hotel-spa.jpg',
    alt: 'Spa et hammam en marbre rosé dans un hôtel de luxe en Tunisie, lumière tamisée et détails laiton',
    title: 'Spa & hammam',
    text: 'Détente encadrée : hammam en marbre, massages doux post-convalescence (avec accord médical).',
  },
  {
    img: '/tunisie-plage.jpg',
    alt: 'Plage privée d’un hôtel 5 étoiles en Tunisie, transats ombragés et eau turquoise au lever du jour',
    title: 'Plage privée',
    text: 'Transats ombragés, promenades au lever du jour, air marin pour une récupération idéale.',
  },
];

const PERKS = ['Navette clinique incluse', 'Repas adaptés post-op', 'Personnel formé aux patients médicaux'];

/**
 * Badge or « 5★ » avec reflet animé (3s).
 */
function StarBadge() {
  return (
    <span
      className="absolute left-4 top-4 inline-flex items-center gap-1 overflow-hidden rounded-full px-4 py-1.5 text-[13px] font-bold text-cream"
      style={{
        background: 'linear-gradient(135deg, #D9B982, #B08A50 55%, #96703B)',
        boxShadow: '0 8px 24px -8px rgba(176, 138, 80, 0.6)',
      }}
    >
      5★
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-cream/50"
        animate={{ x: ['-160%', '420%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
    </span>
  );
}

/**
 * Section 3 — Nos hôtels 5★ (Framer Motion + Embla).
 * Carrousel horizontal automatique (6 s), cartes avec tilt léger au survol,
 * badge 5★ brillant et liste d'atouts.
 */
export default function HotelsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 });

  // Carrousel automatique toutes les 6 s
  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => clearInterval(id);
  }, [emblaApi]);

  return (
    <section id="hotels" className="scroll-mt-[var(--nav-h)] overflow-hidden bg-peach-mist py-[88px] md:py-[140px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <SectionHeader
          surtitre="Nos hôtels 5★"
          title={
            <>
              Convalescence <em className="italic text-bronze">grand confort</em>
            </>
          }
          text="Votre récupération se déroule dans des hôtels 5 étoiles en bord de mer, sélectionnés pour leur calme, leur service et leur expérience des patients médicaux."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14"
        >
          <div ref={emblaRef} className="-mx-3 overflow-hidden">
            <div className="flex">
              {HOTELS.map((hotel) => (
                <div
                  key={hotel.title}
                  className="min-w-0 flex-[0_0_100%] px-3 sm:flex-[0_0_60%] lg:flex-[0_0_33.333%]"
                >
                  <motion.article
                    whileHover={{ rotateX: 2.5, rotateY: -2.5, y: -8 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                    style={{ transformPerspective: 900 }}
                    className="group flex h-full flex-col rounded-[28px] bg-cream p-5 pb-7 shadow-soft"
                  >
                    <div className="relative overflow-hidden rounded-[20px]" style={{ aspectRatio: '16 / 10' }}>
                      <img
                        src={hotel.img}
                        alt={hotel.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <StarBadge />
                    </div>
                    <h3 className="mt-6 px-1 font-display text-[24px] font-medium leading-[1.2] text-plum">
                      {hotel.title}
                    </h3>
                    <p className="mt-2 px-1 text-[15px] leading-[1.7] text-plum-soft">{hotel.text}</p>
                    <ul className="mt-5 space-y-2.5 px-1">
                      {PERKS.map((perk) => (
                        <li key={perk} className="flex items-center gap-2.5 text-[14px] font-semibold text-plum-soft">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage/20">
                            <Check className="h-3 w-3 text-sage" strokeWidth={3.5} />
                          </span>
                          {perk}
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
