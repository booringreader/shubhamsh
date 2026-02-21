import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const navItems: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Projects', value: 'projects' },
    { label: 'Experience', value: 'experience' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-display font-bold tracking-tighter text-white"
      >
        NOVA<span className="text-brand-accent">.</span>
      </motion.div>

      <div className="flex gap-8 items-center">
        {navItems.map((item) => (
          <button
            key={item.value}
            onClick={() => onPageChange(item.value)}
            className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-brand-accent ${
              currentPage === item.value ? 'text-brand-accent' : 'text-white/70'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

const SocialIcon = ({ Icon, href }: { Icon: any; href: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-white/50 hover:text-brand-accent transition-colors"
  >
    <Icon size={18} />
  </a>
);
