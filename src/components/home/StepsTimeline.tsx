import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STEPS = [
  { title: 'Devis gratuit', text: 'Envoyez votre demande, recevez une réponse détaillée sous 24 h.' },
  { title: 'Consultation à distance', text: 'Échange avec le chirurgien et étude de votre dossier médical.' },
  { title: 'Réservation du séjour', text: 'Vols, hôtel 5★, transferts : nous organisons tout.' },
  { title: "Accueil VIP à l'aéroport", text: 'Votre coordinatrice francophone vous attend à l’arrivée.' },
  { title: 'Bilan & intervention', text: 'Examens complets puis chirurgie en clinique certifiée.' },
  { title: 'Convalescence 5★', text: 'Repos et soins post-opératoires dans votre hôtel ou clinique.' },
  { title: 'Suivi médical complet', text: 'Contrôles, pansements, consultations avant le retour.' },
  { title: 'Retour & accompagnement', text: 'Suivi à distance et assistance 24/7 après votre retour.' },
];

/**
 * Section 7 — Votre séjour en 8 étapes (storytelling épinglé GSAP).
 * Composant GSAP isolé : pin 250vh, ligne or au scroll, étapes qui s'illuminent.
 */
export default function StepsTimeline() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const steps = gsap.utils.toArray<HTMLElement>('[data-step]');
      const line = root.current?.querySelector<HTMLElement>('[data-step-line]');

      const setActive = (idx: number) => {
        steps.forEach((el, i) => {
          const active = i === idx;
          gsap.to(el, {
            opacity: active ? 1 : 0.3,
            duration: 0.4,
            ease: 'power2.out',
            overwrite: 'auto',
          });
          el.querySelector('[data-step-num]')?.classList.toggle('step-num-active', active);
          el.querySelector('[data-step-card]')?.classList.toggle('step-card-active', active);
        });
      };

      if (reduced) {
        gsap.set(steps, { opacity: 1 });
        if (line) gsap.set(line, { scaleY: 1 });
        return;
      }

      gsap.set(steps, { opacity: 0.3 });
      if (line) gsap.set(line, { scaleY: 0, transformOrigin: 'top' });

      ScrollTrigger.create({
        trigger: root.current,
        start: 'top top',
        end: '+=250%',
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          if (line) gsap.set(line, { scaleY: self.progress });
          const idx = Math.min(STEPS.length - 1, Math.floor(self.progress * STEPS.length));
          setActive(idx);
        },
        onEnter: () => setActive(0),
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="flex min-h-[100dvh] items-center overflow-hidden bg-lilac-mist">
      <div className="mx-auto grid w-full max-w-[1200px] gap-14 px-6 py-16 lg:grid-cols-[42%_58%] lg:px-12">
        {/* Titre fixe */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="surtitre">Sans stress, de A à Z</p>
          <h2 className="mt-5 text-[32px] font-medium leading-[1.12] md:text-[46px]">
            Votre séjour, <em className="italic text-bronze">orchestré</em> en 8 étapes
          </h2>
          <p className="mt-5 max-w-[420px] text-[17px] leading-[1.7] text-plum-soft">
            Du premier message à votre retour, chaque détail est pensé pour vous. Vous n'avez qu'une chose à faire :
            vous laisser porter.
          </p>
          <Link to="/votre-sejour-tunisie" className="btn-bronze mt-8">
            En savoir plus sur le séjour
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Timeline */}
        <div className="relative pl-10">
          {/* Rail + ligne or */}
          <div aria-hidden="true" className="absolute bottom-4 left-[17px] top-4 w-px bg-gold-light/30" />
          <div
            data-step-line
            aria-hidden="true"
            className="absolute bottom-4 left-[17px] top-4 w-px bg-gradient-to-b from-gold-light to-bronze"
          />

          <ol className="space-y-5">
            {STEPS.map((s, i) => (
              <li key={s.title} data-step className="relative flex items-start gap-5">
                <span
                  data-step-num
                  className="step-num relative z-10 -ml-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream font-display text-[15px] font-semibold text-bronze-deep"
                >
                  {i + 1}
                </span>
                <div data-step-card className="step-card flex-1 rounded-[20px] p-5 transition-shadow duration-500">
                  <h3 className="text-[20px] font-medium text-plum">{s.title}</h3>
                  <p className="mt-1 text-[15px] leading-[1.6] text-plum-soft">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

    </section>
  );
}
