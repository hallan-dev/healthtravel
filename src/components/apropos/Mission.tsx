import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import { HeartHandshake, Receipt, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const PILIERS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: ShieldCheck,
    title: "L'exigence médicale",
    text: 'Nous ne travaillons qu\u2019avec des chirurgiens diplômés et des cliniques agréées par le Ministère de la Santé tunisien. Chaque protocole est audité.',
  },
  {
    icon: HeartHandshake,
    title: "L'expérience humaine",
    text: "Une coordinatrice francophone dédiée, disponible 24/7, du premier appel jusqu'à des mois après votre retour.",
  },
  {
    icon: Receipt,
    title: 'La transparence totale',
    text: 'Des prix tout inclus, détaillés ligne par ligne. Aucun frais caché, aucune surprise.',
  },
];

/**
 * Section 2 — Notre mission : grande citation révélée mot par mot (scrub)
 * + 3 piliers en cartes verre (stagger y:48). Composant GSAP isolé.
 */
export default function Mission() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reduced) {
        gsap.set('[data-mission-quote]', { opacity: 1 });
        gsap.set('[data-mission-card]', { opacity: 1, y: 0 });
        return;
      }

      // Citation révélée mot par mot au scroll (opacité 0.15 → 1, scrub)
      const split = new SplitText('[data-mission-quote]', { type: 'words' });
      gsap.set(split.words, { opacity: 0.15 });
      gsap.to(split.words, {
        opacity: 1,
        stagger: 0.06,
        ease: 'none',
        scrollTrigger: {
          trigger: '[data-mission-quote]',
          start: 'top 78%',
          end: 'top 35%',
          scrub: true,
        },
      });

      // Cartes piliers : stagger y 48
      gsap.fromTo(
        '[data-mission-card]',
        { opacity: 0, y: 48 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: '[data-mission-cards]', start: 'top 75%', once: true },
        },
      );

      return () => split.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-cream py-[88px] md:py-[140px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <p className="surtitre justify-center text-center">Notre mission</p>
        <blockquote
          data-mission-quote
          className="mx-auto mt-8 max-w-[860px] text-center font-display text-[26px] font-medium leading-[1.35] text-plum md:text-[36px]"
        >
          « Rendre l'excellence médicale <em className="italic text-bronze">accessible</em>, sans jamais rien céder
          sur la sécurité, le naturel et l'humain. »
        </blockquote>

        <div data-mission-cards className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {PILIERS.map((p) => (
            <div
              key={p.title}
              data-mission-card
              className="glass-card rounded-[28px] p-8 shadow-soft"
              style={{ opacity: 0 }}
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full"
                style={{ background: 'rgba(217, 185, 130, 0.2)' }}
              >
                <p.icon className="h-6 w-6 text-bronze-deep" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 text-[22px] font-medium leading-[1.2]">{p.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-plum-soft">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
