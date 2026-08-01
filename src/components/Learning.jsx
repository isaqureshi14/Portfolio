import { motion } from 'framer-motion';
import { Award, Cpu, Table, Code2, ArrowRight, Sparkles } from 'lucide-react';
import Magnetic from './Magnetic';

export default function Learning() {
  const learningList = [
    {
      title: 'Digital Marketing Fundamentals',
      desc: 'Google certification exploring search, social, and web analytics.',
      icon: Award,
    },
    {
      title: 'Generative AI Foundations',
      desc: 'IBM certification covering LLMs, prompt engineering, and generative APIs.',
      icon: Cpu,
    },
    {
      title: 'Data & Spreadsheets',
      desc: 'Advanced data modeling, formula structures, and visual reporting in Excel.',
      icon: Table,
    },
    {
      title: 'Web Development Deep-Dive',
      desc: 'Ongoing, self-directed curriculum specializing in React, Next.js, and APIs.',
      icon: Code2,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const rowVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const panelVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <section 
      id="blog" 
      className="py-24 lg:py-32 bg-bg-dark border-t border-bg-light/20"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Currently Learning */}
        <motion.div 
          className="lg:col-span-7 flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-text-muted text-xs font-semibold tracking-widest uppercase mb-4">
            &mdash; Currently Learning
          </span>
          <h2 className="text-white text-3xl sm:text-4xl font-extrabold tracking-tight mb-12">
            What I'm Picking Up Right Now.
          </h2>

          <div className="w-full space-y-6">
            {learningList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  className="flex items-start gap-5 p-4 border-b border-text-body/10 hover:border-brand-primary/30 transition-colors group select-none cursor-pointer rounded-lg bg-bg-dark/40 hover:bg-bg-light/20"
                  variants={rowVariants}
                  whileHover={{ x: 10 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  <div className="w-10 h-10 bg-bg-light border border-text-body/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:rotate-12 group-hover:border-brand-primary/30">
                    <Icon className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-white text-base font-semibold tracking-tight group-hover:text-brand-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-text-body text-xs mt-1 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Column: Open to Panel */}
        <motion.div 
          className="lg:col-span-5 lg:pl-4 flex flex-col items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="glow-pulse bg-bg-light border border-brand-primary/30 rounded-2xl p-8 md:p-10 flex flex-col items-start gap-6 shadow-xl relative overflow-hidden"
            variants={panelVariants}
          >
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>

            <h3 className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug">
              Open to internships, freelance web projects, and collaborations.
            </h3>

            <p className="text-text-body text-sm font-light leading-relaxed">
              If you are looking for a motivated developer who can build clean interfaces and write structured code, I'm ready to learn and deliver value.
            </p>

            <div className="w-full border-t border-text-body/10 pt-6 mt-2">
              <Magnetic range={40}>
                <a
                  href="mailto:isatanvirqureshi@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-primary hover:bg-brand-primary/95 text-bg-dark font-bold text-sm tracking-wide rounded-xl transition-all duration-300 group shadow-lg shadow-brand-primary/5 custom-hover"
                >
                  Let's Work Together
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
