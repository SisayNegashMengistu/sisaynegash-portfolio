import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Database, GitBranch, Figma, 
  Github,
  Boxes
} from 'lucide-react';
import { skillsData } from '../../data/portfolioData';
import { FaDocker, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiNetlify, SiPostman, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { CgVercel } from 'react-icons/cg';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<'frontend' | 'backend' | 'tools' | 'all' | 'engineering' | 'cloud' | 'ai'>('all');
  const [filteredSkills, setFilteredSkills] = useState(skillsData);
  
  useEffect(() => {
    if (activeTab === 'all') {
      setFilteredSkills(skillsData);
    } else {
      setFilteredSkills(skillsData.filter(skill => skill.category === activeTab));
    }
  }, [activeTab]);

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">My Skills</h2>
          <p className="section-subheading">
            These are the technologies and tools I work with
          </p>
        </motion.div>

        {/* Skill category tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="inline-flex space-x-2 p-1 bg-gray-100 dark:bg-dark-700 rounded-lg">
            {['all', 'frontend', 'backend', 'tools', 'engineering', 'cloud', 'ai'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-white dark:bg-dark-600 text-primary-600 dark:text-primary-400 shadow-sm'
                    : 'text-dark-400 dark:text-dark-300 hover:text-dark-600 dark:hover:text-dark-100'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Skills grid with progress bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white dark:bg-dark-600 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
  {skill.icon === 'typescript' && <SiTypescript className="w-5 h-5" />}
  {skill.icon === 'react' && <FaReact className="w-5 h-5" />}
  {skill.icon === 'server' && <FaNodeJs className="w-5 h-5" />}
  {skill.icon === 'express' && <SiExpress className="w-5 h-5" />}
  {skill.icon === 'mongodb' && <SiMongodb className="w-5 h-5" />}
  {skill.icon === 'database' && <Database className="w-5 h-5" />}
  {skill.icon === 'git-branch' && <GitBranch className="w-5 h-5" />}
  {skill.icon === 'github' && <Github className="w-5 h-5" />}
  {skill.icon === 'docker' && <FaDocker className="w-5 h-5" />} {/* Use Boxes or replace with a better Docker icon if using custom SVG */}
  {skill.icon === 'figma' && <Figma className="w-5 h-5" />}
  {skill.icon === 'paintbrush' && <SiTailwindcss className="w-5 h-5" />}
  {skill.icon === 'send' && <SiPostman className="w-5 h-5" />} {/* Postman */}
  {skill.icon === 'netlify' && <SiNetlify className="w-5 h-5" />} 
  {skill.icon === 'vercel' && <CgVercel className="w-5 h-5" />} 
  {skill.icon === 'render' && <Boxes className="w-5 h-5" />} 
</div>

                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
              
              <div className="relative w-full h-4 bg-gray-100 dark:bg-dark-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 + index * 0.05 }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-400"
                />
              </div>
              
              <div className="flex justify-between mt-2">
                <span className="text-sm text-dark-400 dark:text-dark-200">Proficiency</span>
                <span className="text-sm font-medium text-dark-500 dark:text-dark-100">{skill.progress}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}