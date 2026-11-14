// src/components/Cursor.jsx
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40 });
  const sy = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const move = (e) => { x.set(e.clientX - 8); y.set(e.clientY - 8); };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  return (
    <motion.div
      style={{
        x: sx, y: sy,
        position: 'fixed',
        top: 0, left: 0,
        width: 16, height: 16,
        borderRadius: '50%',
        background: '#a78bfa',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
      }}
    />
  );
}