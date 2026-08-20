import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const gallery = [
  { id: 1, img: '/assets/rakesh-sachan1.jpg', cat: 'Government', title: 'मंत्रिमंडल बैठक — CM योगी के साथ', size: 'wide' },
  { id: 2, img: '/assets/rakesh-sachan2.jpg', cat: 'Public Outreach', title: 'जनसंपर्क — फूलों से स्वागत', size: 'normal' },
  { id: 3, img: '/assets/rakesh-sachan3.jpg', cat: 'Development', title: 'कौशल प्रमाण पत्र वितरण', size: 'tall' },
  { id: 4, img: '/assets/rakesh-sachan4.jpg', cat: 'Leadership', title: 'जनसभा संबोधन', size: 'wide' },
  { id: 5, img: '/assets/rakesh-sachan5.jpg', cat: 'Events', title: 'वरिष्ठ नेता से मुलाकात', size: 'normal' },
  { id: 6, img: '/assets/rakesh-sachan6.jpg', cat: 'Leadership', title: 'सरकारी दौरा — आधिकारिक आगमन', size: 'tall' },
  { id: 7, img: '/assets/rakesh-sachan7.jpg', cat: 'Development', title: 'UP विकास योजना समीक्षा', size: 'wide' },
  { id: 8, img: '/assets/rakesh-sachan8.jpg', cat: 'Public Outreach', title: 'जनता दरबार — जनसुनवाई', size: 'normal' },
  { id: 9, img: '/assets/rakesh-sachan9.jpg', cat: 'Public Outreach', title: 'जन कल्याण वितरण', size: 'normal' },
  { id: 10, img: '/assets/rakesh-sachan10.jpg', cat: 'Events', title: 'BJP पार्टी कार्यक्रम', size: 'wide' },
  { id: 11, img: '/assets/rakesh-sachan11.jpg', cat: 'Leadership', title: 'सामुदायिक बैठक', size: 'tall' },
  { id: 12, img: '/assets/rakesh-sachan12.jpg', cat: 'Events', title: 'दीप प्रज्वलन समारोह', size: 'normal' },
  { id: 13, img: '/assets/rakesh-sachan13.jpg', cat: 'Events', title: 'सामाजिक संगठन कार्यक्रम — 2026', size: 'wide' },
];

const cats = ['All', 'Leadership', 'Development', 'Public Outreach', 'Government', 'Events'];

export default function Gallery() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === 'All' ? gallery : gallery.filter(g => g.cat === active);

  const heightMap = { tall: 340, wide: 210, normal: 260 };

  return (
    <section id="gallery" className="section section-cream">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }} className="fade-up">
          <span className="section-label">Photo Gallery</span>
          <h2 className="section-title">छायाचित्र <span>दीर्घा</span></h2>
          <div className="saffron-divider" style={{ margin: '16px auto' }} />
          <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>Moments of service, leadership and public connect</p>

          {/* Filter tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
            {cats.map(c => (
              <button key={c} onClick={() => setActive(c)} style={{
                padding: '8px 20px', borderRadius: 50,
                background: active === c ? 'linear-gradient(135deg,#F57C00,#E65100)' : 'white',
                color: active === c ? 'white' : '#555',
                border: active === c ? 'none' : '1px solid #ddd',
                fontFamily: 'var(--font-english)', fontSize: 13, fontWeight: 600,
                transition: 'all 0.2s', cursor: 'pointer',
                boxShadow: active === c ? '0 4px 15px rgba(245,124,0,0.3)' : 'none',
              }}>{c}</button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div style={{ columns: '3 280px', columnGap: 16 }}>
          {filtered.map((item, i) => (
            <div key={item.id} className="fade-up" style={{ breakInside: 'avoid', marginBottom: 16, transitionDelay: `${(i%6)*0.06}s` }}>
              <div
                onClick={() => setLightbox(item)}
                style={{
                  borderRadius: 16, overflow: 'hidden', cursor: 'pointer', position: 'relative',
                  height: heightMap[item.size] || 260,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                  transition: 'transform 0.3s',
                  background: '#f0e8df',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.querySelector('.ov').style.opacity = '1'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.querySelector('.ov').style.opacity = '0'; }}
              >
                <img
                  src={item.img} alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                />

                {/* Hover overlay */}
                <div className="ov" style={{
                  position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)',
                  opacity: 0, transition: 'opacity 0.3s',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, zIndex: 2,
                }}>
                  <ZoomIn size={28} color="white" />
                  <div style={{ fontFamily: 'var(--font-hindi)', fontSize: 13, fontWeight: 700, color: 'white', textAlign: 'center', padding: '0 16px' }}>{item.title}</div>
                </div>

                {/* Category tag */}
                <div style={{
                  position: 'absolute', top: 12, left: 12, zIndex: 2,
                  background: 'rgba(245,124,0,0.85)', backdropFilter: 'blur(4px)',
                  borderRadius: 20, padding: '4px 12px',
                  fontFamily: 'var(--font-english)', fontSize: 11, fontWeight: 600, color: 'white',
                }}>{item.cat}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.93)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button onClick={() => setLightbox(null)} style={{ position: 'absolute', top: 24, right: 24, background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%', width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer' }}><X size={20} /></button>
          <div onClick={e => e.stopPropagation()} style={{ borderRadius: 20, overflow: 'hidden', maxWidth: '85vw', maxHeight: '85vh', boxShadow: '0 20px 80px rgba(0,0,0,0.6)', position: 'relative' }}>
            <img src={lightbox.img} alt={lightbox.title} style={{ display: 'block', maxWidth: '85vw', maxHeight: '80vh', objectFit: 'contain' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(0deg,rgba(0,0,0,0.8),transparent)', padding: '24px 20px 16px' }}>
              <div style={{ fontFamily: 'var(--font-hindi)', fontSize: 16, fontWeight: 700, color: 'white' }}>{lightbox.title}</div>
              <div style={{ fontFamily: 'var(--font-english)', fontSize: 12, color: '#FFB300', marginTop: 4 }}>{lightbox.cat}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
