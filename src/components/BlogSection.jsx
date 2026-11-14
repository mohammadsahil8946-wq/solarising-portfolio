import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const blogs = [
  {
    id: 1,
    tag: 'Solar 101',
    date: 'Nov 12, 2026',
    title: 'How Solar Panels Actually Work',
    desc: 'Demystifying the science behind photovoltaic cells and how sunlight turns into electricity for your home.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    tag: 'Savings',
    date: 'Oct 28, 2026',
    title: '5 Myths About Solar Installation',
    desc: 'Think solar is too expensive or only works in summer? Let us break down the most common myths.',
    image: 'https://images.unsplash.com/photo-1548613053-22087dd8edb8?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    tag: 'Maintenance',
    date: 'Oct 15, 2026',
    title: 'Do Solar Panels Need Cleaning?',
    desc: 'A simple guide on keeping your panels efficient and maximizing your return on investment.',
    image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    tag: 'Technology',
    date: 'Sep 30, 2026',
    title: 'Latest Inverter Technology in 2026',
    desc: 'Why upgrading to a smart hybrid inverter can save you even more money during power outages.',
    image: 'https://images.unsplash.com/photo-1584276433295-85aee8a0c9b0?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    tag: 'Case Study',
    date: 'Sep 12, 2026',
    title: 'How a 10kW System Saved a Villa ₹2L/yr',
    desc: 'A deep dive into a recent installation and the real-world financial impact it had on the owners.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop',
  },
];

export default function BlogSection() {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"], 
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} style={{ height: '400vh', position: 'relative' }}>
      
      <div style={{ 
        position: 'sticky', 
        top: 0, 
        height: '100vh', 
        overflow: 'hidden', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'flex-start',
        paddingTop: '12vh', 
        paddingBottom: '4vh',
        gap: '3rem' 
      }}>
        
        {/* 👇 UPDATED PREMIUM HEADER 👇 */}
        <div style={{ padding: '0 8vw', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          
          {/* Glassmorphism Pill Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 24px',
              background: 'rgba(255, 255, 255, 0.5)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              borderRadius: '999px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
              marginBottom: '1.5rem'
            }}
          >
            {/* Pulsing Dot (Orange Accent) */}
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-orange)' }}
            />
            <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '0.02em' }}>
              Latest Insights
            </span>
          </motion.div>

          {/* Massive Gradient Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              background: 'linear-gradient(180deg, var(--text-primary) 0%, rgba(17,17,17,0.2) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: 0
            }}
          >
            From the Blog
          </motion.h2>
        </div>

        {/* Horizontally Scrolling Cards Wrapper */}
        <motion.div style={{ x, display: 'flex', gap: '3vw', padding: '0 8vw', alignItems: 'flex-start' }}>
          {blogs.map((blog) => (
            <div
              key={blog.id}
              style={{
                width: 'clamp(300px, 40vw, 500px)',
                flexShrink: 0,
                background: 'rgba(255, 255, 255, 0.7)', 
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                borderRadius: '32px',
                overflow: 'hidden',
                boxShadow: '0 24px 48px rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  style={{ 
                    width: '100%', height: '100%', objectFit: 'cover',
                    transition: 'transform 0.6s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                  <span style={{ 
                    fontFamily: 'Fragment Mono, monospace',
                    fontSize: '0.75rem', 
                    color: 'var(--text-primary)',
                    background: 'rgba(0,0,0,0.05)',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '50px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {blog.tag}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                    {blog.date}
                  </span>
                </div>
                
                <h3 style={{ 
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', 
                  fontWeight: 800, 
                  letterSpacing: '-0.03em',
                  color: 'var(--text-primary)', 
                  lineHeight: 1.15, 
                  marginBottom: '1rem' 
                }}>
                  {blog.title}
                </h3>
                
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '1.05rem', 
                  lineHeight: 1.6, 
                  marginBottom: '2rem', 
                  flexGrow: 1 
                }}>
                  {blog.desc}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontWeight: 600, fontSize: '1rem' }}>
                  Read Article 
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}