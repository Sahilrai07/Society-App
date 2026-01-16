
import React from 'react';

const ResidentDocuments: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const docs = [
    { name: 'Possession Letter', size: '2.4 MB', date: '12 Jan 2022' },
    { name: 'Society NOC - Bank', size: '1.1 MB', date: '05 Mar 2023' },
    { name: 'Sale Deed Copy', size: '12.8 MB', date: '10 Jan 2022' },
  ];

  return (
    <div className="animate-in slide-in-from-right duration-300">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40 flex items-center gap-4">
        <button onClick={onBack} className="size-10 rounded-xl bg-slate-100 flex items-center justify-center active:scale-90 transition-all">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-black text-slate-900 tracking-tight">Documents</h1>
      </header>
      <div className="p-5 space-y-3">
        {docs.map(doc => (
          <div key={doc.name} className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <span className="material-symbols-outlined">description</span>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-slate-900">{doc.name}</h4>
              <p className="text-[10px] font-black text-slate-400 uppercase">{doc.size} • {doc.date}</p>
            </div>
            <button className="size-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center">
              <span className="material-symbols-outlined">download</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResidentDocuments;
