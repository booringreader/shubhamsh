import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
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
          <span className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-4 block">
            Software Engineer & Architect
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-none tracking-tighter mb-6">
            SHUBHAM <br />
            <span className="outline-text">SHARMA</span>
          </h1>
          <p className="max-w-md text-brand-text-muted text-base md:text-lg leading-relaxed mb-8 font-satoshi">
            Building high-performance systems and immersive web experiences. Explore my{" "}
            <button 
              onClick={() => onNavigate('projects')}
              className="text-brand-accent hover:text-brand-text underline underline-offset-4 transition-colors font-medium"
            >
              projects
            </button>
            {" "}or view my professional{" "}
            <button 
              onClick={() => onNavigate('experience')}
              className="text-brand-accent hover:text-brand-text underline underline-offset-4 transition-colors font-medium"
            >
              experience
            </button>
            {" "}to see how I craft elegant code.
          </p>
          
          <div className="flex flex-col gap-8">
            <div className="flex gap-8 items-center">
              <a href="#" className="text-brand-text-muted hover:text-brand-text transition-colors"><Github size={24} /></a>
              <a href="#" className="text-brand-text-muted hover:text-brand-text transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="text-brand-text-muted hover:text-brand-text transition-colors"><Twitter size={24} /></a>
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
