import { useEffect, useRef } from 'react';
import { animate, motion, useInView } from 'framer-motion';

const STATS = [
  { value: 2400, suffix: '+', label: 'patientes & patients accompagnés', format: (v: number) => Math.round(v).toLocaleString('fr-FR') },
  { value: 15, suffix: ' ans', label: "d'expertise médicale", format: (v: number) => `${Math.round(v)}` },
  { value: 98, suffix: ' %', label: 'de patients satisfaits', format: (v: number) => `${Math.round(v)}` },
  { value: 24, suffix: '/7', label: 'assistance francophone', format: (v: number) => `${Math.round(v)}` },
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
    <span className="font-display text-[44px] font-semibold leading-none text-plum md:text-[56px]">
      <span ref={ref}>0</span>
      <span className="text-bronze">{suffix}</span>
    </span>
  );
}

/**
 * Section 3 — Bandeau chiffres clés (peach-mist, filets or verticaux).
 */
export default function StatsBand() {
  return (
    <section className="bg-peach-mist py-16 md:py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-y-12 px-6 lg:grid-cols-4 lg:px-12">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col items-center gap-3 text-center ${
              i > 0 ? 'lg:border-l lg:border-gold-light/50' : ''
            }`}
          >
            <Counter value={s.value} suffix={s.suffix} format={s.format} />
            <span className="max-w-[200px] text-[14px] font-semibold uppercase tracking-[0.08em] text-plum-soft">
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
