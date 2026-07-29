import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Award } from 'lucide-react';

const MINI_STATS = [
  { value: '20+', label: "ans d'expérience" },
  { value: '5 000+', label: 'interventions réussies' },
  { value: '0', label: 'compromis sur la sécurité' },
];

/**
 * Section 5 — Dr Hallan Khenissi (teaser).
 */
export default function DoctorTeaser() {
  return (
    <section className="bg-signature-reverse relative overflow-hidden py-[88px] md:py-[140px]">
      <div aria-hidden="true" className="noise-overlay pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 px-6 lg:grid-cols-2 lg:px-12">
        {/* Portrait en arche */}
        <motion.div
          initial={{ opacity: 0, rotate: 2, clipPath: 'inset(0 0 100% 0)' }}
          whileInView={{ opacity: 1, rotate: 0, clipPath: 'inset(0 0 0% 0)' }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[420px]"
        >
          <div
            className="overflow-hidden shadow-soft"
            style={{ borderRadius: '210px 210px 32px 32px', aspectRatio: '4 / 5' }}
          >
            <img
              src="/dr-khenissi-portrait.jpg"
              alt="Portrait du Dr Hallan Khenissi, chirurgien tunisien de renommée internationale"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Badge flottant glacier */}
          <div className="animate-float absolute -right-4 top-10 flex items-center gap-2 rounded-full bg-glacier/90 px-4 py-2.5 text-[13px] font-bold text-plum shadow-card md:-right-8">
            <Award className="h-4 w-4 text-glacier-deep" />
            Notre praticien vedette
          </div>
        </motion.div>

        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="surtitre">Excellence médicale</p>
          <h2 className="mt-5 text-[32px] font-medium leading-[1.12] md:text-[46px]">
            Le Dr <strong className="font-semibold">Hallan Khenissi</strong>
          </h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-plum-soft">
            Chirurgien de renommée internationale, le Dr Khenissi a formé toute une génération de praticiens. Plus de
            20 ans d'expérience, des milliers d'interventions réussies, une approche où la sécurité rencontre l'art du
            naturel.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-6">
            {MINI_STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              >
                <p className="font-display text-[30px] font-semibold text-bronze-deep md:text-[36px]">{s.value}</p>
                <p className="mt-1 text-[13px] font-semibold leading-snug text-plum-soft">{s.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link to="/dr-hallan-khenissi" className="btn-bronze">
              Rencontrer le Dr Khenissi
            </Link>
            <Link
              to="/interventions"
              className="inline-flex items-center gap-2 text-[15px] font-bold text-bronze-deep transition-colors hover:text-bronze"
            >
              Ses interventions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
