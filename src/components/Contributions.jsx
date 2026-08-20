const areas = [
  { icon: '🏭', title: 'उद्योग', en: 'Industry', value: 85, color: '#F57C00' },
  { icon: '👷', title: 'रोजगार', en: 'Employment', value: 78, color: '#E65100' },
  { icon: '🛣️', title: 'अवसंरचना', en: 'Infrastructure', value: 90, color: '#FFB300' },
  { icon: '🎓', title: 'शिक्षा', en: 'Education', value: 72, color: '#BF360C' },
  { icon: '🏥', title: 'स्वास्थ्य', en: 'Healthcare', value: 68, color: '#558B2F' },
  { icon: '🌾', title: 'कृषि', en: 'Agriculture', value: 80, color: '#1565C0' },
];

const initiatives = [
  { num: '₹2000Cr+', label: 'निवेश आकर्षित', sub: 'Investment Attracted' },
  { num: '50,000+', label: 'रोजगार सृजन', sub: 'Jobs Generated' },
  { num: '1200+', label: 'गांव विद्युतीकृत', sub: 'Villages Electrified' },
  { num: '8 लाख+', label: 'आवास निर्मित', sub: 'Houses Built (PMAY)' },
];

export default function Contributions() {
  return (
    <section id="contributions" className="section" style={{ background: 'linear-gradient(180deg, #121212 0%, #1C1C1C 100%)' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(245,124,0,0.07) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(255,179,0,0.05) 0%, transparent 60%)' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }} className="fade-up">
          <span style={{ display: 'inline-block', fontFamily: 'var(--font-english)', fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#FFB300', marginBottom: 12, paddingLeft: 40, position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, top: '50%', width: 28, height: 2, background: '#FFB300', transform: 'translateY(-50%)' }} />
            Contributions to UP
          </span>
          <h2 style={{ fontFamily: 'var(--font-hindi)', fontSize: 'clamp(26px,4vw,42px)', fontWeight: 800, color: 'white', lineHeight: 1.2 }}>
            उत्तर प्रदेश के लिए <span style={{ background: 'linear-gradient(135deg, #FFB300, #F57C00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>योगदान</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-english)', color: 'rgba(255,255,255,0.5)', marginTop: 12, fontSize: 15 }}>Transforming Uttar Pradesh across every sector</p>
        </div>

        {/* Progress bars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, marginBottom: 60 }}>
          {areas.map((a, i) => (
            <div key={i} className="fade-up" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 16, padding: '24px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: 24 }}>{a.icon}</span>
                    <div>
                      <div style={{ fontFamily: 'var(--font-hindi)', fontSize: 15, fontWeight: 700, color: 'white' }}>{a.title}</div>
                      <div style={{ fontFamily: 'var(--font-english)', fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{a.en}</div>
                    </div>
                  </div>
                  <div style={{ fontFamily: 'var(--font-english)', fontSize: 20, fontWeight: 800, color: a.color }}>{a.value}%</div>
                </div>
                <div style={{ height: 8, background: 'rgba(255,255,255,0.08)', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{
                    height: '100%', width: `${a.value}%`,
                    background: `linear-gradient(90deg, ${a.color}, ${a.color}cc)`,
                    borderRadius: 4,
                    transition: 'width 1.5s ease',
                  }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact numbers */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
          {initiatives.map((n, i) => (
            <div key={i} className="fade-up" style={{ transitionDelay: `${i * 0.1}s`, textAlign: 'center', padding: '32px 20px', background: 'rgba(245,124,0,0.08)', borderRadius: 20, border: '1px solid rgba(245,124,0,0.2)' }}>
              <div style={{ fontFamily: 'var(--font-english)', fontSize: 'clamp(22px,3vw,32px)', fontWeight: 900, background: 'linear-gradient(135deg, #FFB300, #F57C00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{n.num}</div>
              <div style={{ fontFamily: 'var(--font-hindi)', fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginTop: 8 }}>{n.label}</div>
              <div style={{ fontFamily: 'var(--font-english)', fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{n.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
