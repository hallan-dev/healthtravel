/**
 * Bouton WhatsApp — pastille sauge au-dessus du bouton devis,
 * tooltip « Réponse en moins d'1 h ».
 */
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/21655000260"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous contacter sur WhatsApp — réponse en moins d'1 h"
      className="group fixed bottom-[92px] right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-sage text-plum shadow-soft transition-transform duration-300 hover:-translate-y-1"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2a9.9 9.9 0 0 0-8.57 14.86L2 22l5.3-1.39A9.9 9.9 0 1 0 12.04 2Zm0 1.67a8.23 8.23 0 1 1-4.2 15.31l-.3-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 0 1 7-12.6Zm-3.5 4.02c-.19 0-.5.07-.76.35-.26.28-1 .98-1 2.4 0 1.4 1.02 2.76 1.16 2.95.14.19 1.97 3.01 4.78 4.22.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.66-.68 1.9-1.34.23-.66.23-1.22.16-1.34-.07-.12-.26-.19-.54-.33-.28-.14-1.66-.82-1.92-.91-.26-.1-.44-.14-.63.14-.19.28-.72.9-.88 1.09-.16.19-.32.21-.6.07a7.6 7.6 0 0 1-2.2-1.36 8.2 8.2 0 0 1-1.52-1.9c-.16-.27-.02-.42.12-.55.12-.12.28-.32.42-.49.14-.16.19-.28.28-.46.1-.19.05-.35-.02-.49-.07-.14-.63-1.51-.86-2.07-.23-.55-.46-.47-.63-.48l-.72-.02Z" />
      </svg>
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-plum px-4 py-2 text-[12px] font-semibold text-ivory opacity-0 shadow-soft transition-all duration-300 group-hover:opacity-100">
        Réponse en moins d'1 h
      </span>
    </a>
  );
}
