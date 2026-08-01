import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import Preloader from './Preloader';
import CustomCursor from './CustomCursor';

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  
  // Spring smooth scroll progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  });

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (loading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync Lenis scroll with hash changes (navigation)
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        const id = target.getAttribute('href');
        if (id === '#') {
          e.preventDefault();
          lenis.scrollTo(0);
        } else {
          const element = document.querySelector(id);
          if (element) {
            e.preventDefault();
            lenis.scrollTo(element, { offset: -80 });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader setLoading={setLoading} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative min-h-screen selection:bg-brand-primary selection:text-bg-dark"
        >
          {/* Custom cursor wrapper */}
          <CustomCursor />

          {/* Scroll progress bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-brand-primary origin-left z-[999]"
            style={{ scaleX }}
          />

          <main className="w-full">
            {children}
          </main>
        </motion.div>
      )}
    </>
  );
}
