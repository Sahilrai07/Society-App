
import React from 'react';

interface GuardHomeProps {
  onLogout: () => void;
}

const GuardHome: React.FC<GuardHomeProps> = ({ onLogout }) => {
  return (
    <div className="animate-in fade-in duration-500">
      <header className="sticky top-0 z-40 bg-emerald-600 text-white p-6 shadow-lg rounded-b-[2.5rem]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
             <div className="size-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                <span className="material-symbols-outlined">security</span>
             </div>
             <div>
               <p className="text-[10px] font-black opacity-60 uppercase tracking-widest">On Duty • Gate 01</p>
               <h1 className="text-xl font-black tracking-tight">Officer Ram Singh</h1>
             </div>
          </div>
          <button onClick={onLogout} className="size-10 rounded-full bg-white/10 flex items-center justify-center">
            <span className="material-symbols-outlined">logout</span>
          </button>
        </div>
      </header>

      <div className="p-5 space-y-6">
        <section className="grid grid-cols-2 gap-4">
           <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between h-36">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Entered Today</span>
              <h4 className="text-4xl font-black text-emerald-600">84</h4>
           </div>
           <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between h-36">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Inside</span>
              <h4 className="text-4xl font-black text-blue-600">12</h4>
           </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4 px-1">
            <h2 className="text-lg font-black text-slate-900 tracking-tight">Recent Activity</h2>
            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Live</span>
          </div>
          <div className="space-y-3">
             {[
               { name: 'Uber Cab • MH01CD1234', time: 'Just now', type: 'Cab', flat: 'B-102' },
               { name: 'Zomato Delivery', time: '10m ago', type: 'Delivery', flat: 'A-404' },
               { name: 'Ravi Kumar (Guest)', time: '25m ago', type: 'Guest', flat: 'C-301' },
             ].map((log, i) => (
               <div key={i} className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
                  <div className="size-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                    <span className="material-symbols-outlined text-xl">
                      {log.type === 'Cab' ? 'local_taxi' : log.type === 'Delivery' ? 'local_shipping' : 'person'}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-sm font-bold text-slate-900 truncate">{log.name}</h5>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">To Flat {log.flat} • {log.time}</p>
                  </div>
                  <button className="bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase">EXIT</button>
               </div>
             ))}
          </div>
        </section>

        <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
           <div className="relative z-10 flex flex-col items-center text-center">
              <h3 className="text-xl font-black mb-2">Gate Panic Button</h3>
              <p className="text-slate-400 text-sm mb-6 max-w-[80%]">Press in case of unauthorized forced entry or emergency.</p>
              <button className="size-20 rounded-full bg-red-600 shadow-2xl shadow-red-600/50 flex items-center justify-center active:scale-90 transition-all">
                 <span className="material-symbols-outlined text-4xl text-white">warning</span>
              </button>
           </div>
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(239,68,68,0.1)_0%,_transparent_70%)]" />
        </div>
      </div>
    </div>
  );
};

export default GuardHome;
