import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { Menu, X, ChevronDown, Video } from 'lucide-react';
import { interventions } from '../data/interventions';

const nav = [
  { to: '/', label: 'Accueil' },
  { to: '/interventions', label: 'Interventions', dropdown: true },
  { to: '/chirurgiens', label: 'Chirurgiens' },
  { to: '/avant-apres', label: 'Avant / Après' },
  { to: '/blog', label: 'Blog' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMobileOpen(false); setDropOpen(false); }, [loc.pathname]);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,.92)' : 'rgba(255,255,255,.75)',
      backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
      borderBottom: scrolled ? '1px solid #E5E7EB' : '1px solid transparent',
      transition: 'all .3s'
    }}>
      <div className="container-ht" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="/assets/logo.webp" alt="Health Travel — Tourisme médical Tunisie" style={{ height: 38, width: 'auto' }} />
        </Link>

        <nav style={{ display: 'none', alignItems: 'center', gap: 4 }} className="desktop-nav">
          {nav.map(item => item.dropdown ? (
            <div key={item.to} style={{ position: 'relative' }}
              onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
              <NavLink to={item.to} style={({ isActive }) => ({
                display: 'flex', alignItems: 'center', gap: 4, padding: '8px 12px', fontSize: 14, fontWeight: 500,
                color: isActive ? 'var(--ht-bleu)' : 'var(--ht-noir)', textDecoration: 'none', borderRadius: 8
              })}>
                {item.label} <ChevronDown size={14} />
              </NavLink>
              {dropOpen && (
                <div style={{
                  position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                  background: '#fff', borderRadius: 12, boxShadow: 'var(--shadow-lg)', border: '1px solid #E5E7EB',
                  padding: 12, width: 460, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2
                }}>
                  {interventions.map(iv => (
                    <Link key={iv.slug} to={`/interventions/${iv.slug}`} style={{
                      padding: '8px 12px', fontSize: 13.5, color: 'var(--ht-noir)', textDecoration: 'none', borderRadius: 8, display: 'block'
                    }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'var(--ht-bleu-light)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                      {iv.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} style={({ isActive }) => ({
              padding: '8px 12px', fontSize: 14, fontWeight: 500, borderRadius: 8, textDecoration: 'none',
              color: isActive ? 'var(--ht-bleu)' : 'var(--ht-noir)'
            })}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div style={{ display: 'none', alignItems: 'center', gap: 10 }} className="desktop-nav">
          <Link to="/rendez-vous" className="btn btn-outline" style={{ padding: '10px 16px' }}>
            <Video size={15} /> RDV vidéo
          </Link>
          <Link to="/devis" className="btn btn-primary" style={{ padding: '10px 16px' }}>
            Devis gratuit
          </Link>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-burger" aria-label="Menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div style={{ background: '#fff', borderTop: '1px solid #E5E7EB', padding: '12px 20px 24px', maxHeight: 'calc(100vh - 68px)', overflowY: 'auto' }}>
          {nav.map(item => (
            <div key={item.to}>
              <NavLink to={item.to} end={item.to === '/'} style={({ isActive }) => ({
                display: 'block', padding: '12px 4px', fontSize: 15, fontWeight: 500, textDecoration: 'none',
                color: isActive ? 'var(--ht-bleu)' : 'var(--ht-noir)', borderBottom: '1px solid #F3F4F6'
              })}>
                {item.label}
              </NavLink>
              {item.dropdown && (
                <div style={{ paddingLeft: 12 }}>
                  {interventions.map(iv => (
                    <Link key={iv.slug} to={`/interventions/${iv.slug}`} style={{ display: 'block', padding: '8px 4px', fontSize: 14, color: 'var(--ht-gris-text)', textDecoration: 'none' }}>
                      {iv.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
            <Link to="/rendez-vous" className="btn btn-outline" style={{ flex: 1 }}>RDV vidéo</Link>
            <Link to="/devis" className="btn btn-primary" style={{ flex: 1 }}>Devis gratuit</Link>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) { .desktop-nav { display: flex !important; } .mobile-burger { display: none !important; } }
      `}</style>
    </header>
  );
}
