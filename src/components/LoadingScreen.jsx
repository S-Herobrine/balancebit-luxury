import { useEffect, useState } from 'react';

export default function LoadingScreen({ onDone }) {
  const [exiting, setExiting] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), 1100);
    const doneTimer = setTimeout(() => {
      setHidden(true);
      onDone?.();
    }, 1650);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  if (hidden) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#08090c',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: exiting ? 0 : 1,
        transition: 'opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: exiting ? 'none' : 'auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 8,
          fontFamily: 'var(--font-display)',
          fontSize: 30,
          letterSpacing: '-0.01em',
          transform: exiting ? 'scale(0.97)' : 'scale(1)',
          transition: 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        BalanceBit
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: '#c9a876',
            boxShadow: '0 0 12px #c9a876',
            display: 'inline-block',
            animation: 'bb-pulse 1.1s ease-in-out infinite',
          }}
        />
      </div>

      <div
        style={{
          marginTop: 28,
          width: 160,
          height: 2,
          background: 'rgba(255,255,255,0.08)',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: '40%',
            background: 'linear-gradient(90deg, transparent, #c9a876, transparent)',
            animation: 'bb-sweep 1.1s ease-in-out infinite',
          }}
        />
      </div>

      <style>{`
        @keyframes bb-pulse {
          0%, 100% { opacity: 0.4; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes bb-sweep {
          0% { transform: translateX(-250%); }
          100% { transform: translateX(350%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="bb-pulse"], [style*="bb-sweep"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
