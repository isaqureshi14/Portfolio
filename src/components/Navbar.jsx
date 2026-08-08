import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Magnetic from './Magnetic';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Services', id: 'services' },
    { name: 'Works', id: 'works' },
    { name: 'Blog', id: 'blog' },
  ];

  // Set active link based on scroll section intersection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section occupies center of viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe sections
    const sections = ['home', 'services', 'works', 'blog'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-bg-dark/85 backdrop-blur-md border-b border-bg-light/40 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Mark */}
          <Magnetic range={40} strength={0.4}>
            <a
              href="#home"
              className="flex items-center gap-2 custom-hover"
              onClick={() => setActiveSection('home')}
            >
              <svg viewBox="0 0 100 100" className="w-8 h-8 fill-brand-primary transform -rotate-12 transition-transform duration-300 hover:rotate-12">
                <path d="M30 65 C30 80, 50 90, 65 90 C80 90, 90 75, 90 60 C90 40, 70 20, 50 10 C45 8, 40 12, 42 17 C48 30, 50 40, 45 50 C40 60, 30 55, 30 65 Z" />
              </svg>
            </a>
          </Magnetic>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="relative py-2 text-sm font-medium tracking-wide uppercase transition-colors hover:text-white text-text-body custom-hover"
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <a
              href={`${import.meta.env.BASE_URL}Isa_Qureshi_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-1 px-3 border border-brand-primary/30 rounded-full text-xs font-mono font-medium tracking-wider uppercase transition-all duration-300 hover:bg-brand-primary hover:text-bg-dark text-brand-primary custom-hover"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Hamburguer Toggle */}
          <button
            className="md:hidden p-2 text-white hover:text-brand-primary transition-colors custom-hover"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-50 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Sidebar drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-bg-light z-50 p-8 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-12">
                  <span className="text-white font-semibold text-lg uppercase tracking-widest flex items-center gap-1.5">
                    <svg viewBox="0 0 100 100" className="w-6 h-6 fill-brand-primary">
                      <path d="M30 65 C30 80, 50 90, 65 90 C80 90, 90 75, 90 60 C90 40, 70 20, 50 10 C45 8, 40 12, 42 17 C48 30, 50 40, 45 50 C40 60, 30 55, 30 65 Z" />
                    </svg>
                    Isa Q.
                  </span>
                  <button
                    className="p-2 text-white hover:text-brand-primary transition-colors custom-hover"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close navigation menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={() => {
                        setActiveSection(link.id);
                        setMobileMenuOpen(false);
                      }}
                      className="text-2xl font-semibold tracking-wide uppercase hover:text-brand-primary transition-colors py-2 flex items-center gap-4"
                    >
                      <span className="text-xs font-mono text-brand-primary">
                        {link.id === 'services' && '01'}
                        {link.id === 'works' && '02'}
                        {link.id === 'blog' && '03'}
                      </span>
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Drawer footer info */}
              <div className="border-t border-text-body/20 pt-6">
                <span className="text-xs text-text-muted block mb-2 font-mono">SOCIAL CHANNELS</span>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/isaqureshi14"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-body hover:text-white transition-colors text-sm"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/isa-qureshi-90088b38a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-body hover:text-white transition-colors text-sm"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=isatanvirqureshi@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-body hover:text-white transition-colors text-sm"
                  >
                    Email
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
