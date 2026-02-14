
import React from 'react';
import { Project } from '../types';

interface PowerLevelCardProps {
  project: Project;
  variant?: 'featured' | 'compact-small' | 'compact-large';
  isReversed?: boolean;
}

const PowerLevelCard: React.FC<PowerLevelCardProps> = ({ project, variant = 'featured', isReversed }) => {
  if (variant === 'featured') {
    return (
      <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20 group`}>
        <div className="w-full lg:w-3/5 relative">
          <div className="absolute -inset-4 bg-orange-600/10 rounded-3xl blur-2xl group-hover:bg-orange-600/20 transition-all duration-700"></div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 aura-glow aspect-video">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-60"></div>
            <div className={`absolute top-6 ${isReversed ? 'left-6' : 'right-6'} bg-orange-600 text-white p-4 aura-glow shadow-orange-900 border-2 border-yellow-400 rotate-3 group-hover:rotate-0 transition-transform`}>
              <p className="font-shonen text-sm uppercase mb-[-4px]">Power Level</p>
              <p className="font-dbz text-3xl">{project.powerLevel}</p>
            </div>
          </div>
        </div>
        <div className={`w-full lg:w-2/5 flex flex-col ${isReversed ? 'items-end text-right' : 'items-start text-left'}`}>
          <span className="font-shonen text-orange-500 text-2xl tracking-widest mb-2 block uppercase">Mission {project.id}</span>
          <h3 className="font-goku text-5xl md:text-6xl text-white mb-6 leading-none tracking-tighter uppercase transition-colors group-hover:text-yellow-400">{project.title}</h3>
          <p className="text-slate-300 text-lg leading-relaxed font-desc mb-8 max-w-xl">{project.description}</p>
          <div className={`flex flex-wrap gap-2 mb-10 ${isReversed ? 'justify-end' : 'justify-start'}`}>
            {project.tech.map(t => (
              <span key={t} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold font-desc text-slate-400 uppercase tracking-widest group-hover:border-orange-500/50 group-hover:text-orange-300 transition-colors">{t}</span>
            ))}
          </div>
          <a href={project.link} className="relative inline-flex items-center group/btn">
            <span className="font-shonen text-2xl text-white mr-4 group-hover/btn:text-orange-500 transition-colors">View Codebase</span>
            <span className="w-12 h-12 rounded-full border border-orange-500 flex items-center justify-center text-orange-500 group-hover/btn:bg-orange-500 group-hover/btn:text-white transition-all">➜</span>
          </a>
        </div>
      </div>
    );
  }

  // Compact variant for 2-up rows
  const isSmall = variant === 'compact-small';
  return (
    <div className={`flex flex-col gap-6 group ${isSmall ? 'mt-0' : 'lg:mt-24'}`}>
      <div className="relative overflow-hidden rounded-xl border border-white/10 aura-glow aspect-square">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80"></div>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <p className="font-dbz text-2xl text-orange-500 tracking-tighter">{project.powerLevel}</p>
          <span className="font-shonen text-white text-lg uppercase tracking-widest opacity-60">#{project.id}</span>
        </div>
      </div>
      <div>
        <h3 className={`font-goku ${isSmall ? 'text-3xl' : 'text-4xl'} text-white mb-3 uppercase group-hover:text-yellow-400 transition-colors`}>{project.title}</h3>
        <p className={`text-slate-400 leading-snug font-desc ${isSmall ? 'text-sm' : 'text-base'} mb-6 line-clamp-3`}>{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map(t => (
            <span key={t} className="text-[10px] px-2 py-0.5 bg-white/5 border border-white/10 rounded-sm text-slate-500 uppercase tracking-widest">{t}</span>
          ))}
        </div>
        <a href={project.link} className="relative inline-flex items-center group/btn mt-4">
            <span className="font-shonen text-2xl text-white mr-4 group-hover/btn:text-orange-500 transition-colors">View Codebase</span>
            <span className="w-12 h-12 rounded-full border border-orange-500 flex items-center justify-center text-orange-500 group-hover/btn:bg-orange-500 group-hover/btn:text-white transition-all">➜</span>
          </a>
      </div>
    </div>
  );
};

export default PowerLevelCard;
