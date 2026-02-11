
import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Redux']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Express']
    },
    {
      title: 'DevOps & Tools',
      skills: ['AWS', 'Docker', 'Git', 'CI/CD', 'Firebase', 'Vercel']
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-indigo-500 font-bold tracking-widest uppercase text-sm mb-4 block">Capabilities</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Technical Arsenal</h2>
        <p className="text-slate-400 text-lg">
          Mastering the tools of tomorrow to build the solutions of today.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="glass p-8 rounded-3xl hover:border-indigo-500/50 transition-all duration-300 group">
            <h3 className="text-2xl font-bold mb-8 group-hover:text-indigo-400 transition-colors">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx} 
                  className="bg-slate-800 text-slate-300 px-4 py-2 rounded-xl text-sm font-medium border border-slate-700 hover:border-indigo-500/50 hover:bg-slate-700 transition-all cursor-default"
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
