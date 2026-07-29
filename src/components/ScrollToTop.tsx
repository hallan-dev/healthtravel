import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Retour en haut"
      style={{
        position: 'fixed', bottom: 24, left: 24, zIndex: 40,
        width: 44, height: 44, borderRadius: '50%', border: 'none', cursor: 'pointer',
        background: 'linear-gradient(135deg, #E8C766, #D4AF37)', color: '#111827',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 6px 18px rgba(212,175,55,.4)',
        opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(12px)',
        pointerEvents: visible ? 'auto' : 'none', transition: 'all .35s cubic-bezier(.22,1,.36,1)'
      }}
    >
      <ArrowUp size={18} />
    </button>
  );
}
