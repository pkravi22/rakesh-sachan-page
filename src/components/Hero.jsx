import { useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function Hero() {
  const particlesRef = useRef(null);

  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 3 + 1, dx: (Math.random() - 0.5) * 0.5, dy: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.2,
    }));
    let raf;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,179,0,${p.opacity})`; ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      raf = requestAnimationFrame(animate);
    };
    animate();
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #BF360C 0%, #E65100 25%, #F57C00 55%, #FF9800 80%, #FFB300 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, opacity: 0.06, backgroundImage: 'radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <canvas ref={particlesRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #FFB300, #F57C00, #E65100, #FFB300)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 24px 60px', position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }} className="hero-grid">
          {/* Left */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)', padding: '6px 16px', borderRadius: 50, marginBottom: 28 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFD54F', animation: 'pulse 2s infinite' }} />
              <span style={{ fontFamily: 'var(--font-english)', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.95)', letterSpacing: 1, textTransform: 'uppercase' }}>Cabinet Minister — Govt. of Uttar Pradesh</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-hindi)', fontSize: 'clamp(44px,6vw,76px)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: 8, textShadow: '0 2px 20px rgba(0,0,0,0.2)' }}>
              राकेश सचान
            </h1>
            <div style={{ fontFamily: 'var(--font-english)', fontSize: 'clamp(16px,2vw,22px)', fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginBottom: 24, letterSpacing: 0.5 }}>Rakesh Sachan</div>
            <p style={{ fontFamily: 'var(--font-hindi)', fontSize: 'clamp(14px,1.5vw,18px)', color: 'rgba(255,255,255,0.88)', lineHeight: 1.7, marginBottom: 40, maxWidth: 480 }}>
              विकास, जनसेवा और उत्तर प्रदेश के उज्ज्वल भविष्य के लिए समर्पित
              <br /><span style={{ fontFamily: 'var(--font-english)', fontSize: '0.85em', opacity: 0.85 }}>Dedicated to Development, Public Service &amp; the Bright Future of Uttar Pradesh</span>
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="#achievements" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', background: 'white', color: '#E65100', fontFamily: 'var(--font-hindi)', fontSize: 15, fontWeight: 700, borderRadius: 50, boxShadow: '0 6px 25px rgba(0,0,0,0.2)', transition: 'all 0.3s' }}>
                उपलब्धियां देखें <ArrowRight size={16} />
              </a>
              <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', color: 'white', border: '2px solid rgba(255,255,255,0.6)', fontFamily: 'var(--font-hindi)', fontSize: 15, fontWeight: 600, borderRadius: 50, transition: 'all 0.3s' }}>
                जनसंपर्क करें
              </a>
            </div>
            <div style={{ display: 'flex', gap: 32, marginTop: 52, borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 32 }}>
              {[{ num: '25+', label: 'वर्षों का अनुभव' }, { num: '200+', label: 'विकास परियोजनाएं' }, { num: '50L+', label: 'लाभान्वित नागरिक' }].map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily: 'var(--font-english)', fontSize: 28, fontWeight: 900, color: '#FFD54F', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontFamily: 'var(--font-hindi)', fontSize: 12, color: 'rgba(255,255,255,0.8)', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Real Portrait */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }} className="hero-portrait">
            <div style={{ position: 'absolute', width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,179,0,0.3) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', animation: 'glow-pulse 3s ease-in-out infinite' }} />
            {/* Portrait frame */}
            <div style={{ width: 320, height: 420, borderRadius: '50% 50% 48% 48% / 55% 55% 45% 45%', overflow: 'hidden', position: 'relative', boxShadow: '0 20px 60px rgba(0,0,0,0.35)', border: '4px solid rgba(255,255,255,0.4)' }}>
              <img
                src="/assets/rakesh_sachan.jpg"
                alt="Rakesh Sachan - Cabinet Minister UP"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(0deg, rgba(230,81,0,0.7), transparent)' }} />
            </div>

            {/* Cabinet badge */}
            <div style={{ position: 'absolute', bottom: 20, right: '5%', background: 'white', borderRadius: 16, padding: '12px 18px', boxShadow: '0 8px 30px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', gap: 10, animation: 'float-badge 4s ease-in-out infinite' }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,#F57C00,#E65100)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🏆</div>
              <div>
                <div style={{ fontFamily: 'var(--font-hindi)', fontSize: 13, fontWeight: 700, color: '#121212' }}>कैबिनेट मंत्री</div>
                <div style={{ fontFamily: 'var(--font-english)', fontSize: 11, color: '#F57C00', fontWeight: 600 }}>Govt. of Uttar Pradesh</div>
              </div>
            </div>

            {/* BJP badge */}
            <div style={{ position: 'absolute', top: 20, left: '2%', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 12, padding: '10px 16px', animation: 'float-badge 4s ease-in-out infinite 2s' }}>
              <div style={{ fontFamily: 'var(--font-hindi)', fontSize: 12, fontWeight: 700, color: 'white', textAlign: 'center' }}>भारतीय जनता पार्टी</div>
              <div style={{ fontFamily: 'var(--font-english)', fontSize: 10, color: 'rgba(255,255,255,0.8)', textAlign: 'center' }}>Bharatiya Janata Party</div>
            </div>
          </div>
        </div>
      </div>

      <a href="#stats" style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.7)', animation: 'bounce 2s infinite', zIndex: 1 }}>
        <span style={{ fontFamily: 'var(--font-english)', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase' }}>Scroll</span>
        <ChevronDown size={20} />
      </a>

      <style>{`
        @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.6;transform:scale(1.3)}}
        @keyframes glow-pulse{0%,100%{opacity:0.6;transform:translate(-50%,-50%) scale(1)}50%{opacity:1;transform:translate(-50%,-50%) scale(1.1)}}
        @keyframes float-badge{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        @keyframes bounce{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(8px)}}
        @media(max-width:768px){.hero-grid{grid-template-columns:1fr!important;}.hero-portrait{display:none!important;}}
      `}</style>
    </section>
  );
}
