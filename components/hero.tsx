
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>
        
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          <div className="mb-8 overflow-hidden">
            <span className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase animate-[reveal_1s_ease-out]">
              The Future of Digital Interaction
            </span>
          </div>
          
          <h1 className="text-6xl md:text-[9rem] font-black text-center leading-[0.85] tracking-tighter mb-12">
            <span className="block text-white animate-[slideUp_1s_ease-out_0.2s_both]">DESIGNING</span>
            <span className="block gradient-text italic animate-[slideUp_1s_ease-out_0.4s_both]">TOMORROW</span>
          </h1>
          
          <p className="max-w-xl text-center text-slate-400 text-lg md:text-xl font-medium leading-relaxed mb-16 animate-[fadeIn_1.5s_ease-out_0.8s_both]">
            Architecting immersive experiences that bridge the gap between human intuition and technical possibility.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 animate-[fadeIn_1.5s_ease-out_1.2s_both]">
            <a
              href="#projects"
              className="group relative px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-indigo-500/20"
            >
              <span className="relative z-10">EXPLORE WORK</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            
            <a
              href="#contact"
              className="px-10 py-5 glass border-slate-700/50 rounded-2xl font-bold text-lg text-white hover:bg-slate-800 transition-all"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50 animate-bounce">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-indigo-500 to-transparent"></div>
        </div>
      </div>

      <style>{`
        @keyframes reveal {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Hero;
