
import React from 'react';

const AdminComplaints: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const complaints = [
    { id: '1', resident: 'Arav Sharma (B-402)', title: 'Water Leakage', status: 'In Progress', priority: 'High' },
    { id: '2', resident: 'John Doe (A-101)', title: 'Lift C Not Working', status: 'Open', priority: 'Critical' },
    { id: '3', resident: 'Sanya Mirza (D-504)', title: 'Parking Light Out', status: 'Open', priority: 'Low' },
  ];

  return (
    <div className="animate-in slide-in-from-right duration-300">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40 flex items-center gap-4">
        <button onClick={onBack} className="size-10 rounded-xl bg-slate-100 flex items-center justify-center active:scale-90 transition-all">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-black text-slate-900 tracking-tight">Complaint Desk</h1>
      </header>

      <div className="p-5 space-y-4">
        {complaints.map(c => (
          <div key={c.id} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm space-y-4">
             <div className="flex justify-between items-start">
                <div>
                   <h4 className="text-sm font-black text-slate-900">{c.title}</h4>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{c.resident}</p>
                </div>
                <span className={`text-[9px] font-black uppercase px-2.5 py-1 rounded-lg ${
                  c.priority === 'Critical' ? 'bg-red-50 text-red-600' : 'bg-orange-50 text-orange-600'
                }`}>{c.priority}</span>
             </div>
             <div className="flex gap-2">
                <button className="flex-1 bg-slate-900 text-white font-black py-2.5 rounded-xl text-[10px] uppercase">Assign Staff</button>
                <button className="flex-1 bg-purple-50 text-purple-600 font-black py-2.5 rounded-xl text-[10px] uppercase">Resolve</button>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminComplaints;
