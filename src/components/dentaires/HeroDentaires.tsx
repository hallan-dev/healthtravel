import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import { Clock, ShieldCheck, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

/**
 * Section 1 — Héros catégorie « Soins dentaires ».
 * Split 45/55 (image à gauche) : image qui glisse depuis la gauche avec
 * rotation 2° → 0, H1 caractères, chips stagger pop.
 * Composant GSAP isolé. Se retire de l'offset nav via -mt-[var(--nav-h)].
 */
export default function HeroDentaires() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reduced) {
        gsap.set('[data-dh-reveal]', { opacity: 1, y: 0 });
        gsap.set('[data-dh-chip]', { opacity: 1, scale: 1, y: 0 });
        gsap.set('[data-dh-float]', { opacity: 1, y: 0, scale: 1 });
        gsap.set('[data-dh-photo]', { opacity: 1, x: 0, rotation: 0, clipPath: 'inset(0% 0% 0% 0%)' });
        return;
      }

      const split = new SplitText('[data-dh-title]', { type: 'chars' });
      gsap.set(split.chars, { y: 40, rotateX: 35, opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      // Image : glisse depuis la gauche, rotation 2° → 0
      tl.fromTo(
        '[data-dh-photo]',
        { x: -80, rotation: 2, opacity: 0, clipPath: 'inset(0% 100% 0% 0%)' },
        { x: 0, rotation: 0, opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, ease: 'power3.out' },
      )
        // Carte flottante
        .fromTo(
          '[data-dh-float]',
          { opacity: 0, y: 24, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'back.out(1.8)' },
          0.8,
        )
        // Surtitre
        .fromTo('[data-dh-surtitre]', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.35)
        // H1 caractères
        .to(split.chars, { y: 0, rotateX: 0, opacity: 1, duration: 0.7, stagger: 0.025 }, 0.55)
        // Lead + CTA
        .fromTo(
          '[data-dh-reveal]',
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.15 },
          0.9,
        )
        // Chips stagger pop
        .fromTo(
          '[data-dh-chip]',
          { opacity: 0, y: 14, scale: 0.6 },
          { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.12, ease: 'back.out(2.2)' },
          1.2,
        );

      // Parallaxe douce de la photo
      gsap.to('[data-dh-parallax]', {
        yPercent: -6,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      return () => split.revert();
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="bg-signature relative -mt-[var(--nav-h)] overflow-hidden pt-[calc(var(--nav-h)+48px)]"
    >
      {/* Grain de film */}
      <div aria-hidden="true" className="noise-overlay pointer-events-none absolute inset-0 z-[1]" />

      {/* Formes organiques floutées */}
      <div
        aria-hidden="true"
        className="animate-drift-a pointer-events-none absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-peach-mist opacity-70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-drift-b pointer-events-none absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-lilac-mist opacity-80 blur-3xl"
      />

      <div className="relative z-[2] mx-auto grid w-full max-w-[1200px] items-center gap-14 px-6 pb-24 pt-4 lg:grid-cols-[45%_55%] lg:px-12 lg:pb-28">
        {/* Image à gauche — cadre organique */}
        <div data-dh-parallax className="relative mx-auto w-full max-w-[480px]">
          <div
            data-dh-photo
            className="relative overflow-hidden rounded-[52%_48%_44%_56%/50%_52%_48%_50%] shadow-soft"
            style={{ aspectRatio: '3 / 2.6', clipPath: 'inset(0% 100% 0% 0%)' }}
          >
            <img
              src="/med-dentaire.jpg"
              alt="Sourire parfait en gros plan, dentiste ajustant une facette en céramique — soins dentaires en Tunisie avec Health Travel"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Carte flottante */}
          <div
            data-dh-float
            className="animate-float absolute -bottom-6 -right-3 flex items-center gap-3 rounded-[20px] bg-cream px-5 py-4 shadow-card md:-right-8"
            style={{ opacity: 0 }}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-peach-mist">
              <Sparkles className="h-5 w-5 text-bronze" />
            </span>
            <div>
              <p className="font-display text-[16px] font-medium leading-tight text-plum">Sourire transformé</p>
              <p className="text-[13px] font-bold text-bronze-deep">en 5 jours</p>
            </div>
          </div>
        </div>

        {/* Contenu texte */}
        <div>
          <p data-dh-surtitre className="surtitre" style={{ opacity: 0 }}>
            Médecine dentaire esthétique
          </p>
          <h1
            data-dh-title
            className="mt-6 text-[40px] font-semibold leading-[1.06] tracking-[-0.015em] text-plum md:text-[56px]"
          >
            Un <em className="font-semibold italic text-bronze">sourire</em> d'exception, sans le{' '}
            <em className="font-semibold italic text-bronze">prix</em> d'exception
          </h1>
          <p
            data-dh-reveal
            className="mt-6 max-w-[560px] text-[17px] font-medium leading-[1.6] text-plum-soft md:text-[19px]"
            style={{ opacity: 0 }}
          >
            Implants, facettes, couronnes : nos chirurgiens-dentistes partenaires restaurent et embellissent votre
            sourire avec des matériaux premium (zircone, céramique E-max), dans des cliniques dentaires certifiées —
            jusqu'à <strong className="font-bold text-plum">60 % d'économie</strong>, hôtel 5★ et transferts inclus.
          </p>

          <div data-dh-reveal className="mt-9 flex flex-wrap items-center gap-4" style={{ opacity: 0 }}>
            <Link to="/devis-gratuit" className="btn-bronze animate-cta-pulse">
              Obtenir mon devis sourire
            </Link>
            <a href="#actes" className="btn-ghost">
              Voir les actes
            </a>
          </div>

          {/* Chips de réassurance */}
          <ul className="mt-10 flex flex-wrap gap-3">
            {[
              { icon: Clock, label: 'Devis sous 24 h' },
              { icon: ShieldCheck, label: 'Garantie sur les prothèses' },
              { icon: Sparkles, label: '2 séjours possibles' },
            ].map(({ icon: Icon, label }) => (
              <li
                key={label}
                data-dh-chip
                className="inline-flex items-center gap-2 rounded-full bg-cream/80 px-4 py-2 text-[14px] font-semibold text-plum shadow-soft"
                style={{ border: '1px solid rgba(217, 185, 130, 0.4)', opacity: 0 }}
              >
                <Icon className="h-4 w-4 text-bronze" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
