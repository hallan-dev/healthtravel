import { Link } from 'react-router';
import { ArrowRight, HeartPulse, BadgePercent, MessageCircle } from 'lucide-react';
import { Reveal } from './Reveal';

// Section « Séjour médical » — à afficher sur les pages interventions
export function SejourMedicalSection() {
  return (
    <Reveal>
      <section style={{
        margin: '56px 0', padding: 'clamp(28px, 4vw, 44px)', borderRadius: 'var(--radius-xl)',
        background: 'linear-gradient(135deg, #0B1526 0%, #16283F 100%)', color: '#fff', position: 'relative', overflow: 'hidden'
      }}>
        <div className="orb orb-gold" style={{ width: 300, height: 300, top: -120, right: -80 }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <span className="section-tag gold" style={{ display: 'block', marginBottom: 12 }}>PRISE EN CHARGE POSTOPÉRATOIRE</span>
          <h2 style={{ color: '#fff', fontSize: 'clamp(24px, 3.2vw, 32px)', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <span className="gicon gi-gold" style={{ width: 42, height: 42 }}><HeartPulse size={20} /></span>
            Un véritable séjour médical pour prendre soin de vous
          </h2>
          <p style={{ color: 'rgba(255,255,255,.88)', fontSize: 15.5, lineHeight: 1.75, maxWidth: 760, marginBottom: 14 }}>
            Chez Health Travel, votre accompagnement ne s'arrête pas après l'intervention. Nous organisons votre séjour médical dans un environnement adapté à votre récupération, avec une prise en charge postopératoire personnalisée.
          </p>
          <p style={{ color: 'rgba(255,255,255,.78)', fontSize: 15, lineHeight: 1.75, maxWidth: 760, marginBottom: 14 }}>
            Notre équipe veille à votre confort, à votre surveillance et au bon déroulement de votre convalescence. La durée du séjour est définie selon l'intervention réalisée, votre état de santé et les recommandations de l'équipe médicale.
          </p>
          <p style={{ color: '#E8C766', fontSize: 14.5, fontWeight: 500 }}>
            Chaque dossier étant unique, un devis personnalisé vous est proposé après étude médicale.
          </p>
        </div>
      </section>
    </Reveal>
  );
}

// Section « Deuxième intervention à moitié prix »
export function OffreCombineeSection() {
  return (
    <Reveal>
      <section style={{
        margin: '48px 0', padding: 'clamp(28px, 4vw, 44px)', borderRadius: 'var(--radius-xl)',
        background: 'linear-gradient(135deg, #FEF9E7 0%, #FBF3DC 100%)', border: '1px solid #F0E3B2', position: 'relative', overflow: 'hidden'
      }}>
        <div className="orb orb-gold" style={{ width: 260, height: 260, top: -100, right: -60, opacity: .5 }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <span className="badge badge-gold" style={{ marginBottom: 14 }}>OFFRE INTERVENTIONS COMBINÉES</span>
          <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 32px)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <span className="gicon gi-gold" style={{ width: 42, height: 42 }}><BadgePercent size={20} /></span>
            Deuxième intervention à moitié prix
          </h2>
          <p style={{ color: '#4B5563', fontSize: 15, lineHeight: 1.8, maxWidth: 820, marginBottom: 22 }}>
            « Lorsque deux interventions compatibles sont réalisées au cours du même séjour médical et du même passage au bloc opératoire, la deuxième intervention peut bénéficier de 50 % de réduction. Cette offre est soumise à l'étude du dossier médical, à l'accord du chirurgien et de l'anesthésiste, ainsi qu'à la compatibilité des deux interventions. Les frais spécifiques liés aux implants, au matériel médical, aux analyses, aux soins supplémentaires ou à une prolongation du séjour peuvent être facturés séparément. »
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Link to="/devis" className="btn btn-primary">Vérifier mon éligibilité <ArrowRight size={15} /></Link>
            <a href="https://wa.me/21655000260" target="_blank" rel="noreferrer" className="btn btn-outline">
              <MessageCircle size={15} /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
