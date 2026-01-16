
import React from 'react';

const ResidentDomesticHelp: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const staff = [
    { id: '1', name: 'Laxmi Devi', role: 'Maid', status: 'Inside', time: '08:15 AM', img: 'https://i.pravatar.cc/100?img=32' },
    { id: '2', name: 'Ravi Kumar', role: 'Driver', status: 'Outside', time: 'Yesterday', img: 'https://i.pravatar.cc/100?img=33' },
  ];

  return (
    <div className="animate-in slide-in-from-right duration-300">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40 flex items-center gap-4">
        <button onClick={onBack} className="size-10 rounded-xl bg-slate-100 flex items-center justify-center active:scale-90 transition-all">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-black text-slate-900 tracking-tight">My Daily Help</h1>
      </header>
      <div className="p-5 space-y-4">
        {staff.map(s => (
          <div key={s.id} className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-4">
            <img src={s.img} className="size-14 rounded-2xl object-cover" alt={s.name} />
            <div className="flex-1">
              <h4 className="font-black text-slate-900">{s.name}</h4>
              <p className="text-[10px] font-black text-accent uppercase tracking-widest">{s.role}</p>
            </div>
            <div className="text-right">
              <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${s.status === 'Inside' ? 'bg-success/10 text-success' : 'bg-slate-100 text-slate-400'}`}>
                {s.status}
              </span>
              <p className="text-[9px] font-bold text-slate-400 mt-1">{s.time}</p>
            </div>
          </div>
        ))}
        <button className="w-full border-2 border-dashed border-slate-200 py-6 rounded-[2rem] text-slate-400 font-black text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-all">
          + Add New Help
        </button>
      </div>
    </div>
  );
};

export default ResidentDomesticHelp;
