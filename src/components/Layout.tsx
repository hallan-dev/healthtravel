import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import { MessageCircle } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Preloader } from './Preloader';
import { ScrollToTop } from './ScrollToTop';

export function Layout() {
  const { pathname } = useLocation();
  const [loaded, setLoaded] = useState(() => sessionStorage.getItem('ht_loaded') === '1');
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }); }, [pathname]);

  // L'accueil dynamique (template Modo) gère sa propre navigation, son footer et son scroll
  const isModoHome = pathname === '/';

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {!loaded && <Preloader onComplete={() => { sessionStorage.setItem('ht_loaded', '1'); setLoaded(true); }} />}
      {!isModoHome && <Header />}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      {!isModoHome && <Footer />}
      {!isModoHome && <ScrollToTop />}
      <a
        href="https://wa.me/21655000260"
        target="_blank" rel="noreferrer"
        aria-label="Nous contacter sur WhatsApp"
        style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 40,
          width: 56, height: 56, borderRadius: '50%', background: '#25D366',
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
          boxShadow: '0 8px 24px rgba(37,211,102,.4)', transition: 'transform .25s'
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
