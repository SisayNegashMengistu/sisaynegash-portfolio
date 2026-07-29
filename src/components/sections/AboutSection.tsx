import { motion } from "framer-motion";
import {
  personalInfo,
  educationData,
  experienceData,
  socialLinks,
} from "../../data/portfolioData";
import {
  Calendar,
  MapPin,
  BookOpen,
  Briefcase,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import avatar from "../../assets/2f8tx8.jpg"
import { FaTelegramPlane } from "react-icons/fa";
export default function AboutSection() {
  return (
    <section id="about" className="section bg-gray-50 dark:bg-dark-700/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading">
            Explore my background, skills, experience, and the work that defines my journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Profile picture and bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="relative mb-8 group">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 opacity-75 group-hover:opacity-100 blur transition duration-200"></div>
              <div className="relative">
                <img
                  src={avatar}
                  alt={personalInfo.name}
                  className="w-64 h-64 object-cover rounded-xl z-10"
                />
              </div>
            </div>

            <div className="max-w-lg">
              <h3 className="text-2xl font-bold mb-4">Biography</h3>
              <p className="text-dark-400 dark:text-dark-200 mb-6 leading-relaxed">
                {personalInfo.description}
              </p>
              <p className="text-dark-400 dark:text-dark-200 mb-6 leading-relaxed">
                I am continuously learning and exploring emerging technologies, including Artificial Intelligence, Explainable AI (XAI), cloud computing, and modern web frameworks, to stay at the forefront of the rapidly evolving technology landscape. I am committed to building reliable, accessible, high-performance, and impactful software systems while continually expanding my technical expertise and delivering solutions that create meaningful value.
              </p>

              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary-500 mr-3" />
                  <span className="text-dark-500 dark:text-dark-100">
                    {personalInfo.location}
                  </span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary-500 mr-3" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-dark-500 dark:text-dark-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
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
          </motion.div>

          {/* Education and Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Education Timeline */}
            <div>
              <div className="flex items-center mb-6">
                <BookOpen className="w-6 h-6 text-primary-500 mr-3" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>

              <div className="space-y-8">
                {educationData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:rounded-full before:bg-primary-500 before:z-10 before:shadow-lg after:content-[''] after:absolute after:left-[7.5px] after:top-10 after:w-1 after:h-full after:bg-primary-200 dark:after:bg-primary-900/30"
                  >
                    <div className="flex flex-wrap items-center justify-between mb-1">
                      <h4 className="text-lg font-semibold">{item.degree}</h4>
                      <div className="flex items-center text-sm text-dark-400 dark:text-dark-200">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                    <p className="text-dark-500 dark:text-dark-100 mb-1">
                      {item.institution}
                    </p>
                    <p className="text-dark-400 dark:text-dark-300 text-sm mb-2">
                      {item.location}
                    </p>
                    <p className="text-dark-400 dark:text-dark-200 text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <div className="flex items-center mb-6">
                <Briefcase className="w-6 h-6 text-primary-500 mr-3" />
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>

              <div className="space-y-8">
                {experienceData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:rounded-full before:bg-primary-500 before:z-10 before:shadow-lg after:content-[''] after:absolute after:left-[7.5px] after:top-10 after:w-1 after:h-full after:bg-primary-200 dark:after:bg-primary-900/30 last:after:h-0"
                  >
                    <div className="flex flex-wrap items-center justify-between mb-1">
                      <h4 className="text-lg font-semibold">{item.position}</h4>
                      <div className="flex items-center text-sm text-dark-400 dark:text-dark-200">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                    <p className="text-dark-500 dark:text-dark-100 mb-1">
                      {item.company}
                    </p>
                    <p className="text-dark-400 dark:text-dark-300 text-sm mb-2">
                      {item.location}
                    </p>
                    <p className="text-dark-400 dark:text-dark-200 text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Import Lucide icons
const Mail = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
