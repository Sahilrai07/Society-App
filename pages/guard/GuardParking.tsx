
import React from 'react';

const GuardParking: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const zones = [
    { name: 'Zone A (Visitor)', total: 10, occupied: 8 },
    { name: 'Zone B (Resident)', total: 40, occupied: 35 },
    { name: 'Zone C (Delivery)', total: 5, occupied: 2 },
  ];

  return (
    <div className="animate-in slide-in-from-right duration-300 min-h-screen bg-slate-50">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40 flex items-center gap-4">
        <button onClick={onBack} className="size-10 rounded-xl bg-slate-100 flex items-center justify-center active:scale-90 transition-all">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-black text-slate-900 tracking-tight">Parking Status</h1>
      </header>
      <div className="p-5 space-y-4">
        {zones.map(z => (
          <div key={z.name} className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">{z.name}</h4>
              <span className="text-[10px] font-black text-emerald-600">{z.total - z.occupied} FREE</span>
            </div>
            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 transition-all duration-1000" style={{ width: `${(z.occupied/z.total)*100}%` }} />
            </div>
            <p className="text-[9px] font-bold text-slate-400 uppercase text-center">{z.occupied} OF {z.total} SLOTS OCCUPIED</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuardParking;
