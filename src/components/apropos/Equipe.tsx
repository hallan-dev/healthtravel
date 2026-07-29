import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Car, Stethoscope, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Fiche {
  icon: LucideIcon;
  title: string;
  text: string;
  to?: string;
  linkLabel?: string;
}

const FICHES: Fiche[] = [
  {
    icon: Users,
    title: 'Nos coordinatrices patientes',
    text: 'Francophones, formées au médical, votre interlocutrice unique.',
  },
  {
    icon: Stethoscope,
    title: 'Nos chirurgiens partenaires',
    text: 'Sélectionnés par le Dr Hallan Khenissi lui-même.',
    to: '/dr-hallan-khenissi',
    linkLabel: 'Découvrir le Dr Khenissi',
  },
  {
    icon: Car,
    title: 'Notre équipe logistique',
    text: 'Chauffeurs privés, assistants hôteliers, conciergerie dédiée.',
  },
];

/**
 * Section 4 — L'équipe : grande photo (reveal clip-path) + 3 mini-fiches.
 */
export default function Equipe() {
  return (
    <section className="bg-ivory py-[88px] md:py-[140px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-[720px] text-center"
        >
          <p className="surtitre justify-center">Notre équipe</p>
          <h2 className="mt-5 text-[32px] font-medium leading-[1.12] tracking-[-0.01em] md:text-[46px]">
            Une équipe à votre <em className="italic text-bronze">écoute</em>
          </h2>
        </motion.div>

        {/* Grande photo — reveal clip-path */}
        <motion.div
          initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
          whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          viewport={{ once: true, margin: '-12% 0px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 overflow-hidden rounded-[32px] shadow-soft"
        >
          <img
            src="/equipe-health-travel.jpg"
            alt="Photo de groupe de l'équipe Health Travel — coordinateurs et assistantes francophones à Tunis"
            loading="lazy"
            className="h-full w-full object-cover"
            style={{ aspectRatio: '16 / 10' }}
          />
        </motion.div>

        {/* 3 mini-fiches */}
        <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
          {FICHES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[28px] bg-cream p-8 shadow-soft transition-shadow duration-500 hover:shadow-card"
              style={{ border: '1px solid rgba(217, 185, 130, 0.3)' }}
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full"
                style={{ background: 'rgba(217, 185, 130, 0.2)' }}
              >
                <f.icon className="h-6 w-6 text-bronze-deep" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 text-[20px] font-medium leading-[1.25]">{f.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-plum-soft">{f.text}</p>
              {f.to && (
                <Link
                  to={f.to}
                  className="group mt-4 inline-flex items-center gap-2 text-[14px] font-bold text-bronze-deep transition-colors hover:text-bronze"
                >
                  {f.linkLabel}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
