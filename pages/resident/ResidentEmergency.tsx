
import React from 'react';

const ResidentEmergency: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const contacts = [
    { name: 'Society SOS', phone: '1000', icon: 'shield' },
    { name: 'Ambulance', phone: '102', icon: 'medical_services' },
    { name: 'Fire Station', phone: '101', icon: 'local_fire_department' },
    { name: 'Police Control', phone: '100', icon: 'policy' },
  ];

  return (
    <div className="animate-in slide-in-from-right duration-300">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40 flex items-center gap-4">
        <button onClick={onBack} className="size-10 rounded-xl bg-slate-100 flex items-center justify-center active:scale-90 transition-all">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-black text-slate-900 tracking-tight">Emergency Support</h1>
      </header>
      <div className="p-5 space-y-4">
        <div className="bg-error p-8 rounded-[3rem] text-white text-center shadow-xl shadow-error/20">
          <span className="material-symbols-outlined text-6xl mb-4 animate-pulse">emergency</span>
          <h2 className="text-2xl font-black mb-2">Panic Button</h2>
          <p className="text-white/70 text-sm font-bold uppercase tracking-widest">Alerts Security & Family</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {contacts.map(c => (
            <div key={c.name} className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center text-center gap-3">
              <div className="size-12 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center">
                <span className="material-symbols-outlined">{c.icon}</span>
              </div>
              <div>
                <h4 className="font-black text-slate-900 text-sm">{c.name}</h4>
                <p className="text-accent font-black text-xs">{c.phone}</p>
              </div>
              <button className="size-10 rounded-full bg-accent text-white flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-sm">call</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResidentEmergency;
