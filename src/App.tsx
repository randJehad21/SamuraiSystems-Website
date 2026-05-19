/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import EngineeredIntelligence from './components/sections/AISolutions';
import CoreServices from './components/sections/CoreServices';
import ComplianceSection from './components/sections/ComplianceSection';
import Industries from './components/sections/BCM';
import Outcomes from './components/sections/cyberSecurity';
import Partners from './components/sections/Partners';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import { motion, useScroll, useSpring } from 'motion/react';
import GlobalFootprint from './components/sections/GlobalFootprint';

import Testimonial from './components/sections/Testimonial';
import FinalCTA from './components/sections/Call-to-ActionSection';
import About from './components/sections/About';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <SmoothScroll>
      <div className="relative min-h-screen selection:bg-samurai-red selection:text-white font-body">
        {/* Scroll Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-samurai-red z-[60] origin-left"
          style={{ scaleX }}
        />

        <Navbar />
        
        <main className="bg-soft-white dark:bg-deep-black transition-colors duration-1000">
          <Hero />
          <About/>
          <Partners />
          <EngineeredIntelligence />
          <CoreServices />
          <Testimonial />
          <GlobalFootprint />
          <ComplianceSection />
          <Industries />
          <Outcomes />
          <FinalCTA />
          <Contact />
        </main>

        <Footer />
        
        {/* Cursor Blobs (Ambient Design) */}
        <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden">
          <div className="absolute top-[10%] -left-[10%] w-[800px] h-[800px] bg-samurai-red/5 rounded-full blur-[140px]" />
          <div className="absolute bottom-[10%] -right-[10%] w-[600px] h-[600px] bg-cyan-edge/5 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)]" />
        </div>
      </div>
    </SmoothScroll>
  );
}
