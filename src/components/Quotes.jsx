import { useState, useEffect } from 'react';

const quotes = [
  {
    hindi: '"जनता का विश्वास ही मेरी सबसे बड़ी ताकत है।"',
    english: '"The trust of the people is my greatest strength."',
    context: 'जनसभा संबोधन — Kanpur, 2023',
  },
  {
    hindi: '"विकास सिर्फ इमारतों से नहीं, जीवन बदलने से होता है।"',
    english: '"Development is not measured by buildings, but by the lives transformed."',
    context: 'UP निवेश सम्मेलन — Lucknow, 2023',
  },
  {
    hindi: '"जनसेवा केवल एक दायित्व नहीं, यह एक संकल्प है।"',
    english: '"Public service is not just a responsibility — it is a commitment."',
    context: 'विधानसभा सत्र — Lucknow, 2022',
  },
  {
    hindi: '"उत्तर प्रदेश की उन्नति ही हमारा लक्ष्य, जनता की खुशी ही हमारा पुरस्कार।"',
    english: '"Progress of Uttar Pradesh is our goal; happiness of its people is our reward."',
    context: 'दीक्षांत समारोह — Varanasi, 2024',
  },
];

export default function Quotes() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => changeQuote((current + 1) % quotes.length), 5000);
    return () => clearInterval(timer);
  }, [current]);

  const changeQuote = (idx) => {
    setAnimating(true);
    setTimeout(() => { setCurrent(idx); setAnimating(false); }, 300);
  };

  const q = quotes[current];

  return (
    <section id="quotes" style={{
      padding: '100px 0',
      background: 'linear-gradient(135deg, #F57C00 0%, #E65100 40%, #BF360C 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* BG pattern */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.08, backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Quote mark */}
        <div style={{ fontSize: 120, lineHeight: 0.6, color: 'rgba(255,255,255,0.2)', fontFamily: 'Georgia, serif', marginBottom: 40 }}>"</div>

        <div style={{
          transition: 'opacity 0.3s, transform 0.3s',
          opacity: animating ? 0 : 1,
          transform: animating ? 'translateY(10px)' : 'translateY(0)',
        }}>
          <p style={{
            fontFamily: 'var(--font-hindi)',
            fontSize: 'clamp(18px, 2.5vw, 28px)',
            fontWeight: 700,
            color: 'white',
            lineHeight: 1.6,
            marginBottom: 16,
            textShadow: '0 2px 10px rgba(0,0,0,0.2)',
          }}>{q.hindi}</p>
          <p style={{
            fontFamily: 'var(--font-english)',
            fontSize: 'clamp(14px, 1.5vw, 18px)',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.8)',
            lineHeight: 1.6,
            marginBottom: 32,
            fontStyle: 'italic',
          }}>{q.english}</p>
          <div style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.3)',
            padding: '8px 24px', borderRadius: 50,
            fontFamily: 'var(--font-english)', fontSize: 13,
            color: 'rgba(255,255,255,0.9)', fontWeight: 500,
          }}>— {q.context}</div>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 48 }}>
          {quotes.map((_, i) => (
            <button key={i} onClick={() => changeQuote(i)} style={{
              width: i === current ? 32 : 10,
              height: 10, borderRadius: 5,
              background: i === current ? 'white' : 'rgba(255,255,255,0.4)',
              border: 'none', cursor: 'pointer',
              transition: 'all 0.3s',
              padding: 0,
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}
