import { Link } from 'react-router-dom';
import { BadgeCheck, Clock, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';

const ACTES = [
  { to: '/chirurgie-obesite-tunisie', label: 'Sleeve gastrectomie Tunisie' },
  { to: '/chirurgie-obesite-tunisie', label: 'Bypass gastrique Tunisie' },
  { to: '/chirurgie-obesite-tunisie', label: 'Ballon gastrique Tunisie' },
  { to: '/fiv-pma-tunisie', label: 'FIV & ICSI Tunisie' },
  { to: '/fiv-pma-tunisie', label: "Congélation d'embryons" },
  { to: '/soins-dentaires-tunisie', label: 'Implants dentaires Tunisie' },
  { to: '/soins-dentaires-tunisie', label: 'Facettes dentaires Tunisie' },
  { to: '/chirurgie-esthetique-tunisie', label: 'Chirurgie du sein' },
  { to: '/chirurgie-esthetique-tunisie', label: 'Botox & fillers Tunisie' },
];

const LIENS = [
  { to: '/a-propos', label: 'À propos' },
  { to: '/interventions', label: 'Nos interventions' },
  { to: '/dr-hallan-khenissi', label: 'Dr Hallan Khenissi' },
  { to: '/votre-sejour-tunisie', label: 'Votre séjour' },
  { to: '/cliniques-hotels', label: 'Cliniques & hôtels' },
  { to: '/temoignages', label: 'Témoignages' },
  { to: '/devis-gratuit', label: 'Devis gratuit' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-plum text-ivory">
      {/* Script watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 right-0 select-none font-script text-[140px] leading-none text-gold-light opacity-20 md:text-[220px]"
      >
        Make them jealous
      </span>

      <div className="relative mx-auto max-w-[1200px] px-6 pb-10 pt-20 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Marque */}
          <div>
            <img src="/logo.svg" alt="Health Travel" className="h-12 w-auto brightness-0 invert" />
            <p className="mt-5 text-[14px] leading-relaxed text-ivory/70">
              Agence premium de tourisme médical en Tunisie. Chirurgie esthétique, obésité, fertilité et soins
              dentaires — l'excellence médicale dans un cadre d'exception.
            </p>
            <div className="mt-6 flex items-center gap-2 text-[13px] font-semibold text-sage">
              <ShieldCheck className="h-4 w-4" />
              Agréée par le Ministère de la Santé tunisien
            </div>
          </div>

          {/* Interventions (maillage SEO) */}
          <div>
            <h3 className="font-sans text-[13px] font-bold uppercase tracking-[0.28em] text-gold-light">
              Interventions
            </h3>
            <ul className="mt-5 space-y-2.5">
              {ACTES.map((a) => (
                <li key={a.label}>
                  <Link to={a.to} className="text-[14px] text-ivory/70 transition-colors hover:text-gold-light">
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className="font-sans text-[13px] font-bold uppercase tracking-[0.28em] text-gold-light">
              Liens utiles
            </h3>
            <ul className="mt-5 space-y-2.5">
              {LIENS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-[14px] text-ivory/70 transition-colors hover:text-gold-light">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-[13px] font-bold uppercase tracking-[0.28em] text-gold-light">Contact</h3>
            <ul className="mt-5 space-y-4 text-[14px] text-ivory/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
                Tanit Business Center, Les Berges du Lac, 1053 Tunis, Tunisie
              </li>
              <li>
                <a href="tel:+21655000260" className="flex items-center gap-3 transition-colors hover:text-gold-light">
                  <Phone className="h-4 w-4 shrink-0 text-gold-light" /> +216 55 000 260
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@health-travel.tn"
                  className="flex items-center gap-3 transition-colors hover:text-gold-light"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold-light" /> contact@health-travel.tn
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-gold-light" /> Lun – Sam · 8 h 30 – 19 h
              </li>
            </ul>
          </div>
        </div>

        {/* Bandeau certifications */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-ivory/10 pt-8">
          {['Cliniques certifiées ISO 9001', 'Chirurgiens agréés CNOM', 'Partenaire hôtelier 5★', 'Suivi médical 24/7'].map(
            (c) => (
              <span key={c} className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-ivory/50">
                <BadgeCheck className="h-4 w-4 text-ivory/60" />
                {c}
              </span>
            ),
          )}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-6 text-[13px] text-ivory/40 md:flex-row">
          <p>© {new Date().getFullYear()} Health Travel — Tourisme médical premium en Tunisie. Tous droits réservés.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer transition-colors hover:text-gold-light">Mentions légales</span>
            <span className="cursor-pointer transition-colors hover:text-gold-light">Politique de confidentialité</span>
            <span className="cursor-pointer transition-colors hover:text-gold-light">CGV</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
