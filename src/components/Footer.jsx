import { Globe, Share2, PlayCircle, ArrowUp, Heart } from "lucide-react";

const links = {
  'परिचय': ['About', 'Political Journey', 'Vision & Mission', 'Ministerial Role'],
  'उपलब्धियां': ['Industrial Dev.', 'Infrastructure', 'Education', 'Healthcare'],
  'मीडिया': ['Press Releases', 'Speeches', 'Photo Gallery', 'News Coverage'],
  'संपर्क': ['Office Address', 'Contact Form', 'Social Media', 'Constituency Office'],
};

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(180deg, #0D0D0D 0%, #121212 100%)', position: 'relative', overflow: 'hidden' }}>
      {/* Top gradient line */}
      <div style={{ height: 4, background: 'linear-gradient(90deg, #BF360C, #F57C00, #FFB300, #F57C00, #BF360C)' }} />

      {/* BG texture */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'radial-gradient(circle at 20% 50%, #F57C00 0%, transparent 40%), radial-gradient(circle at 80% 20%, #FFB300 0%, transparent 40%)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px 0', position: 'relative', zIndex: 1 }}>
        {/* Top: Logo + links */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr repeat(4, 1fr)', gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(135deg, #F57C00, #E65100)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}><img src="/assets/rakesh_sachan.jpg" alt="Rakesh Sachan" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top'}} /></div>
              <div>
                <div style={{ fontFamily: 'var(--font-hindi)', fontWeight: 800, fontSize: 18, color: 'white' }}>राकेश सचान</div>
                <div style={{ fontFamily: 'var(--font-english)', fontSize: 11, color: '#F57C00', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>Cabinet Minister, UP</div>
              </div>
            </div>
            <p style={{ fontFamily: 'var(--font-hindi)', fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
              विकास, जनसेवा और उत्तर प्रदेश के उज्ज्वल भविष्य के लिए समर्पित।
            </p>
            <p style={{ fontFamily: 'var(--font-english)', fontSize: 12, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, marginBottom: 24 }}>
              Dedicated to the development and welfare of Uttar Pradesh and its people.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { icon: <Globe size={16} />, href: 'https://www.facebook.com/RakeshSachanBJP/' },
                { icon: <Share2 size={16} />, href: '#' },
                { icon: <PlayCircle size={16} />, href: '#' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer" style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'rgba(245,124,0,0.15)',
                  border: '1px solid rgba(245,124,0,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#F57C00', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#F57C00'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(245,124,0,0.15)'; e.currentTarget.style.color = '#F57C00'; }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 style={{ fontFamily: 'var(--font-hindi)', fontSize: 14, fontWeight: 800, color: 'white', marginBottom: 16, position: 'relative', paddingBottom: 10 }}>
                {section}
                <span style={{ position: 'absolute', bottom: 0, left: 0, width: 24, height: 2, background: '#F57C00', borderRadius: 1 }} />
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {items.map(item => (
                  <li key={item}>
                    <a href="#" style={{
                      fontFamily: 'var(--font-english)', fontSize: 13,
                      color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => e.target.style.color = '#F57C00'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
                    >{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quote banner */}
        <div style={{
          background: 'rgba(245,124,0,0.08)',
          border: '1px solid rgba(245,124,0,0.2)',
          borderRadius: 16, padding: '24px 32px',
          marginBottom: 32,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16,
          flexWrap: 'wrap', textAlign: 'center',
        }}>
          <div style={{ fontFamily: 'var(--font-hindi)', fontSize: 17, fontWeight: 700, color: '#FFB300' }}>
            "जनसेवा ही मेरा संकल्प"
          </div>
          <div style={{ width: 2, height: 24, background: 'rgba(245,124,0,0.4)' }} />
          <div style={{ fontFamily: 'var(--font-english)', fontSize: 14, color: 'rgba(255,255,255,0.6)', fontStyle: 'italic' }}>
            "Public Service is my commitment"
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          padding: '20px 0',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 12,
        }}>
          <div style={{ fontFamily: 'var(--font-english)', fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
            © 2024 Rakesh Sachan. All rights reserved. | Official Website
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-english)', fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
            Made with <Heart size={12} color="#F57C00" fill="#F57C00" /> for the people of Uttar Pradesh
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
            display: 'flex', alignItems: 'center', gap: 6,
            background: 'rgba(245,124,0,0.15)',
            border: '1px solid rgba(245,124,0,0.3)',
            color: '#F57C00', borderRadius: 50,
            padding: '8px 16px', fontSize: 12,
            fontFamily: 'var(--font-english)', fontWeight: 600,
            cursor: 'pointer', transition: 'all 0.2s',
          }}>
            <ArrowUp size={14} /> Back to Top
          </button>
        </div>
      </div>

      <style>{`@media(max-width:768px){footer .container > div:first-child{grid-template-columns:1fr 1fr!important;}}`}</style>
    </footer>
  );
}
