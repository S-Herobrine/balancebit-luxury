import { Link } from 'react-router-dom';
import { GIGS } from '../data/misc';

export default function Gigs() {
  return (
    <>
      <section className="section container" style={{ paddingTop: 160, paddingBottom: 72 }}>
        <div className="eyebrow">Fixed-scope packages</div>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 'clamp(34px, 5vw, 56px)',
            marginTop: 20,
            maxWidth: 700,
            lineHeight: 1.1,
          }}
        >
          Gigs \u2014 for when you know exactly what you need.
        </h1>
        <p style={{ marginTop: 24, fontSize: 17, color: 'var(--text-dim)', maxWidth: 560, lineHeight: 1.75 }}>
          Clear scope, clear price, clear timeline. No discovery calls
          required \u2014 pick a package and we start.
        </p>
      </section>

      <section className="container" style={{ paddingBottom: 128 }}>
        <div className="gigs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {GIGS.map((g) => (
            <div key={g.title} className="glass-panel gig-card" style={{ padding: 32, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 22 }}>{g.title}</h3>
              <p style={{ marginTop: 12, fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.65, flexGrow: 1 }}>{g.copy}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--panel-line)' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 15, color: 'var(--brass)' }}>{g.price}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-faint)', marginTop: 2 }}>{g.turnaround}</div>
                </div>
                <Link to="/contact" className="btn btn-ghost" style={{ padding: '9px 18px', fontSize: 13 }}>
                  Inquire
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .gig-card:hover { border-color: var(--brass-dim) !important; }
        @media (max-width: 900px) {
          .gigs-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .gigs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
