import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import profileImg from '../assets/isa_profile.jpg';
import Magnetic from './Magnetic';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default function Hero() {
  const [storyOpen, setStoryOpen] = useState(false);
  
  // Parallax scroll effect for portrait
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 800], [0, -50]);

  // Framer Motion variants for stagger load
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  // 3D Card tilt logic on mouse move
  const handleTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Scale rotation bounds
    const rotateX = -y / 15;
    const rotateY = x / 15;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
    // Subtle offset shadow shift
    const shadowX = -x / 10;
    const shadowY = -y / 10;
    card.style.boxShadow = `${shadowX}px ${shadowY}px 35px rgba(0, 0, 0, 0.5)`;
  };

  const resetTilt = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    card.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)';
  };

  return (
    <section 
      id="home" 
      className="min-h-screen pt-32 pb-20 bg-bg-light flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Name & Socials */}
        <motion.div 
          className="lg:col-span-5 flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-white text-5xl sm:text-7xl font-extrabold tracking-tight leading-none mb-4"
            variants={itemVariants}
          >
            Isa Qureshi.
          </motion.h1>
          
          {/* Underline accent */}
          <motion.div 
            className="h-1.5 w-24 bg-brand-primary rounded-full mb-10 origin-left"
            variants={lineVariants}
          />

          {/* Socials Row */}
          <motion.div 
            className="flex gap-4 items-center"
            variants={itemVariants}
          >
            <Magnetic range={30}>
              <a
                href="https://github.com/isaqureshi14"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-12 h-12 flex items-center justify-center border border-text-body/20 rounded-full overflow-hidden group custom-hover bg-bg-dark/20"
                aria-label="GitHub Profile"
              >
                <span className="absolute inset-0 bg-brand-primary rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                <GithubIcon className="w-5 h-5 text-white z-10 group-hover:text-bg-dark transition-colors duration-300" />
              </a>
            </Magnetic>

            <Magnetic range={30}>
              <a
                href="https://www.linkedin.com/in/isa-qureshi-90088b38a"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-12 h-12 flex items-center justify-center border border-text-body/20 rounded-full overflow-hidden group custom-hover bg-bg-dark/20"
                aria-label="LinkedIn Profile"
              >
                <span className="absolute inset-0 bg-brand-primary rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                <LinkedinIcon className="w-5 h-5 text-white z-10 group-hover:text-bg-dark transition-colors duration-300" />
              </a>
            </Magnetic>

            <Magnetic range={30}>
              <a
                href={`${import.meta.env.BASE_URL}Isa_Qureshi_Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-4 h-12 flex items-center gap-2 border border-brand-primary/40 rounded-full overflow-hidden group custom-hover bg-brand-primary/10 text-brand-primary font-semibold text-xs tracking-wider uppercase"
                aria-label="View Resume"
              >
                <span className="absolute inset-0 bg-brand-primary rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                <span className="z-10 group-hover:text-bg-dark transition-colors duration-300">View Resume</span>
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Right Column: Introduction */}
        <motion.div 
          className="lg:col-span-4 flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            className="text-text-muted text-xs font-semibold tracking-widest uppercase mb-4"
            variants={itemVariants}
          >
            &mdash; Introduction
          </motion.span>
          
          <motion.h2 
            className="text-white text-xl sm:text-2xl font-bold leading-snug mb-6"
            variants={itemVariants}
          >
            Second-year Computer Engineering student at Don Bosco Institute of Technology, building full-stack web applications and experimenting with AI-powered solutions.
          </motion.h2>

          <motion.p 
            className="text-text-body text-sm sm:text-base leading-relaxed mb-8 font-light"
            variants={itemVariants}
          >
            Focused on building clean, practical web tools &mdash; from personal finance apps with AI insights to school management redesigns &mdash; combining modern full-stack frameworks with thoughtful UI design.
          </motion.p>

          <div className="flex items-center gap-6">
            <motion.button
              onClick={() => setStoryOpen(true)}
              className="flex items-center gap-2 group text-brand-primary font-semibold text-sm tracking-wide custom-hover"
              variants={itemVariants}
            >
              My story 
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
            </motion.button>

            <motion.a
              href={`${import.meta.env.BASE_URL}Isa_Qureshi_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-text-muted hover:text-white font-mono text-xs uppercase tracking-wider transition-colors custom-hover"
              variants={itemVariants}
            >
              Resume PDF &rarr;
            </motion.a>
          </div>
        </motion.div>

        {/* Overlapping portrait image with depth offset */}
        <div className="lg:col-span-3 flex justify-center lg:justify-end mt-8 lg:mt-0 relative">
          {/* Lighter background offset panel */}
          <motion.div
            className="absolute top-4 left-4 lg:-top-4 lg:-left-4 right-4 bottom-4 lg:w-[280px] lg:h-[370px] bg-bg-dark/40 border border-text-body/10 rounded-2xl -z-10"
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.6, duration: 1.0, ease: 'easeOut' }}
          />

          {/* Interactive portrait */}
          <motion.div
            className="w-[280px] h-[370px] rounded-2xl overflow-hidden cursor-pointer bg-bg-dark border border-text-body/20 shadow-xl transition-all duration-200 ease-out"
            style={{ y: portraitY, transformStyle: 'preserve-3d' }}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Natural portrait without duotone overlay */}
            <div className="relative w-full h-full group">
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent opacity-40 z-10 pointer-events-none" />
              <img
                src={profileImg}
                alt="Isa Qureshi Profile"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

      </div>

      {/* "My Story" Side Drawer */}
      <AnimatePresence>
        {storyOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-[1001] cursor-pointer"
              onClick={() => setStoryOpen(false)}
            />

            {/* Slide drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
              className="fixed top-0 right-0 bottom-0 w-full md:max-w-2xl bg-bg-dark z-[1002] p-8 md:p-12 shadow-2xl flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between border-b border-text-body/10 pb-6 mb-8">
                  <span className="text-brand-primary text-xs font-semibold tracking-widest uppercase font-mono">&mdash; My Journey</span>
                  <button
                    onClick={() => setStoryOpen(false)}
                    className="p-2 text-white hover:text-brand-primary transition-colors custom-hover"
                    aria-label="Close story panel"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  <h3 className="text-white text-3xl font-bold tracking-tight">The Story Behind the Code.</h3>
                  <p className="text-text-body text-base leading-relaxed font-light">
                    I am currently a second-year Computer Engineering student at Don Bosco Institute of Technology (DBIT), Mumbai (2025–2029). Having achieved an 8.5 CGPA in my first year, I enjoy applying core CS fundamentals to build real-world web applications.
                  </p>
                  <p className="text-text-body text-base leading-relaxed font-light">
                    My projects range from full-stack platforms like FinWise (personal finance tracker with Anthropic API integration) and Sunrise Public School management redesign, to forecasting tools like the Energy Demand & Price Predictor presented at DBIT's InnoQuest 2025–26 exhibition.
                  </p>
                  <p className="text-text-body text-base leading-relaxed font-light">
                    Alongside my core engineering coursework, I actively complement my development skills with industry job simulations in data analytics, cybersecurity, and solutions architecture (Deloitte, Forage) and AI programs (IBM, Google), while contributing to DBIT's college newsletter team.
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-6 border-t border-text-body/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <span className="text-xs text-text-muted font-mono">DBIT Mumbai &bull; Computer Engineering (2025–2029)</span>
                <a
                  href={`${import.meta.env.BASE_URL}Isa_Qureshi_Resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-brand-primary hover:bg-brand-primary/90 text-bg-dark font-bold text-sm tracking-wide rounded-xl transition-all duration-300 custom-hover"
                >
                  View Resume PDF
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
