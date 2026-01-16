
import React, { useState } from 'react';

const AdminMembers: React.FC = () => {
  const [search, setSearch] = useState('');
  const members = [
    { id: '1', name: 'Arav Sharma', flat: 'B-402', role: 'Owner', phone: '+91 90000 00001', status: 'Active' },
    { id: '2', name: 'Priya Patel', flat: 'A-101', role: 'Tenant', phone: '+91 90000 00002', status: 'Active' },
    { id: '3', name: 'Kabir Khan', flat: 'C-205', role: 'Owner', phone: '+91 90000 00003', status: 'Defaulter' },
    { id: '4', name: 'Sanya Mirza', flat: 'D-504', role: 'Owner', phone: '+91 90000 00004', status: 'Active' },
  ];

  const filteredMembers = members.filter(m => m.name.toLowerCase().includes(search.toLowerCase()) || m.flat.includes(search));

  return (
    <div className="animate-in slide-in-from-right duration-300">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Members</h1>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Residents Directory</p>
        </div>
        <button className="size-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-lg shadow-purple-600/20 active:scale-95 transition-all">
          <span className="material-symbols-outlined">person_add</span>
        </button>
      </header>

      <div className="p-5 space-y-4">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
          <input 
            type="text" 
            placeholder="Search by name or flat..." 
            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 outline-none transition-all shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="space-y-3">
          {filteredMembers.map(m => (
            <div key={m.id} className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-4 group">
              <div className="size-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                <span className="material-symbols-outlined">account_circle</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-bold text-slate-900 truncate">{m.name}</h4>
                  <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${m.status === 'Defaulter' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                    {m.status}
                  </span>
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{m.flat} • {m.role}</p>
                <p className="text-[11px] text-slate-500 mt-1">{m.phone}</p>
              </div>
              <button className="size-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center active:scale-90 transition-all">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminMembers;
