
import React, { useEffect, useRef } from 'react';

const Project: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = containerRef.current?.querySelectorAll('.reveal-on-scroll');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Aether Finance',
      category: 'Fintech / Dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
      tech: ['React', 'D3.js', 'Postgres'],
      description: 'A real-time financial monitoring system with high-frequency data visualization.'
    },
    {
      title: 'Lumina AI Editor',
      category: 'AI / Creative Tool',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
      tech: ['Next.js', 'Gemini', 'Tailwind'],
      description: 'Generative design editor powered by native multimodal models.'
    },
    {
      title: 'Orbit Ecosystem',
      category: 'Web3 / Infrastructure',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop',
      tech: ['Solidity', 'TypeScript', 'Ethers'],
      description: 'Decentralized asset management platform for cross-chain liquid staking.'
    }
  ];

  return (
    <div className="container mx-auto px-6 max-w-7xl" ref={containerRef}>
      <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8 reveal-on-scroll">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-indigo-500"></span>
            <span className="text-indigo-500 font-bold tracking-[0.4em] uppercase text-[10px]">Curation</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tighter leading-none">
            Selected <span className="gradient-text italic">Artifacts</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            A precise exploration of code and design, focusing on solving complex problems with elegant architectural patterns.
          </p>
        </div>
        <div className="hidden lg:flex gap-4">
          <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-500 cursor-not-allowed border-slate-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"></path></svg>
          </div>
          <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-indigo-400 cursor-pointer border-indigo-500/20 hover:bg-indigo-600 hover:text-white transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {projects.map((project, idx) => (
          <div key={idx} className={`reveal-on-scroll group stagger-${idx + 1}`}>
            <div className="pro-card glass rounded-[2rem] overflow-hidden flex flex-col h-full bg-[#0f172a]/40 border-slate-800/50">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                   <div className="glass px-3 py-1 rounded-lg text-[10px] font-bold text-white uppercase tracking-wider backdrop-blur-md">
                    {project.category}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </div>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-black mb-3 text-white tracking-tight group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 text-center reveal-on-scroll">
        <a href="#" className="inline-flex items-center gap-4 text-white font-bold group">
          <span className="border-b border-indigo-500/50 pb-1 group-hover:border-indigo-500 transition-all">VIEW ALL PROJECTS</span>
          <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project;
