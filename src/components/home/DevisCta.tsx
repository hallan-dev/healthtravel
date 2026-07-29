import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Check, Phone, Play, Video } from 'lucide-react';

const BULLETS = [
  "Réponse en moins d'1 h",
  'Étude personnalisée par nos chirurgiens',
  'Prix tout inclus, sans surprise',
];

/**
 * Section 9 — Devis + vidéo (CTA final).
 * La génération vidéo n'est pas disponible : le lecteur affiche le poster
 * `hero-devis.jpg` avec un overlay play élégant, puis un état de repli gracieux
 * « Vidéo bientôt disponible » au clic.
 */
export default function DevisCta() {
  const [tried, setTried] = useState(false);

  return (
    <section className="bg-blush-mist py-[88px] md:py-[140px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-25% 0px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="grid overflow-hidden rounded-[32px] bg-cream shadow-card lg:grid-cols-2"
        >
          {/* Lecteur vidéo (poster + fallback) */}
          <div className="relative min-h-[280px] overflow-hidden lg:min-h-[420px]">
            <img
              src="/hero-devis.jpg"
              alt="Coordonnatrice Health Travel en visio-appel — présentation vidéo de votre parcours de tourisme médical en Tunisie"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-plum/20" />
            <AnimatePresence mode="wait">
              {!tried ? (
                <motion.button
                  key="play"
                  type="button"
                  aria-label="Lire la vidéo de présentation Health Travel"
                  onClick={() => setTried(true)}
                  exit={{ opacity: 0, scale: 1.6 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span
                    className="animate-cta-pulse flex h-[72px] w-[72px] items-center justify-center rounded-full text-cream transition-transform duration-300 hover:scale-110"
                    style={{ backgroundImage: 'linear-gradient(135deg, #D9B982, #B08A50 55%, #96703B)' }}
                  >
                    <Play className="ml-1 h-7 w-7 fill-current" />
                  </span>
                </motion.button>
              ) : (
                <motion.div
                  key="fallback"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-plum/60 px-8 text-center backdrop-blur-sm"
                >
                  <Video className="h-8 w-8 text-gold-light" />
                  <p className="font-display text-[22px] italic text-ivory">Vidéo bientôt disponible</p>
                  <p className="max-w-[320px] text-[14px] leading-relaxed text-ivory/80">
                    Notre film de présentation arrive très vite. En attendant, découvrez votre parcours lors d'un
                    premier échange gratuit avec notre équipe.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contenu */}
          <div className="flex flex-col justify-center p-9 md:p-14">
            <p className="surtitre">Devis gratuit & sans engagement</p>
            <h2 className="mt-5 text-[30px] font-medium leading-[1.12] md:text-[42px]">
              Votre <em className="italic text-bronze">nouvelle vie</em> commence par un devis
            </h2>
            <ul className="mt-7 space-y-3">
              {BULLETS.map((b) => (
                <li key={b} className="flex items-center gap-3 text-[15px] font-semibold text-plum">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage/40">
                    <Check className="h-3.5 w-3.5 text-plum" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link to="/devis-gratuit" className="btn-bronze">
                Demander mon devis
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+21655000260"
                className="inline-flex items-center gap-2 text-[15px] font-bold text-bronze-deep transition-colors hover:text-bronze"
              >
                <Phone className="h-4 w-4" />
                +216 55 000 260
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
