import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES, SKILLS } from '../constants';
import { Briefcase, GraduationCap, Award, ArrowLeft } from 'lucide-react';
import { Page } from '../types';

interface ExperienceTimelineProps {
  onNavigate: (page: Page) => void;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ onNavigate }) => {
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Timeline */}
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-4">Journey</h2>
            <div className="h-1 w-24 bg-brand-accent"></div>
          </motion.div>

          <div className="space-y-12 relative before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-brand-accent-secondary/20 ml-4 pl-12">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Icon Marker */}
                <div className="absolute -left-[60px] top-0 w-10 h-10 rounded-full bg-brand-paper border border-brand-text/10 flex items-center justify-center text-brand-accent z-10">
                  {exp.type === 'work' && <Briefcase size={18} />}
                  {exp.type === 'education' && <GraduationCap size={18} />}
                  {exp.type === 'internship' && <Award size={18} />}
                </div>

                <span className="text-xs font-mono text-brand-accent uppercase tracking-widest mb-2 block">
                  {exp.period}
                </span>
                <h3 className="text-2xl font-display font-bold text-brand-text mb-1">
                  {exp.company}
                </h3>
                <p className="text-lg text-brand-text-muted mb-6">{exp.role}</p>
                
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-brand-text/70 flex gap-3">
                      <span className="text-brand-accent mt-1.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Skills & Info */}
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="sticky top-32 space-y-12"
          >
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-brand-text-muted mb-6">Technical Arsenal</h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-brand-paper border border-brand-text/5 rounded-lg text-sm font-medium hover:border-brand-accent/50 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 bg-brand-accent/5 border border-brand-accent/20 rounded-2xl">
              <h3 className="text-xl font-display font-bold mb-4">Let's Build Something</h3>
              <p className="text-brand-text-muted text-sm leading-relaxed mb-6">
                I'm currently looking for new opportunities to solve complex problems and build impactful software.
              </p>
              <a 
                href="mailto:hello@nova.dev" 
                className="inline-block w-full text-center bg-brand-accent hover:bg-brand-accent-secondary text-white font-bold py-4 rounded-xl transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
