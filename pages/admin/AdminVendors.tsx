
import React from 'react';

const AdminVendors: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const vendors = [
    { name: 'Otis Lifts', service: 'Lift AMC', expiry: '12 Dec 2024', status: 'Active' },
    { name: 'AquaPure', service: 'STP Maintenance', expiry: '05 Jan 2025', status: 'Expiring Soon' },
    { name: 'SecureGuard', service: 'Security Agency', expiry: '30 Jun 2025', status: 'Active' },
  ];

  return (
    <div className="animate-in slide-in-from-right duration-300 min-h-screen bg-slate-50">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40 flex items-center gap-4">
        <button onClick={onBack} className="size-10 rounded-xl bg-slate-100 flex items-center justify-center active:scale-90 transition-all">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-black text-slate-900 tracking-tight">AMC & Vendors</h1>
      </header>
      <div className="p-5 space-y-4">
        {vendors.map(v => (
          <div key={v.name} className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-base font-black text-slate-900">{v.name}</h4>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{v.service}</p>
              </div>
              <span className={`text-[9px] font-black uppercase px-2 py-1 rounded-lg ${v.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'}`}>
                {v.status}
              </span>
            </div>
            <div className="flex items-center gap-2 pt-3 border-t border-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">event</span>
              Expires: {v.expiry}
            </div>
          </div>
        ))}
        <button className="w-full bg-slate-900 text-white font-black py-4 rounded-[2rem] mt-4 flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">add_business</span>
          ADD NEW CONTRACT
        </button>
      </div>
    </div>
  );
};

export default AdminVendors;
