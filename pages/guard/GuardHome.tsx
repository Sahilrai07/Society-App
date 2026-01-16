
import React from 'react';

interface GuardHomeProps {
  onLogout: () => void;
  setView: (view: string) => void;
}

const GuardHome: React.FC<GuardHomeProps> = ({ onLogout, setView }) => {
  return (
    <div className="animate-in fade-in duration-500 pb-10">
      <header className="sticky top-0 z-40 bg-emerald-600 text-white p-6 shadow-lg rounded-b-[3rem]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
             <div className="size-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                <span className="material-symbols-outlined">security</span>
             </div>
             <div>
               <p className="text-[10px] font-black opacity-60 uppercase tracking-widest">Main Gate Duty</p>
               <h1 className="text-xl font-black tracking-tight">Ram Singh</h1>
             </div>
          </div>
          <button onClick={onLogout} className="size-10 rounded-full bg-white/10 flex items-center justify-center">
            <span className="material-symbols-outlined">logout</span>
          </button>
        </div>
      </header>

      <div className="p-5 space-y-6">
        <section className="grid grid-cols-2 gap-4">
          <SecurityTile icon="history_edu" label="Duty Roster" color="bg-blue-50 text-blue-600" onClick={() => setView('roster')} />
          <SecurityTile icon="package_2" label="Courier Log" color="bg-orange-50 text-orange-600" onClick={() => setView('courier')} />
          <SecurityTile icon="route" label="Patrol logs" color="bg-indigo-50 text-indigo-600" onClick={() => setView('patrol')} />
          <SecurityTile icon="local_parking" label="Parking Status" color="bg-purple-50 text-purple-600" onClick={() => setView('parking')} />
        </section>

        <section>
          <div className="flex justify-between items-center mb-4 px-1">
            <h2 className="text-lg font-black text-slate-900 tracking-tight">Recent Activity</h2>
            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Live Updates</span>
          </div>
          <div className="space-y-3">
             {[
               { name: 'Uber Cab • MH01CD1234', time: 'Just now', type: 'Cab', flat: 'B-102' },
               { name: 'Amazon Delivery', time: '10m ago', type: 'Delivery', flat: 'A-404' },
             ].map((log, i) => (
               <div key={i} className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
                  <div className="size-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                    <span className="material-symbols-outlined text-xl">
                      {log.type === 'Cab' ? 'local_taxi' : 'package'}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-sm font-bold text-slate-900 truncate">{log.name}</h5>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Flat {log.flat} • {log.time}</p>
                  </div>
                  <button className="bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase">EXIT</button>
               </div>
             ))}
          </div>
        </section>

        <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden text-center">
           <h3 className="text-xl font-black mb-1">Emergency SOS</h3>
           <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">Trigger for gate incidents</p>
           <button className="size-24 rounded-full bg-red-600 shadow-[0_0_50px_rgba(239,68,68,0.5)] flex items-center justify-center mx-auto active:scale-90 transition-all ring-8 ring-red-600/20">
              <span className="material-symbols-outlined text-5xl text-white">crisis_alert</span>
           </button>
        </div>
      </div>
    </div>
  );
};

const SecurityTile = ({ icon, label, color, onClick }: any) => (
  <button onClick={onClick} className="bg-white p-5 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col gap-3 active:scale-95 transition-all text-left">
    <div className={`size-10 rounded-xl flex items-center justify-center ${color}`}>
      <span className="material-symbols-outlined text-xl">{icon}</span>
    </div>
    <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">{label}</span>
  </button>
);

export default GuardHome;
