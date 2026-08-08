import { motion } from 'framer-motion';
import { ExternalLink, Users, Calendar, Award } from 'lucide-react';
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
      title: 'Energy Demand & Price Predictor',
      year: '2025',
      team: 'Team Project',
      tech: 'React.js, Django, Chart.js, Linear Regression',
      tags: ['React.js', 'Django', 'Chart.js', 'Linear Regression'],
      description: 'Built a forecasting dashboard predicting energy demand and price trends using a linear regression model, visualized with Chart.js.',
      highlight: 'Presented at the InnoQuest 2025–26 exhibition at DBIT.',
      github: 'https://github.com/isaqureshi14',
      type: 'finance',
    },
    {
      title: 'FinWise — Personal Finance App',
      year: '2026 – Present',
      team: null,
      tech: 'Flask, SQLite, Anthropic API, HTML/CSS/JS',
      tags: ['Flask', 'SQLite', 'Anthropic API', 'HTML/CSS/JS'],
      description: 'Developing a full-stack personal finance tracker with an AI-assisted insights layer using the Anthropic API.',
      highlight: 'Handled end-to-end deployment, including backend API key configuration and environment setup.',
      github: 'https://github.com/isaqureshi14/Finance-Manager-With-AI-Insight',
      type: 'finance',
    },
    {
      title: 'Sunrise Public School — Management System Redesign',
      year: '2026',
      team: null,
      tech: 'Node.js, Express, SQLite, Tailwind CSS',
      tags: ['Node.js', 'Express', 'SQLite', 'Tailwind CSS'],
      description: 'Redesigned a multi-page school management system with a cohesive dark UI using glassmorphism and a custom accent theme while preserving the existing JavaScript logic.',
      highlight: 'Deployed the application to Render using Turso for cloud-hosted SQLite.',
      github: 'https://github.com/isaqureshi14/Student-management-system',
      type: 'school',
    },
    {
      title: 'AI-Enhanced Notes App',
      year: '2026',
      team: null,
      tech: 'Full-stack, AI integration',
      tags: ['Full-Stack', 'AI Integration'],
      description: 'Built a notes application with AI-assisted features for organizing and summarizing content.',
      highlight: null,
      github: 'https://github.com/isaqureshi14/strata-agentic-notes',
      type: 'notes',
    },
    {
      title: 'TREND-PULSE: AI Sentiment & Insight Bot',
      year: '2025',
      team: 'Team Project — Syntax Squad',
      tech: 'AI Sentiment Analysis',
      tags: ['AI', 'Sentiment Analysis', 'Syntax Squad'],
      description: 'Contributed to an AI-driven sentiment analysis tool as part of the Syntax Squad team.',
      highlight: null,
      github: 'https://github.com/isaqureshi14',
      type: 'notes',
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const renderMockup = (type) => {
    let img = financeImg;
    if (type === 'school') img = schoolImg;
    if (type === 'notes') img = notesImg;

    return (
      <div className="w-full h-44 bg-bg-dark/60 rounded-xl relative overflow-hidden flex items-center justify-center border border-text-body/10 p-3 select-none">
        <div 
          className="w-full h-full rounded-lg border border-text-body/15 overflow-hidden shadow-xl transition-all duration-500 group-hover:rotate-0 group-hover:scale-[1.02]"
          style={{ transform: 'perspective(800px) rotateX(12deg) rotateY(-10deg) rotateZ(3deg)', transformStyle: 'preserve-3d' }}
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
            A showcase of my recent full-stack applications, AI integrations, and team project builds at DBIT.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="bg-bg-dark border border-text-body/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-6 shadow-xl transition-all duration-300 group hover:border-brand-primary/30 relative"
              variants={cardVariants}
              whileHover={{ y: -6 }}
            >
              {/* Header: Title & Badges */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-brand-primary" />
                    <span className="text-xs font-mono text-text-muted">{proj.year}</span>
                  </div>

                  {proj.team && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold tracking-wide uppercase px-2.5 py-0.5 bg-brand-primary/10 text-brand-primary border border-brand-primary/20 rounded-full">
                      <Users className="w-3 h-3" />
                      {proj.team}
                    </span>
                  )}
                </div>

                <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight group-hover:text-brand-primary transition-colors">
                  {proj.title}
                </h3>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[10px] font-mono font-semibold tracking-wide uppercase px-2 py-0.5 bg-bg-light text-text-body border border-text-body/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Isometric Preview */}
              {renderMockup(proj.type)}

              {/* Description */}
              <div className="space-y-3">
                <p className="text-text-body text-xs sm:text-sm leading-relaxed font-light">
                  "{proj.description}"
                </p>

                {proj.highlight && (
                  <div className="flex items-start gap-2 text-xs text-brand-primary bg-brand-primary/5 p-3 rounded-lg border border-brand-primary/10 font-light">
                    <Award className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{proj.highlight}</span>
                  </div>
                )}
              </div>

              {/* Footer Link */}
              <div className="border-t border-text-body/10 pt-4 flex justify-between items-center mt-2">
                <Magnetic range={30}>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-text-muted hover:text-white font-mono uppercase tracking-widest transition-colors custom-hover"
                  >
                    <GithubIcon className="w-4 h-4" />
                    View Repository
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </Magnetic>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
