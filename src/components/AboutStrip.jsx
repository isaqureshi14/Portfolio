import { motion } from 'framer-motion';
import { Globe, Database, Sparkles, ArrowRight, GraduationCap, Code2, Users, BookOpen } from 'lucide-react';
import Magnetic from './Magnetic';

export default function AboutStrip() {
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

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const skillGroups = [
    {
      category: 'Languages',
      skills: ['Python', 'C', 'C++', 'Java (in progress)'],
    },
    {
      category: 'Web & Frameworks',
      skills: ['React.js', 'Node.js', 'Express', 'Flask', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'],
    },
    {
      category: 'Databases & Tools',
      skills: ['SQLite', 'SQL', 'Git/GitHub', 'Render', 'Turso', 'Chart.js'],
    },
    {
      category: 'AI / Applied Interests',
      skills: ['Anthropic API integration', 'Linear regression forecasting', 'Sentiment analysis pipelines'],
    },
  ];

  return (
    <section 
      id="services" 
      className="py-24 lg:py-32 bg-bg-dark border-t border-bg-light/20 relative"
    >
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        
        {/* Top Section: Inquiry & Quote */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Side: Inquiry details */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <motion.span 
              className="text-text-muted text-xs font-semibold tracking-widest uppercase mb-4"
              variants={textVariants}
            >
              &mdash; Contact
            </motion.span>
            <motion.h2 
              className="text-white text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 leading-tight"
              variants={textVariants}
            >
              Any Type Of Query & Discussion.
            </motion.h2>
            <motion.p 
              className="text-text-body text-sm sm:text-base leading-relaxed mb-6 font-light"
              variants={textVariants}
            >
              Have a question, an internship opportunity, or a project in mind? Reach out and let's explore how we can work together.
            </motion.p>
            <motion.div variants={textVariants}>
              <a
                href="mailto:isatanvirqureshi@gmail.com"
                className="flex items-center gap-2 text-brand-primary hover:text-white font-semibold text-sm tracking-wide transition-colors group custom-hover"
              >
                isatanvirqureshi@gmail.com 
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </motion.div>
          </div>

          {/* Right Side: Pull-quote & Muted stat replacement */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col items-start lg:pt-6">
            <motion.blockquote 
              className="text-white text-xl sm:text-3xl font-medium italic border-l-4 border-brand-primary pl-6 mb-8 leading-snug"
              variants={textVariants}
            >
              "Still learning, still building &mdash; every project teaches me something the last one didn't."
            </motion.blockquote>

            <motion.div 
              className="px-4 py-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full inline-flex items-center gap-2"
              variants={textVariants}
            >
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-ping" />
              <span className="text-brand-primary font-semibold text-xs tracking-wider uppercase font-mono">
                Open to internships & collaborations
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Education & College Involvement Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Education Card */}
          <motion.div
            className="lg:col-span-7 bg-bg-light border border-text-body/10 rounded-2xl p-8 flex flex-col justify-between shadow-xl"
            variants={cardVariants}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-semibold tracking-widest text-text-muted uppercase">
                  &mdash; Education
                </span>
              </div>

              <h3 className="text-white text-2xl font-bold tracking-tight mb-1">
                Don Bosco Institute of Technology (DBIT)
              </h3>
              <p className="text-brand-primary text-sm font-medium mb-4">
                B.E. Computer Engineering &bull; Mumbai University (2025 – 2029)
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-text-body/10">
                <div className="bg-bg-dark/40 border border-text-body/10 p-3.5 rounded-xl">
                  <span className="text-[11px] text-text-muted block font-mono">CURRENT STATUS</span>
                  <span className="text-white text-sm font-semibold">Second Year</span>
                </div>
                <div className="bg-bg-dark/40 border border-text-body/10 p-3.5 rounded-xl">
                  <span className="text-[11px] text-text-muted block font-mono">FIRST YEAR CGPA</span>
                  <span className="text-brand-primary text-sm font-bold">8.5</span>
                </div>
                <div className="bg-bg-dark/40 border border-text-body/10 p-3.5 rounded-xl">
                  <span className="text-[11px] text-text-muted block font-mono">ACADEMICS</span>
                  <span className="text-white text-xs font-medium">12th: 84% &bull; 10th: 85%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Involvement & Additional Coursework Card */}
          <motion.div
            className="lg:col-span-5 bg-bg-light border border-text-body/10 rounded-2xl p-8 flex flex-col justify-between shadow-xl"
            variants={cardVariants}
          >
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-4 h-4 text-brand-primary" />
                  <span className="text-xs font-mono font-semibold tracking-widest text-text-muted uppercase">
                    Involvement
                  </span>
                </div>
                <h4 className="text-white text-base font-bold">
                  Contributor, College Newsletter/Magazine Team &mdash; DBIT
                </h4>
                <p className="text-text-muted text-xs font-mono mt-1">
                  Academic Year 2025–26
                </p>
              </div>

              <div className="border-t border-text-body/10 pt-4">
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="w-4 h-4 text-brand-primary" />
                  <span className="text-xs font-mono font-semibold tracking-widest text-text-muted uppercase">
                    Coursework & Interests
                  </span>
                </div>
                <ul className="text-text-body text-xs leading-relaxed space-y-2 font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-primary font-bold">&bull;</span>
                    Strong academic foundation in Mathematics; coursework spanning Environmental Studies & core CS subjects.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-primary font-bold">&bull;</span>
                    Experimenting with new technologies through self-directed side projects & exploring UI/UX design principles.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Technical Skills Section */}
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-3">
            <Code2 className="w-5 h-5 text-brand-primary" />
            <h3 className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight">
              Technical Skills.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((group, idx) => (
              <motion.div
                key={idx}
                className="bg-bg-light border border-text-body/10 rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:border-brand-primary/30 transition-all duration-300"
                variants={cardVariants}
                whileHover={{ y: -4 }}
              >
                <div>
                  <h4 className="text-brand-primary text-xs font-mono font-bold uppercase tracking-wider mb-4 border-b border-text-body/10 pb-2">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs text-white font-medium bg-bg-dark/60 border border-text-body/15 px-3 py-1 rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section: Service / Focus Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1: Web Development (Primary Highlighted Card) */}
          <motion.div
            className="bg-brand-primary text-bg-dark rounded-2xl p-8 flex flex-col justify-between h-72 shadow-xl cursor-pointer hover:shadow-brand-primary/10 select-none"
            variants={cardVariants}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-bg-dark/10 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-bg-dark" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider bg-bg-dark/10 px-3 py-1 rounded-full">
                Primary Focus
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 tracking-tight">Web Development</h3>
              <p className="text-bg-dark/80 text-sm leading-relaxed">
                React.js, HTML5, CSS3, JS, building full responsive projects end-to-end with modern tooling.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Full-Stack Development */}
          <motion.div
            className="bg-bg-light border border-text-body/10 text-white rounded-2xl p-8 flex flex-col justify-between h-72 shadow-lg cursor-pointer hover:border-brand-primary/30 select-none custom-hover"
            variants={cardVariants}
            whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.4)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="w-12 h-12 bg-bg-dark/40 border border-text-body/10 rounded-xl flex items-center justify-center">
              <Database className="w-6 h-6 text-brand-primary" />
            </div>
            <div>
              <h3 className="text-white text-2xl font-bold mb-2 tracking-tight">Full-Stack Dev</h3>
              <p className="text-text-body text-sm leading-relaxed">
                Backend engineering using Node.js/Express, Flask, SQLite databases (Turso), and REST APIs.
              </p>
            </div>
          </motion.div>

          {/* Card 3: AI & Applied Interests */}
          <motion.div
            className="bg-bg-light border border-text-body/10 text-white rounded-2xl p-8 flex flex-col justify-between h-72 shadow-lg cursor-pointer hover:border-brand-primary/30 select-none custom-hover"
            variants={cardVariants}
            whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.4)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="w-12 h-12 bg-bg-dark/40 border border-text-body/10 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-brand-primary" />
            </div>
            <div>
              <h3 className="text-white text-2xl font-bold mb-2 tracking-tight">AI & Analytics</h3>
              <p className="text-text-body text-sm leading-relaxed">
                Anthropic API integration, linear regression forecasting models, Chart.js visualizations, and sentiment analysis.
              </p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

