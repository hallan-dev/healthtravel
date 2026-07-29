import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

/**
 * Section 1 — Héros éditorial /a-propos (peach-mist + motif floral).
 * Composant GSAP isolé : voile dégradé, SplitText mots, parallaxe décalée
 * des deux images (grande 0.3×, petite 0.6×).
 */
export default function HeroAPropos() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reduced) {
        gsap.set('[data-ap-veil]', { yPercent: -100 });
        gsap.set('[data-ap-fade]', { opacity: 1, y: 0 });
        gsap.set('[data-ap-img-big]', { clipPath: 'inset(0% 0% 0% 0%)' });
        gsap.set('[data-ap-img-small]', { opacity: 1, scale: 1 });
        return;
      }

      const split = new SplitText('[data-ap-title]', { type: 'words' });
      gsap.set(split.words, { y: 40, rotateX: 35, opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      // Voile dégradé reveal
      tl.to('[data-ap-veil]', { yPercent: -100, duration: 0.9, ease: 'power3.inOut' })
        .fromTo('[data-ap-surtitre]', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
        // H1 SplitText mots
        .to(split.words, { y: 0, rotateX: 0, opacity: 1, duration: 0.7, stagger: 0.05 }, '-=0.3')
        // Lead
        .fromTo('[data-ap-lead]', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.35')
        // Grande image : clip-path reveal
        .fromTo(
          '[data-ap-img-big]',
          { clipPath: 'inset(100% 0% 0% 0%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, ease: 'power3.out' },
          0.4,
        )
        // Petite carte décalée
        .fromTo(
          '[data-ap-img-small]',
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.5)' },
          1,
        );

      // Parallaxe décalée : grande 0.3×, petite 0.6×
      gsap.to('[data-ap-plx-big]', {
        yPercent: -5,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to('[data-ap-plx-small]', {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });

      return () => split.revert();
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative -mt-[var(--nav-h)] overflow-hidden bg-peach-mist pb-[88px] pt-[calc(var(--nav-h)+80px)] md:pb-[140px] md:pt-[calc(var(--nav-h)+110px)]"
    >
      {/* Motif floral discret */}
      <div aria-hidden="true" className="floral-bg pointer-events-none absolute inset-0 opacity-[0.1]" />
      <div aria-hidden="true" className="noise-overlay pointer-events-none absolute inset-0" />

      {/* Voile d'entrée */}
      <div data-ap-veil aria-hidden="true" className="absolute inset-0 z-30 bg-ivory" />

      <div className="relative z-[2] mx-auto grid max-w-[1200px] items-center gap-14 px-6 lg:grid-cols-[55%_45%] lg:gap-10 lg:px-12">
        {/* Colonne texte */}
        <div>
          <p data-ap-surtitre data-ap-fade className="surtitre" style={{ opacity: 0 }}>
            Notre histoire
          </p>
          <h1
            data-ap-title
            className="mt-6 text-[40px] font-semibold leading-[1.06] tracking-[-0.015em] md:text-[56px]"
          >
            L'excellence médicale, l'âme <em className="italic text-bronze">tunisienne</em>
          </h1>
          <p
            data-ap-lead
            data-ap-fade
            className="mt-7 max-w-[560px] text-[17px] font-medium leading-[1.6] text-plum-soft md:text-[19px]"
            style={{ opacity: 0 }}
          >
            Depuis 15 ans, Health Travel accompagne les patientes et patients francophones vers une médecine
            d'excellence en Tunisie — avec l'exigence d'une clinique européenne et la chaleur de l'hospitalité
            méditerranéenne.
          </p>
        </div>

        {/* Collage de 2 images superposées */}
        <div className="relative pb-12 pr-4 sm:pr-10">
          <div data-ap-plx-big>
            <div data-ap-img-big className="overflow-hidden rounded-[32px] shadow-soft">
              <img
                src="/equipe-health-travel.jpg"
                alt="L'équipe Health Travel devant le Tanit Business Center à Tunis — agence de tourisme médical agréée"
                className="h-full w-full object-cover"
                style={{ aspectRatio: '16 / 10' }}
              />
            </div>
          </div>
          <div data-ap-plx-small className="absolute -bottom-0 right-0 w-[46%]">
            <div
              data-ap-img-small
              className="overflow-hidden rounded-[24px] shadow-card"
              style={{ border: '3px solid rgba(217, 185, 130, 0.85)', opacity: 0 }}
            >
              <img
                src="/clinique-chambre.jpg"
                alt="Chambre VIP d'une clinique partenaire en Tunisie — confort hôtelier 5 étoiles"
                loading="lazy"
                className="h-full w-full object-cover"
                style={{ aspectRatio: '16 / 10' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
