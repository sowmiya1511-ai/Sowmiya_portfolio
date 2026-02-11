
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-6 text-center">
      <div className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full -mr-32 -mt-32 blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full -ml-32 -mb-32 blur-[80px]"></div>
        
        <span className="text-indigo-500 font-bold tracking-widest uppercase text-sm mb-6 block">Ready to start?</span>
        <h2 className="text-5xl md:text-7xl font-extrabold mb-10 tracking-tighter leading-none">
          Let's create something <br />
          <span className="gradient-text italic">Extraordinary</span>
        </h2>
        
        <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Currently accepting new projects and collaboration opportunities. 
          Drop me a line and let's turn your vision into reality.
        </p>

        <a 
          href="mailto:hello@novaportfolio.com" 
          className="inline-flex items-center gap-4 bg-white text-slate-950 px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 group shadow-2xl shadow-indigo-500/20"
        >
          hello@nova.com
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>

        <div className="mt-16 flex justify-center gap-10">
          <a href="#" className="text-slate-500 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs">Instagram</a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs">Dribbble</a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs">Twitter</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
