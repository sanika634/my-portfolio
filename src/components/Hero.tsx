import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { portfolioData } from '../data/portfolioData';
import { FiDownload, FiMail } from 'react-icons/fi';

export default function Hero() {
  const { personalInfo } = portfolioData;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-accent-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      
      <div className="dark:mix-blend-color-dodge absolute inset-0 z-0 opacity-30" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary-500 font-semibold tracking-wider uppercase text-sm mb-4 block">
            Welcome to my portfolio
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <br />
            <span className="text-gradient">{personalInfo.name}</span>
          </h1>
          
          <div className="text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-300 mb-6 h-[40px]">
            <TypeAnimation
              sequence={[
                ...personalInfo.typedTitles.flatMap(title => [title, 2000])
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
            I build responsive web applications and love turning complex problems into beautiful, intuitive designs.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-primary-600 text-white font-medium flex items-center gap-2 hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-1"
            >
              <FiMail /> Contact Me
            </a>
            <a
              href={personalInfo.resumeUrl}
              download
              className="px-8 py-3 rounded-full glass border-slate-200 dark:border-slate-700 font-medium flex items-center gap-2 hover:bg-white/50 dark:hover:bg-slate-800 transition-all hover:-translate-y-1"
            >
              <FiDownload /> Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative justify-self-center lg:justify-self-end"
        >
          <div className="w-72 h-72 md:w-96 md:h-96 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-full blur-2xl opacity-20 animate-pulse" />
            <div className="absolute inset-4 rounded-full border-2 border-primary-500/30 border-dashed animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-0 rounded-full p-2 bg-gradient-to-tr from-primary-500 via-secondary-500 to-accent-500">
              <div className="w-full h-full rounded-full bg-slate-900 overflow-hidden flex items-center justify-center">
                {/* Fallback avatar if no image provided */}
                <div className="text-8xl">👩‍💻</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
