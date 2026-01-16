
import React from 'react';

const GuardRoster: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const shifts = [
    { day: 'Monday', shift: '08:00 AM - 04:00 PM', post: 'Gate 1', partner: 'Shyam Singh' },
    { day: 'Tuesday', shift: '08:00 AM - 04:00 PM', post: 'Gate 1', partner: 'Rahul K.' },
    { day: 'Wednesday', shift: 'Night Shift', post: 'Patrol', partner: 'Vikram B.' },
  ];

  return (
    <div className="animate-in slide-in-from-right duration-300 min-h-screen bg-slate-50">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40 flex items-center gap-4">
        <button onClick={onBack} className="size-10 rounded-xl bg-slate-100 flex items-center justify-center active:scale-90 transition-all">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-black text-slate-900 tracking-tight">Duty Roster</h1>
      </header>
      <div className="p-5 space-y-4">
        {shifts.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-black text-slate-900">{s.day}</span>
              <span className="text-[9px] font-black uppercase bg-blue-50 text-blue-600 px-2 py-1 rounded-lg">{s.post}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <span className="material-symbols-outlined text-sm">schedule</span>
              <span className="text-xs font-bold">{s.shift}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 border-t border-slate-50 pt-3">
              <span className="material-symbols-outlined text-sm">group</span>
              <span className="text-[10px] font-black uppercase tracking-widest">Partner: {s.partner}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuardRoster;
