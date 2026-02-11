
import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Certification from './components/certification';
import Project from './components/project';
import Contact from './components/contact';
import LoadingScreen from './components/LoadingScreen';
import GeminiChat from './components/GeminiChat';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen selection:bg-indigo-500/30 selection:text-white">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[100] pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <Navbar />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="py-24 md:py-40 bg-[#0f172a]/20">
          <About />
        </section>
        <section id="skills" className="py-24 md:py-40">
          <Skills />
        </section>
        <section id="certifications" className="py-24 md:py-40 bg-[#0f172a]/20 relative overflow-hidden">
          {/* Subtle Background Pattern for Certifications */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#6366f1_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <Certification />
        </section>
        <section id="projects" className="py-24 md:py-40">
          <Project />
        </section>
        <section id="contact" className="py-24 md:py-40 bg-[#0f172a]/20">
          <Contact />
        </section>
      </main>

      <footer className="py-16 text-center border-t border-slate-900 bg-[#020617]">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <span className="text-2xl font-black tracking-tighter text-white">N<span className="text-indigo-500">V</span>A</span>
          </div>
          <p className="text-slate-500 text-sm font-medium max-w-sm mx-auto leading-relaxed mb-8">
            Designing and building industry-leading digital products with a focus on impact and elegance.
          </p>
          <div className="flex justify-center gap-8 mb-8">
            {['Twitter', 'LinkedIn', 'Github', 'Dribbble'].map((social) => (
              <a key={social} href="#" className="text-slate-500 hover:text-indigo-400 text-xs font-bold uppercase tracking-widest transition-colors">{social}</a>
            ))}
          </div>
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.3em] font-bold">
            &copy; {new Date().getFullYear()} NOVA STUDIO. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
      
      <GeminiChat />
    </div>
  );
};

export default App;
