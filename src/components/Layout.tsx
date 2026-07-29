import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingDevisButton from '@/components/widgets/FloatingDevisButton';
import WhatsAppButton from '@/components/widgets/WhatsAppButton';
import ReassuranceToast from '@/components/widgets/ReassuranceToast';
import ReadingProgressBar from '@/components/widgets/ReadingProgressBar';

/**
 * Layout partagé — pattern « nested routes » : App.tsx monte les pages
 * en routes enfants de `<Route element={<Layout/>}>`.
 *
 * Contrat nav : la Navbar est `fixed` (overlay transparente sur les héros,
 * puis pilule verre dépoli). Le Layout possède donc l'offset : le slot de
 * contenu reçoit un padding-top égal à la hauteur de la nav (--nav-h, 88px).
 * Les héros plein écran se retirent de cet offset via `-mt-[var(--nav-h)]`
 * à l'intérieur de la page. Les agents de page n'ajoutent AUCUN offset.
 */
export default function Layout() {
  const { pathname } = useLocation();

  // Défilement fluide Lenis (lerp 0.09) sur tout le site
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09 });
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Retour en haut de page à chaque changement de route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-[100dvh] flex-col bg-ivory">
      <ReadingProgressBar />
      <Navbar />
      <main className="flex-1 pt-[var(--nav-h)]">
        <Outlet />
      </main>
      <Footer />
      <FloatingDevisButton />
      <WhatsAppButton />
      <ReassuranceToast />
    </div>
  );
}
