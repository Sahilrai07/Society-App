
import React from 'react';

const GuardCourier: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const parcels = [
    { id: '1', flat: 'B-402', vendor: 'Amazon', time: '12:30 PM', status: 'At Gate' },
    { id: '2', flat: 'A-101', vendor: 'Myntra', time: '01:15 PM', status: 'At Gate' },
  ];

  return (
    <div className="animate-in slide-in-from-right duration-300">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40 flex items-center gap-4">
        <button onClick={onBack} className="size-10 rounded-xl bg-slate-100 flex items-center justify-center active:scale-90 transition-all">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-black text-slate-900 tracking-tight">Parcel Log</h1>
      </header>
      <div className="p-5 space-y-4">
        <div className="bg-emerald-600 p-6 rounded-[2.5rem] text-white flex justify-between items-center shadow-lg shadow-emerald-600/20">
          <div>
            <h3 className="text-xl font-black">Register Parcel</h3>
            <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest mt-1">Add received courier</p>
          </div>
          <button className="bg-white text-emerald-600 p-3 rounded-2xl shadow-sm">
            <span className="material-symbols-outlined">add_box</span>
          </button>
        </div>
        <div className="space-y-3">
          {parcels.map(p => (
            <div key={p.id} className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-4">
              <div className="size-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center">
                <span className="material-symbols-outlined">package_2</span>
              </div>
              <div className="flex-1">
                <h4 className="font-black text-slate-900">Flat {p.flat} • {p.vendor}</h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Received at {p.time}</p>
              </div>
              <button className="bg-emerald-50 text-emerald-600 px-3 py-2 rounded-xl text-[10px] font-black uppercase">DELIVERED</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuardCourier;
