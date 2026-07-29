import { useEffect, useRef } from 'react';
import { animate, motion, useInView } from 'framer-motion';

const STATS = [
  { value: 15, suffix: ' ans', label: "d'expertise", format: (v: number) => `${Math.round(v)}` },
  {
    value: 2400,
    suffix: '+',
    label: 'patientes & patients',
    format: (v: number) => Math.round(v).toLocaleString('fr-FR'),
  },
  { value: 12, suffix: '', label: 'cliniques & hôtels partenaires', format: (v: number) => `${Math.round(v)}` },
  {
    value: 4.9,
    suffix: '/5',
    label: 'note moyenne',
    format: (v: number) => v.toFixed(1).replace('.', ','),
  },
];

function Counter({ value, suffix, format }: { value: number; suffix: string; format: (v: number) => string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = format(v);
      },
    });
    return () => controls.stop();
  }, [inView, value, format]);

  return (
    <span className="font-display text-[44px] font-semibold leading-none text-ivory md:text-[56px]">
      <span ref={ref}>0</span>
      <span className="text-gold-light">{suffix}</span>
    </span>
  );
}

/**
 * Section 5 — Nos chiffres (bandeau prune profond, texte ivoire, filets or).
 */
export default function ChiffresBand() {
  return (
    <section className="relative bg-plum py-16 md:py-24">
      {/* Liseré or qui se dessine en haut du bandeau */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="gold-thread absolute inset-x-0 top-0 origin-center"
      />

      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-y-12 px-6 lg:grid-cols-4 lg:px-12">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col items-center gap-3 text-center ${
              i > 0 ? 'lg:border-l lg:border-gold-light/30' : ''
            }`}
          >
            <Counter value={s.value} suffix={s.suffix} format={s.format} />
            <span className="max-w-[220px] text-[14px] font-semibold uppercase tracking-[0.08em] text-ivory/75">
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
