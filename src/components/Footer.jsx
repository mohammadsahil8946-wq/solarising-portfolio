import { motion } from 'framer-motion';

// Navbar wala hi Logo SVG use kar rahe hain
const LogoIcon = () => (
  <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="20" stroke="#0B2C4D" strokeWidth="3"/>
    <path d="M50 10 V20 M50 80 V90 M10 50 H20 M80 50 H90 M21.7 21.7 L28.8 28.8 M71.2 71.2 L78.3 78.3 M21.7 78.3 L28.8 71.2 M71.2 28.8 L78.3 21.7" stroke="#0B2C4D" strokeWidth="3" strokeLinecap="round"/>
    <path d="M52 38 L44 52 H50 L48 62 L56 48 H50 L52 38Z" fill="#0B2C4D"/>
  </svg>
);

export default function Footer() {
  const pages = ['Home', 'Why Solar', 'How it works', 'Blog'];
  const information = ['Contact', 'About us', 'Privacy', 'Terms of use'];

  // Hover karne par link thoda right shift hoga
  const linkHover = {
    initial: { x: 0, color: 'var(--text-secondary)' },
    hover: { x: 5, color: 'var(--text-primary)' }
  };

  return (
    <footer style={{ padding: '0 5vw 3rem 5vw', position: 'relative', zIndex: 1 }}>
      
      {/* Main Glass Card Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: 'rgba(255, 255, 255, 0.4)', // Glassmorphism effect
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.7)',
          borderRadius: '40px',
          padding: 'clamp(2rem, 5vw, 4rem)',
          maxWidth: '1400px',
          margin: '0 auto',
          boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
        }}
      >
        {/* Top Section: Logo & Links */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          flexWrap: 'wrap', 
          gap: '4rem',
          marginBottom: '3rem'
        }}>
          
          {/* Left Column (Logo, Text, Contact) */}
          <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
              <LogoIcon />
              <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0B2C4D', letterSpacing: '-0.03em' }}>
                Solarising
              </span>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Helping you turn sunlight into savings.
            </p>
            
            <div style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8 }}>
              <a href="mailto:hello@solarising.in" style={{ display: 'block', color: 'inherit', textDecoration: 'none', marginBottom: '0.5rem' }}>
                hello@solarising.in
              </a>
              <a href="tel:+919270171647" style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}>
                +91 92701 71647
              </a>
            </div>
          </div>

          {/* Right Columns (Links) */}
          <div style={{ display: 'flex', gap: 'clamp(3rem, 8vw, 8rem)', flexWrap: 'wrap' }}>
            
            {/* Pages Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <h4 style={{ fontFamily: 'Fragment Mono, monospace', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                Pages
              </h4>
              {pages.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                  variants={linkHover}
                  initial="initial"
                  whileHover="hover"
                  style={{ textDecoration: 'none', fontSize: '1.05rem', width: 'fit-content' }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Information Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <h4 style={{ fontFamily: 'Fragment Mono, monospace', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                Information
              </h4>
              {information.map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  variants={linkHover}
                  initial="initial"
                  whileHover="hover"
                  style={{ textDecoration: 'none', fontSize: '1.05rem', width: 'fit-content' }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

          </div>
        </div>

        {/* Divider Line */}
        <div style={{ height: '1px', background: 'rgba(0,0,0,0.08)', width: '100%', marginBottom: '2rem' }} />

        {/* Bottom Section: Copyright */}
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            © {new Date().getFullYear()} Solarising. All rights reserved.
          </p>
        </div>

      </motion.div>
    </footer>
  );
}