import { Link } from 'react-router-dom';
import { INDUSTRIES } from '../data/misc';

export default function Industries() {
  return (
    <>
      <section className="section container" style={{ paddingTop: 160, paddingBottom: 72 }}>
        <div className="eyebrow">Where we work</div>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 'clamp(34px, 5vw, 56px)',
            marginTop: 20,
            maxWidth: 720,
            lineHeight: 1.1,
          }}
        >
          Deep domain expertise, not generic templates.
        </h1>
        <p style={{ marginTop: 24, fontSize: 17, color: 'var(--text-dim)', maxWidth: 560, lineHeight: 1.75 }}>
          Every industry has its own compliance rules, user expectations, and
          failure modes. We\u2019ve built for enough of them to know the
          difference before it costs you a rebuild.
        </p>
      </section>

      <section className="container" style={{ paddingBottom: 128 }}>
        <div className="industries-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, background: 'var(--panel-line)', border: '1px solid var(--panel-line)', borderRadius: 16, overflow: 'hidden' }}>
          {INDUSTRIES.map((ind) => (
            <div key={ind.name} className="industry-card" style={{ background: 'var(--panel)', padding: '34px 32px', transition: 'background 0.3s ease' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 21 }}>{ind.name}</h3>
              <p style={{ marginTop: 10, fontSize: 14.5, color: 'var(--text-dim)', lineHeight: 1.65 }}>{ind.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container" style={{ paddingTop: 0 }}>
        <div className="glass-panel" style={{ padding: '56px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 28 }}>
            Don\u2019t see your industry?
          </h2>
          <p style={{ marginTop: 12, color: 'var(--text-dim)' }}>We\u2019ve likely built something adjacent \u2014 tell us the problem.</p>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: 24 }}>
            Talk to us
          </Link>
        </div>
      </section>

      <style>{`
        .industry-card:hover { background: #171922 !important; }
        @media (max-width: 640px) {
          .industries-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
