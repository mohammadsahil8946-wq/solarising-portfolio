import { motion } from 'framer-motion';

const options = [
  {
    title: 'Reduce bills with one-time investment',
    desc: 'Own your system outright. Best long-term savings.',
    // 🖼️ OPTION 1 IMAGE — replace later
    image: 'https://placehold.co/800x600/f4e6da/156cc2?text=Option+1',
  },
  {
    title: 'Reduce bills with zero upfront investment',
    desc: 'Lease or EMI options. Start saving from day one.',
    // 🖼️ OPTION 2 IMAGE — replace later
    image: 'https://placehold.co/800x600/f4e6da/cf8d13?text=Option+2',
  },
];

export default function Options() {
  return (
    <section id="options" style={{ background: 'var(--bg-secondary)' }}>
      <p className="mono-label">How it works</p>
      <h2 style={{ marginTop: '1rem', marginBottom: '3.5rem', maxWidth: 700 }}>
        Choose how you want to go Solar
      </h2>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}
      >
        {options.map((opt) => (
          <motion.article
            key={opt.title}
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            style={{
              background: 'var(--bg-card)',
              borderRadius: 24,
              overflow: 'hidden',
              border: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ aspectRatio: '4 / 3', overflow: 'hidden', background: 'var(--bg-secondary)' }}>
              <img
                src={opt.image}
                alt={opt.title}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{opt.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{opt.desc}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}