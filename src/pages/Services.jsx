import { Link } from 'react-router-dom';

const SERVICES = [
  {
    n: '01',
    title: 'Web Development',
    copy: 'Corporate websites, e-commerce, portals, and custom web applications built with modern frameworks and clean architecture.',
    stack: ['React', 'Next.js', 'Node.js', 'PHP/Laravel'],
  },
  {
    n: '02',
    title: 'Mobile Apps',
    copy: 'Native and cross-platform mobile applications for iOS and Android, built with Flutter and React Native.',
    stack: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
  },
  {
    n: '03',
    title: 'Cloud & DevOps',
    copy: 'Cloud infrastructure, containerization, and CI/CD pipelines across AWS, Azure, and Google Cloud.',
    stack: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    n: '04',
    title: 'Cybersecurity',
    copy: 'Security audits, penetration testing, firewall configuration, and disaster recovery planning.',
    stack: ['Pen testing', 'SSL/TLS', 'SOC2 prep', 'Audits'],
  },
  {
    n: '05',
    title: 'AI Solutions',
    copy: 'AI chatbots, workflow automation, and custom applications built around your real business processes.',
    stack: ['LLM integration', 'Automation', 'Python', 'RAG systems'],
  },
  {
    n: '06',
    title: 'Digital Marketing',
    copy: 'SEO, paid acquisition, and content strategy grounded in data \u2014 not vanity metrics.',
    stack: ['SEO', 'PPC', 'Analytics', 'Content strategy'],
  },
  {
    n: '07',
    title: 'Creative Design',
    copy: 'Brand identity, UI/UX, and motion design that gives your product a point of view.',
    stack: ['Brand', 'UI/UX', 'Motion', 'Design systems'],
  },
  {
    n: '08',
    title: 'Business Support',
    copy: 'Domain, hosting, ongoing maintenance, and performance optimization after launch.',
    stack: ['Hosting', 'Maintenance', 'Performance', 'Support'],
  },
];

export default function Services() {
  return (
    <>
      <section className="section container" style={{ paddingTop: 160, paddingBottom: 80 }}>
        <div className="eyebrow">What we offer</div>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 'clamp(34px, 5vw, 58px)',
            marginTop: 20,
            maxWidth: 720,
            lineHeight: 1.1,
          }}
        >
          End-to-end services, engineered under one roof.
        </h1>
        <p style={{ marginTop: 26, fontSize: 17, color: 'var(--text-dim)', maxWidth: 580, lineHeight: 1.75 }}>
          From the first architecture decision to the systems that keep your
          product running \u2014 every service below is delivered by the same
          accountable team.
        </p>
      </section>

      <section className="container" style={{ paddingBottom: 128 }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {SERVICES.map((s) => (
            <div
              key={s.n}
              className="service-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr 1fr',
                gap: 32,
                padding: '38px 0',
                borderTop: '1px solid var(--panel-line)',
                alignItems: 'center',
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--brass-dim)' }}>{s.n}</div>
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 26 }}>{s.title}</h2>
                <p style={{ marginTop: 10, color: 'var(--text-dim)', fontSize: 14.5, lineHeight: 1.65, maxWidth: 440 }}>
                  {s.copy}
                </p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'flex-start' }}>
                {s.stack.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--panel-line)' }} />
        </div>
      </section>

      <section className="section container" style={{ paddingTop: 0 }}>
        <div className="glass-panel" style={{ padding: '56px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 30 }}>
            Not sure which service fits?
          </h2>
          <p style={{ marginTop: 14, color: 'var(--text-dim)' }}>Tell us the problem \u2014 we\u2019ll recommend the right path.</p>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: 28 }}>
            Talk to us
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 780px) {
          .service-row { grid-template-columns: 1fr !important; gap: 12px !important; }
        }
      `}</style>
    </>
  );
}
