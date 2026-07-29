import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import TestimonialCard from '@/components/TestimonialCard';
import type { Testimonial } from '@/components/TestimonialCard';

export const CELEBRITIES: Testimonial[] = [
  {
    img: '/star-ines.jpg',
    alt: 'Inès B., animatrice télé, sourire lumineux après ses facettes dentaires en Tunisie',
    quote:
      "Une expérience digne d'un palace. De l'aéroport à la clinique, tout était orchestré à la perfection. Mon sourire n'a jamais été aussi lumineux.",
    name: 'Inès B.',
    role: 'Animatrice télé',
    act: 'Facettes dentaires',
  },
  {
    img: '/star-karim.jpg',
    alt: 'Karim D., acteur, après sa sleeve gastrectomie en Tunisie avec Health Travel',
    quote:
      "Discrétion absolue, chirurgien exceptionnel, résultat naturel. J'ai perdu 38 kg et gagné une nouvelle vie.",
    name: 'Karim D.',
    role: 'Acteur',
    act: 'Sleeve gastrectomie',
  },
  {
    img: '/star-sophie.jpg',
    alt: 'Sophie L., influenceuse lifestyle, après son parcours FIV réussi à Tunis',
    quote:
      "Après 4 ans d'attente, notre miracle est arrivé à Tunis. Une équipe qui vous porte du début à la fin.",
    name: 'Sophie L.',
    role: 'Influenceuse lifestyle',
    act: 'FIV',
  },
  {
    img: '/star-leila.jpg',
    alt: 'Leïla M., chanteuse, après son lifting et sa chirurgie du regard en Tunisie',
    quote:
      "Un rajeunissement d'une délicatesse rare. Personne n'a deviné — tout le monde a remarqué que je rayonniais.",
    name: 'Leïla M.',
    role: 'Chanteuse',
    act: 'Lifting & regard',
  },
  {
    img: '/star-marc.jpg',
    alt: 'Marc V., ancien footballeur professionnel, après ses implants dentaires en Tunisie',
    quote:
      "Des implants parfaits, une organisation militaire et un hôtel somptueux. Je recommande les yeux fermés.",
    name: 'Marc V.',
    role: 'Ancien footballeur pro',
    act: 'Implants dentaires',
  },
];

/**
 * Section 2 — Témoignages de personnalités (mise en avant immédiate).
 * Carrousel : 3 cartes desktop / 1 mobile, auto 6 s, pause au survol.
 */
export default function CelebrityTestimonials() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    setSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
    embla.on('reInit', () => setSnaps(embla.scrollSnapList()));
    onSelect();
    return () => {
      embla.off('select', onSelect);
    };
  }, [embla]);

  // Défilement automatique 6 s, pause au survol
  useEffect(() => {
    if (!embla || paused) return;
    timer.current = setInterval(() => embla.scrollNext(), 6000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [embla, paused]);

  return (
    <section className="relative bg-cream py-[88px] md:py-[140px]">
      <div aria-hidden="true" className="gold-thread absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <SectionHeader
          surtitre="Ils nous font confiance"
          title={
            <>
              Des <strong className="font-semibold">visages connus</strong>, des{' '}
              <em className="italic text-bronze">sourires retrouvés</em>
            </>
          }
          text="Personnalités du petit écran, du sport et de la scène : elles ont choisi Health Travel pour leur discrétion et notre excellence."
        />

        <motion.div
          initial={{ opacity: 0, y: 56 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.12 }}
          className="mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="-ml-6 flex">
              {CELEBRITIES.map((t, i) => (
                <div key={t.name} className="min-w-0 flex-[0_0_100%] pl-6 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                  <TestimonialCard t={t} active={i === selected} />
                </div>
              ))}
            </div>
          </div>

          {/* Flèches bronze + pagination or */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Témoignage précédent"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-bronze/50 text-bronze-deep transition-all hover:bg-bronze hover:text-cream"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2.5">
              {snaps.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Aller au témoignage ${i + 1}`}
                  onClick={() => embla?.scrollTo(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === selected ? 'w-8 bg-gold-light' : 'w-2.5 bg-gold-light/40 hover:bg-gold-light/70'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Témoignage suivant"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-bronze/50 text-bronze-deep transition-all hover:bg-bronze hover:text-cream"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            to="/temoignages"
            className="inline-flex items-center gap-2 font-sans text-[15px] font-bold text-bronze-deep transition-colors hover:text-bronze"
          >
            Voir tous les témoignages
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
