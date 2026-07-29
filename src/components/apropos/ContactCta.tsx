import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

const CONTACT_LINES = [
  { icon: MapPin, label: 'Tanit Business Center, Bureau 601, 6ᵉ étage, Tunis 1053', href: undefined },
  { icon: Phone, label: '+216 55 000 260', href: 'tel:+21655000260' },
  { icon: Mail, label: 'contact@healthtravel.fr', href: 'mailto:contact@healthtravel.fr' },
  { icon: Clock, label: 'Lun–Sam · 8h–18h', href: undefined },
];

/**
 * Section 6 — Où nous trouver + CTA (blush-mist, 2 colonnes).
 * Les cartes glissent de ±40px en miroir ; CTA pulse léger.
 */
export default function ContactCta() {
  return (
    <section className="bg-blush-mist py-[88px] md:py-[140px]">
      <div className="mx-auto grid max-w-[1200px] items-stretch gap-8 px-6 lg:grid-cols-2 lg:gap-12 lg:px-12">
        {/* Carte contact — glisse de -40px */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[28px] bg-cream p-8 shadow-soft md:p-10"
          style={{ border: '1px solid rgba(217, 185, 130, 0.35)' }}
        >
          <p className="surtitre">Où nous trouver</p>
          <h2 className="mt-5 text-[28px] font-medium leading-[1.15] tracking-[-0.01em] md:text-[34px]">
            Au cœur de <em className="italic text-bronze">Tunis</em>
          </h2>
          <div className="mt-8 space-y-5">
            {CONTACT_LINES.map((line) => {
              const content = (
                <>
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                    style={{ background: 'rgba(217, 185, 130, 0.2)' }}
                  >
                    <line.icon className="h-5 w-5 text-bronze-deep" strokeWidth={1.5} />
                  </span>
                  <span className="text-[15px] font-semibold leading-[1.5] text-plum md:text-[16px]">{line.label}</span>
                </>
              );
              return line.href ? (
                <a
                  key={line.label}
                  href={line.href}
                  className="flex items-center gap-4 rounded-[16px] transition-colors hover:text-bronze-deep"
                >
                  {content}
                </a>
              ) : (
                <div key={line.label} className="flex items-center gap-4">
                  {content}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Bloc CTA — glisse de +40px */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="bg-signature relative flex flex-col justify-center overflow-hidden rounded-[28px] p-8 shadow-soft md:p-12"
        >
          <div aria-hidden="true" className="noise-overlay pointer-events-none absolute inset-0" />
          <div className="relative">
            <p className="font-script text-[30px] leading-[1.1] text-bronze-deep md:text-[36px]">Make them jealous</p>
            <h2 className="mt-4 text-[28px] font-medium leading-[1.15] tracking-[-0.01em] md:text-[36px]">
              Parlons de <em className="italic text-bronze">votre projet</em>
            </h2>
            <p className="mt-4 max-w-[420px] text-[15px] leading-[1.7] text-plum-soft md:text-[16px]">
              Un premier échange gratuit et sans engagement : notre équipe vous répond en moins d'une heure, sept jours
              sur sept.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/devis-gratuit" className="btn-bronze animate-cta-pulse">
                Demander mon devis gratuit
              </Link>
              <a
                href="https://wa.me/21655000260"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold tracking-wide text-plum shadow-soft transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: '#9FBCA6' }}
              >
                <MessageCircle className="h-5 w-5" strokeWidth={1.8} />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
