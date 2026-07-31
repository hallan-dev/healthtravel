import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { teamOfficeConfig } from '../config';
import AutoplayVideo from '../../components/AutoplayVideo';

gsap.registerPlugin(ScrollTrigger);

const TeamOffice = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  if (!teamOfficeConfig.headline) return null;

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

      <div
        ref={gridRef}
        className="mt-14 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 px-8 lg:px-16"
      >
        {teamOfficeConfig.videos.map((video) => (
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
