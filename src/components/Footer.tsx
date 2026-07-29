import { Link } from 'react-router';
import { Phone, Mail, MapPin, Clock, Instagram, Music2, MessageCircle, Facebook, Play, Send } from 'lucide-react';
import { useState } from 'react';
import { interventions } from '../data/interventions';
import { contact } from '../data/content';

export function Footer() {
  const [nl, setNl] = useState('');
  const [nlSent, setNlSent] = useState(false);
  return (
    <footer style={{ background: 'linear-gradient(180deg, #0B1526, #080F1E)', color: '#D1D5DB', marginTop: 96, position: 'relative' }}>
      <div className="grad-bar" style={{ position: 'absolute', top: 0, left: 0, right: 0 }} />
      <div className="container-ht" style={{ padding: '64px 20px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <img src="/assets/logo.webp" alt="Health Travel" style={{ height: 34, background: '#fff', borderRadius: 8, padding: 4 }} />
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: '#9CA3AF' }}>
              Agence de tourisme médical premium spécialisée en chirurgie esthétique en Tunisie. Accompagnement humain, chirurgiens d'exception, séjour organisé de A à Z.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              {[
                { Icon: Instagram, href: contact.socials.instagram, label: 'Instagram' },
                { Icon: Music2, href: contact.socials.tiktok, label: 'TikTok' },
                { Icon: Play, href: contact.socials.youtube, label: 'YouTube' },
                { Icon: Facebook, href: contact.socials.facebook, label: 'Facebook' },
                { Icon: MessageCircle, href: `https://wa.me/${contact.whatsapp.replace(/\s/g,'')}`, label: 'WhatsApp' }
              ].map(({ Icon, href, label }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer" aria-label={label} style={{
                  width: 36, height: 36, borderRadius: 8, background: 'rgba(255,255,255,.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D1D5DB'
                }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontSize: 14, marginBottom: 16, fontWeight: 600 }}>Interventions</h4>
            <div style={{ display: 'grid', gap: 8 }}>
              {interventions.slice(0, 8).map(iv => (
                <Link key={iv.slug} to={`/interventions/${iv.slug}`} style={{ fontSize: 13.5, color: '#9CA3AF', textDecoration: 'none' }}>
                  {iv.name}
                </Link>
              ))}
              <Link to="/interventions" style={{ fontSize: 13.5, color: 'var(--ht-dore)', textDecoration: 'none' }}>
                Toutes les interventions →
              </Link>
            </div>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontSize: 14, marginBottom: 16, fontWeight: 600 }}>Le site</h4>
            <div style={{ display: 'grid', gap: 8 }}>
              {[['/', 'Accueil'], ['/chirurgiens', 'Nos chirurgiens'], ['/avant-apres', 'Avant / Après'], ['/blog', 'Blog & conseils'], ['/faq', 'FAQ — 100 questions'], ['/devis', 'Devis gratuit'], ['/rendez-vous', 'Rendez-vous vidéo'], ['/contact', 'Contact']].map(([to, label]) => (
                <Link key={to} to={to} style={{ fontSize: 13.5, color: '#9CA3AF', textDecoration: 'none' }}>{label}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontSize: 14, marginBottom: 16, fontWeight: 600 }}>Contact</h4>
            <div style={{ display: 'grid', gap: 12, fontSize: 13.5 }}>
              <span style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}><MapPin size={15} style={{ marginTop: 2, color: 'var(--ht-dore)' }} /> {contact.address}</span>
              <span style={{ display: 'flex', gap: 10, alignItems: 'center' }}><Phone size={15} style={{ color: 'var(--ht-dore)' }} /> {contact.phone}</span>
              <span style={{ display: 'flex', gap: 10, alignItems: 'center' }}><MessageCircle size={15} style={{ color: 'var(--ht-dore)' }} /> WhatsApp 24/7</span>
              <span style={{ display: 'flex', gap: 10, alignItems: 'center' }}><Mail size={15} style={{ color: 'var(--ht-dore)' }} /> {contact.email}</span>
              <span style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}><Clock size={15} style={{ marginTop: 2, color: 'var(--ht-dore)' }} /> {contact.hours}</span>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,.1)', marginTop: 48, paddingTop: 28 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, alignItems: 'center' }}>
            <div>
              <h4 style={{ color: '#fff', fontSize: 15, marginBottom: 6, fontWeight: 600, fontFamily: 'Poppins, sans-serif' }}>Recevez nos conseils & offres</h4>
              <p style={{ fontSize: 13, color: '#9CA3AF' }}>Guides préparation, témoignages et nouveautés. 1 email / mois, zéro spam.</p>
            </div>
            {nlSent ? (
              <p style={{ color: '#34D399', fontSize: 14, fontWeight: 500 }}>Merci ! Vous êtes bien inscrite à la newsletter.</p>
            ) : (
              <form onSubmit={e => { e.preventDefault(); if (nl) setNlSent(true); }} style={{ display: 'flex', gap: 8 }}>
                <input type="email" required value={nl} onChange={e => setNl(e.target.value)} placeholder="Votre email"
                  style={{ flex: 1, padding: '12px 14px', borderRadius: 10, border: '1px solid rgba(255,255,255,.15)', background: 'rgba(255,255,255,.06)', color: '#fff', fontSize: 14, outline: 'none' }} />
                <button type="submit" className="btn btn-gold" style={{ padding: '12px 18px' }}><Send size={15} /></button>
              </form>
            )}
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.1)', marginTop: 28, paddingTop: 24, display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'space-between', fontSize: 12.5, color: '#6B7280' }}>
          <span>© 2026 Health Travel — Tous droits réservés · contact@healthtravel.fr</span>
          <span>Mentions légales · Politique de confidentialité · RGPD</span>
        </div>
      </div>
    </footer>
  );
}
