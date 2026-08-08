import { motion } from 'framer-motion';
import { ExternalLink, Users, Calendar, Bookmark, Compass, BookOpen } from 'lucide-react';
import Magnetic from './Magnetic';
import financeImg from '../assets/finance_preview.png';

const ViewDetailsIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Portfolio() {
  const leftProjects = [
    {
      title: 'Energy Demand & Price Predictor',
      year: '2025',
      team: 'TEAM PROJECT',
      tags: ['REACT.JS', 'DJANGO', 'CHART.JS', 'LINEAR REGRESSION'],
      description: "'Built a forecasting dashboard to predict energy demand and price trends using linear regression and Chart.js.",
      highlight: 'Presented at InnoQuest 2025–26 at DBIT.',
      github: null,
      image: null,
    },
    {
      title: 'Sunrise Public School — Management System Redesign',
      year: '2026',
      team: null,
      tags: ['NODE.JS', 'EXPRESS', 'SQLITE', 'TAILWIND CSS'],
      description: 'Redesigned a multi-page school management system with a cohesive dark UI using glassmorphism and a custom accent theme while preserving the existing JavaScript logic.',
      highlight: 'Deployed the application to Render using Turso for cloud-hosted SQLite.',
      github: 'https://github.com/isaqureshi14/Student-management-system',
      image: null,
    },
    {
      title: 'TREND-PULSE: AI Sentiment & Insight Bot',
      year: '2025',
      team: 'TEAM PROJECT — SYNTAX SQUAD',
      tags: [],
      description: 'Contributed to an AI-driven sentiment analysis and insight tool.',
      highlight: null,
      github: null,
      image: null,
    },
  ];

  const rightProjects = [
    {
      title: 'FinWise — Personal Finance App',
      year: '2026 – Present',
      team: null,
      tags: ['FLASK', 'SQLITE', 'ANTHROPIC API', 'HTML/CSS/JS'],
      description: 'Developing a full-stack personal finance tracker with an AI-assisted insights layer using the Anthropic API.',
      highlight: 'Handled end-to-end deployment, including backend API key configuration and environment setup.',
      github: 'https://github.com/isaqureshi14/Finance-Manager-With-AI-Insight',
      image: financeImg,
    },
    {
      title: 'AI-Enhanced Notes App',
      year: '2026',
      team: null,
      tags: ['FULL-STACK', 'AI INTEGRATION'],
      description: 'Built a notes application with AI-assisted features for organizing and summarizing content.',
      highlight: null,
      github: 'https://github.com/isaqureshi14/strata-agentic-notes',
      image: null,
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

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const renderCard = (proj, idx) => (
    <motion.div
      key={idx}
      className="bg-[#121622] border border-[#1e2538] rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-5 shadow-2xl transition-all duration-300 group hover:border-[#f59e0b]/40 relative"
      variants={cardVariants}
    >
      <div className="space-y-4">
        {/* Top bar: Year & Team tag */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
            <Calendar className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>{proj.year}</span>
          </div>

          {proj.team && (
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold tracking-wide uppercase px-3 py-0.5 bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/30 rounded-full">
              <Users className="w-3 h-3" />
              {proj.team}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight leading-snug">
          {proj.title}
        </h3>

        {/* Tech tags */}
        {proj.tags && proj.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {proj.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="text-[10px] font-mono font-semibold tracking-wider uppercase px-3 py-1 bg-[#1a202c] text-slate-300 border border-[#2b354d] rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Image preview (FinWise) */}
        {proj.image && (
          <div className="w-full bg-[#0a0d14] p-3 rounded-xl border border-[#1e2538] my-3 overflow-hidden shadow-inner">
            <img
              src={proj.image}
              alt={`${proj.title} Preview`}
              className="w-full h-auto rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        )}

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed font-light">
          {proj.description}
        </p>

        {/* Highlight box */}
        {proj.highlight && (
          <div className="flex items-start gap-2.5 text-xs text-[#f59e0b] bg-[#181a20] p-3.5 rounded-xl border border-[#f59e0b]/25 font-light leading-relaxed">
            <Bookmark className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#f59e0b]" />
            <span>{proj.highlight}</span>
          </div>
        )}
      </div>

      {/* Footer link */}
      {proj.github && (
        <div className="border-t border-[#1e2538] pt-4 flex items-center justify-between mt-2">
          <Magnetic range={30}>
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-slate-400 hover:text-white font-mono uppercase tracking-widest transition-colors custom-hover group/link"
            >
              <ViewDetailsIcon className="w-4 h-4 text-slate-400 group-hover/link:text-white transition-colors" />
              <span>VIEW DETAILS</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Magnetic>
        </div>
      )}
    </motion.div>
  );

  return (
    <section 
      id="works" 
      className="py-20 lg:py-28 bg-[#0b0e14] border-t border-[#1e2538]"
    >
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl flex flex-col items-start">
          <div className="flex items-center gap-2 text-[#f59e0b] text-xs font-mono font-semibold tracking-widest uppercase mb-3">
            <Compass className="w-4 h-4 text-[#f59e0b]" />
            <span>PROJECTS</span>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Things I've Built
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            A showcase of my recent full-stack applications, AI integrations, and team project builds at DBIT.
          </p>
        </div>

        {/* Projects 2-Column Layout */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {leftProjects.map((proj, idx) => renderCard(proj, idx))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {rightProjects.map((proj, idx) => renderCard(proj, idx))}
          </div>
        </motion.div>

        {/* Involvement Section */}
        <motion.div 
          className="pt-12 border-t border-[#1e2538] space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-2 text-[#f59e0b] text-xs font-mono font-semibold tracking-widest uppercase">
            <Users className="w-4 h-4 text-[#f59e0b]" />
            <span>INVOLVEMENT</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-1.5">
                College Newsletter / Magazine Team
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm font-mono">
                DBIT &nbsp;&bull;&nbsp; Academic Year 2025–26 &nbsp;&bull;&nbsp; Contributor
              </p>
            </div>

            <div className="w-14 h-14 rounded-full border border-[#2a3347] bg-[#121622] flex items-center justify-center text-[#f59e0b] flex-shrink-0 shadow-lg">
              <BookOpen className="w-6 h-6" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}


