import { useEffect, useRef, useState } from 'react';

const stats = [
  { num: 25, suffix: '+', label: 'Years in Public Service', hindi: 'सार्वजनिक सेवा में वर्ष', img: '/assets/rakesh-sachan4.jpg' },
  { num: 200, suffix: '+', label: 'Development Projects', hindi: 'विकास परियोजनाएं', img: '/assets/rakesh-sachan7.jpg' },
  { num: 50, suffix: 'L+', label: 'Citizens Benefited', hindi: 'लाभान्वित नागरिक', img: '/assets/rakesh-sachan10.jpg' },
  { num: 150, suffix: '+', label: 'Public Initiatives', hindi: 'जन पहलें', img: '/assets/rakesh-sachan11.jpg' },
];

function Counter({ target, suffix, active }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (2000 / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);
  return <>{count}{suffix}</>;
}

export default function Stats() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="stats" ref={ref} style={{ background: 'linear-gradient(135deg,#121212 0%,#1a1a1a 100%)', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg,#F57C00,#FFB300,#F57C00)' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 10% 50%, rgba(245,124,0,0.06) 0%, transparent 50%), radial-gradient(circle at 90% 50%, rgba(255,179,0,0.06) 0%, transparent 50%)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }} className="fade-up">
          <div style={{ fontFamily: 'var(--font-english)', fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#FFB300', marginBottom: 12 }}>— Numbers That Matter —</div>
          <h2 style={{ fontFamily: 'var(--font-hindi)', fontSize: 'clamp(24px,4vw,40px)', fontWeight: 800, color: 'white', lineHeight: 1.2 }}>सेवा का हिसाब</h2>
          <p style={{ fontFamily: 'var(--font-english)', color: 'rgba(255,255,255,0.5)', marginTop: 10, fontSize: 15 }}>A legacy measured in lives transformed</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 24 }}>
          {stats.map((s, i) => (
            <div key={i} className="fade-up" style={{ transitionDelay: `${i*0.1}s` }}>
              <div style={{
                borderRadius: 20, overflow: 'hidden', position: 'relative',
                border: '1px solid rgba(245,124,0,0.2)',
                transition: 'all 0.3s', cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,124,0,0.6)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,124,0,0.2)'; e.currentTarget.style.transform = 'none'; }}
              >
                {/* Splash image top */}
                <div style={{ height: 130, overflow: 'hidden', position: 'relative' }}>
                  <img src={s.img} alt={s.hindi} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.4s' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(18,18,18,0.75) 0%, transparent 60%)' }} />
                </div>

                {/* Stats content */}
                <div style={{ padding: '20px 24px 28px', background: 'rgba(255,255,255,0.04)', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-english)', fontSize: 'clamp(36px,4vw,48px)', fontWeight: 900, background: 'linear-gradient(135deg,#FFB300,#F57C00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>
                    <Counter target={s.num} suffix={s.suffix} active={active} />
                  </div>
                  <div style={{ fontFamily: 'var(--font-hindi)', fontSize: 15, fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginTop: 8 }}>{s.hindi}</div>
                  <div style={{ fontFamily: 'var(--font-english)', fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{s.label}</div>
                  <div style={{ height: 3, background: 'linear-gradient(90deg,transparent,#F57C00,transparent)', borderRadius: 2, marginTop: 16, opacity: 0.5 }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
