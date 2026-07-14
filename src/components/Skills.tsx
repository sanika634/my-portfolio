import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { 
  Code2, 
  Terminal, 
  Database, 
  Wrench,
  MonitorPlay,
  Server
} from 'lucide-react';

const getCategoryIcon = (category: string) => {
  switch(category) {
    case 'Frontend': return <MonitorPlay className="w-8 h-8" />;
    case 'Backend': return <Server className="w-8 h-8" />;
    case 'Database': return <Database className="w-8 h-8" />;
    case 'Tools': return <Wrench className="w-8 h-8" />;
    default: return <Code2 className="w-8 h-8" />;
  }
};

export default function Skills() {
  const { skills } = portfolioData;
  const categories = Object.keys(skills);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section id="skills" className="py-24 relative bg-slate-100/50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My <span className="text-gradient">Skills</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {skills[activeCategory as keyof typeof skills].map((skill, index) => {
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="glass-card p-6 flex flex-col items-center gap-4 group hover:-translate-y-2 transition-transform"
                >
                  <div className="p-4 rounded-full bg-slate-100 dark:bg-slate-700/50 text-primary-500 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all flex items-center justify-center">
                    {getCategoryIcon(activeCategory)}
                  </div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-100 text-center">
                    {skill.name}
                  </h3>
                  
                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mt-auto">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
