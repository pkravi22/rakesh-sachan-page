const milestones = [
  { year: '1999', title: 'राजनीतिक प्रवेश', en: 'Entry into Politics', desc: 'BJP में शामिल होकर जनसेवा की शुरुआत', color: '#FFB300' },
  { year: '2002', title: 'जिला स्तर नेतृत्व', en: 'District Leadership', desc: 'युवा मोर्चा अध्यक्ष के रूप में चुने गए', color: '#F57C00' },
  { year: '2007', title: 'प्रथम विधायक', en: 'First MLA Victory', desc: 'उत्तर प्रदेश विधानसभा में पहली बार निर्वाचित', color: '#E65100' },
  { year: '2012', title: 'पुनर्निर्वाचन', en: 'Re-election', desc: 'बड़े बहुमत से दूसरी बार विधायक चुने गए', color: '#BF360C' },
  { year: '2015', title: 'प्रदेश महासचिव', en: 'State General Secretary', desc: 'BJP उत्तर प्रदेश के प्रदेश महासचिव नियुक्त', color: '#F57C00' },
  { year: '2017', title: 'ऐतिहासिक जीत', en: 'Historic Win', desc: 'BJP की ऐतिहासिक जीत में महत्वपूर्ण भूमिका', color: '#FFB300' },
  { year: '2019', title: 'राष्ट्रीय कार्यकारिणी', en: 'National Executive', desc: 'BJP राष्ट्रीय कार्यकारिणी के सदस्य बने', color: '#E65100' },
  { year: '2022', title: 'कैबिनेट मंत्री', en: 'Cabinet Minister', desc: 'उत्तर प्रदेश सरकार में कैबिनेट मंत्री नियुक्त', color: '#F57C00', highlight: true },
];

export default function Timeline() {
  return (
    <section id="timeline" className="section section-white">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }} className="fade-up">
          <span className="section-label">Political Journey</span>
          <h2 className="section-title">नेतृत्व की <span>समयरेखा</span></h2>
          <div className="saffron-divider" style={{ margin: '16px auto' }} />
          <p className="section-subtitle" style={{ margin: '0 auto' }}>From grassroots activist to Cabinet Minister — a journey of dedication</p>
        </div>

        <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}>
          {/* Center line */}
          <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 3, background: 'linear-gradient(180deg,#FFB300,#F57C00,#E65100,#BF360C)', transform: 'translateX(-50%)', borderRadius: 4 }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
            {milestones.map((m, i) => (
              <div key={i} className={i % 2 === 0 ? 'fade-left' : 'fade-right'} style={{ transitionDelay: `${i*0.08}s`, display: 'flex', justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end', position: 'relative' }}>
                {/* Center dot — year number, no emoji */}
                <div style={{
                  position: 'absolute', left: '50%', top: '50%',
                  transform: 'translate(-50%,-50%)',
                  width: m.highlight ? 56 : 44, height: m.highlight ? 56 : 44,
                  borderRadius: '50%',
                  background: m.highlight ? `linear-gradient(135deg,${m.color},#BF360C)` : 'white',
                  border: `3px solid ${m.color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  zIndex: 2,
                  boxShadow: m.highlight ? `0 0 0 6px ${m.color}25, 0 6px 20px ${m.color}50` : `0 4px 12px ${m.color}30`,
                  animation: m.highlight ? 'glow-timeline 2s infinite' : 'none',
                }}>
                  <span style={{ fontFamily: 'var(--font-english)', fontSize: m.highlight ? 11 : 10, fontWeight: 900, color: m.highlight ? 'white' : m.color, lineHeight: 1, textAlign: 'center' }}>{m.year.slice(2)}</span>
                </div>

                {/* Card */}
                <div style={{
                  width: '43%',
                  background: m.highlight ? `linear-gradient(135deg,#FFF3E0,#FFE0B2)` : 'white',
                  borderRadius: 20, padding: '22px 28px',
                  border: `2px solid ${m.highlight ? m.color : 'transparent'}`,
                  boxShadow: m.highlight ? `0 8px 30px ${m.color}25` : '0 4px 20px rgba(0,0,0,0.07)',
                  marginLeft: i % 2 === 0 ? 0 : 'auto',
                  marginRight: i % 2 === 0 ? 'auto' : 0,
                  position: 'relative',
                }}>
                  <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', [i % 2 === 0 ? 'right' : 'left']: -10, width: 0, height: 0, borderTop: '8px solid transparent', borderBottom: '8px solid transparent', [i % 2 === 0 ? 'borderLeft' : 'borderRight']: `10px solid ${m.highlight ? m.color : '#e0e0e0'}` }} />
                  <div style={{ fontFamily: 'var(--font-english)', fontSize: 13, fontWeight: 800, color: m.color, marginBottom: 5, letterSpacing: 1 }}>{m.year}</div>
                  <div style={{ fontFamily: 'var(--font-hindi)', fontSize: 17, fontWeight: 800, color: '#121212', lineHeight: 1.2 }}>{m.title}</div>
                  <div style={{ fontFamily: 'var(--font-english)', fontSize: 12, color: m.color, fontWeight: 600, marginBottom: 8 }}>{m.en}</div>
                  <p style={{ fontFamily: 'var(--font-hindi)', fontSize: 13, color: '#666', lineHeight: 1.6, margin: 0 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes glow-timeline{0%,100%{box-shadow:0 0 0 6px rgba(245,124,0,0.15),0 6px 20px rgba(245,124,0,0.5)}50%{box-shadow:0 0 0 10px rgba(245,124,0,0.25),0 6px 30px rgba(245,124,0,0.7)}}`}</style>
    </section>
  );
}
