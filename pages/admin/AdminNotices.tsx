
import React from 'react';

const AdminNotices: React.FC = () => {
  const notices = [
    { id: '1', title: 'Water Tank Cleaning', date: '24 Oct', cat: 'Maintenance', priority: 'High' },
    { id: '2', title: 'Diwali Celebration', date: '20 Oct', cat: 'Event', priority: 'Medium' },
    { id: '3', title: 'New Visitor Rules', date: '15 Oct', cat: 'Security', priority: 'Medium' },
  ];

  return (
    <div className="animate-in slide-in-from-right duration-300">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Notices</h1>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Public Announcements</p>
        </div>
        <button className="size-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-lg active:scale-95 transition-all">
          <span className="material-symbols-outlined">add</span>
        </button>
      </header>

      <div className="p-5 space-y-4">
        {notices.map(n => (
          <div key={n.id} className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm group hover:border-purple-600/30 transition-all">
             <div className="flex justify-between items-start mb-3">
                <div className="flex gap-2">
                   <span className="text-[9px] font-black uppercase px-2.5 py-1 rounded-lg bg-slate-100 text-slate-500">
                     {n.cat}
                   </span>
                   {n.priority === 'High' && (
                     <span className="text-[9px] font-black uppercase px-2.5 py-1 rounded-lg bg-red-50 text-red-600">
                       Urgent
                     </span>
                   )}
                </div>
                <span className="text-[10px] font-bold text-slate-400">{n.date}</span>
             </div>
             <h4 className="text-base font-bold text-slate-900 leading-snug mb-4">{n.title}</h4>
             <div className="flex justify-between items-center">
                <div className="flex -space-x-1.5">
                   {[1, 2].map(i => <div key={i} className="size-5 rounded-full border border-white bg-slate-200" />)}
                   <span className="text-[9px] font-black text-slate-400 ml-3">Seen by 124 residents</span>
                </div>
                <div className="flex gap-1">
                   <button className="size-9 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center">
                      <span className="material-symbols-outlined text-base">edit</span>
                   </button>
                   <button className="size-9 rounded-xl bg-red-50 text-red-400 flex items-center justify-center">
                      <span className="material-symbols-outlined text-base">delete</span>
                   </button>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminNotices;
