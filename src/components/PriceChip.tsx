/**
 * Chip prix — pilule blush-mist bordée or.
 */
export default function PriceChip({ children }: { children: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full bg-blush-mist px-4 py-1.5 text-[13px] font-bold text-bronze-deep"
      style={{ border: '1px solid rgba(217, 185, 130, 0.6)' }}
    >
      {children}
    </span>
  );
}
