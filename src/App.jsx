import { useScroll, useSpring, motion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import useLenis from './hooks/useLenis';
import GlobalBackground from './components/GlobalBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/About';
import HowItWorks from './components/HowItWorks';
import BlogSection from './components/BlogSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  useLenis();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <>
      <GlobalBackground />
      <motion.div className="progress-bar" style={{ scaleX, background: 'var(--text-primary)' }} />
      <Navbar />
      
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <AboutUs /> 
        {/* <FeatureShowcase /> <-- Agar yeh likha hai, toh isko DELETE kar do */}
        <HowItWorks />
        <BlogSection />
        <CTASection />
      </main>
      
      <Footer />
      <Analytics />
    </>
  );
}