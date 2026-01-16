
import React from 'react';

const AdminCommittee: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const members = [
    { name: 'Vikram Mehta', role: 'President', flat: 'A-501', phone: '+91 90000 11111' },
    { name: 'Sunita Rao', role: 'Secretary', flat: 'B-202', phone: '+91 90000 22222' },
    { name: 'Amit Shah', role: 'Treasurer', flat: 'C-303', phone: '+91 90000 33333' },
  ];

  return (
    <div className="animate-in slide-in-from-right duration-300 min-h-screen bg-slate-50">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40 flex items-center gap-4">
        <button onClick={onBack} className="size-10 rounded-xl bg-slate-100 flex items-center justify-center active:scale-90 transition-all">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-black text-slate-900 tracking-tight">Committee</h1>
      </header>
      <div className="p-5 space-y-4">
        {members.map(m => (
          <div key={m.name} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black">
              {m.name.charAt(0)}
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-black text-slate-900">{m.name}</h4>
              <p className="text-[10px] font-black text-accent uppercase tracking-widest">{m.role} • {m.flat}</p>
            </div>
            <button className="size-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center">
              <span className="material-symbols-outlined">call</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCommittee;
