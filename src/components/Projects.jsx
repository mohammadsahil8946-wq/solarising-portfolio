import { motion } from 'framer-motion';

const projects = [
  { title: 'Riverside Villa',      tag: '6 kW · Residential',   image: 'https://placehold.co/800x600/f4e6da/156cc2?text=Project+1' },
  { title: 'Tech Park Block A',    tag: '120 kW · Commercial',  image: 'https://placehold.co/800x600/f4e6da/cf8d13?text=Project+2' },
  { title: 'Sunrise Apartments',   tag: '45 kW · Residential',  image: 'https://placehold.co/800x600/f4e6da/0ea158?text=Project+3' },
  { title: 'Green Valley Farm',    tag: '30 kW · Agricultural', image: 'https://placehold.co/800x600/f4e6da/84b9ef?text=Project+4' },
];

export default function Projects() {
  return (
    <section id="projects">
      <p className="mono-label">Case studies</p>
      <h2 style={{ marginTop: '1rem', marginBottom: '3.5rem' }}>Selected projects</h2>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}
      >
        {projects.map((p) => (
          <motion.article
            key={p.title}
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
            whileHover={{ y: -8, scale: 1.01 }}
            style={{
              background: 'var(--bg-card)',
              borderRadius: 20,
              overflow: 'hidden',
              border: '1px solid var(--border-color)',
              cursor: 'pointer',
            }}
          >
            <div style={{ aspectRatio: '4 / 3', overflow: 'hidden', background: 'var(--bg-secondary)' }}>
              {/* 🖼️ PROJECT IMAGE — replace src later */}
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.35rem' }}>{p.title}</h3>
              <p className="mono-label" style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                {p.tag}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}