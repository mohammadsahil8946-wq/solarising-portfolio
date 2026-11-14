import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// 👇 GRAPH VISUAL COMPONENT 👇
const GraphVisual = () => {
  return (
    <div style={{ background: '#fff', borderRadius: '24px', padding: '2.5rem', width: '100%', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0' }}>
      
      {/* Legend */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '3rem', color: '#334155', fontWeight: 500, fontSize: '1.1rem' }}>
        <div style={{ width: '20px', height: '20px', background: '#F59E0B', borderRadius: '6px' }} />
        Electricity Bill after Solarising
      </div>

      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {/* Y-Axis Label */}
        <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', color: '#64748B', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Annual Electricity Bill (Rs)
        </div>

        {/* Chart Area */}
        <div style={{ flex: 1, position: 'relative', height: '250px', borderLeft: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
          
          {/* Grid Lines */}
          <div style={{ position: 'absolute', top: '25%', width: '100%', height: '1px', background: '#F1F5F9' }} />
          <div style={{ position: 'absolute', top: '50%', width: '100%', height: '1px', background: '#F1F5F9' }} />
          <div style={{ position: 'absolute', top: '75%', width: '100%', height: '1px', background: '#F1F5F9' }} />

          {/* Orange Bars (Before Solar) */}
          <div style={{ position: 'absolute', bottom: 0, left: '10%', display: 'flex', alignItems: 'flex-end', gap: '8px', height: '100%', zIndex: 1 }}>
             <div style={{ width: '30px', height: '20%', background: '#F59E0B', borderRadius: '4px 4px 0 0' }} />
             <div style={{ width: '30px', height: '25%', background: '#F59E0B', borderRadius: '4px 4px 0 0' }} />
             <div style={{ width: '30px', height: '35%', background: '#F59E0B', borderRadius: '4px 4px 0 0' }} />
             <div style={{ width: '30px', height: '40%', background: '#F59E0B', borderRadius: '4px 4px 0 0' }} />
          </div>

          {/* Green Striped Area (Savings) */}
          <div style={{ 
            position: 'absolute', 
            bottom: 0, 
            right: 0, 
            width: '75%', 
            height: '80%', 
            background: 'repeating-linear-gradient(-45deg, rgba(74, 222, 128, 0.4), rgba(74, 222, 128, 0.4) 6px, transparent 6px, transparent 12px)',
            clipPath: 'polygon(0 100%, 20% 60%, 50% 40%, 100% 10%, 100% 100%)',
            zIndex: 0
          }} />

          {/* "SAVINGS" Badge */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: 'spring' }}
            style={{ 
              position: 'absolute', 
              bottom: '10%', 
              right: '5%', 
              background: '#22C55E', 
              color: '#fff', 
              padding: '8px 16px', 
              borderRadius: '8px', 
              fontWeight: 700, 
              fontSize: '1.2rem',
              letterSpacing: '0.05em',
              zIndex: 2,
              boxShadow: '0 10px 20px rgba(34, 197, 94, 0.3)'
            }}
          >
            SAVINGS
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// 👇 STEPS DATA (Ab 3 Cards Hain) 👇
const steps = [
  {
    id: 1,
    step: '01',
    tag: 'Analyze',
    title: 'Track Your Savings',
    desc: 'See exactly how much you save month over month. Our smart dashboard visualizes your electricity bills before and after solar installation.',
    visual: <GraphVisual />, 
    color: '#f4f1ee' 
  },
  {
    id: 2,
    step: '02',
    tag: 'Install',
    title: 'Seamless Setup',
    desc: 'Our certified team handles everything from mounting to wiring. You don\'t have to lift a finger. We finish the job in under 30 days.',
    visual: (
      <div style={{ width: '100%', height: '350px', borderRadius: '24px', overflow: 'hidden', border: '4px solid #fff', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
        {/* 👇 Nayi Working Image 👇 */}
        <img 
          src="https://images.unsplash.com/photo-1548613053-22087dd8edb8?q=80&w=800&auto=format&fit=crop" 
          alt="Installation" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
        />
      </div>
    ),
    color: '#e2ebf3' 
  },
  {
    id: 3,
    step: '03',
    tag: 'Relax',
    title: 'Zero Maintenance',
    desc: 'Sit back and enjoy the sun. Panels clean themselves with the rain, and our 25-year warranty covers you for a lifetime of free energy.',
    visual: (
      <div style={{ width: '100%', height: '350px', borderRadius: '24px', overflow: 'hidden', border: '4px solid #fff', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
        <img 
          src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=800&auto=format&fit=crop" 
          alt="Relax" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
        />
      </div>
    ),
    color: '#f4e6da' 
  },
];

// 👇 CARD COMPONENT 👇
function Card({ i, step, progress, range, targetScale }) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'sticky', top: 0 }}>
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          background: '#ffffff',
          borderRadius: '40px',
          padding: 'clamp(2.5rem, 5vw, 5rem)', 
          boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
          border: '1px solid rgba(0,0,0,0.05)',
          width: '100%',
          maxWidth: '1300px',
          minHeight: '65vh', 
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between', 
        }}
      >
        {/* Content Wrapper */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          flexWrap: 'wrap', 
          gap: '4rem',
          flexGrow: 1
        }}>
          {/* Left Content */}
          <div style={{ flex: '1 1 450px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <span style={{ 
                fontFamily: 'Fragment Mono, monospace', 
                fontSize: '1rem', 
                fontWeight: 600,
                background: step.color,
                padding: '0.5rem 1rem',
                borderRadius: '999px',
                color: 'var(--text-primary)'
              }}>
                Step {step.step}
              </span>
              <span style={{ color: 'var(--accent-blue)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem' }}>
                {step.tag}
              </span>
            </div>

            <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>
              {step.title}
            </h3>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '500px' }}>
              {step.desc}
            </p>
          </div>

          {/* Right Visual */}
          <div style={{ flex: '1 1 450px', display: 'flex', justifyContent: 'center' }}>
            {step.visual}
          </div>
        </div>

        {/* 👇 GRADIENT DIV (Bottom) 👇 */}
        <div style={{
          width: '100%',
          height: '80px',
          background: 'linear-gradient(90deg, #FEF08A 0%, #BAE6FD 100%)', 
          borderRadius: '20px',
          marginTop: '3rem',
          boxShadow: 'inset 0 2px 10px rgba(255,255,255,0.5)'
        }} />

      </motion.div>
    </div>
  );
}

// 👇 MAIN SECTION EXPORT 👇
export default function HowItWorks() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section id="how-it-works" ref={containerRef} style={{ position: 'relative' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', padding: '8rem 5vw 2rem 5vw' }}>
        <p className="mono-label">The Process</p>
        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, color: 'var(--text-primary)', marginTop: '1rem', letterSpacing: '-0.04em' }}>
          How it works
        </h2>
      </div>

      {/* Stacked Cards Container */}
      <div style={{ padding: '0 5vw 10rem 5vw' }}>
        {steps.map((step, i) => {
          const targetScale = 1 - ((steps.length - i) * 0.05);
          return (
            <Card 
              key={step.id} 
              i={i} 
              step={step} 
              progress={scrollYProgress} 
              range={[i * (1 / steps.length), 1]} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>

    </section>
  );
}