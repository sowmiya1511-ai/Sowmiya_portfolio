
import React from 'react';

interface CertCardProps {
  title: string;
  issuer: string;
  date: string;
  icon?: string;
  logo?: string;
}

const CertCard: React.FC<CertCardProps> = ({ title, issuer, date, icon, logo }) => (
  <div className="glass p-6 rounded-3xl group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden border-2 border-blue-500/50">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15l-2 5L9 9l11 4-5 2zm0 0l4 4"></path></svg>
    </div>
    <div className="flex items-start gap-10">
      <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
        {logo ? <img src={logo} alt={issuer} className="w-12 h-12 object-contain" /> : <span className="text-xl font-bold">{icon}</span>}
      </div>
      <div>
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-slate-400 text-sm mb-4 font-medium">{issuer}</p>
        <div className="flex items-center gap-2 text-xs text-slate-500 font-bold uppercase tracking-wider">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          {date}
        </div>
      </div>
    </div>
  </div>
);

const Certification: React.FC = () => {
  const certifications = [
    { title: 'AWS Machine Learning Foundation', issuer: 'Amazon Web Services', date: '27 DEC 2025', logo: '/aws logo.png' },
    { title: 'Associate Data Scientist', issuer: 'DataCamp', date: '09 DEC 2025', logo: '/data camp logo.png' },
    { title: 'Django Framework Basic to Advanced', issuer: 'HCL GUVI', date: '11 FEB 2026', logo: '/hcl logo.jpeg' },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 sm:mb-16 gap-6 sm:gap-8 text-center md:text-left">
        <div>
          <span className="text-indigo-500 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block">Achievements</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Certifications</h2>
        </div>
        <p className="max-w-md text-slate-400 text-base sm:text-lg">
          Continuous learning is the key to excellence in an ever-evolving field.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {certifications.map((cert, idx) => (
          <CertCard key={idx} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default Certification;
