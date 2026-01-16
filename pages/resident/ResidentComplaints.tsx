
import React from 'react';

const ResidentComplaints: React.FC = () => {
  const complaints = [
    { id: '1', title: 'Water Leakage in Kitchen', status: 'In Progress', date: '22 Oct', category: 'Plumbing' },
    { id: '2', title: 'Faulty Living Room Socket', status: 'Resolved', date: '15 Oct', category: 'Electrical' },
    { id: '3', title: 'CCTV Camera Out of Order', status: 'Open', date: '24 Oct', category: 'Security' },
  ];

  return (
    <div className="animate-in slide-in-from-right duration-300">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-10 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Complaints</h1>
          <p className="text-slate-400 text-sm font-medium">Track your service requests</p>
        </div>
        <button className="size-12 rounded-2xl bg-[#1f3a60] text-white flex items-center justify-center shadow-lg shadow-primary/20 active:scale-95 transition-all">
          <span className="material-symbols-outlined">add</span>
        </button>
      </header>

      <div className="p-4 space-y-6">
        {/* Status Pills */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {['All Requests', 'Open', 'Resolved', 'In Progress'].map((tab, i) => (
            <button key={tab} className={`px-5 h-10 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all ${
              i === 0 ? 'bg-accent text-white shadow-md' : 'bg-white text-slate-500 border border-slate-100'
            }`}>
              {tab}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="space-y-4">
          {complaints.map((c) => (
            <div key={c.id} className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm relative group active:scale-[0.99] transition-all">
              <div className="flex justify-between items-start mb-3">
                <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg ${
                  c.status === 'Resolved' ? 'bg-success/10 text-success' : 
                  c.status === 'In Progress' ? 'bg-warning/10 text-warning' : 'bg-slate-100 text-slate-500'
                }`}>
                  {c.status}
                </span>
                <span className="text-[11px] font-bold text-slate-400">{c.date}</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 leading-snug mb-2">{c.title}</h4>
              <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <span className="material-symbols-outlined text-sm">label</span>
                {c.category}
              </div>
              <div className="absolute right-5 bottom-5 size-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-accent group-hover:bg-accent/10 transition-all">
                <span className="material-symbols-outlined text-base">chevron_right</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Mock */}
        {complaints.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="size-20 rounded-full bg-slate-100 flex items-center justify-center text-slate-300 mb-4">
               <span className="material-symbols-outlined text-4xl">inventory_2</span>
            </div>
            <p className="text-slate-400 font-bold">No active complaints</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResidentComplaints;
