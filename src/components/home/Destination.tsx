import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const BULLETS = [
  'Hôtels 5★ en bord de mer',
  'Cliniques aux standards européens',
  'Gastronomie & culture',
  'Sérénité totale',
];

/**
 * Section 8 — Séjour de rêve en Tunisie (fond plein écran, parallaxe GSAP).
 */
export default function Destination() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        gsap.set('[data-dest-panel]', { opacity: 1, x: 0 });
        gsap.set('[data-dest-bullet]', { opacity: 1, y: 0 });
        return;
      }

      // Parallaxe de fond y -10%
      gsap.fromTo(
        '[data-dest-bg]',
        { yPercent: 0 },
        {
          yPercent: -10,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true },
        },
      );

      // Panneau verre glisse de 60px
      gsap.fromTo(
        '[data-dest-panel]',
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: root.current, start: 'top 65%' },
        },
      );

      // Puces stagger
      gsap.fromTo(
        '[data-dest-bullet]',
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: { trigger: root.current, start: 'top 55%' },
        },
      );
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative flex min-h-[90dvh] items-center overflow-hidden py-24">
      {/* Fond Sidi Bou Said + overlay dégradé pêche */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          data-dest-bg
          src="/tunisie-sidi-bou-said.jpg"
          alt="Ruelle de Sidi Bou Said au coucher du soleil — destination de votre séjour de tourisme médical en Tunisie"
          loading="lazy"
          className="h-[120%] w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(100deg, rgba(247, 233, 220, 0.85) 0%, rgba(247, 233, 220, 0.35) 45%, transparent 75%)',
          }}
        />
      </div>

      {/* Panneau verre dépoli */}
      <div className="relative mx-auto w-full max-w-[1200px] px-6 lg:px-12">
        <div
          data-dest-panel
          className="max-w-[560px] rounded-[32px] p-9 shadow-soft md:p-12"
          style={{
            background: 'rgba(255, 253, 250, 0.62)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            border: '1px solid rgba(217, 185, 130, 0.35)',
            opacity: 0,
          }}
        >
          <p className="surtitre">La destination</p>
          <h2 className="mt-5 text-[30px] font-medium leading-[1.12] md:text-[42px]">
            Révélez votre éclat dans un <strong className="font-semibold">cadre d'exception</strong>
          </h2>
          <p className="mt-5 text-[16px] leading-[1.7] text-plum-soft">
            Le tourisme médical en Tunisie, c'est aussi 300 jours de soleil par an, une hôtellerie 5★ au bord de la
            Méditerranée, un patrimoine millénaire et une douceur de vivre légendaire — à seulement 2 h de Paris.
            Votre convalescence devient un véritable voyage.
          </p>
          <ul className="mt-7 space-y-3">
            {BULLETS.map((b) => (
              <li key={b} data-dest-bullet className="flex items-center gap-3 text-[15px] font-semibold text-plum" style={{ opacity: 0 }}>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-light/40">
                  <Check className="h-3.5 w-3.5 text-bronze-deep" />
                </span>
                {b}
              </li>
            ))}
          </ul>
          <Link to="/votre-sejour-tunisie" className="btn-bronze mt-9">
            Découvrir votre séjour
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
