
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
      title: 'Life Expectancy Prediction',
      category: 'Healthcare / Data Science',
      image: '/Life-Expectancy.webp',
      tech: ['Python', 'Pandas', 'Scikit-learn'],
      description: 'Developed and deployed a Streamlit app for Life Expectancy Prediction using WHO data, featuring supervised learning models with optimized hyperparameters.'
    },
    {
      title: 'Amzify – E-Commerce Application',
      category: 'Full Stack / Web Development',
      image: '/amzify-customer.png',
      tech: ['React', 'Node.js','Express','Typescript','Render'],
      description: 'Designed and implemented a full-stack e-commerce application with React frontend and Node.js backend, featuring user authentication, product management, and seamless deployment on Render.'
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-6 max-w-7xl" ref={containerRef}>
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 sm:mb-20 gap-6 sm:gap-8 reveal-on-scroll">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-indigo-500"></span>
            <span className="text-indigo-500 font-bold tracking-[0.4em] uppercase text-[10px]">Curation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 text-white tracking-tighter leading-tight md:leading-none">
            Projects<span className="gradient-text italic"></span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
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
    </div>
  );
};

export default Project;
