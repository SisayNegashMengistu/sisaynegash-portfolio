import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import { navigationLinks } from '../../data/portfolioData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [_viewportHeight, setViewportHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active section
      let current = '';
      navigationLinks.forEach(link => {
        const section = document.querySelector(link.href);
        if (section) {
          const offset = section.getBoundingClientRect().top + window.scrollY;
          if (window.scrollY >= offset - 100) {
            current = link.href;
          }
        }
      });
      setActiveSection(current);
    };

    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    handleScroll();
    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 dark:bg-dark-800/90 backdrop-blur-md py-3 shadow-md' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-lg bg-primary-500 text-white flex items-center justify-center">
              <Code className="w-6 h-6" />
            </div>
            <span className="font-heading font-bold text-xl"> Sisay</span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ul className="flex space-x-8">
              {navigationLinks.map(link => (
                <li key={link.id}>
                  <a 
                    href={link.href}
                    className={`font-medium transition-colors duration-200 ${
                      activeSection === link.href
                        ? 'text-primary-600 dark:text-primary-400 font-semibold'
                        : 'text-dark-500 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Theme toggle */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Mobile Tab Navigation */}
      <motion.nav
        className="fixed left-0 w-full bg-white/95 dark:bg-dark-800/95 backdrop-blur-md shadow-t-md z-[100] md:hidden"
        style={{ bottom: 0 }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, delay: 0.3 }}
      >
        <ul className="flex justify-between items-center py-3 flex-wrap">
          {navigationLinks.map((link, index) => (
            <motion.li
              key={link.id}
              initial={{ y: 30, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ 
                delay: 0.4 + index * 0.15, 
                type: 'spring', 
                stiffness: 120, 
                damping: 15 
              }}
            >
              <a
                href={link.href}
                className={`flex flex-col items-center px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === link.href
                    ? 'text-primary-600 dark:text-primary-400 font-semibold'
                    : 'text-dark-500 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                <motion.span
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95, y: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                >
                  {link.name}
                </motion.span>
                {activeSection === link.href && (
                  <motion.div
                    className="h-1 w-full bg-primary-600 dark:bg-primary-400 rounded-full mt-2"
                    layoutId="tabIndicator"
                    transition={{ type: 'spring', stiffness: 150, damping: 20 }}
                  />
                )}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </>
  );
}