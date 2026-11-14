// src/components/Skills.jsx
import { motion } from 'framer-motion';

const skills = ['React', 'TypeScript', 'Framer Motion', 'Three.js', 'Node.js', 'Tailwind'];

export default function Skills() {
  return (
    <section id="skills">
      <h2 style={{ marginBottom: '3rem' }}>Skills</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {skills.map((s, i) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: 'spring', stiffness: 200 }}
            style={{
              padding: '0.8rem 1.5rem',
              border: '1px solid #333',
              borderRadius: 999,
              fontSize: '1rem',
            }}
          >
            {s}
          </motion.span>
        ))}
      </div>
    </section>
  );
}