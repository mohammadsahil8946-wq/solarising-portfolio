// src/components/Contact.jsx
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

export default function Contact() {
  return (
    <section id="contact" style={{ textAlign: 'center' }}>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Let's build something.
      </motion.h2>
      <div style={{ marginTop: '3rem' }}>
        <Magnetic>
          <a
            href="mailto:hello@example.com"
            style={{
              display: 'inline-block',
              padding: '1rem 2.5rem',
              background: '#a78bfa',
              color: '#000',
              borderRadius: 999,
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            Say hello →
          </a>
        </Magnetic>
      </div>
    </section>
  );
}