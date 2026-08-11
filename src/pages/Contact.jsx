import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section container" style={{ paddingTop: 160 }}>
      <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
        <div>
          <div className="eyebrow">Get in touch</div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(32px, 4.5vw, 50px)',
              marginTop: 20,
              lineHeight: 1.12,
            }}
          >
            Tell us what you\u2019re building.
          </h1>
          <p style={{ marginTop: 22, fontSize: 16, color: 'var(--text-dim)', lineHeight: 1.75, maxWidth: 440 }}>
            We reply within one business day with next steps \u2014 no auto-generated
            proposal, just a real answer from someone who read what you sent.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 48 }}>
            <ContactLine label="Email" value="support@balancebitsolutions.com" href="mailto:support@balancebitsolutions.com" />
            <ContactLine label="WhatsApp" value="+92 318 7143324" href="https://wa.me/923187143324" />
            <ContactLine label="Offices" value="Lahore & Gujranwala, Pakistan" />
            <ContactLine label="Hours" value="Mon\u2013Fri, 9:00 AM\u20136:00 PM EST" />
          </div>
        </div>

        <div className="glass-panel" style={{ padding: 40 }}>
          {submitted ? (
            <div style={{ padding: '40px 8px', textAlign: 'center' }}>
              <div style={{ fontSize: 28 }}>✓</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 24, marginTop: 16 }}>
                Message sent.
              </h2>
              <p style={{ marginTop: 10, color: 'var(--text-dim)', fontSize: 14 }}>
                We\u2019ll be in touch within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <Field label="Name" type="text" required />
              <Field label="Email" type="email" required />
              <Field label="Company" type="text" />
              <div>
                <label style={labelStyle}>Project details</label>
                <textarea
                  required
                  rows={5}
                  style={{ ...fieldStyle, resize: 'vertical', fontFamily: 'var(--font-body)' }}
                  placeholder="What are you looking to build?"
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center', marginTop: 8 }}>
                Send message
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
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

function ContactLine({ label, value, href }) {
  const content = (
    <div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-faint)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
        {label}
      </div>
      <div style={{ fontSize: 15.5, marginTop: 4 }}>{value}</div>
    </div>
  );
  return href ? <a href={href} style={{ display: 'block' }}>{content}</a> : content;
}
