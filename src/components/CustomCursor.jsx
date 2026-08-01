import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const checkDevice = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(hasTouch);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      if (target && (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        target.closest('[role="button"]') ||
        target.closest('.custom-hover')
      )) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    if (!isMobile) {
      window.addEventListener('mousemove', moveCursor);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
    }

    return () => {
      window.removeEventListener('resize', checkDevice);
      if (!isMobile) {
        window.removeEventListener('mousemove', moveCursor);
        document.removeEventListener('mouseleave', handleMouseLeave);
        document.removeEventListener('mouseenter', handleMouseEnter);
      }
    };
  }, [isMobile, isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-brand-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 border border-brand-primary rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? 56 : 24,
          height: isHovered ? 56 : 24,
        }}
        animate={{
          scale: isHovered ? 1.2 : 1,
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.9)' : 'rgba(245, 166, 35, 0)',
          borderColor: isHovered ? 'rgba(255, 255, 255, 1)' : '#F5A623',
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.1 }}
      />
    </>
  );
}
