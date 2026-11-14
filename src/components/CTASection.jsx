import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};
const wordVariant = {
  hidden: { y: '100%', opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function CTASection() {
  const sectionRef = useRef(null);
  const headline = "You could be losing CRORES in electricity bills.";

  // Section ke scroll ko track karna (0 = jab section enter ho, 1 = jab bahar jaye)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // ☁️ LEFT CLOUD TRANSFORMATIONS (Scroll ke hisaab se paas aayega)
  const leftCloudX = useTransform(scrollYProgress, [0, 1], ['-25vw', '5vw']); // Left se centre ki taraf
  const leftCloudY = useTransform(scrollYProgress, [0, 1], ['15vh', '-15vh']);
  const leftCloudScale = useTransform(scrollYProgress, [0, 1], [0.6, 1.5]); // 60% se 150% bada hoga (paas aayega)
  const leftCloudOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.7, 1]);

  // ☁️ RIGHT CLOUD TRANSFORMATIONS (Scroll ke hisaab se paas aayega)
  const rightCloudX = useTransform(scrollYProgress, [0, 1], ['25vw', '-5vw']); // Right se centre ki taraf
  const rightCloudY = useTransform(scrollYProgress, [0, 1], ['-15vh', '15vh']);
  const rightCloudScale = useTransform(scrollYProgress, [0, 1], [0.6, 1.5]);
  const rightCloudOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.7, 1]);

  return (
    <section 
      ref={sectionRef}
      style={{ 
        padding: '10rem 5vw', 
        position: 'relative', 
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        minHeight: '90vh'
      }}
    >
      
      {/* ☁️ LEFT CLOUD (Parallax Wrapper + Floating Inner) */}
      <motion.div
        style={{
          position: 'absolute',
          left: '-5%',
          top: '15%',
          x: leftCloudX,
          y: leftCloudY,
          scale: leftCloudScale,
          opacity: leftCloudOpacity,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        {/* Andar wala div hamesha float karta rahega */}
        <motion.img
          animate={{ x: [0, 30, 0], y: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          src="/image/image22.png" 
          alt="cloud left"
          style={{ width: '45vw', maxWidth: '600px', display: 'block' }}
        />
      </motion.div>

      {/* ☁️ RIGHT CLOUD (Parallax Wrapper + Floating Inner) */}
      <motion.div
        style={{
          position: 'absolute',
          right: '-5%',
          bottom: '15%',
          x: rightCloudX,
          y: rightCloudY,
          scale: rightCloudScale,
          opacity: rightCloudOpacity,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <motion.img
          animate={{ x: [0, -30, 0], y: [0, 15, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          src="/image/image22.png"
          alt="cloud right"
          style={{ width: '45vw', maxWidth: '600px', display: 'block' }}
        />
      </motion.div>

      {/* CONTENT */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px' }}>
        
        <motion.h2
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0 0.25em',
            marginBottom: '2rem'
          }}
        >
          {headline.split(" ").map((word, i) => (
            <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
              <motion.span variants={wordVariant} style={{ display: 'inline-block' }}>
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginBottom: '3rem' }}
        >
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
            The worst thing you could do is wait for later.
          </p>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
            The best thing? Call us today!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.5, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a 
            href="#contact" 
            style={{
              display: 'inline-block',
              background: '#111111',
              color: '#ffffff',
              padding: '1.2rem 3rem',
              borderRadius: '999px',
              fontWeight: 600,
              fontSize: '1.1rem',
              textDecoration: 'none',
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              transition: 'box-shadow 0.3s ease'
            }}
          >
            Talk to us
          </a>
        </motion.div>

      </div>
    </section>
  );
}