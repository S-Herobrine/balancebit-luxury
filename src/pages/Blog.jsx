import { Link } from 'react-router-dom';
import { POSTS } from '../data/posts';

export default function Blog() {
  return (
    <>
      <section className="section container" style={{ paddingTop: 160, paddingBottom: 72 }}>
        <div className="eyebrow">Latest insights</div>
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
          Writing on strategy, engineering, and what actually works.
        </h1>
      </section>

      <section className="container" style={{ paddingBottom: 128 }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {POSTS.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="post-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '140px 1fr auto',
                gap: 28,
                alignItems: 'center',
                padding: '32px 0',
                borderTop: '1px solid var(--panel-line)',
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--text-faint)' }}>
                {post.date}
              </div>
              <div>
                <span className="tag" style={{ marginBottom: 10, display: 'inline-block' }}>{post.tag}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 21, marginTop: 8 }}>{post.title}</h3>
                <p style={{ marginTop: 8, fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.6, maxWidth: 560 }}>{post.excerpt}</p>
              </div>
              <div style={{ fontSize: 13.5, color: 'var(--brass)', whiteSpace: 'nowrap' }}>Read →</div>
            </Link>
          ))}
          <div style={{ borderTop: '1px solid var(--panel-line)' }} />
        </div>
      </section>

      <style>{`
        .post-row:hover h3 { color: var(--brass); }
        @media (max-width: 780px) {
          .post-row { grid-template-columns: 1fr !important; gap: 10px !important; }
        }
      `}</style>
    </>
  );
}
