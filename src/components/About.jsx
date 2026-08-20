export default function About() {
  const timeline = [
    { year: '1999', event: 'राजनीतिक यात्रा की शुरुआत', en: 'Political journey begins' },
    { year: '2007', event: 'पहली बार विधायक निर्वाचित', en: 'First elected as MLA' },
    { year: '2012', event: 'पुनः विधायक चुने गए', en: 'Re-elected as MLA' },
    { year: '2017', event: 'BJP के साथ ऐतिहासिक जीत', en: 'Historic win with BJP' },
    { year: '2022', event: 'कैबिनेट मंत्री नियुक्त', en: 'Appointed Cabinet Minister' },
  ];

  return (
    <section id="about" className="section section-white">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          {/* Left Image */}
          <div className="fade-left" style={{ position: 'relative' }}>
            <div style={{ width: '100%', aspectRatio: '4/5', borderRadius: '30px 30px 120px 30px', overflow: 'hidden', position: 'relative', boxShadow: '0 30px 80px rgba(245,124,0,0.2)' }}>
              <img
                src="/assets/rakesh-sachan3.jpg"
                alt="Rakesh Sachan - Skill Distribution Program"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
              {/* Saffron overlay gradient at bottom */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 100, background: 'linear-gradient(0deg, rgba(230,81,0,0.55), transparent)' }} />
            </div>

            {/* Decorative corner */}
            <div style={{ position: 'absolute', bottom: -16, right: -16, width: 80, height: 80, background: 'linear-gradient(135deg,#F57C00,#E65100)', borderRadius: '30px 0 120px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32 }}>🏛️</div>

            {/* Info card */}
            <div style={{ position: 'absolute', bottom: 24, left: -20, background: 'white', borderRadius: 20, padding: '16px 22px', boxShadow: '0 10px 40px rgba(0,0,0,0.12)', border: '2px solid rgba(245,124,0,0.15)' }}>
              <div style={{ fontFamily: 'var(--font-hindi)', fontSize: 14, fontWeight: 700, color: '#121212' }}>उत्तर प्रदेश सरकार</div>
              <div style={{ fontFamily: 'var(--font-english)', fontSize: 11, color: '#F57C00', fontWeight: 600, marginTop: 2 }}>Government of Uttar Pradesh</div>
              <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
                {['#F57C00','#FFB300','#E65100'].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="fade-right">
            <span className="section-label">परिचय — About</span>
            <h2 className="section-title">जन नेता, <span>जन सेवक</span></h2>
            <div className="saffron-divider" />
            <p style={{ fontFamily: 'var(--font-hindi)', fontSize: 16, color: '#555', lineHeight: 1.9, marginBottom: 16 }}>
              राकेश सचान उत्तर प्रदेश की राजनीति में एक सुपरिचित एवं प्रभावशाली नाम हैं। वे वर्तमान में उत्तर प्रदेश सरकार में कैबिनेट मंत्री के पद पर कार्यरत हैं और अपनी जनसेवा, विकास कार्यों एवं पारदर्शी प्रशासन के लिए जाने जाते हैं।
            </p>
            <p style={{ fontFamily: 'var(--font-english)', fontSize: 14, color: '#666', lineHeight: 1.8, marginBottom: 32 }}>
              A seasoned political leader and cabinet minister, Rakesh Sachan has dedicated over two decades to public service in Uttar Pradesh. His leadership is marked by a commitment to industrial development, employment generation, and grassroots welfare programs.
            </p>

            {/* Timeline */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: 18, top: 0, bottom: 0, width: 2, background: 'linear-gradient(180deg,#F57C00,#FFB300)' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {timeline.map((t, i) => (
                  <div key={i} className="fade-up" style={{ transitionDelay: `${i*0.1}s`, display: 'flex', gap: 20, alignItems: 'flex-start', paddingLeft: 8 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', flexShrink: 0, background: 'linear-gradient(135deg,#F57C00,#E65100)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-english)', fontSize: 11, fontWeight: 800, color: 'white', boxShadow: '0 4px 12px rgba(245,124,0,0.3)', position: 'relative', zIndex: 1 }}>{t.year.slice(-2)}</div>
                    <div style={{ paddingTop: 6 }}>
                      <div style={{ fontFamily: 'var(--font-english)', fontSize: 11, fontWeight: 700, color: '#F57C00', textTransform: 'uppercase', letterSpacing: 1 }}>{t.year}</div>
                      <div style={{ fontFamily: 'var(--font-hindi)', fontSize: 14, fontWeight: 700, color: '#121212' }}>{t.event}</div>
                      <div style={{ fontFamily: 'var(--font-english)', fontSize: 12, color: '#888' }}>{t.en}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){#about .container>div{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
