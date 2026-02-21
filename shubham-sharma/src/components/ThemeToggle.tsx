import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';

export const ThemeToggle: React.FC = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const isLightMode = document.documentElement.classList.contains('light');
    setIsLight(isLightMode);
  }, []);

  const toggleTheme = () => {
    const newMode = !isLight;
    setIsLight(newMode);
    if (newMode) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      onClick={toggleTheme}
      className="fixed top-8 right-8 z-[60] p-3 rounded-full bg-brand-paper border border-brand-text/10 text-brand-text hover:border-brand-accent transition-all duration-300 shadow-sm"
      aria-label="Toggle Theme"
    >
      {isLight ? <Moon size={20} /> : <Sun size={20} />}
    </motion.button>
  );
};
