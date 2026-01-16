
import React from 'react';

const ResidentVehicles: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const vehicles = [
    { id: '1', number: 'MH-01-AB-1234', model: 'Honda City', type: 'Car', status: 'Inside' },
    { id: '2', number: 'MH-01-CD-5678', model: 'Royal Enfield', type: 'Bike', status: 'Outside' },
  ];

  return (
    <div className="animate-in slide-in-from-right duration-300">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40 flex items-center gap-4">
        <button onClick={onBack} className="size-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 active:scale-90 transition-all">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight">My Vehicles</h1>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Tracking & Entry Logs</p>
        </div>
      </header>

      <div className="p-5 space-y-6">
        <div className="grid grid-cols-1 gap-4">
          {vehicles.map(v => (
            <div key={v.id} className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-5 relative overflow-hidden group">
               <div className={`absolute top-0 right-0 h-full w-1 ${v.status === 'Inside' ? 'bg-success' : 'bg-warning'}`} />
               <div className={`size-16 rounded-[1.5rem] flex items-center justify-center shrink-0 ${
                 v.type === 'Car' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'
               }`}>
                 <span className="material-symbols-outlined text-4xl">{v.type === 'Car' ? 'directions_car' : 'motorcycle'}</span>
               </div>
               <div className="flex-1 min-w-0">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{v.model}</p>
                 <h4 className="text-lg font-black text-slate-900 tracking-tight">{v.number}</h4>
                 <div className="flex items-center gap-2 mt-2">
                    <span className={`size-2 rounded-full ${v.status === 'Inside' ? 'bg-success animate-pulse' : 'bg-warning'}`} />
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{v.status}</span>
                 </div>
               </div>
               <button className="size-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-accent group-hover:bg-accent/10 transition-all">
                 <span className="material-symbols-outlined">history</span>
               </button>
            </div>
          ))}
          
          <button className="w-full border-2 border-dashed border-slate-200 p-6 rounded-[2.5rem] flex flex-col items-center justify-center gap-2 text-slate-400 hover:text-accent hover:border-accent hover:bg-accent/5 transition-all">
             <span className="material-symbols-outlined text-3xl">add_circle</span>
             <span className="text-xs font-black uppercase tracking-widest">Register New Vehicle</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResidentVehicles;
