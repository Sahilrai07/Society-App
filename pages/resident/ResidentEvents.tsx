
import React from 'react';

const ResidentEvents: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const events = [
    { id: '1', title: 'Diwali Gala Night', date: '31 Oct', time: '7:00 PM', loc: 'Clubhouse', img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=400' },
    { id: '2', title: 'Sunday Yoga', date: '03 Nov', time: '6:00 AM', loc: 'Central Lawn', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400' },
  ];

  return (
    <div className="animate-in slide-in-from-right duration-300">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40 flex items-center gap-4">
        <button onClick={onBack} className="size-10 rounded-xl bg-slate-100 flex items-center justify-center active:scale-90 transition-all">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-black text-slate-900 tracking-tight">Society Events</h1>
      </header>

      <div className="p-5 space-y-6">
        {events.map(e => (
          <div key={e.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 group">
             <div className="h-48 relative">
               <img src={e.img} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" alt={e.title} />
               <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-2 rounded-2xl text-center min-w-[50px] shadow-lg">
                  <p className="text-[10px] font-black text-slate-400 uppercase leading-none mb-1">{e.date.split(' ')[1]}</p>
                  <p className="text-lg font-black text-slate-900 leading-none">{e.date.split(' ')[0]}</p>
               </div>
             </div>
             <div className="p-6">
                <h3 className="text-lg font-black text-slate-900 mb-2">{e.title}</h3>
                <div className="flex gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                   <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">schedule</span> {e.time}</div>
                   <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">location_on</span> {e.loc}</div>
                </div>
                <button className="w-full mt-6 bg-rose-500 text-white font-black py-3 rounded-2xl text-xs active:scale-95 transition-all shadow-lg shadow-rose-500/20">
                  RSVP NOW
                </button>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResidentEvents;
