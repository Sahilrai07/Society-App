
import React from 'react';

const ResidentVisitors: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const visitors = [
    { id: '1', name: 'Zomato Delivery', time: '10:45 AM', status: 'Entered', type: 'Delivery' },
    { id: '2', name: 'Ravi Verma', time: 'Yesterday', status: 'Exited', type: 'Guest' },
    { id: '3', name: 'Urban Company', time: '23 Oct', status: 'Entered', type: 'Service' },
  ];

  return (
    <div className="animate-in slide-in-from-right duration-300">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40 flex items-center gap-4">
        <button onClick={onBack} className="size-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 active:scale-90 transition-all">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight">Visitors</h1>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Pre-approve & Logs</p>
        </div>
      </header>

      <div className="p-5 space-y-6">
        <div className="bg-accent rounded-[2rem] p-7 text-white shadow-xl shadow-accent/20 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-black mb-1">Pre-approve</h3>
            <p className="text-white/70 text-xs font-bold mb-4 uppercase tracking-widest">Fast-track gate entry</p>
            <button className="bg-white text-accent px-6 py-2.5 rounded-2xl text-xs font-black shadow-sm active:scale-95 transition-all">
              ADD GUEST
            </button>
          </div>
          <span className="material-symbols-outlined text-7xl opacity-20">qr_code_2</span>
        </div>

        <section>
          <div className="flex justify-between items-center mb-4 px-1">
            <h2 className="text-lg font-black text-slate-900 tracking-tight">Recent Visitors</h2>
            <span className="material-symbols-outlined text-slate-400">filter_list</span>
          </div>
          <div className="space-y-3">
            {visitors.map(v => (
              <div key={v.id} className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
                <div className={`size-12 rounded-2xl flex items-center justify-center shrink-0 ${
                  v.type === 'Delivery' ? 'bg-orange-50 text-orange-600' : 'bg-blue-50 text-blue-600'
                }`}>
                  <span className="material-symbols-outlined">{v.type === 'Delivery' ? 'local_shipping' : 'person'}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900">{v.name}</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{v.time}</p>
                </div>
                <div className="text-right">
                   <span className={`text-[10px] font-black px-2.5 py-1 rounded-lg uppercase tracking-wider ${
                     v.status === 'Entered' ? 'bg-success/10 text-success' : 'bg-slate-100 text-slate-400'
                   }`}>{v.status}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResidentVisitors;
