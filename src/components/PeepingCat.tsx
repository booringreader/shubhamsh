import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const THOUGHTS = [
   "Talk is cheap. Show me the code.",
  "Inherited Will, The Destiny of the Age, and The Dreams of the People.",
  "Stay hungry, stay foolish.",
  "Preoccupy yourself with nothing.",
  "Struggle, endure, contend.",
  "Give up on your dreams and die.",
  "I'll take a potato chip... and eat it."
];

interface PeepingCatProps {
  position?: 'bottom-left' | 'bottom-right' | 'top-right';
  inverted?: boolean;
}

export const PeepingCat: React.FC<PeepingCatProps> = ({ 
  position = 'bottom-left',
  inverted = false 
}) => {
  const [thoughtIndex, setThoughtIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setThoughtIndex((prev) => (prev + 1) % THOUGHTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const containerClasses = position === 'bottom-left' 
    ? "absolute bottom-0 left-8 md:left-16 z-20 flex flex-col items-center pointer-events-none"
    : position === 'bottom-right'
    ? "absolute bottom-0 right-8 md:right-16 z-20 flex flex-col items-center pointer-events-none"
    : "absolute top-0 right-8 md:right-16 z-20 flex flex-col-reverse items-center pointer-events-none";

  return (
    <div className={containerClasses}>
      {/* Thought Bubble */}
      <div className={`relative ${position.startsWith('bottom') ? 'mb-[-10px]' : 'mt-[-10px]'} flex flex-col items-center max-w-[250px] md:max-w-[300px]`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={thoughtIndex}
            initial={{ scale: 0, opacity: 0, y: position.startsWith('bottom') ? 20 : -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: position.startsWith('bottom') ? -10 : 10 }}
            className="relative"
          >
            {/* Main Bubble */}
            <div className="bg-brand-paper border-2 border-brand-text/10 px-4 py-3 rounded-2xl shadow-lg">
              <p className="text-[11px] md:text-xs font-mono leading-tight text-brand-text italic text-center">
                "{THOUGHTS[thoughtIndex]}"
              </p>
            </div>
            
            {/* Thought Bubble Tail (Small Circles) */}
            <div className={`absolute ${position.startsWith('bottom') ? '-bottom-4' : '-top-4'} left-1/2 -translate-x-1/2 flex ${position.startsWith('bottom') ? 'flex-col' : 'flex-col-reverse'} items-center gap-1`}>
              <div className="w-2 h-2 rounded-full bg-brand-paper border border-brand-text/10" />
              <div className="w-1 h-1 rounded-full bg-brand-paper border border-brand-text/10" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Fat Peeping Cat */}
      <motion.div
        animate={{ y: position.startsWith('bottom') ? [0, 5, 0] : [-25, -20, -25] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className={position.startsWith('bottom') ? "mt-8" : "mb-2"}
        style={{ transform: inverted ? 'rotate(180deg)' : 'none' }}
      >
        <svg width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-text">
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
  );
};
