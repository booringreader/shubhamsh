
import React from 'react';
import { Project } from '../types';

interface WantedPosterProps {
  project: Project;
}

const WantedPoster: React.FC<WantedPosterProps> = ({ project }) => {
  return (
    <div className="bg-[#f2e2ba] p-6 wanted-border text-slate-900 flex flex-col items-center transform transition-transform hover:scale-105 hover:rotate-1 duration-300">
      <div className="w-full text-center mb-4">
        <h2 className="font-pirate text-5xl tracking-widest uppercase">Wanted</h2>
        <p className="font-pirate text-xl mt-[-5px]">Dead or Alive</p>
      </div>
      
      <div className="w-full h-48 bg-slate-200 overflow-hidden border-4 border-slate-900 relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all"
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#f2e2ba55] to-transparent"></div>
      </div>

      <div className="mt-4 text-center w-full">
        <h3 className="font-shonen text-3xl mb-1">{project.title}</h3>
        <p className="text-sm font-bold leading-tight mb-3 px-2 line-clamp-3 italic">
          "{project.description}"
        </p>
        
        <div className="flex flex-wrap justify-center gap-1 mb-4">
          {project.tech.map(t => (
            <span key={t} className="text-[10px] px-2 py-0.5 bg-slate-900 text-white rounded uppercase">
              {t}
            </span>
          ))}
        </div>

        <div className="border-t-2 border-slate-900 pt-2">
          <p className="font-pirate text-2xl tracking-tighter">
            {/* Fix: Using project.powerLevel instead of non-existent bounty property to match Project interface */}
            Bounty: <span className="text-red-700 font-shonen">{project.powerLevel}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WantedPoster;
