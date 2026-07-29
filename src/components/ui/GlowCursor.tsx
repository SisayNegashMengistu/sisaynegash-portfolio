import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeStore } from '../../store/themeStore';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function GlowCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const { isDarkMode } = useThemeStore();

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (
        el.tagName === 'A' ||
        el.tagName === 'BUTTON' ||
        el.closest('button') ||
        el.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleClick = (e: MouseEvent) => {
      const newRipple: Ripple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev, newRipple]);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 500);
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999]
                   ${isDarkMode ? 'bg-primary-500' : 'bg-primary-600'}
                   ${isHovering ? 'opacity-70 scale-150' : 'opacity-40'}`}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          boxShadow: isHovering
            ? isDarkMode
              ? '0 0 20px 5px rgba(14, 165, 233, 0.5)'
              : '0 0 20px 5px rgba(2, 132, 199, 0.4)'
            : isDarkMode
              ? '0 0 15px 2px rgba(14, 165, 233, 0.3)'
              : '0 0 15px 2px rgba(2, 132, 199, 0.2)',
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 200,
          mass: 0.5,
        }}
      />

      {/* Ripple click effect */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{
              opacity: 0.5,
              scale: 0,
              x: ripple.x - 32,
              y: ripple.y - 32,
            }}
            animate={{
              scale: 2.5,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed w-16 h-16 rounded-full pointer-events-none z-[9998]
                       bg-primary-400 opacity-50"
          />
        ))}
      </AnimatePresence>
    </>
  );
}
