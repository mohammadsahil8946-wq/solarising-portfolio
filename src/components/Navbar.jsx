import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50);
  });

  const scrollTo = (id) => {
    setIsMobileMenuOpen(false);
    if (window.__lenis) {
      window.__lenis.scrollTo(id, { offset: -100 });
    }
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const links = [
    { label: 'Why solar', id: '#why-solar' },
    { label: 'How it works', id: '#how-it-works' },
    { label: 'Blog', id: '#blog' },
    { label: 'About us', id: '#about' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: scrolled && !isMobileMenuOpen ? '1rem' : '1.5rem',
          left: 0,
          right: 0,
          margin: '0 auto',
          width: '90%', 
          maxWidth: '1200px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.8rem 1.2rem',
          
          background: isMobileMenuOpen ? 'transparent' : scrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
          backdropFilter: isMobileMenuOpen ? 'none' : scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isMobileMenuOpen ? 'none' : scrolled ? 'blur(16px)' : 'none',
          border: isMobileMenuOpen ? '1px solid transparent' : scrolled ? '1px solid rgba(255, 255, 255, 0.6)' : '1px solid transparent',
          borderRadius: '999px',
          boxShadow: isMobileMenuOpen ? 'none' : scrolled ? '0 10px 30px rgba(0, 0, 0, 0.05)' : 'none',
          
          zIndex: 9999,
          transition: 'background 0.4s ease, border 0.4s ease, box-shadow 0.4s ease, top 0.4s ease',
          boxSizing: 'border-box',
        }}
      >
        {/* LOGO */}
        <motion.div 
          onClick={handleLogoClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', flexShrink: 0 }} 
        >
          <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="20" stroke="#0B2C4D" strokeWidth="4"/>
            <path d="M50 10 V20 M50 80 V90 M10 50 H20 M80 50 H90 M21.7 21.7 L28.8 28.8 M71.2 71.2 L78.3 78.3 M21.7 78.3 L28.8 71.2 M71.2 28.8 L78.3 21.7" stroke="#0B2C4D" strokeWidth="4" strokeLinecap="round"/>
            <path d="M52 38 L44 52 H50 L48 62 L56 48 H50 L52 38Z" fill="#0B2C4D"/>
          </svg>
          <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B2C4D', letterSpacing: '-0.03em', fontFamily: 'Inter, sans-serif' }}>
            Solarising
          </span>
        </motion.div>

        {/* DESKTOP LINKS */}
        <div className="nav-links-desktop">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              style={{
                background: 'none', border: 'none', color: 'var(--text-primary)', 
                fontWeight: 600, fontSize: '1.05rem', cursor: 'pointer', fontFamily: 'inherit',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-blue)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* RIGHT SIDE (Button + Toggle) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
          
          <button 
            onClick={() => scrollTo('#contact')}
            className="hidden-mobile-btn"
            style={{
              background: '#111', color: '#fff', padding: '0.6rem 1.5rem', borderRadius: '999px',
              border: 'none', fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer', 
              transition: 'all 0.3s ease', fontFamily: 'inherit'
            }}
          >
            Talk to us
          </button>

          {/* 👇 HAMBURGER TOGGLE (Fixed) 👇 */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              // 👇 display: 'flex' yahan se hata diya hai (CSS handle karegi)
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
            }}
          >
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              style={{ width: '18px', height: '2px', background: '#0B2C4D', borderRadius: '2px' }} 
            />
            <motion.span 
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              style={{ width: '18px', height: '2px', background: '#0B2C4D', borderRadius: '2px' }} 
            />
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              style={{ width: '18px', height: '2px', background: '#0B2C4D', borderRadius: '2px' }} 
            />
          </button>
        </div>
      </motion.nav>

      {/* FULL SCREEN MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }} 
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(244, 241, 238, 0.98)', 
              backdropFilter: 'blur(20px)',
              zIndex: 9998,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1.5rem' 
            }}
          >
            {links.map((l, i) => (
              <motion.button
                key={l.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (0.1 * i), duration: 0.5 }}
                onClick={() => scrollTo(l.id)}
                style={{
                  background: 'none', border: 'none', color: 'var(--text-primary)', 
                  fontWeight: 700, fontSize: '1.5rem', cursor: 'pointer', fontFamily: 'inherit',
                  letterSpacing: '-0.02em'
                }}
              >
                {l.label}
              </motion.button>
            ))}

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              onClick={() => scrollTo('#contact')}
              style={{
                marginTop: '1.5rem',
                background: '#111', color: '#fff', padding: '0.9rem 2.5rem', borderRadius: '999px',
                border: 'none', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', 
                fontFamily: 'inherit'
              }}
            >
              Talk to us
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}