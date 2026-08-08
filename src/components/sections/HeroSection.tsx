import { motion } from "framer-motion";
import { FileDown, Send } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center md:pt-20 pt-24"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-sm font-medium">
              {personalInfo.title}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-dark-500 to-dark-700 dark:from-white dark:to-gray-300"
          >
          I'm {personalInfo.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-dark-400 dark:text-dark-200 max-w-2xl mb-8"
          >
            {personalInfo.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-row flex-wrap justify-center gap-3 mb-12 text-sm sm:text-base"
          >
            <a href="#contact" className="btn btn-primary px-4 py-2">
              <Send className="w-5 h-5 mr-2" />
              Contact Me
            </a>
            <a
              href="/Sisay_negash_mengistu_cv_2026.pdf"
              className="btn btn-outline px-4 py-2"
              download
            >
              <FileDown className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
