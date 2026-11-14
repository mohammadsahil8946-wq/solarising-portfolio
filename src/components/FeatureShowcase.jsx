import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// Data
const features = [
  {
    title: 'Smart Energy Monitoring',
    desc: 'Track your solar generation and consumption in real-time with our intuitive dashboard. Maximize your savings effortlessly.',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Advanced Battery Storage',
    desc: 'Store excess energy during the day and power your home at night. Never worry about power cuts or rising bills again.',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Seamless Installation',
    desc: 'Our certified experts handle everything from mounting to wiring, ensuring a hassle-free experience from day one.',
    image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=800&auto=format&fit=crop',
  },
];

// 👇 INDIVIDUAL CARD COMPONENT 👇
function Card({ i, feature, progress, total }) {
  const isFirst = i === 0;
  const isLast = i === total - 1;
  const step = 1 / total;

  // Timeline calculations for this specific card
  const start = isFirst ? 0 : (i - 1) * step;
  const mid = i * step;
  const end = isLast ? 1 : (i + 1) * step;

  const inputRange = [start, mid, end];

  // 1. Y Translation (Card enters from bottom, leaves from top)
  const y = useTransform(progress, inputRange, [
    isFirst ? '0%' : '100%', // First card starts visible, others start from bottom
    '0%',                    // Center
    isLast ? '0%' : '-100%'  // Last card stays, others go up
  ]);

  // 2. Tilt Effect (Card tilts back when leaving or coming in)
  const rotateX = useTransform(progress, inputRange, [
    isFirst ? 0 : -30,       // Incoming from bottom: tilted forward
    0,                       // Center: flat
    isLast ? 0 : 30          // Outgoing to top: tilted backward
  ]);

  // 3. Text Opacity (User's requirement: text disappears when next card comes)
  const textOpacity = useTransform(progress, inputRange, [
    isFirst ? 1 : 0,         // Hidden when entering
    1,                       // Fully visible in center
    isLast ? 1 : 0           // Disappears when leaving
  ]);

  // 4. Scale (Slight shrink for depth)
  const scale = useTransform(progress, inputRange, [
    isFirst ? 1 : 0.9,
    1,
    isLast ? 1 : 0.9
  ]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: '100%',
        maxWidth: '1200px',
        height: '65vh',
        background: '#ffffff',
        borderRadius: '40px',
        padding: 'clamp(1.5rem, 3vw, 3rem)',
        display: 'flex',
        flexDirection: 'row', // Image Left, Text Right
        gap: 'clamp(1.5rem, 3vw, 3rem)',
        boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
        border: '1px solid rgba(0,0,0,0.05)',
        y,
        rotateX,
        scale,
        transformPerspective: 1200, // Crucial for 3D tilt effect
        transformOrigin: 'bottom center', // Tilts from the bottom
        zIndex: total - i, // Stacks cards properly
        flexWrap: 'wrap', // Responsive
      }}
    >
      {/* 📸 IMAGE DIV (Left) */}
      <div style={{ 
        flex: '1 1 350px', 
        borderRadius: '24px', 
        overflow: 'hidden', 
        background: '#e2ebf3',
        minHeight: '300px'
      }}>
        <img 
          src={feature.image} 
          alt={feature.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>

      {/* 📝 TEXT DIV (Right) - Fades out on scroll */}
      <motion.div style={{ 
        flex: '1 1 350px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        opacity: textOpacity // Text disappears
      }}>
        <h2 style={{ 
          fontSize: 'clamp(2rem, 4vw, 3.5rem)', 
          fontWeight: 800, 
          color: 'var(--text-primary)', 
          marginBottom: '1.5rem', 
          letterSpacing: '-0.04em', 
          lineHeight: 1.1 
        }}>
          {feature.title}
        </h2>
        <p style={{ 
          fontSize: '1.2rem', 
          color: 'var(--text-secondary)', 
          lineHeight: 1.6,
          maxWidth: '90%'
        }}>
          {feature.desc}
        </p>
      </motion.div>
    </motion.div>
  );
}

// 👇 MAIN SECTION COMPONENT 👇
export default function FeatureShowcase() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // 🌟 MAGIC SMOOTHNESS: Yeh scroll ko butter-smooth banata hai
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section 
      ref={containerRef} 
      style={{ 
        height: `${features.length * 100}vh`, // 3 cards = 300vh height
        position: 'relative' 
      }}
    >
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        perspective: '1200px' // Enables 3D space
      }}>
        {features.map((feature, i) => (
          <Card 
            key={i} 
            i={i} 
            feature={feature} 
            progress={smoothProgress} 
            total={features.length} 
          />
        ))}
      </div>
    </section>
  );
}