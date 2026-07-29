import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';

const INTERVENTIONS = [
  {
    to: '/chirurgie-obesite-tunisie',
    img: '/med-obesite.jpg',
    title: "Chirurgie de l'obésité",
    desc: 'Sleeve, bypass, ballon gastrique',
  },
  {
    to: '/fiv-pma-tunisie',
    img: '/med-fertilite.jpg',
    title: 'Fertilité & FIV',
    desc: 'FIV, ICSI, IMSI, IIU',
  },
  {
    to: '/soins-dentaires-tunisie',
    img: '/med-dentaire.jpg',
    title: 'Soins dentaires',
    desc: 'Implants, facettes, couronnes',
  },
  {
    to: '/chirurgie-esthetique-tunisie',
    img: '/med-esthetique.jpg',
    title: 'Soins esthétiques',
    desc: 'Sein, botox, fillers, cicatrices',
  },
];

const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/dr-hallan-khenissi', label: 'Dr Khenissi' },
  { to: '/votre-sejour-tunisie', label: 'Votre séjour' },
  { to: '/cliniques-hotels', label: 'Cliniques & Hôtels' },
  { to: '/temoignages', label: 'Témoignages' },
];

const MOBILE_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/interventions', label: 'Interventions' },
  { to: '/chirurgie-obesite-tunisie', label: "Chirurgie de l'obésité" },
  { to: '/fiv-pma-tunisie', label: 'Fertilité & FIV' },
  { to: '/soins-dentaires-tunisie', label: 'Soins dentaires' },
  { to: '/chirurgie-esthetique-tunisie', label: 'Soins esthétiques' },
  { to: '/dr-hallan-khenissi', label: 'Dr Hallan Khenissi' },
  { to: '/votre-sejour-tunisie', label: 'Votre séjour' },
  { to: '/cliniques-hotels', label: 'Cliniques & Hôtels' },
  { to: '/temoignages', label: 'Témoignages' },
];

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return scrolled;
}

export default function Navbar() {
  const scrolled = useScrolled();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 180);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative font-sans text-[14px] font-semibold tracking-wide transition-colors duration-200 ${
      isActive ? 'text-bronze-deep' : 'text-plum-soft hover:text-bronze-deep'
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex h-[72px] items-center justify-between gap-6 px-6 transition-all duration-500 lg:px-10 ${
          scrolled
            ? 'mx-4 mt-4 max-w-[1200px] rounded-full shadow-soft lg:mx-auto'
            : 'max-w-[1440px] bg-transparent'
        }`}
        style={
          scrolled
            ? {
                background: 'rgba(255, 253, 250, 0.72)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
              }
            : undefined
        }
      >
        {/* Logo */}
        <Link to="/" aria-label="Health Travel — Accueil" className="shrink-0">
          <img src="/logo.svg" alt="Health Travel — tourisme médical premium en Tunisie" className="h-11 w-auto" />
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-7 xl:flex" aria-label="Navigation principale">
          <NavLink to="/" end className={linkClass}>
            Accueil
          </NavLink>
          <NavLink to="/a-propos" className={linkClass}>
            À propos
          </NavLink>

          {/* Interventions dropdown */}
          <div className="relative" onMouseEnter={openDropdown} onMouseLeave={scheduleClose}>
            <button
              type="button"
              className="flex items-center gap-1 font-sans text-[14px] font-semibold tracking-wide text-plum-soft transition-colors duration-200 hover:text-bronze-deep"
              aria-expanded={dropdownOpen}
              onClick={() => setDropdownOpen((v) => !v)}
            >
              Interventions
              <ChevronDown
                className={`h-4 w-4 text-bronze transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="absolute left-1/2 top-full mt-4 w-[760px] -translate-x-1/2 rounded-[28px] bg-cream p-5 shadow-soft"
                  style={{ border: '1px solid rgba(217, 185, 130, 0.35)' }}
                >
                  <div className="grid grid-cols-4 gap-4">
                    {INTERVENTIONS.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="group overflow-hidden rounded-[20px] bg-ivory transition-shadow duration-300 hover:shadow-card"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <div className="h-24 overflow-hidden">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-3">
                          <p className="font-display text-[15px] font-medium text-plum">{item.title}</p>
                          <p className="mt-0.5 text-[12px] font-medium text-plum-faint">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link
                    to="/interventions"
                    className="mt-4 block text-center text-[13px] font-bold uppercase tracking-[0.2em] text-bronze-deep hover:text-bronze"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Toutes nos interventions →
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {NAV_LINKS.slice(2).map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-5">
          <a
            href="tel:+21655000260"
            className="hidden items-center gap-2 text-[14px] font-semibold text-plum-soft transition-colors hover:text-bronze-deep min-[1100px]:flex"
          >
            <Phone className="h-4 w-4 text-bronze" />
            +216 55 000 260
          </a>
          <Link to="/devis-gratuit" className="btn-bronze animate-cta-pulse hidden !px-6 !py-3 sm:inline-flex">
            Devis gratuit
          </Link>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full text-plum transition-colors hover:bg-peach-mist xl:hidden"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-signature fixed inset-0 z-[-1] flex min-h-[100dvh] flex-col pt-24 xl:hidden"
          >
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-8 pb-8" aria-label="Navigation mobile">
              {MOBILE_LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.4, ease: 'easeOut' }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setMobileOpen(false)}
                    className="block border-b border-bronze/15 py-3 font-display text-[22px] font-medium text-plum transition-colors hover:text-bronze-deep"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + MOBILE_LINKS.length * 0.05, duration: 0.4 }}
                className="mt-auto pt-8"
              >
                <Link to="/devis-gratuit" onClick={() => setMobileOpen(false)} className="btn-bronze w-full">
                  Devis gratuit
                </Link>
                <a
                  href="tel:+21655000260"
                  className="mt-4 flex items-center justify-center gap-2 text-[15px] font-semibold text-plum-soft"
                >
                  <Phone className="h-4 w-4 text-bronze" /> +216 55 000 260
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
