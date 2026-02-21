import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Page } from '../types';

interface ProjectGridProps {
  onNavigate: (page: Page) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-brand-bg pt-16 pb-24 px-6 md:px-24">
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => onNavigate('home')}
        className="flex items-center gap-2 text-brand-text-muted hover:text-brand-accent transition-colors mb-12 uppercase font-mono text-xs tracking-widest"
      >
        <ArrowLeft size={16} />
        Back to Home
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-4">Selected Works</h2>
        <div className="h-1 w-24 bg-brand-accent"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-brand-paper p-8 md:p-12 rounded-2xl border border-brand-text/5 hover:border-brand-accent/30 transition-all duration-500"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="flex gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono uppercase tracking-widest text-brand-accent-secondary bg-brand-accent-secondary/10 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.githubUrl} className="text-brand-text-muted hover:text-brand-text transition-colors">
                  <Github size={20} />
                </a>
                <a href={project.liveUrl} className="text-brand-text-muted hover:text-brand-text transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-brand-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-brand-text-muted leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-accent group-hover:w-full transition-all duration-500"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
