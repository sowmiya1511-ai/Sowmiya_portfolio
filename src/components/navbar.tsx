
import React, { useState, useEffect, useRef } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRefs = useRef<{[key: string]: HTMLAnchorElement | null}>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'skills', 'certifications', 'projects', 'contact'];
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
    { name: 'Skills', id: 'skills' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleMobileNavClick = (id: string) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-700 ${isScrolled ? 'py-4 translate-y-0' : 'py-4 md:py-8 translate-y-0 md:translate-y-2'}`}>
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className={`flex items-center justify-between px-4 md:px-6 py-2.5 transition-all duration-500 rounded-2xl ${isScrolled ? 'glass shadow-2xl shadow-indigo-500/10' : 'bg-transparent'}`}>
          <a href="#home" className="group flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-black text-white text-lg transition-transform group-hover:rotate-12">S</div>
            <span className="text-lg md:text-xl font-bold font-jakarta tracking-tighter text-white hidden sm:inline">Sowmiya</span>
          </a>

          {/* Desktop Navigation */}
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
                className={`relative z-10 px-3 py-2 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:text-white ${activeSection === link.id ? 'text-indigo-400' : 'text-slate-400'}`}
              >
                {link.name}
              </a>
            ))}
          </div>
        <a
          href="https://drive.google.com/file/d/1Bm4LAw17M85NeL1ZFXmol0qVm-eLwAMs/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
>
          <button className="resume-btn flex items-center gap-2">
          RESUME<span className="arrow">↓</span>
          </button>
        </a>



          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl glass text-indigo-400 flex-shrink-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-2xl overflow-hidden animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => handleMobileNavClick(link.id)}
                  className={`px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all ${activeSection === link.id ? 'bg-indigo-500/20 text-indigo-400' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'}`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => handleMobileNavClick('contact')}
                className="w-full mt-2 bg-indigo-600/10 hover:bg-indigo-600 text-indigo-400 hover:text-white border border-indigo-500/20 px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-all text-center"
              >
                Connect
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
