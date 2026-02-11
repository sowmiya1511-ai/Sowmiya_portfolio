
import React, { useState, useEffect, useRef } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});
  const navRefs = useRef<{[key: string]: HTMLAnchorElement | null}>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'certifications', 'projects', 'contact'];
      let current = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const activeElement = navRefs.current[activeSection];
    if (activeElement) {
      setIndicatorStyle({
        width: `${activeElement.offsetWidth}px`,
        left: `${activeElement.offsetLeft}px`,
        opacity: 1
      });
    } else {
      setIndicatorStyle({ opacity: 0 });
    }
  }, [activeSection, isScrolled]);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Certs', id: 'certifications' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-700 ${isScrolled ? 'py-4 translate-y-0' : 'py-8 translate-y-2'}`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className={`flex items-center justify-between px-6 py-2.5 transition-all duration-500 rounded-2xl ${isScrolled ? 'glass shadow-2xl shadow-indigo-500/10' : 'bg-transparent'}`}>
          <a href="#home" className="group flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-black text-white text-lg transition-transform group-hover:rotate-12">N</div>
            <span className="text-xl font-bold font-jakarta tracking-tighter text-white">NOVA</span>
          </a>

          <div className="hidden md:flex relative items-center gap-2">
            {/* Animated Indicator Pill */}
            <div 
              className="absolute h-[70%] bg-indigo-500/10 rounded-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] z-0"
              style={indicatorStyle}
            ></div>
            
            {navLinks.map((link) => (
              <a
                key={link.id}
                ref={(el) => { navRefs.current[link.id] = el; }}
                href={`#${link.id}`}
                className={`relative z-10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:text-white ${activeSection === link.id ? 'text-indigo-400' : 'text-slate-400'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 bg-indigo-600/10 hover:bg-indigo-600 text-indigo-400 hover:text-white border border-indigo-500/20 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 active:scale-95"
          >
            Connect
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>

          {/* Mobile Menu Icon */}
          <button className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl glass text-indigo-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
