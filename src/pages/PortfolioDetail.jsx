import { Link, useParams, Navigate } from 'react-router-dom';
import { PROJECTS } from '../data/projects';

export default function PortfolioDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) return <Navigate to="/portfolio" replace />;

  const idx = PROJECTS.findIndex((p) => p.id === id);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <section className="section container" style={{ paddingTop: 160 }}>
      <Link to="/portfolio" style={{ fontSize: 13.5, color: 'var(--text-dim)' }}>
        ← All projects
      </Link>

      <div style={{ marginTop: 28 }}>
        <span className="tag">{project.category}</span>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 'clamp(32px, 5vw, 52px)',
            marginTop: 20,
            maxWidth: 700,
            lineHeight: 1.1,
          }}
        >
          {project.title}
        </h1>
        <p style={{ marginTop: 20, fontSize: 17, color: 'var(--text-dim)', maxWidth: 620, lineHeight: 1.75 }}>
          {project.summary}
        </p>
      </div>

      <div className="detail-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48, marginTop: 56 }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 22 }}>The project</h2>
          <p style={{ marginTop: 16, fontSize: 15.5, color: 'var(--text-dim)', lineHeight: 1.8 }}>
            {project.detail}
          </p>
        </div>

        <div className="glass-panel" style={{ padding: 28, alignSelf: 'start' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Year
          </div>
          <div style={{ fontSize: 15, marginTop: 6 }}>{project.year}</div>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: 22 }}>
            Stack
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
            {project.stack.map((s) => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 72, paddingTop: 40, borderTop: '1px solid var(--panel-line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-faint)', textTransform: 'uppercase' }}>Next project</div>
          <Link to={`/portfolio/${next.id}`} style={{ fontFamily: 'var(--font-display)', fontSize: 24, marginTop: 6, display: 'block' }}>
            {next.title} →
          </Link>
        </div>
        <Link to="/contact" className="btn btn-primary">Start something similar</Link>
      </div>

      <style>{`
        @media (max-width: 780px) {
          .detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
