
import React from 'react';

const GuardSOS: React.FC = () => {
  const alerts = [
    { id: '1', type: 'Medical', flat: 'A-201', time: '10:00 AM', status: 'Resolved' },
    { id: '2', type: 'Security', flat: 'C-505', time: 'Yesterday', status: 'Ignored' },
  ];

  return (
    <div className="animate-in slide-in-from-right duration-300">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40">
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">SOS Alerts</h1>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Resident Emergencies</p>
      </header>

      <div className="p-5 space-y-6">
        <div className="bg-red-50 border-2 border-red-100 p-6 rounded-[2.5rem] flex items-center gap-5">
           <div className="size-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-600/20 shrink-0">
              <span className="material-symbols-outlined text-3xl animate-pulse">crisis_alert</span>
           </div>
           <div>
             <h3 className="text-lg font-black text-red-600 leading-none mb-1">No Active SOS</h3>
             <p className="text-red-400 text-xs font-bold">The society is safe right now.</p>
           </div>
        </div>

        <section>
          <h3 className="text-lg font-black text-slate-900 mb-4 px-1">Alert History</h3>
          <div className="space-y-3">
             {alerts.map(a => (
               <div key={a.id} className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
                  <div className={`size-10 rounded-xl flex items-center justify-center shrink-0 ${
                    a.type === 'Medical' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'
                  }`}>
                    <span className="material-symbols-outlined">{a.type === 'Medical' ? 'medical_services' : 'security'}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-sm font-bold text-slate-900">Flat {a.flat} • {a.type}</h5>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{a.time}</p>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{a.status}</span>
               </div>
             ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default GuardSOS;
