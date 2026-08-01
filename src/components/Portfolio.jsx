import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Magnetic from './Magnetic';
import financeImg from '../assets/finance_preview.png';
import schoolImg from '../assets/school_preview.png';
import notesImg from '../assets/notes_preview.png';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Portfolio() {
  const projects = [
    {
      title: 'Finance Manager with AI Insight',
      tags: ['Full-Stack', 'AI'],
      description: 'A personal finance tracker with AI-generated spending insights. Built with Flask, SQLite, and the Anthropic API on the backend, HTML/CSS/JS on the front end.',
      github: 'https://github.com/isaqureshi14/Finance-Manager-With-AI-Insight',
      type: 'finance',
    },
    {
      title: 'Student Management System',
      tags: ['Full-Stack', 'Redesign'],
      description: 'A multi-page school management system rebuilt with a dark glassmorphism UI, Tailwind CSS, and rose/red accents — while preserving all existing app logic.',
      github: 'https://github.com/isaqureshi14/Student-management-system',
      type: 'school',
    },
    {
      title: 'Strata — Agentic Notes',
      tags: ['TypeScript', 'AI', 'Local-First'],
      description: 'A premium, minimalist local-first workspace combining notes, progress trackers, and finance sheets with an integrated AI Copilot.',
      github: 'https://github.com/isaqureshi14/strata-agentic-notes',
      type: 'notes',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  // Render the custom isometric CSS mockups based on project type
  const renderMockup = (type) => {
    let img = null;
    if (type === 'finance') img = financeImg;
    if (type === 'school') img = schoolImg;
    if (type === 'notes') img = notesImg;

    return (
      <div className="w-full h-48 bg-bg-dark/40 rounded-xl relative overflow-hidden flex items-center justify-center border border-text-body/5 p-4 select-none">
        <div 
          className="w-full h-full rounded-lg border border-text-body/15 overflow-hidden shadow-2xl transition-all duration-500 group-hover:rotate-0 group-hover:scale-[1.03]"
          style={{ transform: 'perspective(800px) rotateX(15deg) rotateY(-15deg) rotateZ(5deg)', transformStyle: 'preserve-3d' }}
        >
          <img 
            src={img} 
            alt="Project Preview" 
            className="w-full h-full object-cover transition-transform duration-500" 
            loading="lazy"
          />
        </div>
      </div>
    );
  };

  return (
    <section 
      id="works" 
      className="py-24 lg:py-32 bg-bg-light border-t border-bg-light/20"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 flex flex-col items-start">
          <span className="text-text-muted text-xs font-semibold tracking-widest uppercase mb-4">
            &mdash; Portfolio
          </span>
          <h2 className="text-white text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Projects I've Built.
          </h2>
          <p className="text-text-body text-sm sm:text-base leading-relaxed font-light">
            A mix of solo and collaborative builds &mdash; real tools solving real (small) problems.
          </p>
        </div>

        {/* Masonry-Style Asymmetric 2-Column Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Column 1 (Left Side of Grid) */}
          <div className="flex flex-col gap-12">
            {/* Project 1 */}
            <motion.div
              className="bg-bg-dark border border-text-body/10 rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-xl transition-all duration-300 group hover:border-brand-primary/30 relative"
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              {/* Top Row: Title & Tags */}
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight group-hover:text-brand-primary transition-colors">
                  {projects[0].title}
                </h3>
                <div className="flex flex-wrap gap-1.5 justify-end">
                  {projects[0].tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-[10px] font-mono font-semibold tracking-wide uppercase px-2 py-0.5 bg-bg-light text-text-body border border-text-body/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tilted Isometric Mockup Area */}
              {renderMockup(projects[0].type)}

              {/* Description */}
              <p className="text-text-body text-xs sm:text-sm leading-relaxed font-light">
                {projects[0].description}
              </p>

              {/* Footer View link */}
              <div className="border-t border-text-body/10 pt-4 flex justify-between items-center">
                <Magnetic range={30}>
                  <a
                    href={projects[0].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-text-muted hover:text-white font-mono uppercase tracking-widest transition-colors custom-hover"
                  >
                    <GithubIcon className="w-4 h-4" />
                    View on GitHub
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </Magnetic>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              className="bg-bg-dark border border-text-body/10 rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-xl transition-all duration-300 group hover:border-brand-primary/30 relative"
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight group-hover:text-brand-primary transition-colors">
                  {projects[2].title}
                </h3>
                <div className="flex flex-wrap gap-1.5 justify-end">
                  {projects[2].tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-[10px] font-mono font-semibold tracking-wide uppercase px-2 py-0.5 bg-bg-light text-text-body border border-text-body/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {renderMockup(projects[2].type)}

              <p className="text-text-body text-xs sm:text-sm leading-relaxed font-light">
                {projects[2].description}
              </p>

              <div className="border-t border-text-body/10 pt-4 flex justify-between items-center">
                <Magnetic range={30}>
                  <a
                    href={projects[2].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-text-muted hover:text-white font-mono uppercase tracking-widest transition-colors custom-hover"
                  >
                    <GithubIcon className="w-4 h-4" />
                    View on GitHub
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </Magnetic>
              </div>
            </motion.div>
          </div>

          {/* Column 2 (Right Side of Grid - Offset downward on large viewports for masonry) */}
          <div className="flex flex-col gap-12 lg:pt-16">
            {/* Project 2 */}
            <motion.div
              className="bg-bg-dark border border-text-body/10 rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-xl transition-all duration-300 group hover:border-brand-primary/30 relative"
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight group-hover:text-brand-primary transition-colors">
                  {projects[1].title}
                </h3>
                <div className="flex flex-wrap gap-1.5 justify-end">
                  {projects[1].tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-[10px] font-mono font-semibold tracking-wide uppercase px-2 py-0.5 bg-bg-light text-text-body border border-text-body/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {renderMockup(projects[1].type)}

              <p className="text-text-body text-xs sm:text-sm leading-relaxed font-light">
                {projects[1].description}
              </p>

              <div className="border-t border-text-body/10 pt-4 flex justify-between items-center">
                <Magnetic range={30}>
                  <a
                    href={projects[1].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-text-muted hover:text-white font-mono uppercase tracking-widest transition-colors custom-hover"
                  >
                    <GithubIcon className="w-4 h-4" />
                    View on GitHub
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </Magnetic>
              </div>
            </motion.div>

            {/* Placeholder info box to balance masonry layout spacing */}
            <div className="hidden lg:flex flex-col p-8 border border-dashed border-text-body/20 rounded-2xl justify-center items-center h-48 text-center text-xs text-text-muted font-mono leading-relaxed select-none">
              <span>EXPLORING MORE BUILDS...</span>
              <span className="mt-1">Follow along on my GitHub for active repositories and experimental projects.</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
