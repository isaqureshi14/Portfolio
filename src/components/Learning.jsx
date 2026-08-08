import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ArrowRight, Sparkles, ChevronDown, ChevronUp, ExternalLink, ShieldCheck } from 'lucide-react';
import Magnetic from './Magnetic';

import stickerGenAI from '../assets/stickers/genai_foundations.jpg';
import stickerLLM from '../assets/stickers/intro_llms.jpg';
import stickerEthics from '../assets/stickers/ethical_genai.jpg';
import stickerRAG from '../assets/stickers/intro_rag.jpg';
import stickerSustainability from '../assets/stickers/ai_sustainability.jpg';

export default function Learning() {
  const [expanded, setExpanded] = useState(false);

  const coursesList = [
    {
      title: 'AI for Sustainability Virtual Internship',
      issuer: 'IBM (1M1B)',
      date: 'Jul 2026',
      sticker: stickerSustainability,
    },
    {
      title: 'Foundation in Generative AI',
      issuer: 'IBM SkillsBuild',
      date: 'Jun 2026',
      sticker: stickerGenAI,
    },
    {
      title: 'Introduction to LLMs',
      issuer: 'IBM SkillsBuild',
      date: null,
      sticker: stickerLLM,
    },
    {
      title: 'Ethical Considerations in Generative AI',
      issuer: 'IBM SkillsBuild',
      date: null,
      sticker: stickerEthics,
    },
    {
      title: 'Introduction to RAG',
      issuer: 'IBM SkillsBuild',
      date: null,
      sticker: stickerRAG,
    },
    {
      title: 'Fundamentals of Digital Marketing',
      issuer: 'Google',
      date: 'Jul 2026',
      link: 'https://skillshop.exceedlms.com/student/award/yLhKdn7224QN4o2ww3oEai7M',
      sticker: null,
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
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Subtle Currently Exploring / Learning Summary */}
        <motion.div 
          className="lg:col-span-7 flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-text-muted text-xs font-semibold tracking-widest uppercase mb-4">
            &mdash; Continuous Learning
          </span>
          <h2 className="text-white text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            Currently Exploring & Certifications.
          </h2>

          <p className="text-text-body text-sm sm:text-base leading-relaxed mb-6 font-light">
            Recent learning includes <span className="text-white font-medium">AI for Sustainability</span>, <span className="text-white font-medium">Generative AI</span>, <span className="text-white font-medium">LLMs</span>, <span className="text-white font-medium">RAG</span>, <span className="text-white font-medium">Ethical Considerations in Generative AI</span>, and <span className="text-white font-medium">Digital Marketing</span> through IBM and Google.
          </p>

          {/* Toggle Button for Expandable Course List */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-brand-primary border border-brand-primary/30 px-4 py-2.5 rounded-xl hover:bg-brand-primary/10 transition-colors custom-hover mb-6"
          >
            <ShieldCheck className="w-4 h-4" />
            {expanded ? 'Hide Learning Details' : 'View Course & Certificate List'}
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {/* Expandable Subtle List */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="w-full space-y-3 overflow-hidden border-t border-text-body/10 pt-4"
              >
                {coursesList.map((course, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-bg-light/40 border border-text-body/10 hover:border-brand-primary/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {course.sticker ? (
                        <img 
                          src={course.sticker} 
                          alt={course.title} 
                          className="w-8 h-8 rounded object-cover flex-shrink-0 border border-text-body/20"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center flex-shrink-0 text-brand-primary">
                          <Cpu className="w-4 h-4" />
                        </div>
                      )}
                      <div>
                        <h4 className="text-white text-xs font-semibold">{course.title}</h4>
                        <span className="text-[11px] text-text-muted">{course.issuer} {course.date ? `• ${course.date}` : ''}</span>
                      </div>
                    </div>

                    {course.link && (
                      <a
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-mono text-brand-primary flex items-center gap-1 hover:underline custom-hover"
                      >
                        Credential <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

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
              If you are looking for a motivated 2nd-year computer engineering student who builds clean web interfaces and full-stack tools, I'm eager to contribute and learn.
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

