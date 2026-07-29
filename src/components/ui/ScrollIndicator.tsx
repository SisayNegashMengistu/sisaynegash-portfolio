import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ScrollIndicator() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showScrollDown, setShowScrollDown] = useState(true);

  const handleScroll = () => {
    const winScroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollPercentage(scrolled);
    
    if (winScroll > 100) {
      setShowScrollDown(false);
    } else {
      setShowScrollDown(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-200 dark:bg-dark-700">
        <motion.div 
          className="h-full bg-primary-600 dark:bg-primary-500"
          style={{ width: `${scrollPercentage}%` }}
        />
      </div>

      {/* Scroll down indicator */}
      {showScrollDown && (
        <motion.div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 hidden md:flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <p className="text-sm font-medium mb-2 text-dark-500 dark:text-gray-300">
            Scroll Down
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}