import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { teamOfficeConfig } from '../config';
import AutoplayVideo from '../../components/AutoplayVideo';

gsap.registerPlugin(ScrollTrigger);

const TeamOffice = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const activeSlideRef = useRef(0);
  const userHoldingRef = useRef(false);
  const resumeTimerRef = useRef<number | null>(null);

  const videos = teamOfficeConfig.videos;

  // Centre une slide donnée dans le carrousel (même ordre que la grille desktop)
  const scrollToSlide = (idx: number, smooth = true) => {
    const el = carouselRef.current;
    if (!el) return;
    const slide = el.querySelectorAll<HTMLElement>('[data-slide]')[idx];
    if (!slide) return;
    const left = slide.offsetLeft - (el.clientWidth - slide.clientWidth) / 2;
    el.scrollTo({ left, behavior: smooth ? 'smooth' : 'auto' });
  };

  // Carrousel mobile : défilement automatique fluide + swipe manuel au doigt
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    // Défilement automatique (mobile uniquement)
    const interval = window.setInterval(() => {
      if (userHoldingRef.current) return; // l'utilisateur tient le carrousel
      if (window.innerWidth >= 1024) return; // desktop : grille, pas de carrousel
      scrollToSlide((activeSlideRef.current + 1) % videos.length);
    }, 3500);

    // Suivi de la slide active (points d'indication)
    const onScroll = () => {
      const center = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      el.querySelectorAll<HTMLElement>('[data-slide]').forEach((s, i) => {
        const d = Math.abs(s.offsetLeft + s.clientWidth / 2 - center);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      activeSlideRef.current = best;
      setActiveSlide(best);
    };
    el.addEventListener('scroll', onScroll, { passive: true });

    // Swipe manuel : pause du défilement auto pendant le geste, reprise 4 s après
    const hold = () => {
      userHoldingRef.current = true;
      if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    };
    const release = () => {
      if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = window.setTimeout(() => {
        userHoldingRef.current = false;
      }, 4000);
    };
    el.addEventListener('pointerdown', hold, { passive: true });
    el.addEventListener('pointerup', release, { passive: true });
    el.addEventListener('pointercancel', release, { passive: true });
    el.addEventListener('touchstart', hold, { passive: true });
    el.addEventListener('touchend', release, { passive: true });

    return () => {
      window.clearInterval(interval);
      if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
      el.removeEventListener('scroll', onScroll);
      el.removeEventListener('pointerdown', hold);
      el.removeEventListener('pointerup', release);
      el.removeEventListener('pointercancel', release);
      el.removeEventListener('touchstart', hold);
      el.removeEventListener('touchend', release);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videos.length]);

  useEffect(() => {
    const section = sectionRef.current;
    const head = headRef.current;
    const grid = gridRef.current;
    if (!section || !head || !grid) return;

    const headEls = head.querySelectorAll('.reveal-text');
    headEls.forEach((el) => {
      gsap.set(el, { opacity: 0, y: 50 });
      const trigger = ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(el, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
        },
      });
      triggersRef.current.push(trigger);
    });

    const cards = grid.querySelectorAll<HTMLElement>('.office-card');
    cards.forEach((card, i) => {
      gsap.set(card, { opacity: 0, y: 60 });
      const trigger = ScrollTrigger.create({
        trigger: card,
        start: 'top 90%',
        onEnter: () => {
          gsap.to(card, { opacity: 1, y: 0, duration: 0.9, delay: i * 0.08, ease: 'power3.out' });
        },
      });
      triggersRef.current.push(trigger);
    });

    return () => {
      triggersRef.current.forEach((t) => t.kill());
      triggersRef.current = [];
    };
  }, []);

  if (!teamOfficeConfig.headline) return null;

  return (
    <section
      id="team-office"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-36 bg-[#050B14] overflow-hidden"
    >
      <div ref={headRef} className="px-8 lg:px-16 max-w-4xl">
        <p className="reveal-text museo-label text-[#D4AF37] text-[11px] tracking-[0.3em]">
          {teamOfficeConfig.label}
        </p>
        <h2 className="reveal-text museo-headline text-white text-4xl md:text-5xl lg:text-6xl leading-[1.05] mt-6">
          {teamOfficeConfig.headline}
        </h2>
        <p className="reveal-text museo-body text-white/60 text-base md:text-lg mt-6 max-w-2xl">
          {teamOfficeConfig.description}
        </p>
      </div>

      {/* ===== Carrousel mobile — défilement auto fluide + swipe au doigt ===== */}
      <div className="mt-14 lg:hidden">
        <div
          ref={carouselRef}
          className="office-carousel flex gap-4 overflow-x-auto snap-x snap-mandatory px-8"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {videos.map((video) => (
            <div
              key={video.src}
              data-slide
              className="shrink-0 snap-center w-[68%] max-w-[290px] relative overflow-hidden rounded-2xl border border-white/10"
            >
              <AutoplayVideo
                src={video.src}
                className="w-full aspect-[9/16] object-cover"
                poster={video.poster}
                preload="metadata"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
              <span className="absolute bottom-3 left-3 museo-label text-white/80 text-[10px] tracking-[0.2em]">
                {video.label}
              </span>
            </div>
          ))}
        </div>
        {/* Indicateurs de position (cliquables) */}
        <div className="mt-6 flex justify-center gap-2">
          {videos.map((video, i) => (
            <button
              key={video.src}
              type="button"
              aria-label={`Aller à la vidéo ${i + 1}`}
              onClick={() => scrollToSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeSlide ? 'w-8 bg-[#D4AF37]' : 'w-2.5 bg-white/25'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ===== Grille desktop — identique à la version web ===== */}
      <div
        ref={gridRef}
        className="mt-14 lg:mt-20 hidden lg:grid lg:grid-cols-4 gap-4 lg:gap-6 px-8 lg:px-16"
      >
        {videos.map((video) => (
          <div
            key={video.src}
            className="office-card relative overflow-hidden rounded-2xl border border-white/10 will-change-transform"
          >
            <AutoplayVideo
              src={video.src}
              className="w-full aspect-[9/16] object-cover"
              poster={video.poster}
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
            <span className="absolute bottom-3 left-3 museo-label text-white/80 text-[10px] tracking-[0.2em]">
              {video.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamOffice;
