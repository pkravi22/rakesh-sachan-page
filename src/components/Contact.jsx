import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', phone: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section section-cream">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }} className="fade-up">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">जनसंपर्क <span>करें</span></h2>
          <div className="saffron-divider" style={{ margin: '16px auto' }} />
          <p className="section-subtitle" style={{ margin: '0 auto' }}>आपकी बात हमारी प्राथमिकता — Your voice matters to us</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 48, alignItems: 'start' }}>
          {/* Info */}
          <div className="fade-left">
            <div style={{ background: 'linear-gradient(135deg,#F57C00,#E65100)', borderRadius: 28, padding: '40px 36px', color: 'white', marginBottom: 24, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
              <div style={{ position: 'absolute', bottom: -30, left: -30, width: 150, height: 150, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />

              <h3 style={{ fontFamily: 'var(--font-hindi)', fontSize: 24, fontWeight: 800, marginBottom: 6, position: 'relative' }}>संपर्क जानकारी</h3>
              <p style={{ fontFamily: 'var(--font-english)', fontSize: 13, opacity: 0.85, marginBottom: 32, position: 'relative' }}>Contact Information</p>

              {[
                { icon: <Phone size={18} />, label: 'फोन', value: '094150 44666', href: 'tel:09415044666' },
                { icon: <Mail size={18} />, label: 'ईमेल', value: 'rakeshsachanmp@gmail.com', href: 'mailto:rakeshsachanmp@gmail.com' },
                { icon: <MapPin size={18} />, label: 'कार्यालय', value: 'MLA Office, Uttar Pradesh', href: null },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, marginBottom: 24, alignItems: 'flex-start', position: 'relative' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-hindi)', fontSize: 13, fontWeight: 700, opacity: 0.85 }}>{item.label}</div>
                    {item.href
                      ? <a href={item.href} style={{ fontFamily: 'var(--font-english)', fontSize: 14, opacity: 0.95, color: 'white', fontWeight: 600 }}>{item.value}</a>
                      : <div style={{ fontFamily: 'var(--font-english)', fontSize: 13, opacity: 0.8 }}>{item.value}</div>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div style={{ background: 'white', borderRadius: 20, padding: '28px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
              <h4 style={{ fontFamily: 'var(--font-hindi)', fontSize: 16, fontWeight: 700, color: '#121212', marginBottom: 16 }}>सोशल मीडिया</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { icon: '📘', label: 'Facebook', handle: 'Rakesh Sachan', color: '#1877F2', href: 'https://www.facebook.com/RakeshSachanBJP/' },
                  { icon: '📸', label: 'Instagram', handle: '@rakesh_sachan', color: '#E1306C', href: 'https://instagram.com/rakesh_sachan' },
                  { icon: '𝕏', label: 'X (Twitter)', handle: '@RakeshSachan_', color: '#000000', href: 'https://twitter.com/RakeshSachan_' },
                  { icon: '💬', label: 'Messenger', handle: 'Rakesh Sachan', color: '#0084FF', href: 'https://m.me/RakeshSachanBJP' },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noreferrer" style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '12px 16px',
                    background: `${s.color}08`,
                    borderRadius: 12,
                    border: `1px solid ${s.color}20`,
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = `${s.color}15`; e.currentTarget.style.transform = 'translateX(4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = `${s.color}08`; e.currentTarget.style.transform = 'none'; }}
                  >
                    <span style={{ fontSize: 20, lineHeight: 1 }}>{s.icon}</span>
                    <div>
                      <div style={{ fontFamily: 'var(--font-english)', fontSize: 13, fontWeight: 700, color: '#121212' }}>{s.label}</div>
                      <div style={{ fontFamily: 'var(--font-english)', fontSize: 12, color: s.color, fontWeight: 600 }}>{s.handle}</div>
                    </div>
                    <div style={{ marginLeft: 'auto', color: s.color, fontSize: 16 }}>→</div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="fade-right">
            <div style={{ background: 'white', borderRadius: 28, padding: '40px', boxShadow: '0 8px 40px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontFamily: 'var(--font-hindi)', fontSize: 22, fontWeight: 800, color: '#121212', marginBottom: 6 }}>संदेश भेजें</h3>
              <p style={{ fontFamily: 'var(--font-english)', fontSize: 13, color: '#888', marginBottom: 28 }}>We respond within 24–48 hours</p>

              {sent && (
                <div style={{ background: '#E8F5E9', border: '1px solid #4CAF50', borderRadius: 12, padding: '14px 20px', marginBottom: 24, fontFamily: 'var(--font-hindi)', fontSize: 14, color: '#2E7D32', fontWeight: 600 }}>
                  ✅ आपका संदेश सफलतापूर्वक भेजा गया। धन्यवाद!
                </div>
              )}

              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {[
                  { key: 'name', label: 'पूरा नाम *', placeholder: 'आपका नाम', type: 'text' },
                  { key: 'phone', label: 'मोबाइल नंबर', placeholder: '+91 XXXXXXXXXX', type: 'tel' },
                  { key: 'subject', label: 'विषय *', placeholder: 'संदेश का विषय', type: 'text' },
                ].map(f => (
                  <div key={f.key}>
                    <label style={{ fontFamily: 'var(--font-hindi)', fontSize: 13, fontWeight: 600, color: '#444', display: 'block', marginBottom: 6 }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} value={form[f.key]}
                      onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                      required={f.key !== 'phone'}
                      style={{ width: '100%', padding: '12px 16px', border: '2px solid #f0f0f0', borderRadius: 12, fontFamily: 'var(--font-hindi)', fontSize: 14, color: '#121212', outline: 'none', transition: 'border-color 0.2s', background: '#fafafa' }}
                      onFocus={e => e.target.style.borderColor = '#F57C00'}
                      onBlur={e => e.target.style.borderColor = '#f0f0f0'}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ fontFamily: 'var(--font-hindi)', fontSize: 13, fontWeight: 600, color: '#444', display: 'block', marginBottom: 6 }}>संदेश *</label>
                  <textarea placeholder="अपना संदेश यहां लिखें..." value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    required rows={4}
                    style={{ width: '100%', padding: '12px 16px', border: '2px solid #f0f0f0', borderRadius: 12, fontFamily: 'var(--font-hindi)', fontSize: 14, color: '#121212', outline: 'none', transition: 'border-color 0.2s', background: '#fafafa', resize: 'vertical' }}
                    onFocus={e => e.target.style.borderColor = '#F57C00'}
                    onBlur={e => e.target.style.borderColor = '#f0f0f0'}
                  />
                </div>
                <button type="submit" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                  padding: '14px 32px', background: 'linear-gradient(135deg,#F57C00,#E65100)',
                  color: 'white', borderRadius: 50, fontFamily: 'var(--font-hindi)', fontSize: 16, fontWeight: 700,
                  boxShadow: '0 6px 20px rgba(245,124,0,0.4)', transition: 'all 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(245,124,0,0.5)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(245,124,0,0.4)'; }}
                >
                  <Send size={18} /> संदेश भेजें
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){#contact .container>div:last-child{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
