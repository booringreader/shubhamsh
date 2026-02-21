import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ThemeToggle } from './components/ThemeToggle';
import { CustomCursor } from './components/CustomCursor';
import { Page } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onNavigate={setCurrentPage} />;
      case 'projects':
        return <ProjectGrid onNavigate={setCurrentPage} />;
      case 'experience':
        return <ExperienceTimeline onNavigate={setCurrentPage} />;
      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-brand-bg flex items-center justify-center z-[100]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          className="flex flex-col items-center"
        >
          <div className="text-4xl font-display font-bold tracking-tighter text-white mb-4">
            Loading<span className="text-brand-accent">.</span>
          </div>
          <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-brand-accent w-1/2"
            />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative">
      <CustomCursor />
      <ThemeToggle />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      Custom Cursor or other global elements could go here
      {currentPage !== 'home' && (
        <footer className="bg-brand-bg py-12 px-6 md:px-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-brand-text-muted text-xs font-mono tracking-widest uppercase">
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-brand-text-muted hover:text-brand-accent text-xs font-mono uppercase tracking-widest transition-colors">Github</a>
            <a href="#" className="text-brand-text-muted hover:text-brand-accent text-xs font-mono uppercase tracking-widest transition-colors">LinkedIn</a>
            <a href="#" className="text-brand-text-muted hover:text-brand-accent text-xs font-mono uppercase tracking-widest transition-colors">Twitter</a>
          </div>
        </footer>
      )}
    </div>
  );
}
