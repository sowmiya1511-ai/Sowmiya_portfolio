
import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Skills from './components/skills';
import Certification from './components/certification';
import Project from './components/project';
import Contact from './components/contact';
import LoadingScreen from './components/LoadingScreen';
import FloatingBubbles from './components/FloatingBubbles';


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
      <FloatingBubbles />
      
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
        <section id="skills" className="py-16 sm:py-24 md:py-40">
          <Skills />
        </section>
        <section id="certifications" className="py-16 sm:py-24 md:py-40 bg-[#0f172a]/20 relative overflow-hidden">
          {/* Subtle Background Pattern for Certifications */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#6366f1_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <Certification />
        </section>
        <section id="projects" className="py-16 sm:py-24 md:py-40">
          <Project />
        </section>
        <section id="contact" className="py-16 sm:py-24 md:py-40 bg-[#0f172a]/20">
          <Contact />
        </section>
      </main>

      <footer className="py-12 sm:py-16 text-center border-t border-slate-900 bg-[#020617]">
        <div className="container mx-auto px-4 sm:px-6 md:px-6">
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.3em] font-bold">
            &copy; {new Date().getFullYear()} Sowmiya G. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
      
    </div>
  );
};

export default App;
