import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

/**
 * Bouton flottant « Devis » — pilule bronze fixe en bas à droite,
 * anneau pulsé, s'étire au survol pour révéler le libellé.
 */
export default function FloatingDevisButton() {
  return (
    <Link
      to="/devis-gratuit"
      aria-label="Obtenir un devis gratuit"
      className="group fixed bottom-6 right-6 z-40 flex h-14 items-center gap-0 overflow-hidden rounded-full pl-4 pr-4 text-cream transition-all duration-500 ease-out hover:pr-6"
      style={{
        backgroundImage: 'linear-gradient(135deg, #D9B982, #B08A50 55%, #96703B)',
        animation: 'cta-pulse 2.4s ease-out infinite',
      }}
    >
      <FileText className="h-5 w-5 shrink-0" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-[14px] font-semibold opacity-0 transition-all duration-500 ease-out group-hover:ml-2 group-hover:max-w-[220px] group-hover:opacity-100">
        Devis gratuit en 2 min
      </span>
    </Link>
  );
}
