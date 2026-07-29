import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { Seo } from '../components/Seo';
import { interventions } from '../data/interventions';
import { contact } from '../data/content';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nom: '', email: '', tel: '', intervention: '', message: '' });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Seo title="Contact — Health Travel Tunisie | Devis sous 24h"
        description="Contactez Health Travel : WhatsApp 24/7, téléphone, email ou formulaire. Réponse garantie sous 24h, en français, anglais, arabe, allemand ou italien." />
      <section className="page-head" style={{ padding: '128px 0 48px' }}>
        <div className="container-ht" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <span className="section-tag">Contact</span>
          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 44px)', margin: '10px 0 14px' }}>Contactez-nous</h1>
          <p className="text-muted" style={{ fontSize: 16 }}>Notre équipe vous répond sous 24h, dans votre langue. WhatsApp disponible 24/7.</p>
        </div>
      </section>

      <section style={{ padding: '16px 0 24px' }}>
        <div className="container-ht" style={{ maxWidth: 1000 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
            <Reveal>
              <div style={{ display: 'grid', gap: 14 }}>
                {[
                  { icon: Phone, t: 'Téléphone', d: contact.phone, href: 'tel:+21655000260' },
                  { icon: MessageCircle, t: 'WhatsApp (24/7)', d: contact.whatsapp, href: 'https://wa.me/21655000260' },
                  { icon: Mail, t: 'Email', d: contact.email, href: 'mailto:contact@healthtravel.fr' },
                  { icon: MapPin, t: 'Adresse', d: contact.address },
                  { icon: Clock, t: 'Horaires', d: contact.hours }
                ].map((c, i) => (
                  <a key={i} href={c.href || '#'} target={c.href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                    className="card" style={{ padding: '18px 22px', display: 'flex', gap: 14, alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--ht-bleu-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ht-bleu)', flexShrink: 0 }}>
                      <c.icon size={19} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14.5 }}>{c.t}</div>
                      <div className="text-muted" style={{ fontSize: 13.5 }}>{c.d}</div>
                    </div>
                  </a>
                ))}
                <div className="card" style={{ overflow: 'hidden', minHeight: 200, background: 'var(--ht-gris)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <iframe
                    title="Health Travel sur Google Maps — Tunis"
                    src="https://www.google.com/maps?q=Tanit+Business+Center+Tunis&output=embed"
                    style={{ border: 0, width: '100%', height: 220 }} loading="lazy" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card" style={{ padding: 32 }}>
                {sent ? (
                  <div style={{ textAlign: 'center', padding: '32px 0' }}>
                    <CheckCircle2 size={48} style={{ color: 'var(--ht-vert)', margin: '0 auto 16px' }} />
                    <h2 style={{ fontSize: 20, marginBottom: 10 }}>Message envoyé !</h2>
                    <p className="text-muted">Merci {form.nom.split(' ')[0]}. Notre équipe vous répondra sous 24h à {form.email}.</p>
                  </div>
                ) : (
                  <form onSubmit={submit}>
                    <h2 style={{ fontSize: 20, marginBottom: 20 }}>Écrivez-nous</h2>
                    <div style={{ display: 'grid', gap: 14 }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                        <input className="input" required placeholder="Nom complet *" value={form.nom} onChange={e => setForm({ ...form, nom: e.target.value })} />
                        <input className="input" required type="email" placeholder="Email *" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                      </div>
                      <input className="input" placeholder="Téléphone / WhatsApp" value={form.tel} onChange={e => setForm({ ...form, tel: e.target.value })} />
                      <select className="input" value={form.intervention} onChange={e => setForm({ ...form, intervention: e.target.value })}>
                        <option value="">Intervention souhaitée…</option>
                        {interventions.map(iv => <option key={iv.slug} value={iv.name}>{iv.name}</option>)}
                        <option value="autre">Autre / je ne sais pas encore</option>
                      </select>
                      <textarea className="input" rows={5} placeholder="Votre message…" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                      <button type="submit" className="btn btn-primary" style={{ padding: 14, fontSize: 15 }}>
                        <Send size={16} /> Envoyer le message
                      </button>
                      <p className="text-muted" style={{ fontSize: 12.5, textAlign: 'center' }}>
                        Vos données sont chiffrées et traitées conformément au RGPD. Aucun partage avec des tiers.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
