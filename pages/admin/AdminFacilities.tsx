
import React from 'react';

const AdminFacilities: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const facilities = [
    { name: 'Swimming Pool', status: 'Open', bookings: 12 },
    { name: 'Community Hall', status: 'Maintenance', bookings: 2 },
    { name: 'Badminton Court', status: 'Open', bookings: 8 },
  ];

  return (
    <div className="animate-in slide-in-from-right duration-300">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40 flex items-center gap-4">
        <button onClick={onBack} className="size-10 rounded-xl bg-slate-100 flex items-center justify-center active:scale-90 transition-all">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-black text-slate-900 tracking-tight">Facility Control</h1>
      </header>

      <div className="p-5 space-y-6">
        <div className="grid grid-cols-1 gap-4">
           {facilities.map(f => (
             <div key={f.name} className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center justify-between">
                <div>
                   <h4 className="text-base font-black text-slate-900">{f.name}</h4>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{f.bookings} Bookings Today</p>
                </div>
                <div className="flex items-center gap-3">
                   <div className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                     f.status === 'Open' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                   }`}>{f.status}</div>
                   <button className="size-9 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                      <span className="material-symbols-outlined">settings</span>
                   </button>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default AdminFacilities;
