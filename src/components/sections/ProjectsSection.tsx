import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';
import { projectsData } from '../../data/portfolioData';

export default function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // Get unique categories from projectsData
  const allCategories = ['All', 'Fullstack','Frontend','AI','Engineering','Cloud'];

  // Filter projects based on selected category
  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-dark-700/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">My Projects</h2>
          <p className="section-subheading">Check out some of my recent work</p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                activeFilter === category
                  ? 'bg-primary-600 text-white dark:bg-primary-600 dark:text-white'
                  : 'bg-gray-200 text-dark-500 hover:bg-gray-300 dark:bg-dark-600 dark:text-dark-200 dark:hover:bg-dark-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid with Animation Fix */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative overflow-hidden rounded-xl bg-white dark:bg-dark-600 shadow-lg"
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Buttons */}
                  <AnimatePresence>
                    {hoveredId === project.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center gap-4"
                      >
                        {project.demoUrl && (
                          <motion.a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark-800 hover:bg-primary-500 hover:text-white transition-colors duration-200"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.a>
                        )}
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark-800 hover:bg-primary-500 hover:text-white transition-colors duration-200"
                          >
                            <Github className="w-5 h-5" />
                          </motion.a>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {project.featured && (
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium bg-accent-500 text-white">
                      Featured
                    </div>
                  )}
                  {project.underDev && (
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium bg-red-500 text-white">
                      coming soon
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-dark-400 dark:text-dark-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-dark-500 dark:bg-dark-700 dark:text-dark-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <a
            href="https://github.com/SisayNegashMengistu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            <span className="mr-2 font-medium">More projects on GitHub</span>
            <Code className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
