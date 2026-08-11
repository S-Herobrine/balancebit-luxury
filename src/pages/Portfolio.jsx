import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';

export default function Portfolio() {
  return (
    <>
      <section className="section container" style={{ paddingTop: 160, paddingBottom: 72 }}>
        <div className="eyebrow">Our work</div>
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
          A selection of what we\u2019ve built.
        </h1>
        <p style={{ marginTop: 24, fontSize: 17, color: 'var(--text-dim)', maxWidth: 560, lineHeight: 1.75 }}>
          Every project here shipped to production and stayed there \u2014 that\u2019s
          the bar we hold ourselves to.
        </p>
      </section>

      <section className="container" style={{ paddingBottom: 128 }}>
        <div className="portfolio-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {PROJECTS.map((p) => (
            <Link
              key={p.id}
              to={`/portfolio/${p.id}`}
              className="glass-panel project-card"
              style={{ padding: 32, display: 'block', transition: 'border-color 0.3s ease, transform 0.3s ease' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span className="tag">{p.category}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-faint)' }}>{p.year}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 26, marginTop: 20 }}>{p.title}</h3>
              <p style={{ marginTop: 12, fontSize: 14.5, color: 'var(--text-dim)', lineHeight: 1.65 }}>{p.summary}</p>
              <div style={{ marginTop: 22, fontSize: 13.5, color: 'var(--brass)', display: 'flex', alignItems: 'center', gap: 6 }}>
                View project →
              </div>
            </Link>
          ))}
        </div>
      </section>

      <style>{`
        .project-card:hover { border-color: var(--brass-dim) !important; transform: translateY(-3px); }
        @media (max-width: 780px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
