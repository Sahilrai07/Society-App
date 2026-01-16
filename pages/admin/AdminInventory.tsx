
import React from 'react';

const AdminInventory: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const assets = [
    { name: 'Water Pump A', status: 'Healthy', lastService: '12 Oct', icon: 'water_pump' },
    { name: 'Lift Block B', status: 'Maintenance', lastService: 'Yesterday', icon: 'elevator' },
    { name: 'CCTV Network', status: 'Healthy', lastService: '01 Oct', icon: 'videocam' },
  ];

  return (
    <div className="animate-in slide-in-from-right duration-300">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40 flex items-center gap-4">
        <button onClick={onBack} className="size-10 rounded-xl bg-slate-100 flex items-center justify-center active:scale-90 transition-all">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-black text-slate-900 tracking-tight">Society Assets</h1>
      </header>
      <div className="p-5 space-y-4">
        {assets.map(a => (
          <div key={a.name} className="bg-white p-5 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-4">
            <div className={`size-12 rounded-2xl flex items-center justify-center ${a.status === 'Healthy' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'}`}>
              <span className="material-symbols-outlined">{a.icon}</span>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-slate-900">{a.name}</h4>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Last Service: {a.lastService}</p>
            </div>
            <div className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${a.status === 'Healthy' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'}`}>
              {a.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminInventory;
