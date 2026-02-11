
import React from 'react';

interface CertCardProps {
  title: string;
  issuer: string;
  date: string;
  icon: string;
}

const CertCard: React.FC<CertCardProps> = ({ title, issuer, date, icon }) => (
  <div className="glass p-6 rounded-3xl group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15l-2 5L9 9l11 4-5 2zm0 0l4 4"></path></svg>
    </div>
    <div className="flex items-start gap-5">
      <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
        <span className="text-xl font-bold">{icon}</span>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-slate-400 text-sm mb-4 font-medium">{issuer}</p>
        <div className="flex items-center gap-2 text-xs text-slate-500 font-bold uppercase tracking-wider">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          {date}
        </div>
      </div>
    </div>
  </div>
);

const Certification: React.FC = () => {
  const certifications = [
    { title: 'AWS Certified Developer', issuer: 'Amazon Web Services', date: 'DEC 2023', icon: '☁️' },
    { title: 'Google Professional Cloud Architect', issuer: 'Google Cloud', date: 'OCT 2023', icon: 'G' },
    { title: 'Meta Front-End Developer', issuer: 'Meta (Coursera)', date: 'JUL 2023', icon: 'M' },
    { title: 'TensorFlow Developer Certificate', issuer: 'Google AI', date: 'MAR 2023', icon: '🧠' },
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
        <div>
          <span className="text-indigo-500 font-bold tracking-widest uppercase text-sm mb-4 block">Achievements</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Certifications</h2>
        </div>
        <p className="max-w-md text-slate-400 text-lg">
          Continuous learning is the key to excellence in an ever-evolving field.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, idx) => (
          <CertCard key={idx} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default Certification;
