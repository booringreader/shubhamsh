import React, {useState, useEffect} from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from '../types';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const THOUGHTS = [
  "The world is cruel, but also very beautiful.",
  "Do not seek to follow in the footsteps of the men of old; seek what they sought.",
  "In this world, is the destiny of mankind controlled by some transcendental entity?",
  "To transcend monsters, you must be willing to abandon your humanity.",
  "Simplicity is the ultimate sophistication.",
  "Talk is cheap. Show me the code.",
  "Sometimes it is the people no one can imagine anything of who do the things no one can imagine.",
  "If you have time to think of a beautiful end, then live beautifully until the end.",
  "Power comes in response to a need, not a desire.",
  "Inherited Will, The Destiny of the Age, and The Dreams of the People.",
  "Stay hungry, stay foolish.",
  "I think it is possible for ordinary people to choose to be extraordinary.",
  "Preoccupy yourself with nothing.",
  "Struggle, endure, contend.",
  "The only way to do great work is to love what you do.",
  "I am the master of my own destiny.",
  "An artist is someone who makes things people don't need to have."
];

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [thoughtIndex, setThoughtIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setThoughtIndex((prev) => (prev + 1) % THOUGHTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
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

      {/* Fat peeping cat div*/}
      <div className="absolute bottom-0 left-8 md:left-16 z-20 flex flex-col items-center pointer-events-none">
          {/* Thought Bubble */}
          <div className="relative mb-[-10px] flex flex-col items-center max-w-[250px] md:max-w-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={thoughtIndex}
                initial={{ scale: 0, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0, opacity: 0, y: -10 }}
                className="relative"
              >{/* Main Bubble */}
              <div className="bg-brand-paper border-2 border-brand-text/10 px-4 py-3 rounded-2xl shadow-lg">
                <p className="text-[11px] md:text-xs font-mono leading-tight text-brand-text italic text-center">
                  "{THOUGHTS[thoughtIndex]}"
                </p>
              </div>
              
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-brand-paper border border-brand-text/10" />
                <div className="w-1 h-1 rounded-full bg-brand-paper border border-brand-text/10" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Fat Peeping Cat */}
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mt-8"
        ><svg width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-text">
        {/* Fat Head/Body Peeping */}
        <path 
          d="M10 60C10 30 30 10 50 10C70 10 90 30 90 60" 
          fill="currentColor" 
          className="opacity-10"
        />
        <path 
          d="M10 60C10 30 30 10 50 10C70 10 90 30 90 60" 
          stroke="currentColor" 
          strokeWidth="2" 
        />
        
        {/* Ears */}
        <path d="M25 22L18 5L35 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" className="fill-brand-bg" />
        <path d="M75 22L82 5L65 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" className="fill-brand-bg" />
        
        {/* Eyes (Peeping just above the edge) */}
        <motion.g
          animate={{ scaleY: [1, 0.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.05, 0.1] }}
        >
          <circle cx="35" cy="35" r="3" fill="currentColor" />
          <circle cx="65" cy="35" r="3" fill="currentColor" />
        </motion.g>
        
        {/* Tiny Nose & Mouth */}
        <path d="M48 42L50 44L52 42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M45 48C45 48 47.5 50 50 50C52.5 50 55 48 55 48" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        {/* Whiskers */}
        <path d="M25 40H10" stroke="currentColor" strokeWidth="1" opacity="0.3" />
              <path d="M25 45H12" stroke="currentColor" strokeWidth="1" opacity="0.3" />
              <path d="M75 40H90" stroke="currentColor" strokeWidth="1" opacity="0.3" />
              <path d="M75 45H88" stroke="currentColor" strokeWidth="1" opacity="0.3" />
              
              {/* Paws peeping over the edge */}
              <rect x="25" y="55" width="15" height="10" rx="5" fill="currentColor" stroke="currentColor" strokeWidth="1" />
              <rect x="60" y="55" width="15" height="10" rx="5" fill="currentColor" stroke="currentColor" strokeWidth="1" />
            </svg>
        </motion.div>
        </div>
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
