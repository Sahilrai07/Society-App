
import React from 'react';

const ResidentHelpdesk: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const staff = [
    { id: '1', name: 'Raju Mechanic', role: 'Plumber', phone: '+91 98765 43210', available: true, img: 'https://i.pravatar.cc/100?img=12' },
    { id: '2', name: 'Kamal Kant', role: 'Electrician', phone: '+91 98765 43211', available: false, img: 'https://i.pravatar.cc/100?img=13' },
    { id: '3', name: 'Suman Lata', role: 'Society Manager', phone: '+91 98765 43212', available: true, img: 'https://i.pravatar.cc/100?img=14' },
    { id: '4', name: 'Security Main', role: 'Gate Keeper', phone: '+91 98765 43213', available: true, img: 'https://i.pravatar.cc/100?img=15' },
  ];

  return (
    <div className="animate-in slide-in-from-right duration-300">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40 flex items-center gap-4">
        <button onClick={onBack} className="size-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 active:scale-90 transition-all">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight">Helpdesk</h1>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Contact Society Staff</p>
        </div>
      </header>

      <div className="p-5 space-y-6">
        <div className="bg-[#1f3a60] rounded-[2.5rem] p-7 text-white flex items-center justify-between shadow-xl shadow-primary/20">
           <div>
             <h3 className="text-xl font-black mb-1">Emergency</h3>
             <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-4">Immediate Response</p>
             <button className="bg-error text-white px-6 py-2.5 rounded-2xl text-xs font-black shadow-lg shadow-error/20 flex items-center gap-2 active:scale-95 transition-all">
               <span className="material-symbols-outlined text-sm">call</span> SOS ALERT
             </button>
           </div>
           <span className="material-symbols-outlined text-7xl text-error opacity-40 animate-pulse">crisis_alert</span>
        </div>

        <div className="space-y-4">
           {staff.map(s => (
             <div key={s.id} className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
                <div className="size-14 rounded-2xl bg-slate-200 overflow-hidden shrink-0 border border-slate-100">
                   <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                   <h4 className="text-sm font-black text-slate-900 truncate">{s.name}</h4>
                   <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">{s.role}</p>
                   <div className="flex items-center gap-1.5">
                      <span className={`size-1.5 rounded-full ${s.available ? 'bg-success' : 'bg-slate-300'}`} />
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{s.available ? 'Available' : 'Away'}</span>
                   </div>
                </div>
                <div className="flex gap-2">
                   <button className="size-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center active:scale-90 transition-all">
                      <span className="material-symbols-outlined text-xl">chat_bubble</span>
                   </button>
                   <button className="size-10 rounded-xl bg-accent text-white flex items-center justify-center shadow-md active:scale-90 transition-all">
                      <span className="material-symbols-outlined text-xl">call</span>
                   </button>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default ResidentHelpdesk;
