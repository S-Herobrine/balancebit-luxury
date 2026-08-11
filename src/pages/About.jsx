import { Link } from 'react-router-dom';

const VALUES = [
  { title: 'Proven expertise', copy: 'Years delivering complex projects across industries \u2014 we\u2019ve seen where it breaks.' },
  { title: 'Client-first approach', copy: 'Your goals set the roadmap. We listen before we architect.' },
  { title: 'Full-stack capability', copy: 'Frontend to backend, cloud to security \u2014 one accountable team.' },
  { title: 'Agile delivery', copy: 'Fast iterations and transparent communication, on schedule.' },
  { title: 'Global reach', copy: 'Serving clients across the USA, UK, Canada, Australia, and Europe.' },
  { title: 'Long-term support', copy: 'We stay past launch \u2014 maintenance, updates, continuous care.' },
];

export default function About() {
  return (
    <>
      <section className="section container" style={{ paddingTop: 160 }}>
        <div className="eyebrow">Who we are</div>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 'clamp(34px, 5vw, 58px)',
            marginTop: 20,
            maxWidth: 780,
            lineHeight: 1.1,
          }}
        >
          A studio of engineers, designers, and strategists who treat your product like our own.
        </h1>
        <p style={{ marginTop: 26, fontSize: 17, color: 'var(--text-dim)', maxWidth: 620, lineHeight: 1.75 }}>
          BalanceBit Solutions works with startups building their first
          product and enterprises modernizing what already exists. Either
          way, the standard is the same: software that\u2019s built to be
          maintained, not just shipped.
        </p>
      </section>

      <section className="section container" style={{ paddingTop: 0 }}>
        <div className="about-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
          <div>
            <div className="eyebrow">Our approach</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 32, marginTop: 18 }}>
              Technical depth, without the jargon.
            </h2>
            <p style={{ marginTop: 20, color: 'var(--text-dim)', lineHeight: 1.75, fontSize: 15.5 }}>
              We combine technical expertise with clear communication. Every
              engagement starts with understanding your business before we
              propose a single line of architecture \u2014 and every deliverable
              is explained in terms you can act on, not just implement.
            </p>
          </div>
          <div className="glass-panel" style={{ padding: 36 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              {['100% client satisfaction', 'Agile development', 'Dedicated project manager', 'Post-launch support'].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ color: 'var(--brass)', fontFamily: 'var(--font-mono)' }}>✓</span>
                  <span style={{ fontSize: 15 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <div className="eyebrow">Why clients choose us</div>
          <h2>Not just a vendor \u2014 a partnership that lasts.</h2>
        </div>
        <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
          {VALUES.map((v) => (
            <div key={v.title} className="glass-panel" style={{ padding: 28 }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 19 }}>{v.title}</h3>
              <p style={{ marginTop: 10, fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.65 }}>{v.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <div
          className="glass-panel"
          style={{ padding: '56px', textAlign: 'center' }}
        >
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 30 }}>
            Want to work with us?
          </h2>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: 26 }}>
            Get in touch
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .about-split { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
