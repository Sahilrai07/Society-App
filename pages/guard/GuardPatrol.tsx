
import React from 'react';

const GuardPatrol: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const points = [
    { id: '1', loc: 'Basement P1', time: '10:15 AM', status: 'Checked' },
    { id: '2', loc: 'Clubhouse Rear', time: '10:30 AM', status: 'Checked' },
    { id: '3', loc: 'Block B Terrace', time: 'Pending', status: 'Next' },
  ];

  return (
    <div className="animate-in slide-in-from-right duration-300 min-h-screen bg-slate-50">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40 flex items-center gap-4">
        <button onClick={onBack} className="size-10 rounded-xl bg-slate-100 flex items-center justify-center active:scale-90 transition-all">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-black text-slate-900 tracking-tight">Patrol Logs</h1>
      </header>
      <div className="p-5 space-y-6">
        <div className="bg-slate-900 p-8 rounded-[3rem] text-white text-center shadow-xl">
           <span className="material-symbols-outlined text-5xl mb-3 text-emerald-500">qr_code_scanner</span>
           <h3 className="text-xl font-black">Scan Checkpoint</h3>
           <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest mt-1">NFC/QR point scanning</p>
           <button className="mt-6 w-full bg-emerald-600 py-4 rounded-2xl text-xs font-black shadow-lg shadow-emerald-600/20 active:scale-95 transition-all">START SCAN</button>
        </div>
        
        <div className="space-y-3">
          {points.map(p => (
            <div key={p.id} className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-4">
              <div className={`size-10 rounded-xl flex items-center justify-center ${p.status === 'Checked' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-400'}`}>
                <span className="material-symbols-outlined">{p.status === 'Checked' ? 'verified' : 'pending'}</span>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-black text-slate-900">{p.loc}</h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{p.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuardPatrol;
