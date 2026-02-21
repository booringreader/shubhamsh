import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin} from 'vite-plugin-favicons-inject';
import { Page } from '../types';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Left Pane - Dark */}
      <div className="w-full md:w-1/2 split-pane-left p-8 md:p-16 flex flex-col justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="z-10"
        >
          <span className="text-brand-accent font-mono text-xl tracking-widest mb-2 block">
            HI, MY NAME IS
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-none tracking-tighter mb-4">
            SHUBHAM <br/>
            <span className="outline-text">SHARMA</span>
          </h1>
          <p className="max-w-md text-brand-text-muted text-base md:text-lg leading-tight mb-4 font-satoshi">
          I build full-stack applications that blend performance, scalability, and thoughtful design. <br />
          At the system level, I engineer low-level software with a focus on efficiency and control.</p>
          <p className="max-w-md text-brand-text-muted text-base md:text-lg leading-tight mb-10 font-satoshi">
          When not doing either, I like to touch some grass, do LeetCode and read fiction. <br />
          Explore my{" "}
            
            <button onClick={() => onNavigate('projects')} className="text-brand-accent hover:text-brand-text underline underline-offset-4 transition-colors font-medium"> projects </button> {" "}
            or view my professional{" "}
            <button onClick={() => onNavigate('experience')} className="text-brand-accent hover:text-brand-text underline underline-offset-4 transition-colors font-medium"> experience </button>
            
            {" "}to see how I write code.
          </p>

          <div className="flex flex-col gap-5">
            <div className="flex gap-4 items-center">
              <a href="mailto:shubhamsha.rma@outlook.com" className="text-brand-text-muted hover:text-brand-text transition-colors"><i class="fa-regular fa-envelope text-2xl w-7"></i></a>
              <a href="https://linkedin.com/in/shubhams1-" className="text-brand-text-muted hover:text-brand-text transition-colors"><i class="fa-brands fa-linkedin-in text-2xl w-7"></i></a>
              <a href="https://github.com/booringreader" className="text-brand-text-muted hover:text-brand-text transition-colors"><i class="fa-brands fa-github text-2xl font-light"> </i></a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Pane - Fixed Blue */}
      <div className="w-full md:w-1/2 split-pane-right p-8 md:p-16 flex flex-col justify-center relative">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="z-10 flex flex-col items-center text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="mb-12"
          >
            <img
              src="https://picsum.photos/seed/abstract/400/400"
              alt="Abstract Rotating Element"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white/20 shadow-2xl object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="max-w-md">
            <p className="text-white/70 text-lg md:text-xl leading-relaxed italic">
              "Complexity is the enemy. I strive for systems that are as simple as possible, but no simpler."
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        .outline-text {
          -webkit-text-stroke: 1px var(--text-muted);
          color: transparent;
        }
      `}</style>
    </div>
  );
};
