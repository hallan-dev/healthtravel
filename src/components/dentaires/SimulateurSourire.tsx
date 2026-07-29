import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Minus, Plus, Send, ShieldCheck, Smile, Sun } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SimulateurItem {
  key: string;
  label: string;
  unit: string;
  price: number;
  max: number;
  icon: LucideIcon;
}

const ITEMS: SimulateurItem[] = [
  { key: 'implants', label: 'Implants dentaires', unit: 'par implant', price: 650, max: 10, icon: Plus },
  { key: 'facettes', label: 'Facettes E-max', unit: 'par facette', price: 290, max: 12, icon: Smile },
  { key: 'couronnes', label: 'Couronnes', unit: 'par couronne', price: 220, max: 12, icon: ShieldCheck },
  { key: 'blanchiment', label: 'Blanchiment', unit: 'séance complète', price: 190, max: 1, icon: Sun },
];

const formatEur = (n: number) => `${n.toLocaleString('fr-FR')} €`;

/**
 * Section 4 — Simulateur de sourire : « Composez votre sourire ».
 * Steppers bronze (spring), total indicatif en grand Fraunces avec compteur
 * animé (0.4 s à chaque changement), reflet or qui luit au changement.
 */
export default function SimulateurSourire() {
  const [counts, setCounts] = useState<Record<string, number>>({
    implants: 0,
    facettes: 0,
    couronnes: 0,
    blanchiment: 0,
  });
  const [sheenKey, setSheenKey] = useState(0);
  const total = ITEMS.reduce((sum, item) => sum + counts[item.key] * item.price, 0);

  // Compteur animé du total (0.4 s à chaque changement)
  const totalMv = useMotionValue(0);
  const totalText = useTransform(totalMv, (v) => formatEur(Math.round(v)));
  useEffect(() => {
    const controls = animate(totalMv, total, { duration: 0.4, ease: 'easeOut' });
    return () => controls.stop();
  }, [total, totalMv]);

  const update = (key: string, delta: number) => {
    setCounts((prev) => {
      const item = ITEMS.find((it) => it.key === key)!;
      const next = Math.min(item.max, Math.max(0, prev[key] + delta));
      if (next === prev[key]) return prev;
      return { ...prev, [key]: next };
    });
    setSheenKey((k) => k + 1);
  };

  const selection = ITEMS.filter((item) => counts[item.key] > 0)
    .map((item) => `${item.label} ×${counts[item.key]}`)
    .join(' · ');

  return (
    <div className="grid gap-8 lg:grid-cols-[58%_42%]">
      {/* Steppers */}
      <div className="space-y-4">
        {ITEMS.map((item) => {
          const Icon = item.icon;
          const count = counts[item.key];
          return (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 rounded-[24px] bg-ivory p-5 shadow-soft"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-peach-mist">
                <Icon className="h-6 w-6 text-bronze" strokeWidth={1.5} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-[19px] font-medium leading-tight text-plum">{item.label}</p>
                <p className="text-[13px] font-semibold text-plum-faint">
                  {formatEur(item.price)} {item.unit}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <motion.button
                  type="button"
                  aria-label={`Retirer un(e) ${item.label.toLowerCase()}`}
                  disabled={count === 0}
                  onClick={() => update(item.key, -1)}
                  whileTap={{ scale: 0.82 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 18 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-bronze/50 text-bronze-deep transition-colors hover:bg-blush-mist disabled:opacity-35"
                >
                  <Minus className="h-4 w-4" />
                </motion.button>
                <motion.span
                  key={count}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 16 }}
                  className="w-8 text-center font-display text-[24px] font-semibold text-plum"
                >
                  {count}
                </motion.span>
                <motion.button
                  type="button"
                  aria-label={`Ajouter un(e) ${item.label.toLowerCase()}`}
                  disabled={count >= item.max}
                  onClick={() => update(item.key, 1)}
                  whileTap={{ scale: 0.82 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 18 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-cream shadow-cta transition-transform disabled:opacity-35"
                  style={{ backgroundImage: 'linear-gradient(135deg, #D9B982, #B08A50 55%, #96703B)' }}
                >
                  <Plus className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Carte total */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex flex-col overflow-hidden rounded-[28px] p-9 text-center shadow-card lg:p-10"
        style={{ backgroundImage: 'linear-gradient(150deg, #F9E3CE 0%, #F4D3D6 55%, #E3D6F0 100%)' }}
      >
        {/* Reflet or qui luit à chaque changement */}
        <motion.div
          key={sheenKey}
          aria-hidden="true"
          initial={{ x: '-140%' }}
          animate={{ x: '140%' }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="pointer-events-none absolute inset-y-0 w-1/3"
          style={{
            background:
              'linear-gradient(100deg, transparent 0%, rgba(217, 185, 130, 0.45) 50%, transparent 100%)',
          }}
        />

        <p className="surtitre justify-center">Votre sourire sur mesure</p>
        <motion.p className="mt-6 font-display text-[52px] font-semibold leading-none tracking-[-0.02em] text-plum md:text-[64px]">
          {totalText}
        </motion.p>
        <p className="mt-3 text-[14px] font-semibold text-bronze-deep">
          Prix indicatif — devis personnalisé gratuit
        </p>

        <div className="gold-thread mx-auto mt-6 w-2/3" />

        {total > 0 ? (
          <p className="mt-5 min-h-[24px] text-[14px] font-semibold text-plum-soft">{selection}</p>
        ) : (
          <p className="mt-5 min-h-[24px] text-[14px] font-semibold text-plum-faint">
            Composez votre sourire avec les actes ci-contre.
          </p>
        )}

        <Link
          to="/devis-gratuit"
          className="btn-bronze mt-7 self-center"
          aria-label="Envoyer cette sélection avec ma demande de devis"
        >
          <Send className="h-4 w-4" />
          Envoyer cette sélection avec ma demande de devis
        </Link>
        <p className="mt-4 inline-flex items-center justify-center gap-1.5 text-[13px] font-semibold text-plum-soft">
          Séjour 5★ et transferts inclus
          <ArrowRight className="h-3.5 w-3.5 text-bronze" />
        </p>
      </motion.div>
    </div>
  );
}
