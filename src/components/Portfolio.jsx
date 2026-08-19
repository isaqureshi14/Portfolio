import { motion } from 'framer-motion';
import { ExternalLink, Users, Calendar, Bookmark, Compass, BookOpen } from 'lucide-react';
import Magnetic from './Magnetic';

const GithubIcon = (props) => (
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
      description: 'Built a forecasting dashboard to predict energy demand and price trends using linear regression and Chart.js.',
      highlight: 'Presented at InnoQuest 2025–26 at DBIT.',
      github: null,
    },
    {
      title: 'Sunrise Public School — Management System Redesign',
      year: '2026',
      team: null,
      tags: ['NODE.JS', 'EXPRESS', 'SQLITE', 'TURSO', 'TAILWIND CSS'],
      description: 'Co-developed a multi-portal school management platform with dedicated Owner, Teacher, Student, and Parent portals.',
      highlight: 'Implemented role-based access with bcrypt credentials, daily attendance logging, gradebook uploads, and deployed to Render using Turso for cloud SQLite.',
      github: 'https://github.com/isaqureshi14/Student-management-system',
    },
    {
      title: 'TREND-PULSE: AI Sentiment & Insight Bot',
      year: '2025',
      team: 'TEAM PROJECT — SYNTAX SQUAD',
      tags: ['AI / ML', 'SENTIMENT ANALYSIS'],
      description: 'Contributed to an AI-driven sentiment analysis and insight tool.',
      highlight: null,
      github: null,
    },
  ];

  const rightProjects = [
    {
      title: 'FinWise — Personal Finance App',
      year: '2026',
      team: null,
      tags: ['FLASK', 'SQLALCHEMY', 'SQLITE', 'TAILWIND CSS', 'CHART.JS', 'ANTHROPIC API'],
      description: 'Co-developed a full-stack finance tracker with budgeting, transaction analytics, and AI-generated financial insights.',
      highlight: 'Built an age-aware AI insights engine using the Anthropic Claude API, plus 12-month trend reports visualized with Chart.js.',
      github: 'https://github.com/isaqureshi14/Finance-Manager-With-AI-Insight',
    },
    {
      title: 'AI-Enhanced Notes App',
      year: '2026',
      team: null,
      tags: ['REACT', 'TYPESCRIPT', 'VITE', 'TAILWIND CSS', 'AI INTEGRATION'],
      description: 'Co-developed a minimalist, offline-first workspace combining rich-text notes, a spreadsheet module, and progress tracking with an integrated AI copilot.',
      highlight: 'Built a local spreadsheet module with formula evaluation (SUM, AVERAGE) and SHA-256 local authentication with AI prompt-injection filtering.',
      github: 'https://github.com/isaqureshi14/strata-agentic-notes',
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
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const renderCard = (proj, idx) => (
    <motion.div
      key={idx}
      className="bg-[#131722] border border-text-body/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-5 shadow-xl transition-all duration-300 group hover:border-brand-primary/30 relative"
      variants={cardVariants}
      whileHover={{ y: -4 }}
    >
      <div className="space-y-4">
        {/* Top bar: Year & Team tag */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs font-mono text-brand-primary/90">
            <Calendar className="w-3.5 h-3.5 text-brand-primary" />
            <span>{proj.year}</span>
          </div>

          {proj.team && (
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold tracking-wide uppercase px-3 py-1 bg-brand-primary/10 text-brand-primary border border-brand-primary/25 rounded-full">
              <Users className="w-3 h-3" />
              {proj.team}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight group-hover:text-brand-primary transition-colors leading-snug">
          {proj.title}
        </h3>

        {/* Tech tags */}
        {proj.tags && proj.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {proj.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="text-[10px] font-mono font-semibold tracking-wider uppercase px-2.5 py-1 bg-[#1a202c]/70 text-text-body border border-text-body/15 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Description */}
        <p className="text-text-body text-sm leading-relaxed font-light">
          {proj.description}
        </p>

        {/* Highlight box */}
        {proj.highlight && (
          <div className="flex items-start gap-2.5 text-xs text-brand-primary bg-brand-primary/5 p-3.5 rounded-xl border border-brand-primary/20 font-light leading-relaxed">
            <Bookmark className="w-4 h-4 flex-shrink-0 mt-0.5 text-brand-primary" />
            <span>{proj.highlight}</span>
          </div>
        )}
      </div>

      {/* Footer link */}
      {proj.github && (
        <div className="border-t border-text-body/10 pt-4 flex items-center justify-between mt-2">
          <Magnetic range={30}>
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-text-muted hover:text-white font-mono uppercase tracking-widest transition-colors custom-hover group/link"
            >
              <GithubIcon className="w-4 h-4 text-text-muted group-hover/link:text-white transition-colors" />
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
      className="py-24 lg:py-32 bg-bg-dark border-t border-bg-light/20"
    >
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl flex flex-col items-start">
          <div className="flex items-center gap-2 text-brand-primary text-xs font-mono font-semibold tracking-widest uppercase mb-3">
            <Compass className="w-4 h-4 text-brand-primary" />
            <span>PROJECTS</span>
          </div>
          <h2 className="text-white text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Things I've Built
          </h2>
          <p className="text-text-body text-sm sm:text-base leading-relaxed font-light">
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
          className="pt-10 border-t border-text-body/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 text-brand-primary text-xs font-mono font-semibold tracking-widest uppercase mb-4">
            <Users className="w-4 h-4 text-brand-primary" />
            <span>INVOLVEMENT</span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-[#131722] border border-text-body/10 rounded-2xl p-6 md:p-8 shadow-xl">
            <div>
              <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-2">
                College Newsletter / Magazine Team
              </h3>
              <p className="text-text-muted text-xs sm:text-sm font-mono">
                DBIT &nbsp;&bull;&nbsp; Academic Year 2025–26 &nbsp;&bull;&nbsp; Contributor
              </p>
            </div>

            <div className="w-12 h-12 rounded-full border border-brand-primary/30 bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}


