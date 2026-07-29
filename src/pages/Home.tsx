import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../modo/modo.css';

import { siteConfig } from '../modo/config';
import useLenis from '../modo/hooks/useLenis';
import useCustomCursor from '../modo/hooks/useCustomCursor';

import Hero from '../modo/sections/Hero';
import About from '../modo/sections/About';
import TeamOffice from '../modo/sections/TeamOffice';
import Exhibitions from '../modo/sections/Exhibitions';
import Offer from '../modo/sections/Offer';
import Collections from '../modo/sections/Collections';
import Testimonials from '../modo/sections/Testimonials';
import Visit from '../modo/sections/Visit';
import Footer from '../modo/sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function ModoHome() {
  const mainRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useLenis();
  useCustomCursor();

  // Langue + titre du document
  useEffect(() => {
    if (siteConfig.language) document.documentElement.lang = siteConfig.language;
    if (siteConfig.title) document.title = siteConfig.title;
  }, []);

  // Transitions de couleur de fond entre les sections
  useEffect(() => {
    const sections = [
      { selector: '#modo-hero', color: '#0E1A2B' },
      { selector: '#about', color: '#050B14' },
      { selector: '#team-office', color: '#050B14' },
      { selector: '#exhibitions', color: '#050B14' },
      { selector: '#offer', color: '#050B14' },
      { selector: '#collections', color: '#F7F3EA' },
      { selector: '#modo-testimonials', color: '#16283F' },
      { selector: '#contact', color: '#050B14' },
      { selector: '#modo-footer', color: '#0E1A2B' },
    ];

    sections.forEach(({ selector, color }) => {
      const el = document.querySelector(selector);
      if (!el) return;
      const trigger = ScrollTrigger.create({
        trigger: el,
        start: 'top 60%',
        end: 'bottom 40%',
        onEnter: () => gsap.to('body', { backgroundColor: color, duration: 0.6, ease: 'power2.out' }),
        onEnterBack: () => gsap.to('body', { backgroundColor: color, duration: 0.6, ease: 'power2.out' }),
      });
      triggersRef.current.push(trigger);
    });

    return () => {
      triggersRef.current.forEach((t) => t.kill());
      triggersRef.current = [];
      // Réinitialiser le fond pour les autres pages du site
      gsap.set('body', { clearProps: 'backgroundColor' });
    };
  }, []);

  return (
    <div ref={mainRef} className="modo-scope relative">
      <div id="modo-hero">
        <Hero />
      </div>

      <About />

      <TeamOffice />

      <Exhibitions />

      <Offer />

      <Collections />

      <div id="modo-testimonials">
        <Testimonials />
      </div>

      <Visit />

      <div id="modo-footer">
        <Footer />
      </div>
    </div>
  );
}
