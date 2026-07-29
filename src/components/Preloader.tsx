import { useEffect, useState } from 'react';

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'loading' | 'fading'>('loading');

  useEffect(() => {
    const fadeTimer = setTimeout(() => setPhase('fading'), 2000);
    const completeTimer = setTimeout(() => onComplete(), 2600);
    return () => { clearTimeout(fadeTimer); clearTimeout(completeTimer); };
  }, [onComplete]);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999, background: 'linear-gradient(160deg, #0B1526, #111827)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      opacity: phase === 'fading' ? 0 : 1, transition: 'opacity .6s ease', pointerEvents: phase === 'fading' ? 'none' : 'auto'
    }}>
      <div className="preloader-text" style={{ marginBottom: 22 }}>
        <img src="/assets/logo.webp" alt="Health Travel" style={{ height: 52, background: '#fff', borderRadius: 12, padding: 6 }} />
      </div>
      <div className="preloader-text" style={{ animationDelay: '0.2s', textAlign: 'center' }}>
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 4vw, 40px)', color: '#fff', letterSpacing: '.04em' }}>
          Health Travel
        </div>
        <div style={{ fontFamily: 'Qwitcher Grypen, cursive', fontSize: 30, color: '#E8C766', marginTop: 2 }}>
          par Hallan Khenissi
        </div>
      </div>
      <div style={{ marginTop: 34, width: 190, height: 1, background: 'rgba(255,255,255,.12)', overflow: 'hidden' }}>
        <div className="preloader-line" style={{ height: '100%', background: 'linear-gradient(90deg, rgba(232,199,102,.4), #E8C766, rgba(232,199,102,.4))' }} />
      </div>
    </div>
  );
}
