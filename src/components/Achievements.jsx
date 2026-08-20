const achievements = [
  {
    img: '/assets/rakesh-sachan7.jpg',
    imgPos: 'center',
    title: 'औद्योगिक विकास',
    en: 'Industrial Development',
    year: '2022–2024',
    impact: '5000+ रोजगार',
    impactEn: '5000+ Jobs Created',
    desc: 'उत्तर प्रदेश में नई औद्योगिक नीतियों के तहत कई बड़े उद्योगों को स्थापित करने में महत्वपूर्ण भूमिका निभाई। MSME सेक्टर को नई दिशा प्रदान की।',
    color: '#F57C00',
    bg: '#FFF3E0',
  },
  {
    img: '/assets/rakesh-sachan6.jpg',
    imgPos: 'top',
    title: 'अवसंरचना विकास',
    en: 'Infrastructure Growth',
    year: '2017–2024',
    impact: '500+ किमी सड़कें',
    impactEn: '500+ km Roads Built',
    desc: 'क्षेत्र में सड़क, पुल, विद्युतीकरण एवं जल आपूर्ति की व्यापक परियोजनाओं का सफलतापूर्वक क्रियान्वयन।',
    color: '#E65100',
    bg: '#FBE9E7',
  },
  {
    img: '/assets/rakesh-sachan3.jpg',
    imgPos: 'top',
    title: 'शिक्षा एवं कौशल विकास',
    en: 'Education & Skill Development',
    year: '2019–2024',
    impact: '10,000+ प्रशिक्षित',
    impactEn: '10,000+ Youth Trained',
    desc: 'सरकारी विद्यालयों का आधुनिकीकरण, कौशल प्रशिक्षण कार्यक्रम, छात्रवृत्ति योजनाएं एवं प्रमाण पत्र वितरण।',
    color: '#FFB300',
    bg: '#FFF8E1',
  },
  {
    img: '/assets/rakesh-sachan9.jpg',
    imgPos: 'top',
    title: 'जन कल्याण योजनाएं',
    en: 'Public Welfare Initiatives',
    year: '2020–2024',
    impact: '5L+ लाभार्थी',
    impactEn: '5L+ Beneficiaries',
    desc: 'जनपद में स्वास्थ्य सुविधाओं का विस्तार, मुफ्त राशन वितरण, आयुष्मान भारत का प्रभावी क्रियान्वयन।',
    color: '#BF360C',
    bg: '#FFEBEE',
  },
  {
    img: '/assets/rakesh-sachan11.jpg',
    imgPos: 'top',
    title: 'कृषक एवं ग्रामीण कल्याण',
    en: 'Farmer & Rural Welfare',
    year: '2022–2024',
    impact: '2L+ किसान लाभान्वित',
    impactEn: '2L+ Farmers Benefited',
    desc: 'किसान सम्मान निधि, सिंचाई सुविधाएं, मृदा स्वास्थ्य कार्ड, फसल बीमा एवं न्यूनतम समर्थन मूल्य सुनिश्चित।',
    color: '#558B2F',
    bg: '#F1F8E9',
  },
  {
    img: '/assets/rakesh-sachan8.jpg',
    imgPos: 'top',
    title: 'जनता दरबार एवं जनसुनवाई',
    en: 'Public Grievance Redressal',
    year: '2017–2024',
    impact: '10,000+ शिकायतें निपटाई',
    impactEn: '10,000+ Grievances Resolved',
    desc: 'नियमित जनता दरबार, जन सुनवाई कार्यक्रम एवं सीधे संवाद के माध्यम से आम जनता की समस्याओं का त्वरित समाधान।',
    color: '#1565C0',
    bg: '#E3F2FD',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section section-white">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }} className="fade-up">
          <span className="section-label">Major Achievements</span>
          <h2 className="section-title">प्रमुख <span>उपलब्धियां</span></h2>
          <div className="saffron-divider" style={{ margin: '16px auto' }} />
          <p className="section-subtitle" style={{ margin: '0 auto' }}>A record of real impact — measured in lives improved and futures secured</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {achievements.map((a, i) => (
            <div key={i} className={i % 2 === 0 ? 'fade-left' : 'fade-right'} style={{ transitionDelay: `${i * 0.07}s` }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '420px 1fr' : '1fr 420px',
                borderRadius: 28,
                overflow: 'hidden',
                border: `1px solid ${a.color}18`,
                boxShadow: '0 4px 30px rgba(0,0,0,0.07)',
                background: 'white',
              }}>
                {/* Image side */}
                {i % 2 !== 0 && <ContentSide a={a} />}

                <div style={{
                  position: 'relative', overflow: 'hidden',
                  minHeight: 280,
                  order: i % 2 === 0 ? 0 : 1,
                }}>
                  <img
                    src={a.img}
                    alt={a.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: `${a.imgPos} center`, display: 'block', minHeight: 280 }}
                  />
                  {/* Gradient overlay */}
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(${i % 2 === 0 ? '90deg' : '270deg'}, rgba(0,0,0,0.08), transparent 60%)` }} />

                  {/* Impact badge */}
                  <div style={{
                    position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)',
                    background: a.color,
                    borderRadius: 50, padding: '10px 24px',
                    fontFamily: 'var(--font-hindi)', fontSize: 15, fontWeight: 800,
                    color: 'white', whiteSpace: 'nowrap',
                    boxShadow: `0 4px 20px ${a.color}60`,
                  }}>{a.impact}</div>

                  {/* Year tag */}
                  <div style={{
                    position: 'absolute', top: 16, left: 16,
                    background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)',
                    borderRadius: 20, padding: '5px 14px',
                    fontFamily: 'var(--font-english)', fontSize: 12, fontWeight: 700,
                    color: 'white',
                  }}>{a.year}</div>
                </div>

                {i % 2 === 0 && <ContentSide a={a} />}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:768px){
          #achievements .container>div>div>div>div{grid-template-columns:1fr!important;}
          #achievements .container>div>div>div>div>div:first-child{min-height:220px!important;}
        }
      `}</style>
    </section>
  );
}

function ContentSide({ a }) {
  return (
    <div style={{ padding: '40px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, background: a.bg }}>
      <div style={{ background: `${a.color}15`, color: a.color, fontFamily: 'var(--font-english)', fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 50, width: 'fit-content' }}>{a.year}</div>
      <h3 style={{ fontFamily: 'var(--font-hindi)', fontSize: 'clamp(20px,2.2vw,28px)', fontWeight: 800, color: '#121212', lineHeight: 1.25, margin: 0 }}>{a.title}</h3>
      <div style={{ fontFamily: 'var(--font-english)', fontSize: 13, fontWeight: 600, color: a.color }}>{a.en}</div>
      <p style={{ fontFamily: 'var(--font-hindi)', fontSize: 15, color: '#555', lineHeight: 1.8, margin: 0 }}>{a.desc}</p>
      <div style={{ fontFamily: 'var(--font-english)', fontSize: 12, color: a.color, fontWeight: 600, background: `${a.color}12`, padding: '6px 14px', borderRadius: 8, width: 'fit-content' }}>
        {a.impactEn}
      </div>
    </div>
  );
}
