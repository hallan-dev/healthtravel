import { useEffect, useRef } from 'react';
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const STATS: Stat[] = [
  { value: 12, suffix: '', label: 'partenaires certifiés' },
  { value: 100, suffix: ' %', label: 'de cliniques auditées chaque année' },
  { value: 24, suffix: '/7', label: 'coordination médicale' },
];

/**
 * Compteur animé 0 → valeur (1.6 s, ease power2.out) à l'entrée du viewport.
 */
function Counter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, stat.value, { duration: 1.6, ease: 'easeOut' });
    return () => controls.stop();
  }, [inView, mv, stat.value]);

  return (
    <span ref={ref} className="font-display text-[56px] font-semibold leading-none text-ivory md:text-[64px]">
      <motion.span>{rounded}</motion.span>
      <span className="text-gold-light">{stat.suffix}</span>
    </span>
  );
}

/**
 * Section 4 — Chiffres & engagement qualité (Framer Motion).
 * Bandeau prune profond, ivoire + or : 3 compteurs, filet or qui se dessine,
 * puis paragraphe SEO sur le processus de sélection.
 */
export default function QualityBand() {
  return (
    <section className="bg-plum py-[88px] md:py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="surtitre justify-center !text-gold-light text-center"
        >
          Engagement qualité
        </motion.p>

        <div className="mt-12 grid gap-12 text-center md:grid-cols-3 md:gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <Counter stat={stat} />
              {/* Filet or qui se dessine */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: '-15% 0px' }}
                transition={{ duration: 1, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="gold-thread mx-auto mt-5 w-24 origin-center"
              />
              <p className="mt-5 text-[15px] font-semibold uppercase tracking-[0.14em] text-ivory/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-16 max-w-[820px] text-center text-[16px] leading-[1.8] text-ivory/80"
        >
          Notre processus de sélection est sans compromis : chaque clinique et chaque hôtel partenaire est visité sur
          place par notre équipe médicale, audité sur ses protocoles d'hygiène, ses équipements et ses résultats, puis
          signe une charte qualité Health Travel. Les retours de nos 2 400 patientes sont analysés après chaque
          séjour ; tout partenaire qui ne répond plus à nos exigences est retiré du réseau. C'est cette rigueur qui
          garantit votre sécurité et votre confort, du premier appel à votre retour.
        </motion.p>
      </div>
    </section>
  );
}
