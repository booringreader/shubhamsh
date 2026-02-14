import React, { useState, useEffect, useRef } from 'react';
import PowerLevelCard from './components/PowerLevelCard';
import YorozuyaChat from './components/YorozuyaChat';
import { PROJECTS, EXPERIENCES } from './constants';
import { Project } from './types';

const useIntersectionObserver = (options = {}) => {
  const [elements, setElements] = useState<Element[]>([]);
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((observedEntries) => {
      setEntries(observedEntries);
    }, options);

    const { current: currentObserver } = observer;

    elements.forEach((element) => {
      currentObserver.observe(element);
    });

    return () => currentObserver.disconnect();
  }, [elements, options]);

  return [setElements, entries] as const;
};

const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [setRevealElements, revealEntries] = useIntersectionObserver({
    threshold: 0.1,
  });

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const isOverInteractive = !!target.closest('a, button, [role="button"], .group, .wanted-border');
      setIsHovering(isOverInteractive);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal-trigger'));
    setRevealElements(els);
  }, [setRevealElements]);

  const getRevealClass = (id: string) => {
    const entry = revealEntries.find(e => e.target.id === id || e.target.getAttribute('data-reveal-id') === id);
    return entry?.isIntersecting ? 'reveal-visible' : '';
  };

  const kiColor = scrollProgress < 40 ? 'bg-cyan-500 shadow-[0_0_15px_#06b6d4]' :
    scrollProgress < 80 ? 'bg-yellow-400 shadow-[0_0_15px_#facc15]' :
      'bg-red-600 shadow-[0_0_20px_#dc2626]';

  const renderProjectRows = () => {
    const rows = [];
    let i = 0;
    let cycleCount = 0;

    while (i < PROJECTS.length) {
      if (cycleCount % 2 === 0) {
        const p1 = PROJECTS[i];
        const p2 = PROJECTS[i + 1];
        if (p1 && p2) {
          rows.push(
            <div key={`row-${i}`} className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-64 items-start">
              <div
                id={`project-${p1.id}`}
                className={`reveal-trigger reveal-hidden w-full lg:w-[35%] ${getRevealClass(`project-${p1.id}`)}`}
              >
                <PowerLevelCard project={p1} variant="compact-small" />
              </div>
              <div
                id={`project-${p2.id}`}
                className={`reveal-trigger reveal-hidden w-full lg:w-[65%] ${getRevealClass(`project-${p2.id}`)}`}
              >
                <PowerLevelCard project={p2} variant="compact-large" />
              </div>
            </div>
          );
          i += 2;
        } else if (p1) {
          rows.push(
            <div key={`row-${i}`} id={`project-${p1.id}`} className={`reveal-trigger reveal-hidden mb-64 ${getRevealClass(`project-${p1.id}`)}`}>
              <PowerLevelCard project={p1} variant="featured" />
            </div>
          );
          i += 1;
        }
      } else {
        const p1 = PROJECTS[i];
        if (p1) {
          rows.push(
            <div key={`row-${i}`} id={`project-${p1.id}`} className={`reveal-trigger reveal-hidden mb-64 ${getRevealClass(`project-${p1.id}`)}`}>
              <PowerLevelCard project={p1} variant="featured" isReversed={cycleCount % 4 === 3} />
            </div>
          );
          i += 1;
        }
      }
      cycleCount++;
    }
    return rows;
  };

  return (
    <div className="min-h-screen selection:bg-orange-500 selection:text-white bg-stone-950">

      {/* Custom Cursor */}
      <div
        id="custom-cursor-trail"
        className={isHovering ? 'cursor-hover' : ''}
        style={{
          transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0) translate(-50%, -50%)`,
          borderColor: scrollProgress > 80 ? '#rgba(220, 38, 38, 0.5)' : (scrollProgress > 40 ? '#rgba(250, 204, 21, 0.5)' : '#rgba(6, 182, 212, 0.5)')
        }}
      ></div>

      {/* Ki Meter */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 h-64 w-2 bg-stone-800 rounded-full z-[100] hidden lg:block overflow-hidden border border-white/10">
        <div
          className={`absolute bottom-0 w-full transition-all duration-300 ${kiColor}`}
          style={{ height: `${scrollProgress}%` }}
        ></div>
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 font-shonen text-orange-500 text-sm whitespace-nowrap rotate-[-90deg]">KI LEVEL</div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[110] bg-stone-950 px-8 py-4 flex justify-between items-center text-xs tracking-[0.2em] font-desc uppercase border-b border-white/5">
        <div className="text-yellow-500 font-dbz text-3xl">Ż</div>

        <div className="flex gap-10 absolute left-1/2 -translate-x-1/2">
          <a href="#origins" className="text-slate-400 hover:text-white transition-colors border-b-2 border-yellow-500 pb-1">Home</a>
        </div>
      </nav>

      {/* Hero: Creation of Adam / Touched Up Statue Style */}
      <header id="origins" className="relative h-[85vh] min-h-[700px] flex items-center justify-center bg-[#0a0a0a] overflow-hidden pt-20">

        {/* Left Hand: Hand of Man (Adam) - Reaching Out */}
        <div className="absolute left-0 top-[40%] -translate-y-1/2 w-[80%] max-w-[1000px] z-20 pointer-events-none transform -translate-x-[20%] hand-anim">
          <img
            src="/assets/man.png"
            alt="Hand of Adam (Man)"
            style={{ filter: 'grayscale(100%) contrast(180%) brightness(90%) sepia(10%)' }}
            className="w-full h-auto object-contain rotate-[-15deg] opacity-80 drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          />
        </div>

        {/* Center Content: Divine Intervention */}
        <div className="z-30 text-center px-4 reveal-trigger flex flex-col items-center relative">
          {/* Ki Spark: Touched Up Energy Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl z-[-1] ki-spark"></div>
          <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_40px_rgba(255,255,255,1),0_0_80px_rgba(234,179,8,0.8)] z-40 ki-spark mb-8"></div>

          <h1 className="font-dbz text-6xl md:text-8xl lg:text-[10rem] text-yellow-500 tracking-tight leading-none mb-4 drop-shadow-[0_0_50px_rgba(234,179,8,0.4)]">
            SHUBHAM SHARMA
          </h1>
          <h2 className="font-desc text-xl md:text-3xl lg:text-4xl text-white/40 font-light tracking-[0.5em] uppercase mb-12">
            FULL-STACK DEVELOPER
          </h2>

          <div className="flex gap-4 items-center">
            <span className="w-20 h-[1px] bg-white/10"></span>
            <span className="font-desc text-[10px] text-white/20 tracking-[1em] uppercase">S-Rank Sage</span>
            <span className="w-20 h-[1px] bg-white/10"></span>
          </div>
        </div>

        {/* Right Hand: Hand of God - Pointing Back (Touched Up cracked version) */}
        <div className="absolute right-0 top-[14%] -translate-y-1/2 w-[70%] max-w-[1000px] z-20 pointer-events-none transform translate-x-[20%] hand-anim" style={{ animationDelay: '-3s' }}>
          <img
            src="/assets/god.png"
            alt="Hand of God"
            style={{
              filter: 'grayscale(100%) contrast(200%) brightness(140%) sepia(15%) drop-shadow(0 0 15px rgba(234, 179, 8, 0.3))'
            }}
            className="w-full h-auto object-contain rotate-[-15deg] scale-x-[1] opacity-80 drop-shadow-[0_0_30px_rgba(234,179,8,0.4)]"
          />
        </div>

        {/* Backdrop vignette and energy flows */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-stone-950/40 to-stone-950 z-10 pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[150px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>
      </header>

      {/* Training Missions */}
      <section id="training" className="py-32 px-6 bg-stone-900/50 backdrop-blur-sm relative z-10 border-y border-orange-600/20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div id="training-header" className={`reveal-trigger reveal-hidden mb-32 ${getRevealClass('training-header')}`}>
            <span className="font-shonen text-orange-500 text-xl block mb-4 uppercase tracking-widest">Selected Works</span>
            <h2 className="font-goku text-6xl md:text-8xl text-white uppercase leading-none">Projects</h2>
          </div>

          <div>
            {renderProjectRows()}
          </div>
        </div>
      </section>

      {/* Battle History */}
      <section id="battles" className="py-32 px-6 bg-stone-950 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div id="battles-header" className={`reveal-trigger reveal-hidden text-center mb-24 ${getRevealClass('battles-header')}`}>
            <h2 className="font-goku text-6xl text-blue-500 mb-6 uppercase tracking-widest">EXPERIENCE</h2>
            <p className="font-shonen text-2xl text-slate-400 font-desc uppercase">Hyperbolic Time Chamber Logs</p>
          </div>
          <div className="space-y-16">
            {EXPERIENCES.map((exp, idx) => (
              <div key={exp.id} id={`exp-${exp.id}`} className={`reveal-trigger reveal-hidden ${idx % 2 === 0 ? 'slide-left' : 'slide-right'} ${getRevealClass(`exp-${exp.id}`)}`}>
                <div className="relative bg-slate-900/20 p-10 rounded-2xl border-l-8 border-yellow-500 aura-glow transition-all duration-500 hover:bg-slate-900/40">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div>
                      <h3 className="font-goku text-3xl text-orange-500 uppercase mb-2">{exp.role}</h3>
                      <p className="text-slate-400 font-bold font-desc text-lg uppercase">{exp.company} • {exp.period}</p>
                    </div>
                    <div className="bg-blue-600/20 text-blue-400 border border-blue-500/50 px-6 py-2 rounded-full font-shonen text-xl uppercase tracking-tighter">{exp.saga}</div>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed font-desc border-t border-white/5 pt-6">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-32 px-6 bg-stone-900 border-t-4 border-orange-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div id="footer-content" className={`reveal-trigger reveal-hidden max-w-5xl mx-auto text-center relative z-10 ${getRevealClass('footer-content')}`}>
          <h2 className="font-dbz text-6xl mb-6 text-white uppercase">Ready for the Next Saga?</h2>
          <p className="font-shonen text-3xl text-slate-400 mb-16 uppercase tracking-widest font-desc">Instant Transmission Channels</p>
          <div className="flex flex-wrap justify-center gap-12 mb-20">
            {[
              { 
                label: 'Twitter',
                icon: <img src="/assets/x.png" className='size-12'></img>,
                src: "https://x.com/booringreader"
              },
              { 
                label: 'GitHub', 
                icon: <img src="/assets/gh.png" className='size-12'></img>, 
                src:"https://github.com/booringreader"
              },
              {
                label: 'LinkedIn',
                icon: <img src="/assets/ld.webp" className='h-12'></img>,
                src: "https://linkedin.com/in/shubhams1-"
              },
              {
              label: 'Email', 
              icon: <img src="/assets/outlook.png" className='h-14'></img>,
              src: "mailto:shubhamsha.rma@outlook.com"
            }
            ].map((link, idx) => (
            <a 
            key={idx} 
            href={link.src} 
            className="flex flex-col items-center gap-4 group"
            >
              <div className="w-24 h-24 rounded-3xl bg-slate-800 flex items-center justify-center text-3xl group-hover:bg-orange-600 group-hover:scale-110 transition-all aura-glow border border-white/10">{link.icon}</div>
              <span className="font-shonen text-xl text-slate-400 group-hover:text-white transition-colors uppercase">{link.label}</span>
            </a>
            ))}
          </div>
          <div className="pt-16 border-t border-white/5 text-slate-500 font-desc text-sm uppercase tracking-widest">
            <p>Gathered all 7 Dragon Balls to build this site.</p>
            <p className="mt-4">Powered by Senzu Beans & Coffee</p>
          </div>
        </div>
      </footer>
      <YorozuyaChat />
    </div>
  );
};

export default App;