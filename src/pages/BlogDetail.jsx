import { Link, useParams, Navigate } from 'react-router-dom';
import { POSTS } from '../data/posts';

export default function BlogDetail() {
  const { id } = useParams();
  const post = POSTS.find((p) => p.id === id);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <section className="section container" style={{ paddingTop: 160, maxWidth: 760, marginInline: 'auto' }}>
      <Link to="/blog" style={{ fontSize: 13.5, color: 'var(--text-dim)' }}>
        ← All posts
      </Link>

      <div style={{ marginTop: 28 }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <span className="tag">{post.tag}</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--text-faint)' }}>{post.date}</span>
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 'clamp(30px, 4.5vw, 44px)',
            marginTop: 20,
            lineHeight: 1.15,
          }}
        >
          {post.title}
        </h1>
      </div>

      <div style={{ marginTop: 44, display: 'flex', flexDirection: 'column', gap: 22 }}>
        {post.body.map((para, i) => (
          <p key={i} style={{ fontSize: 16.5, color: 'var(--text-dim)', lineHeight: 1.85 }}>
            {para}
          </p>
        ))}
      </div>

      <div style={{ marginTop: 64, paddingTop: 32, borderTop: '1px solid var(--panel-line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
        <span style={{ fontSize: 14, color: 'var(--text-dim)' }}>Have a project in mind?</span>
        <Link to="/contact" className="btn btn-primary">Get in touch</Link>
      </div>
    </section>
  );
}
