import { Link } from 'react-router-dom';
import NetworkField from '../components/NetworkField';
import { PROJECTS } from '../data/projects';

const FEATURED = PROJECTS.slice(0, 3);

const SERVICES = [
  { n: '01', title: 'Web Development', copy: 'Corporate sites, e-commerce, and custom platforms built for speed and scale.' },
  { n: '02', title: 'Mobile Apps', copy: 'Native and cross-platform apps for iOS and Android that feel considered.' },
  { n: '03', title: 'Cloud & DevOps', copy: 'AWS, Azure, and GCP infrastructure with CI/CD pipelines that don\u2019t break.' },
  { n: '04', title: 'AI Solutions', copy: 'Applied automation and intelligent tooling built around real workflows.' },
  { n: '05', title: 'Cybersecurity', copy: 'Audits, penetration testing, and hardening for systems that can\u2019t fail.' },
  { n: '06', title: 'Digital Marketing', copy: 'SEO and growth strategy grounded in data, not guesswork.' },
];

const PROCESS = [
  { n: '01', title: 'Discovery', copy: 'We study your business before we open an editor \u2014 goals, constraints, and what success looks like.' },
  { n: '02', title: 'Strategy & Design', copy: 'A system takes shape: architecture, interface, and a plan we can both point to.' },
  { n: '03', title: 'Build', copy: 'Agile sprints, visible progress, and a partner who answers before you have to ask.' },
  { n: '04', title: 'Launch & Support', copy: 'We ship, we stay \u2014 monitoring, iterating, and maintaining what we built.' },
];

const STATS = [
  { value: '120+', label: 'Projects delivered' },
  { value: '98%', label: 'Client retention' },
  { value: '5 yrs', label: 'In operation' },
  { value: '4', label: 'Continents served' },
];

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          paddingTop: 76,
        }}
      >
        <NetworkField />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(91,110,245,0.10), transparent 60%)',
            zIndex: 0,
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div className="eyebrow">Digital transformation studio</div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(40px, 6.4vw, 84px)',
              lineHeight: 1.04,
              letterSpacing: '-0.015em',
              marginTop: 22,
              maxWidth: 900,
            }}
          >
            We build the systems<br />
            serious companies <span style={{ fontStyle: 'italic', color: 'var(--brass)' }}>run on.</span>
          </h1>

          <p
            style={{
              marginTop: 28,
              fontSize: 18,
              color: 'var(--text-dim)',
              maxWidth: 540,
              lineHeight: 1.7,
            }}
          >
            Web, mobile, cloud, and AI \u2014 engineered with the same care as
            the businesses we build them for. From first architecture
            diagram to production support.
          </p>

          <div style={{ display: 'flex', gap: 16, marginTop: 40, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">
              Start a project →
            </Link>
            <Link to="/services" className="btn btn-ghost">
              View services
            </Link>
          </div>

          {/* status panel signature element */}
          <div
            className="glass-panel status-panel"
            style={{
              marginTop: 72,
              maxWidth: 640,
              padding: '22px 26px',
              display: 'flex',
              alignItems: 'center',
              gap: 28,
              flexWrap: 'wrap',
            }}
          >
            <StatusDot label="Systems operational" />
            <Divider />
            <MonoStat label="Uptime" value="99.98%" />
            <Divider />
            <MonoStat label="Avg. response" value="< 4 hrs" />
            <Divider />
            <MonoStat label="Active builds" value="14" />
          </div>
        </div>
      </section>

      {/* ---------- STATS STRIP ---------- */}
      <section style={{ borderTop: '1px solid var(--panel-line)', borderBottom: '1px solid var(--panel-line)' }}>
        <div
          className="container stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            padding: '48px 32px',
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                textAlign: 'center',
                borderLeft: i === 0 ? 'none' : '1px solid var(--panel-line)',
              }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, color: 'var(--brass)' }}>
                {s.value}
              </div>
              <div style={{ fontSize: 13, color: 'var(--text-dim)', marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="section container">
        <div className="section-head">
          <div className="eyebrow">What we do</div>
          <h2>Comprehensive digital services, one accountable team.</h2>
          <p>From first line of code to production monitoring \u2014 no handoffs, no gaps in ownership.</p>
        </div>

        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--panel-line)', border: '1px solid var(--panel-line)', borderRadius: 16, overflow: 'hidden' }}>
          {SERVICES.map((s) => (
            <div
              key={s.n}
              className="service-card"
              style={{
                background: 'var(--panel)',
                padding: '38px 32px',
                transition: 'background 0.3s ease',
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--brass-dim)' }}>{s.n}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 22, marginTop: 18 }}>{s.title}</h3>
              <p style={{ marginTop: 12, fontSize: 14.5, color: 'var(--text-dim)', lineHeight: 1.65 }}>{s.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- PROCESS ---------- */}
      <section className="section container">
        <div className="section-head">
          <div className="eyebrow">How we work</div>
          <h2>A process built for accountability.</h2>
          <p>Four stages, always in this order \u2014 because skipping one is where projects go wrong.</p>
        </div>

        <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
          {PROCESS.map((p) => (
            <div key={p.n}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 30,
                  color: 'var(--signal)',
                  opacity: 0.85,
                }}
              >
                {p.n}
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 20, marginTop: 14 }}>{p.title}</h3>
              <p style={{ marginTop: 10, fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.65 }}>{p.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- FEATURED WORK ---------- */}
      <section className="section container">
        <div className="section-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div className="eyebrow">Our work</div>
            <h2>Featured projects</h2>
          </div>
          <Link to="/portfolio" className="btn btn-ghost">View all projects</Link>
        </div>

        <div className="featured-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {FEATURED.map((p) => (
            <Link key={p.id} to={`/portfolio/${p.id}`} className="glass-panel project-card" style={{ padding: 28, display: 'block', transition: 'border-color 0.3s ease, transform 0.3s ease' }}>
              <span className="tag">{p.category}</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 21, marginTop: 16 }}>{p.title}</h3>
              <p style={{ marginTop: 10, fontSize: 13.5, color: 'var(--text-dim)', lineHeight: 1.6 }}>{p.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section container">
        <div
          className="glass-panel"
          style={{
            padding: '72px 56px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(201,168,118,0.10), transparent 70%)',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(28px, 4vw, 42px)' }}>
              Ready to build something that lasts?
            </h2>
            <p style={{ marginTop: 16, color: 'var(--text-dim)', maxWidth: 460, marginInline: 'auto' }}>
              Tell us what you\u2019re working on. We\u2019ll reply within one business day with next steps.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: 32 }}>
              Get a free consultation
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .service-card:hover { background: #171922 !important; }
        .project-card:hover { border-color: var(--brass-dim) !important; transform: translateY(-3px); }
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .process-grid { grid-template-columns: 1fr 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; row-gap: 32px; }
          .featured-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .process-grid { grid-template-columns: 1fr !important; }
          .status-panel { flex-direction: column; align-items: flex-start !important; gap: 16px !important; }
        }
      `}</style>
    </>
  );
}

function StatusDot({ label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#6de08a',
          boxShadow: '0 0 10px #6de08a',
        }}
      />
      <span style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>{label}</span>
    </div>
  );
}

function MonoStat({ label, value }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 15, color: 'var(--text)' }}>{value}</div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-faint)', marginTop: 2 }}>{label}</div>
    </div>
  );
}

function Divider() {
  return <div style={{ width: 1, height: 28, background: 'var(--panel-line)' }} />;
}
