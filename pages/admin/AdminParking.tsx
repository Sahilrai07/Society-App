
import React from 'react';

const AdminParking: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const allocations = [
    { flat: 'A-402', slot: 'P-128', type: 'Car' },
    { flat: 'B-101', slot: 'P-042', type: 'Car' },
    { flat: 'C-205', slot: 'B-012', type: 'Bike' },
  ];

  return (
    <div className="animate-in slide-in-from-right duration-300 min-h-screen bg-slate-50">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40 flex items-center gap-4">
        <button onClick={onBack} className="size-10 rounded-xl bg-slate-100 flex items-center justify-center active:scale-90 transition-all">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-black text-slate-900 tracking-tight">Slot Management</h1>
      </header>
      <div className="p-5 space-y-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm text-center">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Total Slots</p>
            <p className="text-2xl font-black text-slate-900">450</p>
          </div>
          <div className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm text-center">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Available</p>
            <p className="text-2xl font-black text-emerald-600">24</p>
          </div>
        </div>
        
        {allocations.map(a => (
          <div key={a.flat} className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center">
                <span className="material-symbols-outlined">{a.type === 'Car' ? 'directions_car' : 'motorcycle'}</span>
              </div>
              <div>
                <h4 className="text-sm font-black text-slate-900">Flat {a.flat}</h4>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Reserved</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-sm font-black text-accent">{a.slot}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminParking;
