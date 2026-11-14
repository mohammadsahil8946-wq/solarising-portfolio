import { motion, useScroll, useTransform } from 'framer-motion';

export default function GlobalBackground() {
  const { scrollYProgress } = useScroll();

  // Scroll ke hisaab se top sky layer fade out hogi
  const skyOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7], [1, 0.6, 0]);
  
  // Middle layer ka transition
  const middleOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.8, 1]);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: -1, background: '#f4f1ee' }}>
      
      {/* 1. Middle Layer (Soft Light Blue to Cream) */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, #e2ebf3 0%, #f4f1ee 100%)',
          opacity: middleOpacity,
        }}
      />

      {/* 2. Top Layer (Exact Hero Sky Blue Gradient) */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          // Yeh exactly tumhari pehli screenshot jaisa gradient hai
          background: 'radial-gradient(circle at 50% 0%, #a3c5e3 0%, #d4e4f0 60%, #e2ebf3 100%)',
          opacity: skyOpacity,
        }}
      />
      
    </div>
  );
}