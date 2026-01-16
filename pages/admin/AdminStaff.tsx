
import React from 'react';

const AdminStaff: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const staff = [
    { id: '1', name: 'Ram Singh', role: 'Head Guard', shift: 'Morning', status: 'On Duty', img: 'https://i.pravatar.cc/150?img=11' },
    { id: '2', name: 'Sanjay Dutt', role: 'Security', shift: 'Night', status: 'Off Duty', img: 'https://i.pravatar.cc/150?img=12' },
    { id: '3', name: 'Meena Kumari', role: 'Facility Mgr', shift: 'General', status: 'On Duty', img: 'https://i.pravatar.cc/150?img=13' },
    { id: '4', name: 'Ravi Teja', role: 'Electrician', shift: 'On-Call', status: 'Away', img: 'https://i.pravatar.cc/150?img=14' },
  ];

  return (
    <div className="animate-in slide-in-from-right duration-300">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="size-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 active:scale-90 transition-all">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <h1 className="text-xl font-black text-slate-900 tracking-tight">Society Staff</h1>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Employee Records</p>
          </div>
        </div>
        <button className="size-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-lg active:scale-90 transition-all">
          <span className="material-symbols-outlined">person_add</span>
        </button>
      </header>

      <div className="p-5 space-y-6">
        <div className="bg-purple-600 rounded-[2.5rem] p-8 text-white shadow-xl shadow-purple-600/20 relative overflow-hidden">
           <div className="relative z-10">
              <h3 className="text-2xl font-black mb-1">24 Staff Active</h3>
              <p className="text-purple-100 text-xs font-bold uppercase tracking-widest opacity-80 mb-4">Total 32 Registered</p>
              <div className="flex gap-2">
                 <button className="bg-white text-purple-600 px-5 py-2 rounded-xl text-[10px] font-black uppercase">Shift Logs</button>
                 <button className="bg-purple-500 text-white px-5 py-2 rounded-xl text-[10px] font-black uppercase">Attendance</button>
              </div>
           </div>
           <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[12rem] opacity-10">engineering</span>
        </div>

        <div className="space-y-4">
           {staff.map(s => (
             <div key={s.id} className="bg-white p-4 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-4 group hover:border-purple-600/30 transition-all">
                <div className="size-14 rounded-2xl bg-slate-200 overflow-hidden shrink-0 border-2 border-white shadow-sm">
                   <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                   <h4 className="text-sm font-black text-slate-900 truncate">{s.name}</h4>
                   <div className="flex items-center gap-2 mt-1">
                      <span className="text-[9px] font-black text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full uppercase tracking-widest">{s.role}</span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{s.shift} Shift</span>
                   </div>
                </div>
                <div className="text-right shrink-0">
                   <div className="flex items-center gap-1.5 mb-1 justify-end">
                      <span className={`size-1.5 rounded-full ${s.status === 'On Duty' ? 'bg-success animate-pulse' : 'bg-slate-300'}`} />
                      <span className={`text-[9px] font-black uppercase ${s.status === 'On Duty' ? 'text-success' : 'text-slate-400'}`}>{s.status}</span>
                   </div>
                   <button className="size-8 rounded-lg bg-slate-50 text-slate-400 flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">settings</span>
                   </button>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default AdminStaff;
