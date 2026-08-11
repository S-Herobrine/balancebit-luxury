import { useState } from 'react';

// NOTE FOR DEV: This is a frontend-only auth UI. Both forms below currently
// call `handleSubmit`, which just simulates a request and shows a message.
// To make this real:
//   1. Point the fetch/axios call in handleSubmit at your auth API
//      (e.g. POST /api/auth/login or /api/auth/signup).
//   2. On success, store the returned session/token and redirect the user
//      into your actual client dashboard route.
//   3. Swap PLACEHOLDER_DASHBOARD_URL below for that real route.
const PLACEHOLDER_DASHBOARD_URL = '#'; // TODO: replace with real client portal URL

export default function ClientHub() {
  const [mode, setMode] = useState('login'); // 'login' | 'signup'
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'done'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    // Simulated request — replace with a real API call.
    setTimeout(() => setStatus('done'), 700);
  };

  return (
    <section className="section container" style={{ paddingTop: 160, display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: 440 }}>
        <div className="eyebrow" style={{ justifyContent: 'center' }}>Client Hub</div>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 32,
            marginTop: 18,
            textAlign: 'center',
          }}
        >
          {mode === 'login' ? 'Welcome back' : 'Create your account'}
        </h1>
        <p style={{ marginTop: 10, fontSize: 14, color: 'var(--text-dim)', textAlign: 'center' }}>
          {mode === 'login'
            ? 'Sign in to view project status, files, and invoices.'
            : 'Set up access to your project dashboard.'}
        </p>

        <div className="glass-panel" style={{ padding: 36, marginTop: 32 }}>
          {status === 'done' ? (
            <div style={{ textAlign: 'center', padding: '24px 8px' }}>
              <div style={{ fontSize: 26 }}>✓</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 20, marginTop: 14 }}>
                {mode === 'login' ? 'Signed in' : 'Account created'}
              </h2>
              <p style={{ marginTop: 10, fontSize: 13.5, color: 'var(--text-dim)', lineHeight: 1.6 }}>
                This demo doesn\u2019t have a live dashboard connected yet \u2014
                once the backend is wired up, this button will take you
                straight there.
              </p>
              <a
                href={PLACEHOLDER_DASHBOARD_URL}
                className="btn btn-primary"
                style={{ marginTop: 22, justifyContent: 'center', width: '100%' }}
              >
                Go to dashboard →
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {mode === 'signup' && <Field label="Full name" type="text" required />}
              <Field label="Email" type="email" required />
              <Field label="Password" type="password" required />
              {mode === 'signup' && <Field label="Confirm password" type="password" required />}

              {mode === 'login' && (
                <div style={{ textAlign: 'right', marginTop: -8 }}>
                  <a href="#" style={{ fontSize: 12.5, color: 'var(--text-dim)' }}>Forgot password?</a>
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'loading'}
                style={{ justifyContent: 'center', marginTop: 6, opacity: status === 'loading' ? 0.7 : 1 }}
              >
                {status === 'loading' ? 'Please wait…' : mode === 'login' ? 'Sign in' : 'Create account'}
              </button>
            </form>
          )}
        </div>

        {status !== 'done' && (
          <p style={{ textAlign: 'center', marginTop: 22, fontSize: 13.5, color: 'var(--text-dim)' }}>
            {mode === 'login' ? 'New client?' : 'Already have an account?'}{' '}
            <button
              onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
              style={{ background: 'none', border: 'none', color: 'var(--brass)', fontSize: 13.5, padding: 0 }}
            >
              {mode === 'login' ? 'Create an account' : 'Sign in'}
            </button>
          </p>
        )}
      </div>
    </section>
  );
}

const labelStyle = {
  display: 'block',
  fontSize: 12,
  fontFamily: 'var(--font-mono)',
  letterSpacing: '0.04em',
  color: 'var(--text-dim)',
  marginBottom: 8,
};

const fieldStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid var(--panel-line)',
  borderRadius: 8,
  padding: '12px 14px',
  color: 'var(--text)',
  fontSize: 14.5,
  outline: 'none',
};

function Field({ label, type, required }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input type={type} required={required} style={fieldStyle} />
    </div>
  );
}
