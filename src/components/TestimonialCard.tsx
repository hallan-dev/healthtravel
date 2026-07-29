import { BadgeCheck, Star } from 'lucide-react';

export interface Testimonial {
  img: string;
  alt: string;
  quote: string;
  name: string;
  role: string;
  act: string;
}

/**
 * Carte témoignage partagée — portrait 4:5 coins 28px, avatar rond double
 * anneau or superposé, étoiles star, citation Fraunces italique, chip acte,
 * badge « Patient vérifié » glacier.
 */
export default function TestimonialCard({ t, active = false }: { t: Testimonial; active?: boolean }) {
  return (
    <article
      className="group relative flex h-full flex-col rounded-[28px] bg-cream p-5 pb-7 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-card"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Liseré or qui se dessine au survol */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-6 right-6 h-[2px] origin-left scale-x-0 rounded-full transition-transform duration-500 group-hover:scale-x-100"
        style={{ background: 'linear-gradient(90deg, transparent, #D9B982, transparent)' }}
      />
      <div className="relative overflow-hidden rounded-[20px]" style={{ aspectRatio: '4 / 5' }}>
        <img
          src={t.img}
          alt={t.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Avatar double anneau or */}
      <div className="relative -mt-9 ml-5 h-[72px] w-[72px]">
        <span aria-hidden="true" className="absolute -inset-2 rounded-full border border-gold-light/70" />
        <span aria-hidden="true" className="absolute -inset-1 rounded-full border border-bronze/50" />
        <img
          src={t.img}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-full w-full rounded-full border-2 border-cream object-cover"
        />
      </div>

      {/* Étoiles */}
      <div className="mt-4 flex gap-1 px-1" aria-label="Note 5 sur 5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 fill-star text-star transition-all duration-300 ${
              active ? 'scale-100 opacity-100' : 'scale-90 opacity-80'
            }`}
            style={{ transitionDelay: `${i * 80}ms` }}
          />
        ))}
      </div>

      <blockquote className="mt-3 px-1 font-display text-[17px] italic leading-[1.55] text-plum">
        « {t.quote} »
      </blockquote>

      <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-2 px-1 pt-4">
        <div>
          <p className="text-[15px] font-bold text-plum">{t.name}</p>
          <p className="text-[13px] font-medium text-plum-faint">{t.role}</p>
        </div>
        <span className="ml-auto rounded-full bg-blush-mist px-3 py-1 text-[12px] font-bold text-bronze-deep">
          {t.act}
        </span>
      </div>
      <span className="mt-3 inline-flex items-center gap-1.5 px-1 text-[12px] font-semibold text-glacier-deep">
        <BadgeCheck className="h-4 w-4 text-glacier-deep" />
        Patient vérifié
      </span>
    </article>
  );
}
