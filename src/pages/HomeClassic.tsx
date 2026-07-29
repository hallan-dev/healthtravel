import { Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  Check, Star, ArrowRight, Video, Instagram, Linkedin, Music2, Sparkles, Play,
  Award, HeartHandshake, ShieldCheck, Building2, Stethoscope, Languages, Receipt, Plane,
  BadgeCheck, CalendarCheck
} from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { Seo } from '../components/Seo';
import { FaqAccordion } from '../components/Faq';
import { YoutubeLite } from '../components/YoutubeLite';
import { CountUp } from '../components/CountUp';
import { interventions } from '../data/interventions';
import { faqHome } from '../data/faq';
import { articles } from '../data/blog';
import { hero, founderWord, whyCards, parcours, temoignages, stars, videosTemoignages, chirurgiens, clinique, stats, engagements, qualite } from '../data/content';

const iconMap: Record<string, any> = { Award, HeartHandshake, ShieldCheck, Building2, Stethoscope, Languages, Receipt, Plane };
const catBadge: Record<string, string> = {
  'Silhouette': 'badge-lagoon', 'Seins': 'badge-sunset', 'Visage': 'badge-violet',
  'Cheveux': 'badge-miami', 'Intime': 'badge-rose',
  'Obésité': 'badge-bleu', 'Dentaire': 'badge-vert', 'Fertilité': 'badge-gold', 'Médecine esthétique': 'badge-miami'
};

const homeInterventions = ['liposuccion', 'bbl', 'abdominoplastie', 'mommy-makeover', 'augmentation-mammaire', 'rhinoplastie', 'greffe-capillaire', 'lifting-visage', 'blepharoplastie', 'sleeve', 'facettes-dentaires', 'botox'];
const interventionImgs: Record<string, string> = {
  'liposuccion': '/assets/interventions/liposuccion.webp',
  'bbl': '/assets/interventions/bbl.webp',
  'abdominoplastie': '/assets/interventions/abdominoplastie.webp',
  'mommy-makeover': '/assets/interventions/mommy-makeover.webp',
  'augmentation-mammaire': '/assets/interventions/augmentation-mammaire.webp',
  'rhinoplastie': '/assets/interventions/rhinoplastie.webp',
  'greffe-capillaire': '/assets/interventions/greffe-capillaire.webp',
  'lifting-visage': '/assets/interventions/lifting-visage.webp',
  'blepharoplastie': '/assets/interventions/blepharoplastie.webp',
  'sleeve': '/assets/interventions/sleeve.webp',
  'facettes-dentaires': '/assets/interventions/facettes-dentaires.webp',
  'botox': '/assets/interventions/botox.webp'
};

