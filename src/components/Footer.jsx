import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--panel-line)',
        padding: '64px 0 32px',
      }}
    >
      <div
        className="container footer-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr',
          gap: 48,
          paddingBottom: 48,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 22,
              marginBottom: 16,
            }}
          >
            BalanceBit
          </div>
          <p style={{ color: 'var(--text-dim)', fontSize: 14, maxWidth: 320, lineHeight: 1.7 }}>
            A digital transformation studio building web, mobile, cloud, and
            AI systems for companies that expect the work to hold up.
          </p>
        </div>

        <div>
          <div className="eyebrow" style={{ marginBottom: 18 }}>Studio</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Link to="/about" style={{ color: 'var(--text-dim)', fontSize: 14 }}>About</Link>
            <Link to="/services" style={{ color: 'var(--text-dim)', fontSize: 14 }}>Services</Link>
            <Link to="/contact" style={{ color: 'var(--text-dim)', fontSize: 14 }}>Contact</Link>
          </div>
        </div>

        <div>
          <div className="eyebrow" style={{ marginBottom: 18 }}>Contact</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14, color: 'var(--text-dim)' }}>
            <a href="mailto:support@balancebitsolutions.com">support@balancebitsolutions.com</a>
            <a href="https://wa.me/923187143324">+92 318 7143324</a>
            <span>Lahore &amp; Gujranwala, Pakistan</span>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 28,
          borderTop: '1px solid var(--panel-line)',
          fontSize: 12,
          color: 'var(--text-faint)',
          fontFamily: 'var(--font-mono)',
        }}
      >
        <span>© {new Date().getFullYear()} BalanceBit Solutions</span>
        <span>Built for those who notice the details</span>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}
