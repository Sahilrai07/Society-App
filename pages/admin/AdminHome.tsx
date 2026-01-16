
import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';

interface AdminHomeProps {
  setView: (view: string) => void;
  onLogout: () => void;
}

const AdminHome: React.FC<AdminHomeProps> = ({ setView, onLogout }) => {
  const chartData = [
    { name: 'Jan', value: 18000 },
    { name: 'Feb', value: 24500 },
    { name: 'Mar', value: 15000 },
    { name: 'Apr', value: 21000 },
    { name: 'May', value: 19000 },
    { name: 'Jun', value: 28000 },
  ];

  return (
    <div className="animate-in fade-in duration-500 pb-10">
      <header className="sticky top-0 z-40 bg-white p-5 flex justify-between items-center border-b border-gray-100 shadow-sm">
        <div className="flex items-center gap-4">
           <div className="size-10 rounded-2xl bg-purple-600 flex items-center justify-center text-white shadow-lg">
            <span className="material-symbols-outlined">shield_with_heart</span>
          </div>
          <div>
            <p className="text-[10px] font-black text-purple-600 uppercase tracking-widest leading-none mb-1">Admin Portal</p>
            <h1 className="text-lg font-black text-slate-900 leading-none">Sunrise Heights</h1>
          </div>
        </div>
        <button onClick={onLogout} className="size-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 active:scale-90 transition-all">
          <span className="material-symbols-outlined">logout</span>
        </button>
      </header>

      <div className="p-5 space-y-6">
        <section className="grid grid-cols-2 gap-4">
          <ActionTile icon="inventory_2" label="Inventory" color="bg-blue-50 text-blue-600" onClick={() => setView('inventory')} />
          <ActionTile icon="account_tree" label="Committee" color="bg-indigo-50 text-indigo-600" onClick={() => setView('committee')} />
          <ActionTile icon="handshake" label="Vendors" color="bg-emerald-50 text-emerald-600" onClick={() => setView('vendors')} />
          <ActionTile icon="groups_3" label="Meetings" color="bg-rose-50 text-rose-600" onClick={() => setView('meetings')} />
        </section>

        <section className="bg-white rounded-[2.5rem] p-7 shadow-sm border border-slate-100">
           <div className="flex justify-between items-end mb-6">
             <div>
               <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Revenue Stream</p>
               <h3 className="text-2xl font-black text-slate-900">Collection</h3>
             </div>
             <button onClick={() => setView('finance')} className="text-[10px] font-black text-purple-600 uppercase tracking-widest bg-purple-50 px-3 py-1.5 rounded-xl">View P&L</button>
           </div>
           <div className="h-40 w-full">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={chartData}>
                 <Bar dataKey="value" radius={[4, 4, 4, 4]}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === chartData.length - 1 ? '#9333ea' : '#f3e8ff'} />
                    ))}
                 </Bar>
               </BarChart>
             </ResponsiveContainer>
           </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4"><h2 className="text-lg font-black text-slate-900 tracking-tight">Main Controls</h2></div>
          <div className="grid grid-cols-2 gap-4">
            <QuickActionButton label="Notices" icon="campaign" color="text-purple-600 bg-purple-50" onClick={() => setView('notices')} />
            <QuickActionButton label="Staff Management" icon="engineering" color="text-blue-600 bg-blue-50" onClick={() => setView('staff')} />
            <QuickActionButton label="Parking" icon="local_parking" color="text-orange-600 bg-orange-50" onClick={() => setView('parking')} />
            <QuickActionButton label="Facilities" icon="event_available" color="text-emerald-600 bg-emerald-50" onClick={() => setView('facilities')} />
          </div>
        </section>
      </div>
    </div>
  );
};

const ActionTile = ({ icon, label, color, onClick }: any) => (
  <button onClick={onClick} className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col gap-3 active:scale-95 transition-all">
    <div className={`size-10 rounded-xl flex items-center justify-center ${color}`}>
      <span className="material-symbols-outlined text-xl">{icon}</span>
    </div>
    <span className="text-[11px] font-black text-slate-700 uppercase tracking-widest">{label}</span>
  </button>
);

const QuickActionButton = ({ label, icon, color, onClick }: any) => (
  <button onClick={onClick} className="flex flex-col items-center justify-center gap-3 p-6 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm active:scale-95 group transition-all">
    <div className={`size-12 rounded-2xl flex items-center justify-center transition-all ${color}`}><span className="material-symbols-outlined text-2xl">{icon}</span></div>
    <span className="text-xs font-bold text-slate-700 uppercase tracking-tight">{label}</span>
  </button>
);

export default AdminHome;
