import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// 👇 EXACTLY 3 CARDS KA DATA 👇
const cardsData = [
  {
    title: 'Sustainability',
    desc: 'Every installation reduces your carbon footprint and contributes to a greener, cleaner tomorrow for the next generation.',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Innovation',
    desc: 'Using cutting-edge solar tech and smart inverters to ensure maximum efficiency and real-time monitoring for your peace of mind.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Community',
    desc: 'Empowering local homes and businesses with true energy independence. Join the solar revolution and save more every month.',
    image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=800&auto=format&fit=crop',
  }
];

// 👇 3D STACKED CARD COMPONENT 👇
function Card({ i, data, progress, total, isMobile }) {
  const isFirst = i === 0;
  const isLast = i === total - 1;
  const step = 1 / total;

  const start = isFirst ? 0 : (i - 1) * step;
  const mid = i * step;
  const end = isLast ? 1 : (i + 1) * step;
  const inputRange = isFirst ? [0, mid, end] : isLast ? [start, mid, 1] : [start, mid, end];

  const y = useTransform(progress, inputRange, [
    isFirst ? '0%' : '100%', 
    '0%',                    
    isLast ? '0%' : '-100%'  
  ]);

  const rotateX = useTransform(progress, inputRange, [
    isFirst ? 0 : -20,       
    0,                       
    isLast ? 0 : 20          
  ]);

  const textOpacity = useTransform(progress, inputRange, [
    isFirst ? 1 : 0,   
    1,                 
    isLast ? 1 : 0     
  ]);

  const scale = useTransform(progress, inputRange, [
    isFirst ? 1 : 0.95,
    1,
    isLast ? 1 : 0.95
  ]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: '100%',
        maxWidth: isMobile ? '95%' : '1300px',
        // Mobile par height zyada rakhi hai taaki content fit ho jaye
        height: isMobile ? '75vh' : '60vh', 
        minHeight: isMobile ? '550px' : '450px',
        background: '#ffffff',
        borderRadius: isMobile ? '32px' : '40px',
        padding: isMobile ? '1.2rem' : '1.5rem',
        // 👇 MOBILE PAR FLEX DIRECTION COLUMN HO JAYEGA 👇
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row', 
        gap: isMobile ? '1.5rem' : '3rem',
        boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
        border: '1px solid rgba(0,0,0,0.05)',
        y,
        rotateX,
        scale,
        transformPerspective: 1200, 
        transformOrigin: 'bottom center',
        zIndex: total - i,
      }}
    >
      {/* 📸 DIV 1: IMAGE */}
      <div style={{ 
        flex: isMobile ? '0 0 40%' : '1 1 400px', // Mobile par 40% height legi
        width: '100%',
        borderRadius: '24px', 
        overflow: 'hidden', 
        background: '#e2ebf3',
        height: isMobile ? '220px' : '100%',
      }}>
        <img 
          src={data.image} 
          alt={data.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>

      {/* 📝 DIV 2: TEXT */}
      <motion.div style={{ 
        flex: '1 1 400px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        padding: isMobile ? '0.5rem' : '2rem',
        opacity: textOpacity 
      }}>
        <h3 style={{ 
          fontSize: isMobile ? '2rem' : 'clamp(2rem, 4vw, 3.5rem)', 
          fontWeight: 800, 
          color: 'var(--text-primary)', 
          marginBottom: isMobile ? '1rem' : '1.5rem', 
          letterSpacing: '-0.04em', 
          lineHeight: 1.1 
        }}>
          {data.title}
        </h3>
        <p style={{ 
          fontSize: isMobile ? '1rem' : '1.2rem', 
          color: 'var(--text-secondary)', 
          lineHeight: 1.6 
        }}>
          {data.desc}
        </p>
        
        <div style={{
          width: '100px',
          height: '6px',
          background: 'linear-gradient(90deg, #FEF08A 0%, #BAE6FD 100%)',
          borderRadius: '10px',
          marginTop: isMobile ? '1.5rem' : '2rem'
        }} />
      </motion.div>
    </motion.div>
  );
}

// 👇 MAIN ABOUT US SECTION 👇
export default function AboutUs() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Screen size check karne ke liye
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* 1. HEADER */}
      <section id="about" style={{ padding: isMobile ? '6rem 5vw 2rem 5vw' : '8rem 5vw 4rem 5vw', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: isMobile ? '8px 16px' : '10px 24px',
            background: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            borderRadius: '999px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
            marginBottom: isMobile ? '1.5rem' : '2.5rem'
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-blue)' }}
          />
          <span style={{ fontSize: isMobile ? '0.9rem' : '1.1rem', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '0.02em' }}>
            Who We Are
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: isMobile ? '3rem' : 'clamp(3.5rem, 8vw, 7rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            background: 'linear-gradient(180deg, var(--text-primary) 0%, rgba(17,17,17,0.2) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0
          }}
        >
          About Us
        </motion.h2>
      </section>

      {/* 2. STACKED 3D CARDS SECTION */}
      <section ref={containerRef} style={{ height: '300vh', position: 'relative' }}>
        <div style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          perspective: '1200px' 
        }}>
          {cardsData.map((data, i) => (
            <Card 
              key={i} 
              i={i} 
              data={data} 
              progress={smoothProgress} 
              total={cardsData.length} 
              isMobile={isMobile} // 👈 Mobile prop pass kiya
            />
          ))}
        </div>
      </section>
    </>
  );
}