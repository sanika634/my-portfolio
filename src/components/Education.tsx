import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FiBookOpen, FiAward } from 'react-icons/fi';

export default function Education() {
  const { education, certifications } = portfolioData;

  return (
    <section id="experience" className="py-24 relative bg-slate-100/50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Education {certifications.length > 0 && <>& <span className="text-gradient">Certifications</span></>}</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
        </motion.div>

        <div className={`grid ${certifications.length > 0 ? 'lg:grid-cols-2' : 'grid-cols-1 max-w-4xl mx-auto'} gap-12`}>
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-500">
                <FiBookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary-500 before:to-secondary-500 before:opacity-30 ml-2 md:ml-0">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-[#0f172a] bg-primary-500 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6">
                    <div className="flex flex-col mb-2">
                      <span className="text-sm font-bold text-primary-500 uppercase tracking-wider mb-1">{edu.year}</span>
                      <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">{edu.degree}</h4>
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{edu.college}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          {certifications.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg text-secondary-500">
                  <FiAward className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              
              <div className="grid gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="glass-card p-4 flex items-center gap-6 group hover:-translate-y-1 transition-transform"
                  >
                    <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                      <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary-500 transition-colors">{cert.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{cert.issuer}</p>
                      <span className="inline-block px-3 py-1 bg-secondary-50 dark:bg-slate-700/50 text-secondary-600 dark:text-secondary-400 rounded-full text-xs font-medium">
                        {cert.date}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
