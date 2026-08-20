const positions = [
  { img: '/assets/rakesh-sachan1.jpg', title: 'कैबिनेट मंत्री', en: 'Cabinet Minister, UP Govt.', desc: 'उत्तर प्रदेश सरकार में कैबिनेट मंत्री के पद पर कार्यरत', year: '2022–Present', color: '#F57C00' },
  { img: '/assets/rakesh-sachan13.jpg', title: 'विधायक (MLA)', en: 'Member of Legislative Assembly', desc: 'उत्तर प्रदेश विधानसभा के सदस्य — बहुमत से निर्वाचित', year: 'Multiple Terms', color: '#E65100' },
  { img: '/assets/rakesh-sachan12.jpg', title: 'जिला अध्यक्ष', en: 'District President — BJP', desc: 'भारतीय जनता पार्टी के जिला स्तरीय संगठन का नेतृत्व', year: '2010–2017', color: '#FFB300' },
  { img: '/assets/rakesh-sachan5.jpg', title: 'समिति सदस्य', en: 'Committee Member — Assembly', desc: 'विधानसभा की कई महत्वपूर्ण समितियों के सदस्य', year: 'Ongoing', color: '#BF360C' },
  { img: '/assets/rakesh-sachan2.jpg', title: 'पार्टी महासचिव', en: 'General Secretary — BJP UP', desc: 'प्रदेश स्तर पर पार्टी संगठन में वरिष्ठ भूमिका', year: '2015–2022', color: '#FF8F00' },
  { img: '/assets/rakesh-sachan10.jpg', title: 'राष्ट्रीय कार्यकारिणी', en: 'National Executive Member', desc: 'BJP राष्ट्रीय कार्यकारिणी में उत्तर प्रदेश के प्रतिनिधि', year: '2019–Present', color: '#F57C00' },
];

export default function Positions() {
  return (
    <section id="positions" className="section section-cream">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }} className="fade-up">
          <span className="section-label">पद एवं दायित्व</span>
          <h2 className="section-title">नेतृत्व की <span>यात्रा</span></h2>
          <div className="saffron-divider" style={{ margin: '16px auto 16px' }} />
          <p className="section-subtitle" style={{ margin: '0 auto' }}>Positions held across political and public service spectrum</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 24 }}>
          {positions.map((p, i) => (
            <div key={i} className="fade-up" style={{ transitionDelay: `${i*0.08}s` }}>
              <div style={{
                background: 'white', borderRadius: 20, overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
                border: '2px solid transparent',
                transition: 'all 0.3s', cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = p.color; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 12px 40px ${p.color}25`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.07)'; }}
              >
                {/* Splash image */}
                <div style={{ height: 160, overflow: 'hidden', position: 'relative' }}>
                  <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.4s' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg,rgba(0,0,0,0.5) 0%,transparent 60%)' }} />
                  {/* Year badge on image */}
                  <div style={{ position: 'absolute', top: 12, right: 12, background: p.color, color: 'white', fontFamily: 'var(--font-english)', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 50 }}>{p.year}</div>
                </div>

                {/* Content */}
                <div style={{ padding: '22px 24px', borderTop: `3px solid ${p.color}` }}>
                  <div style={{ fontFamily: 'var(--font-hindi)', fontSize: 18, fontWeight: 800, color: '#121212', lineHeight: 1.2 }}>{p.title}</div>
                  <div style={{ fontFamily: 'var(--font-english)', fontSize: 12, color: p.color, fontWeight: 600, marginTop: 4, marginBottom: 10 }}>{p.en}</div>
                  <p style={{ fontFamily: 'var(--font-hindi)', fontSize: 13, color: '#666', lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
