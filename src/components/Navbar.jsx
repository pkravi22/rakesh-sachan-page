import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'परिचय', href: '#about' },
  { label: 'उपलब्धियां', href: '#achievements' },
  { label: 'योगदान', href: '#contributions' },
  { label: 'गैलरी', href: '#gallery' },
  { label: 'समयरेखा', href: '#timeline' },
  { label: 'संपर्क', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      transition: 'all 0.4s ease',
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
      boxShadow: scrolled ? '0 2px 30px rgba(0,0,0,0.1)' : 'none',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Logo with real photo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <div style={{
            width: 46, height: 46, borderRadius: '50%',
            overflow: 'hidden', flexShrink: 0,
            border: '2px solid',
            borderColor: scrolled ? '#F57C00' : 'rgba(255,255,255,0.7)',
            boxShadow: '0 4px 15px rgba(245,124,0,0.35)',
            transition: 'border-color 0.4s',
          }}>
            <img src="/assets/rakesh_sachan.jpg" alt="Rakesh Sachan"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-hindi)', fontWeight: 800, fontSize: 16, color: scrolled ? '#121212' : 'white', lineHeight: 1.2, transition: 'color 0.4s' }}>राकेश सचान</div>
            <div style={{ fontFamily: 'var(--font-english)', fontSize: 10, fontWeight: 600, letterSpacing: 1, color: scrolled ? '#F57C00' : 'rgba(255,255,255,0.85)', textTransform: 'uppercase', transition: 'color 0.4s' }}>Cabinet Minister, UP</div>
          </div>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="desktop-nav">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} style={{
              padding: '8px 14px', fontFamily: 'var(--font-hindi)', fontSize: 14, fontWeight: 600,
              color: scrolled ? '#121212' : 'rgba(255,255,255,0.92)', borderRadius: 8, transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.target.style.color = '#F57C00'; e.target.style.background = scrolled ? 'rgba(245,124,0,0.08)' : 'rgba(255,255,255,0.15)'; }}
            onMouseLeave={e => { e.target.style.color = scrolled ? '#121212' : 'rgba(255,255,255,0.92)'; e.target.style.background = 'transparent'; }}
            >{link.label}</a>
          ))}
          <a href="tel:09415044666" style={{
            display: 'flex', alignItems: 'center', gap: 6, padding: '9px 20px',
            background: 'linear-gradient(135deg,#F57C00,#E65100)', color: 'white',
            borderRadius: 50, fontSize: 13, fontFamily: 'var(--font-hindi)', fontWeight: 600,
            boxShadow: '0 4px 15px rgba(245,124,0,0.35)', marginLeft: 8, transition: 'all 0.3s',
            textDecoration: 'none',
          }}>
            <Phone size={14} /> जनसंपर्क
          </a>
        </div>

        {/* Mobile btn */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', color: scrolled ? '#121212' : 'white', padding: 8, border: 'none', cursor: 'pointer' }} className="mobile-menu-btn">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div style={{ background: 'white', padding: '16px 24px 24px', boxShadow: '0 10px 40px rgba(0,0,0,0.15)' }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '12px 0', fontFamily: 'var(--font-hindi)', fontSize: 16, fontWeight: 600, color: '#121212', borderBottom: '1px solid #f0f0f0', textDecoration: 'none' }}>{link.label}</a>
          ))}
        </div>
      )}
      <style>{`@media(max-width:768px){.desktop-nav{display:none!important;}.mobile-menu-btn{display:flex!important;}}`}</style>
    </nav>
  );
}
