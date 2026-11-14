import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section
      id="contact"
      style={{
        background: 'var(--text-primary)',
        color: 'var(--bg-primary)',
        textAlign: 'center',
        padding: '10rem 8vw',
        borderRadius: '32px 32px 0 0',
      }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mono-label"
        style={{ color: 'var(--accent-light-blue)' }}
      >
        Get started
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ marginTop: '1rem', fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
      >
        Ready to switch to solar?
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{ marginTop: '2.5rem' }}
      >
        <a
          href="mailto:hello@example.com"
          className="btn-primary"
          style={{ background: 'var(--accent-orange)' }}
        >
          Book a free consultation →
        </a>
      </motion.div>
    </section>
  );
}