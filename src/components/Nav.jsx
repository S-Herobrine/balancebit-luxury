import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/gigs', label: 'Gigs' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/blog', label: 'Blog' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.4s ease, border-color 0.4s ease',
        background: scrolled ? 'rgba(8,9,12,0.78)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.08)' : 'transparent'}`,
      }}
    >
      <nav
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 72,
        }}
      >
        <Link
          to="/"
          onClick={() => setOpen(false)}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 20,
            letterSpacing: '-0.01em',
            display: 'flex',
            alignItems: 'baseline',
            gap: 6,
            flexShrink: 0,
          }}
        >
          BalanceBit
          <span style={{ color: 'var(--brass)', fontSize: 11, fontFamily: 'var(--font-mono)' }}>
            ●
          </span>
        </Link>

        <div
          className="nav-links"
          style={{ display: 'flex', alignItems: 'center', gap: 24 }}
        >
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className="nav-link"
              style={({ isActive }) => ({
                fontSize: 13.5,
                whiteSpace: 'nowrap',
                color: isActive ? 'var(--brass)' : 'var(--text-dim)',
                transition: 'color 0.25s ease',
              })}
            >
              {l.label}
            </NavLink>
          ))}

          <div style={{ width: 1, height: 20, background: 'var(--panel-line)' }} />

          <Link
            to="/client-hub"
            style={{ fontSize: 13.5, color: 'var(--text-dim)', whiteSpace: 'nowrap' }}
          >
            Client Hub
          </Link>

          <Link to="/contact" className="btn btn-primary" style={{ padding: '9px 20px', fontSize: 13.5 }}>
            Start a project
          </Link>
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          style={{
            display: 'none',
            background: 'transparent',
            border: '1px solid var(--panel-line)',
            borderRadius: 8,
            width: 40,
            height: 40,
            color: 'var(--text)',
            fontSize: 18,
            flexShrink: 0,
          }}
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <div
          className="mobile-menu"
          style={{
            background: 'rgba(8,9,12,0.98)',
            borderTop: '1px solid var(--panel-line)',
            padding: '20px 20px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
            maxHeight: 'calc(100vh - 72px)',
            overflowY: 'auto',
          }}
        >
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              style={{ fontSize: 16, color: 'var(--text)' }}
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/client-hub"
            onClick={() => setOpen(false)}
            style={{ fontSize: 16, color: 'var(--text)' }}
          >
            Client Hub
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary"
            style={{ justifyContent: 'center', marginTop: 8 }}
          >
            Start a project
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 1080px) {
          .nav-links { display: none !important; }
          .nav-toggle { display: flex !important; align-items: center; justify-content: center; }
        }
      `}</style>
    </header>
  );
}
