
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-10 group-hover:opacity-30 transition-all duration-700"></div>
          
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden glass border-2 border-slate-800 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
              alt="Nova - Senior Engineer" 
              className="w-full h-full object-cover grayscale brightness-90 contrast-110 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
            />
            {/* Subtle Overlay Grid */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
          </div>

          {/* Floating Stats */}
          <div className="absolute -top-6 -left-6 glass px-6 py-4 rounded-2xl border border-slate-700 shadow-xl backdrop-blur-xl animate-float">
            <span className="text-3xl font-black text-indigo-400">98%</span>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Client Success</p>
          </div>
          
          <div className="absolute -bottom-10 -right-6 glass p-6 rounded-3xl border border-slate-700 shadow-2xl animate-float delay-700">
            <div className="flex flex-col">
              <span className="text-4xl font-black gradient-text tracking-tighter">05+</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] whitespace-nowrap">Years in Engineering</span>
            </div>
          </div>
        </div>

        <div>
          <header className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-indigo-500"></div>
              <span className="text-indigo-500 font-bold tracking-[0.3em] uppercase text-xs">Genesis & Vision</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tighter leading-none">
              Engineering the <br /><span className="text-slate-500 underline decoration-indigo-500/50 decoration-4 underline-offset-8">Human Experience</span>
            </h2>
          </header>
          
          <div className="space-y-6 text-slate-400 text-lg md:text-xl leading-relaxed">
            <p>
              I am <span className="text-white font-bold">Nova</span>, a Senior Frontend Engineer based in San Francisco. My work exists at the intersection of aesthetic precision and technical robustness. I specialize in building highly interactive, accessible, and performant web applications.
            </p>
            <p>
              With over half a decade of experience, I've led development for high-growth startups and established tech firms, consistently pushing the boundaries of what's possible within the browser. My philosophy is simple: <span className="italic text-indigo-300">code is craft, and every pixel is a promise.</span>
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-5">
            <a 
              href="https://github.com" 
              className="group flex items-center gap-4 glass px-8 py-4 rounded-2xl hover:bg-slate-800 transition-all hover:-translate-y-1 shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </div>
              <span className="font-bold text-slate-200">GitHub</span>
            </a>
            
            <a 
              href="https://linkedin.com" 
              className="group flex items-center gap-4 glass px-8 py-4 rounded-2xl hover:bg-slate-800 transition-all hover:-translate-y-1 shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <span className="font-bold text-slate-200">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
