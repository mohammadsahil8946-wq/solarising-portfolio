import { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

function Counter({ value, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 1.8, ease: [0.22, 1, 0.36, 1] });
    }
  }, [isInView, value, count]);

  return (
    <span
      ref={ref}
      style={{
        fontSize: 'clamp(2.5rem, 6vw, 4rem)',
        fontWeight: 800,
        color: 'var(--text-primary)',
      }}
    >
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    { value: 99, suffix: '%', label: 'Customer satisfaction' },
    { value: 8, suffix: ' MW+', label: 'Solar installed' },
    { value: 100, suffix: '+', label: 'Projects completed' },
    { value: 25, suffix: ' yr', label: 'Warranty coverage' },
  ];

  return (
    <section
      style={{
        background: 'var(--bg-secondary)',
        padding: '5rem 8vw',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '2.5rem',
      }}
    >
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
        >
          <Counter value={s.value} suffix={s.suffix} />
          <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', fontSize: '0.95rem' }}>
            {s.label}
          </p>
        </motion.div>
      ))}
    </section>
  );
}