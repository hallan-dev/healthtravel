import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import { Clock, ShieldCheck, Star, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

/**
 * Section 1 — Héros signature (100dvh).
 * Composant GSAP isolé : voile dégradé, SplitText caractères, parallaxe photo.
 * Plein écran : se retire de l'offset nav du Layout via -mt-[var(--nav-h)].
 */
export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reduced) {
        gsap.set('[data-hero-reveal]', { opacity: 1, y: 0 });
        gsap.set('[data-hero-veil]', { yPercent: -100 });
        return;
      }

      const split = new SplitText('[data-hero-title]', { type: 'chars' });
      gsap.set(split.chars, { y: 40, rotateX: 35, opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      // Voile dégradé qui glisse vers le haut
      tl.to('[data-hero-veil]', { yPercent: -100, duration: 0.9, ease: 'power3.inOut' })
        // Surtitre
        .fromTo('[data-hero-surtitre]', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
        // Script « Make them jealous » (écriture)
        .fromTo(
          '[data-hero-script]',
          { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
          { opacity: 1, clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'power2.inOut' },
          '-=0.25',
        )
        // H1 caractères
        .to(split.chars, { y: 0, rotateX: 0, opacity: 1, duration: 0.7, stagger: 0.025 }, '-=0.55')
        // Lead + CTA + réassurance
        .fromTo(
          '[data-hero-reveal]',
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.15 },
          '-=0.4',
        )
        // Photo : scale + clip-path reveal
        .fromTo(
          '[data-hero-photo]',
          { scale: 1.08, clipPath: 'inset(100% 0% 0% 0%)' },
          { scale: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, ease: 'power3.out' },
          0.35,
        )
        .fromTo('[data-hero-ring]', { opacity: 0, scale: 0.94 }, { opacity: 1, scale: 1, duration: 0.8 }, 0.9)
        .fromTo(
          '[data-hero-chip]',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 },
          1.1,
        );

      // Parallaxe douce de la photo : y -8% sur la hauteur de la section
      gsap.to('[data-hero-parallax]', {
        yPercent: -8,
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
      className="bg-signature relative -mt-[var(--nav-h)] flex min-h-[100dvh] items-center overflow-hidden pt-[var(--nav-h)]"
    >
      {/* Grain de film */}
      <div aria-hidden="true" className="noise-overlay pointer-events-none absolute inset-0 z-[1]" />

      {/* Formes organiques floutées en dérive */}
      <div
        aria-hidden="true"
        className="animate-drift-a pointer-events-none absolute -left-32 top-1/4 h-[480px] w-[480px] rounded-full bg-peach-mist opacity-70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-drift-b pointer-events-none absolute -right-24 bottom-1/4 h-[420px] w-[420px] rounded-full bg-lilac-mist opacity-80 blur-3xl"
      />

      {/* Voile d'entrée */}
      <div data-hero-veil aria-hidden="true" className="absolute inset-0 z-30 bg-ivory" />

      <div className="relative z-[2] mx-auto grid w-full max-w-[1200px] items-center gap-14 px-6 py-16 lg:grid-cols-[55%_45%] lg:px-12">
        {/* Contenu texte */}
        <div>
          <p data-hero-surtitre className="surtitre" style={{ opacity: 0 }}>
            Agence de tourisme médical · Tunis
          </p>
          <p
            data-hero-script
            className="mt-6 font-script text-[30px] leading-[1.1] text-bronze-deep md:text-[40px]"
            style={{ opacity: 0 }}
          >
            Make them jealous
          </p>
          <h1
            data-hero-title
            className="mt-2 text-[40px] font-semibold leading-[1.06] tracking-[-0.015em] text-plum md:text-[60px]"
          >
            La chirurgie <em className="font-semibold italic text-bronze">esthétique</em> d'exception
          </h1>
          <p data-hero-reveal className="mt-6 max-w-[540px] text-[17px] font-medium leading-[1.6] text-plum-soft md:text-[20px]" style={{ opacity: 0 }}>
            Health Travel organise votre séjour médical de luxe <strong className="font-bold text-plum">en Tunisie</strong>{' '}
            : chirurgie esthétique, chirurgie de l'obésité, fertilité et soins dentaires. Cliniques certifiées,
            chirurgiens d'élite, hôtel 5★ et assistance francophone 24/7 — jusqu'à{' '}
            <strong className="font-bold text-plum">60&nbsp;% d'économie</strong> sans compromis sur l'excellence.
          </p>

          <div data-hero-reveal className="mt-9 flex flex-wrap items-center gap-4" style={{ opacity: 0 }}>
            <Link to="/devis-gratuit" className="btn-bronze animate-cta-pulse">
              Obtenir mon devis gratuit
            </Link>
            <Link to="/interventions" className="btn-ghost">
              Découvrir nos interventions
            </Link>
          </div>

          {/* Rangée de réassurance */}
          <ul data-hero-reveal className="mt-10 flex flex-wrap gap-x-8 gap-y-3" style={{ opacity: 0 }}>
            {[
              { icon: ShieldCheck, label: 'Agréée Ministère de la Santé' },
              { icon: Users, label: '2 400+ patients accompagnés' },
              { icon: Clock, label: "Réponse en moins d'1 h" },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-[14px] font-semibold text-plum-soft">
                <Icon className="h-4 w-4 text-bronze" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Portrait */}
        <div data-hero-parallax className="relative mx-auto w-full max-w-[440px]">
          {/* Anneau or décalé */}
          <div
            data-hero-ring
            aria-hidden="true"
            className="absolute -inset-4 rounded-[46%_54%_55%_45%/48%_44%_56%_52%] border border-gold-light"
            style={{ opacity: 0 }}
          />
          <div
            data-hero-photo
            className="relative overflow-hidden rounded-[46%_54%_55%_45%/48%_44%_56%_52%] shadow-soft"
            style={{ aspectRatio: '4 / 5', clipPath: 'inset(100% 0% 0% 0%)' }}
          >
            <img
              src="/hero-accueil.jpg"
              alt="Patiente souriante en blouse de clinique dans une suite lumineuse — chirurgie esthétique en Tunisie avec Health Travel"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Cartes flottantes */}
          <div
            data-hero-chip
            className="animate-float absolute -right-3 top-8 flex items-center gap-2 rounded-full bg-cream px-4 py-2.5 shadow-card md:-right-8"
            style={{ opacity: 0 }}
          >
            <span className="text-[14px] font-bold text-plum">Note 4,9/5</span>
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-star text-star" />
              ))}
            </span>
          </div>
          <div
            data-hero-chip
            className="animate-float absolute -left-3 bottom-10 rounded-full bg-cream px-4 py-2.5 text-[14px] font-bold text-plum shadow-card md:-left-8"
            style={{ opacity: 0, animationDelay: '1.2s' }}
          >
            Tout inclus · 7 nuits 5★
          </div>
        </div>
      </div>
    </section>
  );
}
