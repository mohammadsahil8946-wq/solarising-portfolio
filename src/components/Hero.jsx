import { motion } from 'framer-motion';

// 👇 UPDATED PREMIUM ANIMATION VARIANTS 👇
const container = {
  hidden: {},
  show: { 
    transition: { 
      staggerChildren: 0.1, // Thoda aur smooth delay words ke beech me
      delayChildren: 0.3 
    } 
  },
};

const wordVariant = {
  hidden: { 
    y: '110%', // Word ekdum neeche (mask ke bahar) se start hoga
    opacity: 0,
    filter: 'blur(8px)', // Blur effect se aayega
    rotateZ: 2, // Halka sa tilt (3D feel)
  },
  show: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    rotateZ: 0,
    transition: { 
      duration: 1.2, // Thoda slow aur smooth
      ease: [0.16, 1, 0.3, 1], // 'easeOutExpo' - yeh sabse smooth easing hoti hai
    },
  },
};

export default function Hero() {
  const headline = "Save upto 100% on electricity bills";

  return (
    <section style={{ padding: '12rem 5vw 8rem 5vw', position: 'relative', overflow: 'hidden' }}>
      
      {/* ☁️ PREMIUM CLOUDS */}
      <motion.img
        animate={{ x: [0, 30, 0], y: [0, -10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        src="/image/image11.png" 
        alt="cloud left"
        style={{ position: 'absolute', left: '-5%', top: '15%', width: '450px', opacity: 0.9, zIndex: 0, pointerEvents: 'none' }}
      />
      <motion.img
        animate={{ x: [0, -30, 0], y: [0, 15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        src="/image/image11.png"
        alt="cloud right"
        style={{ position: 'absolute', right: '-5%', top: '25%', width: '400px', opacity: 0.9, zIndex: 0, pointerEvents: 'none' }}
      />

      {/* 🚀 HERO CONTENT */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '1100px', margin: '0 auto' }}>
        
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          style={{
            fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
            fontWeight: 700,
            lineHeight: 1.1, // Line height thoda badhaya taaki letters cut na ho
            letterSpacing: '-0.04em',
            color: 'var(--text-primary)',
            marginBottom: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0 0.25em'
          }}
        >
          {headline.split(" ").map((word, i) => (
            // 👇 mask wrapper me padding add ki taaki 'y', 'g' jaisi letters cut na ho
            <span key={i} style={{ overflow: 'hidden', display: 'inline-block', paddingBottom: '0.1em', marginBottom: '-0.1em' }}>
              <motion.span variants={wordVariant} style={{ display: 'inline-block' }}>
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{
            fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.5,
            marginBottom: '3rem',
            fontWeight: 400
          }}
        >
          Complete solar installation in 30 days.<br />
          25-year warranty.<br />
          Zero upfront cost options.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <a href="#contact" className="btn-black" style={{ padding: '1.2rem 3rem', fontSize: '1.2rem' }}>
            Talk to us
          </a>
        </motion.div>

      </div>
    </section>
  );
}