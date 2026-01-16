
import React from 'react';

const ResidentSubscriptions: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const subs = [
    { id: '1', name: 'Nandini Milk', qty: '1L Daily', cost: '₹1,550/mo', status: 'Active', icon: 'local_drink' },
    { id: '2', name: 'The Hindu', qty: '1 Copy', cost: '₹240/mo', status: 'Active', icon: 'newspaper' },
    { id: '3', name: 'Mineral Water', qty: '20L Can', cost: '₹40/can', status: 'Paused', icon: 'water_bottle' },
  ];

  return (
    <div className="animate-in slide-in-from-right duration-300 min-h-screen bg-slate-50">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40 flex items-center gap-4">
        <button onClick={onBack} className="size-10 rounded-xl bg-slate-100 flex items-center justify-center active:scale-90 transition-all">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-black text-slate-900 tracking-tight">My Subscriptions</h1>
      </header>

      <div className="p-5 space-y-6">
        <div className="grid grid-cols-1 gap-4">
          {subs.map(sub => (
            <div key={sub.id} className="bg-white p-6 rounded-[2.5rem] border border-slate-200 shadow-sm flex items-center gap-5 relative overflow-hidden group">
              <div className={`absolute top-0 right-0 h-full w-1 ${sub.status === 'Active' ? 'bg-success' : 'bg-slate-300'}`} />
              <div className="size-16 rounded-[1.5rem] bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-accent/10 group-hover:text-accent transition-all">
                <span className="material-symbols-outlined text-3xl">{sub.icon}</span>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-black text-slate-900">{sub.name}</h4>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mt-1">{sub.qty} • {sub.cost}</p>
                <div className="flex items-center gap-2 mt-3">
                  <span className={`size-2 rounded-full ${sub.status === 'Active' ? 'bg-success' : 'bg-slate-300'}`} />
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{sub.status}</span>
                </div>
              </div>
              <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase shadow-lg shadow-black/20">MANAGE</button>
            </div>
          ))}
          
          <button className="w-full border-2 border-dashed border-slate-300 p-8 rounded-[2.5rem] text-slate-400 font-black text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-all flex flex-col items-center gap-2 mt-4">
            <span className="material-symbols-outlined text-3xl">add_shopping_cart</span>
            New Subscription
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResidentSubscriptions;
