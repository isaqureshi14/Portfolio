import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ setLoading }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 600);
          return 100;
        }
        // Increment speed adjusts preloader duration (approx 1.5 seconds)
        const diff = Math.random() > 0.4 ? 3 : 1;
        return Math.min(prev + diff, 100);
      });
    }, 30);
    return () => clearInterval(timer);
  }, [setLoading]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#252836] z-[10000] flex flex-col items-center justify-center"
      exit={{ 
        y: '-100%',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 100 100" 
            className="w-24 h-24 stroke-brand-primary fill-none"
            style={{ strokeWidth: 1.5 }}
          >
            <motion.path
              d="M30 65 C30 80, 50 90, 65 90 C80 90, 90 75, 90 60 C90 40, 70 20, 50 10 C45 8, 40 12, 42 17 C48 30, 50 40, 45 50 C40 60, 30 55, 30 65 Z"
              initial={{ pathLength: 0, fill: "rgba(245, 166, 35, 0)" }}
              animate={{ 
                pathLength: 1, 
                fill: percentage === 100 ? "rgba(245, 166, 35, 1)" : "rgba(245, 166, 35, 0)"
              }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </svg>
        </div>
        
        <div className="flex flex-col items-center">
          <motion.span 
            className="text-white text-xs font-semibold tracking-widest font-sans uppercase mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.2 }}
          >
            &mdash; Isa Qureshi &mdash;
          </motion.span>
          <div className="w-48 h-[2px] bg-bg-light relative overflow-hidden rounded">
            <motion.div 
              className="absolute left-0 top-0 h-full bg-brand-primary"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <span className="text-brand-primary font-mono text-sm font-semibold mt-2">{percentage}%</span>
        </div>
      </div>
    </motion.div>
  );
}