export default function Home() {
  return (
    <>
      <Seo
        title="Chirurgie esthétique Tunisie | Health Travel — Tourisme médical premium"
        description="Health Travel, agence de tourisme médical en Tunisie. Chirurgie esthétique premium avec chirurgiens certifiés, cliniques modernes et accompagnement personnalisé de A à Z. Devis sous 24h."
      />

      {/* ===== HERO ===== */}
      <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', background: 'var(--ht-noir)' }}>
        <video className="hero-video" autoPlay muted loop playsInline poster="/assets/hero-poster.webp">
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,31,58,.32) 0%, rgba(11,31,58,.12) 40%, rgba(11,31,58,.85) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg, rgba(37,99,235,.2) 0%, transparent 45%, rgba(212,175,55,.14) 100%)', mixBlendMode: 'overlay' }} />
        <div className="orb orb-aqua" style={{ width: 420, height: 420, bottom: -140, right: -100 }} />
        <div className="orb orb-gold" style={{ width: 320, height: 320, top: -80, left: -80 }} />
        <div className="container-ht" style={{ position: 'relative', zIndex: 2, paddingBottom: 72, paddingTop: 140, width: '100%' }}>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} style={{ maxWidth: 720 }}>
            <span style={{ fontFamily: 'Qwitcher Grypen, cursive', fontSize: 'clamp(28px, 3.4vw, 40px)', color: '#E8C766', display: 'block', marginBottom: 4 }}>
              L'excellence au service de votre beauté
            </span>
            <span className="badge" style={{ marginBottom: 20, background: 'rgba(212,175,55,.16)', color: '#F0D98C', border: '1px solid rgba(212,175,55,.45)', backdropFilter: 'blur(6px)' }}>
              Tourisme médical premium — Tunisie
            </span>
            <h1 style={{ color: '#fff', fontSize: 'clamp(34px, 6vw, 60px)', fontWeight: 600, lineHeight: 1.1, marginBottom: 18, letterSpacing: '-0.02em' }}>
              Révélez votre éclat dans un cadre d'exception
            </h1>
            <p style={{ color: 'rgba(255,255,255,.88)', fontSize: 'clamp(16px, 2vw, 19px)', maxWidth: 560, marginBottom: 32 }}>
              {hero.subtitle}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 36 }}>
              <Link to="/devis" className="btn btn-primary" style={{ padding: '15px 28px', fontSize: 15 }}>
                {hero.cta1} <ArrowRight size={16} />
              </Link>
              <Link to="/rendez-vous" className="btn btn-ghost-light" style={{ padding: '15px 28px', fontSize: 15 }}>
                <Video size={16} /> {hero.cta2}
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 10, maxWidth: 720 }}>
              {hero.badges.map((b, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }}
                  style={{ display: 'flex', gap: 8, alignItems: 'flex-start', color: 'rgba(255,255,255,.85)', fontSize: 13 }}>
                  <span className="check-pastel" style={{ background: 'rgba(212,175,55,.2)', color: '#F0D98C' }}><Check size={12} /></span> {b}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section style={{ background: 'linear-gradient(180deg, #FDFBF7, #F6F1E5)', borderBottom: '1px solid #EAE3D4' }}>
        <div className="container-ht" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 24, padding: '36px 20px' }}>
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.08} style={{ textAlign: 'center' }}>
              <div className="grad-text" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 40, fontWeight: 600 }}><CountUp value={s.value} /></div>
              <div className="text-muted" style={{ fontSize: 13.5 }}>{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== MOT DE LA FONDATRICE ===== */}
      <section style={{ padding: '96px 0 72px', background: 'linear-gradient(180deg, #FDFBF6 0%, #F4EDDC 100%)' }}>
        <div className="container-ht">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 56, alignItems: 'center' }}>
            <Reveal>
              <div style={{ position: 'relative' }}>
                <img src="/assets/founder.webp" alt="Hallan Khenissi, fondatrice de Health Travel"
                  style={{ width: '100%', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', aspectRatio: '3/4', objectFit: 'cover', objectPosition: '50% 12%' }} />
                <div style={{
                  position: 'absolute', bottom: 20, left: 20, right: 20, background: 'rgba(255,255,255,.92)',
                  backdropFilter: 'blur(10px)', borderRadius: 'var(--radius-md)', padding: '14px 18px', boxShadow: 'var(--shadow-md)'
                }}>
                  <div className="signature" style={{ fontSize: 18 }}>{founderWord.signature}</div>
                  <div className="text-muted" style={{ fontSize: 12.5 }}>{founderWord.role}</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <span className="script-accent">Une promesse personnelle</span><span className="section-tag">Notre fondatrice</span>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', margin: '10px 0 8px' }}>{founderWord.title}</h2>
              <div className="gold-sep" style={{ marginBottom: 24 }} />
              {founderWord.paragraphs.map((p, i) => (
                <p key={i} style={{ color: '#374151', fontSize: 15.5, marginBottom: 16 }}>{p}</p>
              ))}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 28, alignItems: 'center' }}>
                <Link to="/devis" className="btn btn-primary">Échanger avec notre équipe</Link>
                <div style={{ display: 'flex', gap: 8 }}>
                  {[Linkedin, Instagram, Music2].map((Icon, i) => (
                    <a key={i} href="#" aria-label="Réseau social" style={{
                      width: 40, height: 40, borderRadius: 10, border: '1px solid #E5E7EB', background: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ht-bleu)'
                    }}>
                      <Icon size={17} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== STARS ===== */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(160deg, #0B1526 0%, var(--ht-noir) 60%)', color: '#fff', overflow: 'hidden', position: 'relative' }}>
        <div className="orb orb-gold" style={{ width: 380, height: 380, top: -120, right: -120, opacity: .45 }} />
        <div className="orb orb-aqua" style={{ width: 340, height: 340, bottom: -140, left: -100 }} />
        <div className="container-ht">
          <Reveal style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 52px' }}>
            <span className="script-accent">La preuve par l'image</span><span className="section-tag" style={{ color: 'var(--ht-dore)' }}>Elles nous font confiance</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', margin: '10px 0 12px', color: '#fff' }}>
              Des stars et personnalités ont choisi Health Travel
            </h2>
            <p style={{ color: 'rgba(255,255,255,.75)', maxWidth: 600, margin: '0 auto' }}>
              Chanteuses, actrices, présentatrices TV et créatrices de contenu : elles ont confié leur transformation à Hallan et à notre équipe.
            </p>
          </Reveal>
          <Reveal style={{ maxWidth: 380, margin: '0 auto 44px' }}>
            <div style={{
              borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid rgba(212,175,55,.4)',
              boxShadow: '0 16px 48px rgba(0,0,0,.45)'
            }}>
              <video controls playsInline preload="none" poster="/assets/star-teaser-poster.webp"
                style={{ width: '100%', display: 'block', aspectRatio: '9/16', background: '#000' }}>
                <source src="/assets/star-teaser.mp4" type="video/mp4" />
              </video>
            </div>
            <p style={{ textAlign: 'center', color: 'rgba(255,255,255,.7)', fontSize: 13.5, marginTop: 14 }}>
              Devinez quelle star a confié son corps à Hallan
            </p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {stars.map((s, i) => (
              <Reveal key={s.name} delay={(i % 3) * 0.08}>
                <div style={{
                  background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)',
                  borderRadius: 'var(--radius-lg)', padding: 26, height: '100%',
                  display: 'flex', flexDirection: 'column', backdropFilter: 'blur(6px)', position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute', top: 18, right: 18, width: 34, height: 34, borderRadius: '50%',
                    background: 'rgba(212,175,55,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Sparkles size={16} style={{ color: 'var(--ht-dore)' }} />
                  </div>
                  <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
                    {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="var(--ht-dore)" color="var(--ht-dore)" />)}
                  </div>
                  <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,.9)', flex: 1, fontStyle: 'italic', lineHeight: 1.65 }}>
                    « {s.quote} »
                  </p>
                  <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,.12)' }}>
                    <div style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 16.5, color: '#fff' }}>{s.name}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,.65)', marginTop: 2 }}>{s.role}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 10 }}>
                      <span className="badge" style={{ background: 'rgba(212,175,55,.16)', color: '#F0D98C', border: '1px solid rgba(212,175,55,.4)' }}>{s.country}</span>
                      <span className="badge" style={{ background: 'rgba(255,255,255,.1)', color: 'rgba(255,255,255,.85)' }}>{s.intervention}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ textAlign: 'center', marginTop: 36 }}>
            <span style={{ color: 'rgba(255,255,255,.6)', fontSize: 14 }}>
              … et des centaines d'autres patientes venues de 15 pays
            </span>
          </Reveal>
        </div>
      </section>

      {/* ===== VIDÉOS TÉMOIGNAGES ===== */}
      <section style={{ padding: '80px 0' }}>
        <div className="container-ht">
          <Reveal style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 48px' }}>
            <span className="section-tag">Témoignages vidéo</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', margin: '10px 0 12px' }}>Elles racontent leur expérience</h2>
            <p className="text-muted">Des témoignages authentiques filmés par nos patientes, publiés sur notre chaîne YouTube officielle.</p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
            {videosTemoignages.map((v, i) => (
              <Reveal key={v.id} delay={(i % 2) * 0.1}>
                <div className="card" style={{ overflow: 'hidden' }}>
                  <YoutubeLite id={v.id} title={v.title} />
                  <div style={{ padding: '16px 20px' }}>
                    <h3 style={{ fontSize: 15, lineHeight: 1.4 }}>{v.title}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ textAlign: 'center', marginTop: 32 }}>
            <a href="https://www.youtube.com/@healthtraveltunisie39" target="_blank" rel="noreferrer" className="btn btn-outline">
              <Play size={15} /> Voir toutes nos vidéos sur YouTube
            </a>
          </Reveal>
        </div>
      </section>

      {/* ===== TÉMOIGNAGES ===== */}
      <section className="bg-bleu-ivoire" style={{ padding: '80px 0' }}>
        <div className="container-ht">
          <Reveal style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 52px" }}>
            <span className="script-accent">Elles en parlent mieux que nous</span><span className="section-tag">Témoignages</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', margin: '10px 0 12px' }}>Ce que disent nos patientes</h2>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="var(--ht-dore)" color="var(--ht-dore)" />)}
              <span style={{ fontSize: 14, fontWeight: 600, marginLeft: 6 }}>4,9/5</span>
              <span className="text-muted" style={{ fontSize: 13 }}>— 347 avis Google</span>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {temoignages.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="card" style={{ padding: 26, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
                    {[...Array(5)].map((_, j) => <Star key={j} size={15} fill="var(--ht-dore)" color="var(--ht-dore)" />)}
                  </div>
                  <p style={{ fontSize: 14.5, color: '#374151', flex: 1, fontStyle: 'italic' }}>« {t.text} »</p>
                  <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px solid var(--ht-gris)' }}>
                    <div style={{ fontWeight: 600, fontSize: 14.5 }}>{t.name}</div>
                    <div className="text-muted" style={{ fontSize: 13 }}>{t.country} · {t.intervention}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ textAlign: 'center', marginTop: 32 }}>
            <a href="#" className="btn btn-outline" style={{ background: '#fff' }}><Star size={15} /> Voir tous les avis Google</a>
          </Reveal>
        </div>
      </section>

      {/* ===== POURQUOI NOUS ===== */}
      <section style={{ padding: '80px 0' }}>
        <div className="container-ht">
          <Reveal style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 52px" }}>
            <span className="script-accent">L'exigence & l'humain</span><span className="section-tag">Pourquoi Health Travel</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', margin: '10px 0 12px' }}>Pourquoi des milliers de patientes nous font confiance</h2>
            <p className="text-muted">Une exigence médicale absolue, un accompagnement humain total.</p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {whyCards.map((c, i) => {
              const Icon = iconMap[c.icon];
              const gis = ['gi-lagoon', 'gi-miami', 'gi-gold', 'gi-sunset', 'gi-violet', 'gi-rose', 'gi-navy', 'gi-green'];
              return (
                <Reveal key={i} delay={(i % 4) * 0.08}>
                  <div className="card-glow" style={{ padding: 28, height: '100%' }}>
                    <div className={`gicon ${gis[i % gis.length]}`} style={{ marginBottom: 18 }}>
                      <Icon size={22} />
                    </div>
                    <h3 style={{ fontSize: 17, marginBottom: 10 }}>{c.title}</h3>
                    <p className="text-muted" style={{ fontSize: 14.5 }}>{c.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== INTERVENTIONS ===== */}
      <section className="bg-champagne" style={{ padding: '80px 0' }}>
        <div className="container-ht">
          <Reveal style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 52px" }}>
            <span className="script-accent">L'art de la transformation</span><span className="section-tag">Nos interventions</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', margin: '10px 0 12px' }}>Nos interventions de chirurgie esthétique</h2>
            <p className="text-muted">Chaque intervention est réalisée par un chirurgien spécialisé, dans une clinique certifiée, avec un protocole de sécurité strict.</p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {homeInterventions.map((slug, i) => {
              const iv = interventions.find(v => v.slug === slug)!;
              return (
                <Reveal key={slug} delay={(i % 3) * 0.08}>
                  <Link to={`/interventions/${slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="card-glow" style={{ overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ height: 190, overflow: 'hidden' }}>
                        <img src={interventionImgs[slug]} alt={iv.name + ' en Tunisie'} loading="lazy"
                          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .5s' }}
                          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                      </div>
                      <div style={{ padding: '20px 22px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                          <h3 style={{ fontSize: 17 }}>{iv.name}</h3>
                          <span className={`badge ${catBadge[iv.category] || 'badge-miami'}`}>{iv.category}</span>
                        </div>
                        <p className="text-muted" style={{ fontSize: 14, flex: 1 }}>{iv.tagline}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
                          <span className="grad-text-gold" style={{ fontSize: 13.5, fontWeight: 700 }}>{iv.prix}</span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13.5, color: 'var(--ht-bleu)', fontWeight: 500 }}>
                            Découvrir <ArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <Reveal style={{ textAlign: 'center', marginTop: 36 }}>
            <Link to="/interventions" className="btn btn-outline">Voir toutes nos interventions <ArrowRight size={15} /></Link>
          </Reveal>
        </div>
      </section>

      {/* ===== CHIRURGIENS ===== */}
      <section style={{ padding: '80px 0' }}>
        <div className="container-ht">
          <Reveal style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 52px" }}>
            <span className="script-accent">Des mains d'exception</span><span className="section-tag">Nos chirurgiens</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', margin: '10px 0 12px' }}>Une équipe de chirurgiens d'exception</h2>
            <p className="text-muted">Diplômes vérifiés, expérience internationale, spécialisation confirmée. Leurs fiches sont publiques et transparentes.</p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {chirurgiens.map((c, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="card" style={{ overflow: 'hidden' }}>
                  <div style={{ height: 220, overflow: 'hidden' }}>
                    <img src={c.photo} alt={c.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 18%' }} />
                  </div>
                  <div style={{ padding: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <h3 style={{ fontSize: 18 }}>{c.name}</h3>
                      <BadgeCheck size={18} style={{ color: 'var(--ht-vert)' }} />
                    </div>
                    <p className="text-muted" style={{ fontSize: 14, marginBottom: 12 }}>{c.speciality}</p>
                    <div style={{ display: 'grid', gap: 6, fontSize: 13.5 }}>
                      <span><strong style={{ color: 'var(--ht-bleu)' }}>{c.exp}</strong> · {c.interventions} interventions</span>
                      <span className="text-muted">{c.diplomas}</span>
                      <span className="text-muted">Langues : {c.langues}</span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 14 }}>
                      {c.focus.map(f => <span key={f} className="badge badge-bleu">{f}</span>)}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ textAlign: 'center', marginTop: 32 }}>
            <Link to="/chirurgiens" className="btn btn-outline">Voir toutes les fiches <ArrowRight size={15} /></Link>
          </Reveal>
        </div>
      </section>

      {/* ===== PARCOURS ===== */}
      <section style={{ padding: '80px 0', background: 'var(--grad-night)', color: '#fff' }}>
        <div className="container-ht">
          <Reveal style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
            <span className="script-accent">De A à Z, à vos côtés</span><span className="section-tag" style={{ color: 'var(--ht-dore)' }}>Votre parcours</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', margin: '10px 0 12px', color: '#fff' }}>Votre parcours, étape par étape</h2>
            <p style={{ color: 'rgba(255,255,255,.8)' }}>De la première prise de contact à votre retour chez vous, nous sommes à vos côtés.</p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {parcours.map((p, i) => (
              <Reveal key={p.n} delay={(i % 3) * 0.06}>
                <div style={{
                  background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.15)',
                  borderRadius: 'var(--radius-lg)', padding: 22, backdropFilter: 'blur(6px)', height: '100%'
                }}>
                  <div className="tl-dot" style={{ background: i < 4 ? 'var(--grad-gold)' : 'rgba(255,255,255,.22)', marginBottom: 14, boxShadow: '0 4px 14px rgba(0,0,0,.25)', color: i < 4 ? '#3D2E05' : '#fff' }}>
                    {p.n}
                  </div>
                  <h3 style={{ fontSize: 16, color: '#fff', marginBottom: 8 }}>{p.t}</h3>
                  <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,.75)', lineHeight: 1.6 }}>{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/devis" className="btn btn-gold" style={{ padding: '14px 28px' }}>Commencer mon parcours <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      {/* ===== ENGAGEMENTS QUALITÉ ===== */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(160deg, #0B1526 0%, #111827 60%)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-gold" style={{ width: 340, height: 340, top: -100, left: -100 }} />
        <div className="orb orb-bleu" style={{ width: 300, height: 300, bottom: -120, right: -80 }} />
        <div className="container-ht">
          <Reveal style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 52px' }}>
            <span className="script-accent">Votre confiance, notre exigence</span>
            <span className="section-tag" style={{ color: 'var(--ht-dore)' }}>Nos engagements</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', margin: '10px 0 12px', color: '#fff' }}>La qualité avant tout</h2>
            <p style={{ color: 'rgba(255,255,255,.75)' }}>Six engagements non négociables, sur chaque dossier, à chaque étape.</p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
            {engagements.map((e, i) => (
              <Reveal key={e.n} delay={(i % 3) * 0.08}>
                <div style={{
                  background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.12)',
                  borderRadius: 'var(--radius-lg)', padding: 26, height: '100%', backdropFilter: 'blur(6px)',
                  transition: 'all .3s', display: 'flex', gap: 18, alignItems: 'flex-start'
                }}>
                  <span style={{
                    fontFamily: 'Cormorant Garamond, serif', fontSize: 34, fontWeight: 600, lineHeight: 1,
                    background: 'var(--grad-gold)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'
                  }}>{e.n}</span>
                  <div>
                    <h3 style={{ fontSize: 16.5, color: '#fff', marginBottom: 6 }}>{e.t}</h3>
                    <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,.7)', lineHeight: 1.6 }}>{e.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18, marginTop: 40 }}>
              {qualite.groupes.map((g, i) => (
                <div key={i} style={{ borderTop: '2px solid rgba(232,199,102,.5)', paddingTop: 18 }}>
                  <h3 style={{ fontSize: 15, color: '#E8C766', marginBottom: 12, fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>{g.t}</h3>
                  <div style={{ display: 'grid', gap: 8 }}>
                    {g.items.map((it, j) => (
                      <span key={j} style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13.5, color: 'rgba(255,255,255,.8)' }}>
                        <span className="check-pastel" style={{ width: 18, height: 18, background: 'rgba(232,199,102,.15)', color: '#E8C766' }}><Check size={11} /></span> {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== CLINIQUES ===== */}
      <section style={{ padding: '80px 0' }}>
        <div className="container-ht">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'center' }}>
            <Reveal>
              <span className="script-accent">Le cadre de votre réussite</span><span className="section-tag">Nos cliniques</span>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', margin: '10px 0 12px' }}>Des cliniques aux standards internationaux</h2>
              <div className="gold-sep" style={{ marginBottom: 20 }} />
              <p className="text-muted" style={{ marginBottom: 20 }}>{clinique.intro}</p>
              <h3 style={{ fontSize: 17, marginBottom: 14 }}>{clinique.name}</h3>
              <div style={{ display: 'grid', gap: 10 }}>
                {clinique.features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14.5 }}>
                    <span className="check-pastel"><Check size={12} /></span> {f}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 8, marginTop: 20 }}>
                {clinique.certifications.map(c => <span key={c} className="badge badge-gold"><Award size={13} /> {c}</span>)}
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <img src="/assets/team-corridor.webp" alt="Équipe médicale de la clinique partenaire" loading="lazy" style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 12 }} />
                <img src="/assets/team-meeting.webp" alt="Réunion médicale pré-opératoire" loading="lazy" style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 12, marginTop: 24 }} />
                <img src="/assets/team-table.webp" alt="Concertation entre chirurgiens" loading="lazy" style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 12 }} />
                <img src="/assets/hallan-surgeon.webp" alt="Hallan Khenissi avec un chirurgien partenaire" loading="lazy" style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 12, marginTop: 24 }} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== AVANT/APRÈS (aperçu) ===== */}
      <section style={{ padding: '80px 0' }}>
        <div className="container-ht">
          <Reveal style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 40px' }}>
            <span className="section-tag">Avant / Après</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', margin: '10px 0 12px' }}>Résultats réels, patientes réelles</h2>
            <p className="text-muted">Chaque photo est publiée avec le consentement écrit de la patiente. Aucune retouche numérique. Résultats à 3, 6 et 12 mois post-opération.</p>
          </Reveal>
          <Reveal>
            <div className="card" style={{ padding: '40px 32px', textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
              <ShieldCheck size={36} style={{ color: 'var(--ht-vert)', margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: 19, marginBottom: 10 }}>Galerie avant/après filtrable</h3>
              <p className="text-muted" style={{ maxWidth: 520, margin: '0 auto 24px', fontSize: 15 }}>
                Par respect pour la confidentialité médicale, notre galerie complète avant/après (zoom HD, filtres par intervention) est présentée lors de votre consultation vidéo, en toute confidentialité.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
                <Link to="/avant-apres" className="btn btn-outline">Découvrir la galerie</Link>
                <Link to="/rendez-vous" className="btn btn-primary"><CalendarCheck size={15} /> Réserver ma consultation</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-champagne" style={{ padding: '80px 0' }}>
        <div className="container-ht" style={{ maxWidth: 840 }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 44 }}>
            <span className="section-tag">FAQ</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', margin: '10px 0 12px' }}>Questions fréquentes</h2>
            <p className="text-muted">Les réponses aux questions que vous vous posez le plus souvent.</p>
          </Reveal>
          <Reveal>
            <div className="card" style={{ padding: '8px 28px' }}>
              <FaqAccordion items={faqHome.slice(0, 8)} />
            </div>
          </Reveal>
          <Reveal style={{ textAlign: 'center', marginTop: 28 }}>
            <Link to="/faq" className="btn btn-outline" style={{ background: '#fff' }}>Voir les 100 questions <ArrowRight size={15} /></Link>
          </Reveal>
        </div>
      </section>

      {/* ===== BLOG ===== */}
      <section style={{ padding: '80px 0' }}>
        <div className="container-ht">
          <Reveal style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 52px" }}>
            <span className="script-accent">Guides & conseils</span><span className="section-tag">Blog</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', margin: '10px 0 12px' }}>Nos conseils et actualités</h2>
            <p className="text-muted">Guides honnêtes et complets, rédigés par notre équipe.</p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
            {articles.slice(0, 3).map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.08}>
                <Link to={`/blog/${a.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="card" style={{ padding: 26, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <span className="badge badge-bleu" style={{ alignSelf: 'flex-start', marginBottom: 14 }}>{a.category}</span>
                    <h3 style={{ fontSize: 17, marginBottom: 10, lineHeight: 1.4 }}>{a.title}</h3>
                    <p className="text-muted" style={{ fontSize: 14, flex: 1 }}>{a.excerpt}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 18, fontSize: 13 }} className="text-muted">
                      <span>{a.date}</span>
                      <span style={{ color: 'var(--ht-bleu)', fontWeight: 500 }}>{a.readTime} de lecture →</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ textAlign: 'center', marginTop: 32 }}>
            <Link to="/blog" className="btn btn-outline">Tous les articles <ArrowRight size={15} /></Link>
          </Reveal>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="container-ht">
          <Reveal>
            <div style={{
              background: 'var(--grad-night)', borderRadius: 'var(--radius-xl)',
              padding: 'clamp(40px, 6vw, 72px)', textAlign: 'center', color: '#fff', position: 'relative', overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: -60, right: -60, width: 220, height: 220, borderRadius: '50%', background: 'rgba(212,175,55,.22)' }} />
              <div style={{ position: 'absolute', bottom: -80, left: -60, width: 260, height: 260, borderRadius: '50%', background: 'rgba(59,130,246,.2)' }} />
              <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', color: '#fff', marginBottom: 14 }}>Prête à commencer votre transformation ?</h2>
              <p style={{ color: 'rgba(255,255,255,.85)', maxWidth: 520, margin: '0 auto 28px' }}>
                Recevez votre devis personnalisé gratuit sous 24h, sans engagement. Notre équipe vous répond dans votre langue.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
                <Link to="/devis" className="btn btn-white" style={{ padding: '14px 28px' }}>Demander mon devis gratuit <ArrowRight size={16} /></Link>
                <Link to="/rendez-vous" className="btn btn-ghost-light" style={{ padding: '14px 28px' }}><Video size={16} /> Rendez-vous vidéo</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
