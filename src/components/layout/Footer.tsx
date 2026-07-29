import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import { socialLinks, personalInfo } from '../../data/portfolioData';
import { motion } from 'framer-motion';
import { FaTelegramPlane } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-dark-700 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About section */}
          <div>
            <h3 className="text-lg font-bold mb-4">{personalInfo.name}</h3>
            <p className="text-dark-400 dark:text-dark-200 mb-4 text-sm">
              {personalInfo.description}
            </p>
            <p className="text-dark-400 dark:text-dark-200 text-sm">
              {personalInfo.location}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm text-dark-400 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-sm text-dark-400 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-sm text-dark-400 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-sm text-dark-400 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-dark-400 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-center space-x-6"
                >
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-dark-400 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {link.icon === "github" && <Github className="w-6 h-6" />}
                      {link.icon === "linkedin" && (
                        <Linkedin className="w-6 h-6" />
                      )}
                      {link.icon === "twitter" && (
                        <Twitter className="w-6 h-6" />
                      )}
                      {link.icon === "instagram" && <Instagram className="w-6 h-6" />}
                      {link.icon === "telegram" && <FaTelegramPlane className="w-6 h-6" />}
                    </motion.a>
                  ))}
                </motion.div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-dark-600 mt-10 pt-6 mb-10 md:mb-0 text-center">
          <p className="text-dark-400 dark:text-dark-200 text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}