
import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsExiting(true), 500);
          return 100;
        }
        // Random increments for a more "realistic" loading feel
        const increment = Math.floor(Math.random() * 5) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed inset-0 bg-[#020617] flex flex-col items-center justify-center z-[100] transition-all duration-1000 ease-in-out ${isExiting ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100'}`}>
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="relative mb-16 scale-150 md:scale-[2]">
        <div className="absolute -inset-4 bg-indigo-500/20 blur-xl rounded-full animate-pulse"></div>
        <h1 className="relative text-5xl font-black tracking-tighter text-white">
          N<span className="text-indigo-500">V</span>A
        </h1>
        {/* Scanning line effect */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-indigo-400/50 shadow-[0_0_15px_rgba(129,140,248,0.8)] animate-[scan_2s_linear_infinite]"></div>
      </div>
      
      <div className="w-72 h-1 bg-slate-900 rounded-full overflow-hidden relative">
        <div 
          className="h-full bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 bg-[length:200%_100%] animate-[gradient_2s_linear_infinite] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="mt-8 flex flex-col items-center gap-2">
        <div className="font-mono text-[10px] text-indigo-400/60 tracking-[0.3em] uppercase">
          Synthesizing Interface
        </div>
        <div className="font-mono text-xl font-bold text-slate-400 tracking-tighter">
          {progress}<span className="text-indigo-500 text-sm ml-0.5">%</span>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
