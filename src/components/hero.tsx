
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl pt-20 sm:pt-24 md:pt-32 lg:pt-40">
      <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-10 group-hover:opacity-30 transition-all duration-700"></div>
          
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden glass shadow-2xl bg-slate-900">
            <img 
              src="/profile.jpeg" 
              alt="ML Engineer" 
              className="w-full  object-contain grayscale brightness-90 contrast-110 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
            />
            {/* Subtle Overlay Grid */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
          </div>
        </div>

        <div>
          <header className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-indigo-500"></div>
              <span className="text-indigo-500 font-bold tracking-[0.3em] uppercase text-xs"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 text-white tracking-tighter leading-tight md:leading-none">
              <span className="mr-6">Hi</span>
              <span>I'M</span>
              <br />
              <span className="text-slate-500 underline decoration-indigo-500/50 decoration-4 underline-offset-8">
                Sowmiya Gunasekaran
              </span>
            </h2>

          </header>
          
          <div className="space-y-6 text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed">
            <p>
              I am a <span className="text-white font-bold">Machine Learning Enthusiast</span> with hands-on experience in building, evaluating, and deploying machine learning models. Strong foundation in data preprocessing, feature engineering, and model evaluation. Passionate about applying machine learning techniques to solve real-world problems and continuously improving model performance.
            </p>
          </div>

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5">
            <a 
              href="https://github.com/sowmiya1511-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 glass px-8 py-4 rounded-2xl border-2 border-blue-500/50 hover:bg-slate-800 transition-all hover:-translate-y-1 shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </div>
              <span className="font-bold text-slate-200">GitHub</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/sowmiya-sowmiyaguna-805999363/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 glass px-8 py-4 rounded-2xl border-2 border-blue-500/50 hover:bg-slate-800 transition-all hover:-translate-y-1 shadow-lg"
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

export default Hero;
