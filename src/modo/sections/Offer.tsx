import { Link } from 'react-router';
import { HeartPulse, MessageCircle } from 'lucide-react';
export default function Offer() {
  return (
    <section id="offer" className="relative w-full bg-[#050B14] py-32 px-8 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Séjour médical */}
        <div className="reveal-header">
          <p className="museo-label text-[#D4AF37] mb-4">PRISE EN CHARGE POSTOPÉRATOIRE</p>
          <h2 className="museo-headline text-white text-3xl md:text-5xl max-w-3xl mb-8 flex items-start gap-4">
            <HeartPulse className="w-10 h-10 text-[#D4AF37] flex-shrink-0 mt-2" strokeWidth={1.5} />
            Un véritable séjour médical pour prendre soin de vous.
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <p className="museo-body text-white/70 text-sm md:text-base">
              Chez Health Travel, votre accompagnement ne s'arrête pas après l'intervention. Nous organisons votre séjour médical dans un environnement adapté à votre récupération, avec une prise en charge postopératoire personnalisée.
            </p>
            <p className="museo-body text-white/70 text-sm md:text-base">
              Notre équipe veille à votre confort, à votre surveillance et au bon déroulement de votre convalescence. La durée du séjour est définie selon l'intervention réalisée, votre état de santé et les recommandations de l'équipe médicale.
            </p>
          </div>
          <p className="museo-label text-[#D4AF37] mt-8 text-[11px]">
            CHAQUE DOSSIER ÉTANT UNIQUE, UN DEVIS PERSONNALISÉ VOUS EST PROPOSÉ APRÈS ÉTUDE MÉDICALE.
          </p>
        </div>

        {/* Offre combinée */}
        <div className="mt-24 border border-[#D4AF37]/30 p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
          <p className="museo-label text-[#D4AF37] mb-4">OFFRE INTERVENTIONS COMBINÉES</p>
          <h3 className="museo-headline text-white text-3xl md:text-4xl mb-6">
            Deuxième intervention à moitié prix.
          </h3>
          <p className="museo-body text-white/60 text-sm md:text-base max-w-4xl mb-8">
            « Lorsque deux interventions compatibles sont réalisées au cours du même séjour médical et du même passage au bloc opératoire, la deuxième intervention peut bénéficier de 50 % de réduction. Cette offre est soumise à l'étude du dossier médical, à l'accord du chirurgien et de l'anesthésiste, ainsi qu'à la compatibilité des deux interventions. Les frais spécifiques liés aux implants, au matériel médical, aux analyses, aux soins supplémentaires ou à une prolongation du séjour peuvent être facturés séparément. »
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/devis"
              data-cursor="hover"
              className="museo-label text-[#050B14] bg-[#D4AF37] px-10 py-4 hover:bg-[#E8C766] transition-colors inline-flex items-center gap-2"
            >
              VÉRIFIER MON ÉLIGIBILITÉ
            </Link>
            <a
              href="https://wa.me/21655000260"
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="museo-label text-white border border-white/25 px-10 py-4 hover:border-[#D4AF37]/60 hover:text-[#D4AF37] transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
