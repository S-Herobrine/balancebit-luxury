import { Link } from 'react-router-dom';

const OPENINGS = [
  { role: 'Senior Frontend Engineer', type: 'Full-time · Remote', team: 'Engineering' },
  { role: 'Cloud & DevOps Engineer', type: 'Full-time · Remote', team: 'Infrastructure' },
  { role: 'Product Designer', type: 'Contract · Remote', team: 'Design' },
  { role: 'AI/ML Engineer', type: 'Full-time · Remote', team: 'Engineering' },
  { role: 'Technical Project Manager', type: 'Full-time · Hybrid', team: 'Delivery' },
];

const PERKS = [
  { title: 'Remote-first', copy: 'Work from anywhere \u2014 our team already spans multiple countries.' },
  { title: 'Real ownership', copy: 'You\u2019ll ship things clients actually use, not internal tooling nobody sees.' },
  { title: 'Growth budget', copy: 'Courses, conferences, and certifications, covered.' },
  { title: 'Flexible hours', copy: 'We care about the work getting done well, not when you\u2019re online.' },
];

export default function Careers() {
  return (
    <>
      <section className="section container" style={{ paddingTop: 160, paddingBottom: 72 }}>
        <div className="eyebrow">Join the team</div>
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
          Build things you\u2019d be proud to put in your own portfolio.
        </h1>
        <p style={{ marginTop: 24, fontSize: 17, color: 'var(--text-dim)', maxWidth: 560, lineHeight: 1.75 }}>
          We\u2019re a small, distributed team that cares more about the quality
          of the work than the size of the team doing it.
        </p>
      </section>

      <section className="container" style={{ paddingBottom: 96 }}>
        <div className="perks-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {PERKS.map((p) => (
            <div key={p.title} className="glass-panel" style={{ padding: 24 }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 17 }}>{p.title}</h3>
              <p style={{ marginTop: 8, fontSize: 13.5, color: 'var(--text-dim)', lineHeight: 1.6 }}>{p.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <div className="eyebrow">Open roles</div>
          <h2>Current openings</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {OPENINGS.map((o) => (
            <div
              key={o.role}
              className="role-row"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '26px 0',
                borderTop: '1px solid var(--panel-line)',
                flexWrap: 'wrap',
                gap: 12,
              }}
            >
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 19 }}>{o.role}</h3>
                <div style={{ display: 'flex', gap: 10, marginTop: 8, alignItems: 'center' }}>
                  <span className="tag">{o.team}</span>
                  <span style={{ fontSize: 13, color: 'var(--text-dim)' }}>{o.type}</span>
                </div>
              </div>
              <Link to="/contact" className="btn btn-ghost" style={{ padding: '10px 20px', fontSize: 13.5 }}>
                Apply
              </Link>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--panel-line)' }} />
        </div>

        <p style={{ marginTop: 32, fontSize: 14, color: 'var(--text-dim)' }}>
          Don\u2019t see the right fit? <Link to="/contact" style={{ color: 'var(--brass)' }}>Reach out anyway</Link> \u2014 we\u2019re always open to meeting good people.
        </p>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .perks-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .perks-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
