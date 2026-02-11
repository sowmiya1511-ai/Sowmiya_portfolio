
import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Technical Skills',
      skills: ['Python', 'Java', 'Django','Flask']
    },
    {
      title: 'DS & ML',
      skills: [ 'Postgresql', 'EDA', 'Fine tuning','Supervised & Unsupervised Learning' ]
    },
    {
      title: 'Tools',
      skills: [ 'Git', 'InteliJ IDE','Streamlit', 'Power BI']
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-indigo-500 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block">Capabilities</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">Technical Arsenal</h2>
        <p className="text-slate-400 text-base sm:text-lg">
          Mastering the tools of tomorrow to build the solutions of today.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="glass p-6 md:p-8 rounded-3xl border border-blue-500/50 hover:border-indigo-500/50 transition-all duration-300 group">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 group-hover:text-indigo-400 transition-colors">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx} 
                  className="bg-slate-800 text-slate-300 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium border-2 border-white/50 hover:border-indigo-500/50 hover:bg-slate-700 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
