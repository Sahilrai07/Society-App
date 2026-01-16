
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
    <div className="animate-in fade-in duration-500 pb-10 bg-slate-50 min-h-screen">
      <header className="sticky top-0 z-40 bg-white p-6 flex justify-between items-center border-b border-slate-100 shadow-sm">
        <div className="flex items-center gap-4">
           <div className="size-12 rounded-[1.5rem] bg-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-600/30">
            <span className="material-symbols-outlined text-3xl">shield_with_heart</span>
          </div>
          <div>
            <p className="text-[10px] font-black text-purple-600 uppercase tracking-widest leading-none mb-1">Admin HQ</p>
            <h1 className="text-xl font-black text-slate-900 leading-none">Sunrise Heights</h1>
          </div>
        </div>
        <button onClick={onLogout} className="size-11 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 active:scale-90 transition-all border border-slate-200">
          <span className="material-symbols-outlined">logout</span>
        </button>
      </header>

      <div className="p-5 space-y-8">
        {/* KPI Row */}
        <section>
          <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x -mx-5 px-5">
             <StatCard title="Total Dues" value="₹4.5L" trend="+12%" icon="payments" color="text-purple-600 bg-purple-50" onClick={() => setView('finance')} />
             <StatCard title="Visitors" value="1,240" trend="+40" icon="groups" color="text-blue-600 bg-blue-50" onClick={() => setView('analytics')} />
             <StatCard title="Issues" value="12" trend="-4" icon="report_problem" color="text-orange-600 bg-orange-50" onClick={() => setView('complaints')} />
          </div>
        </section>

        {/* Analytics Hub */}
        <section className="bg-white rounded-[3rem] p-8 shadow-xl shadow-black/[0.03] border border-slate-200 relative overflow-hidden group">
           <div className="flex justify-between items-end mb-8 relative z-10">
             <div>
               <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Society Performance</p>
               <h3 className="text-3xl font-black text-slate-900">Collection</h3>
             </div>
             <button onClick={() => setView('analytics')} className="bg-purple-600 text-white p-3 rounded-2xl shadow-lg active:scale-90 transition-all">
               <span className="material-symbols-outlined">analytics</span>
             </button>
           </div>
           
           <div className="h-44 w-full relative z-10">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={chartData}>
                 <Bar dataKey="value" radius={[6, 6, 6, 6]} barSize={12}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === chartData.length - 1 ? '#9333ea' : '#f3e8ff'} />
                    ))}
                 </Bar>
               </BarChart>
             </ResponsiveContainer>
           </div>
           
           <span className="material-symbols-outlined absolute -bottom-12 -right-12 text-[15rem] opacity-[0.03] group-hover:scale-110 transition-transform">insights</span>
        </section>

        {/* Operations Grid */}
        <section>
          <div className="flex justify-between items-center mb-5 px-2">
            <h2 className="text-xl font-black text-slate-900 tracking-tight">Daily Operations</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <QuickActionButton label="Notices" icon="campaign" color="text-purple-600 bg-purple-50" onClick={() => setView('notices')} />
            <QuickActionButton label="Members" icon="group" color="text-blue-600 bg-blue-50" onClick={() => setView('members')} />
            <QuickActionButton label="Staff" icon="engineering" color="text-emerald-600 bg-emerald-50" onClick={() => setView('staff')} />
            <QuickActionButton label="Inventory" icon="inventory_2" color="text-rose-600 bg-rose-50" onClick={() => setView('inventory')} />
          </div>
        </section>

        {/* Strategic Controls */}
        <section className="space-y-4">
          <h2 className="text-xl font-black text-slate-900 tracking-tight px-2">Strategic Controls</h2>
          <div className="grid grid-cols-1 gap-4">
             <ControlCard 
               label="Facility Management" 
               desc="Manage pool, hall, and court schedules" 
               icon="stadium" 
               onClick={() => setView('facilities')} 
             />
             <ControlCard 
               label="AMC & Vendors" 
               desc="Track maintenance contracts & billing" 
               icon="handshake" 
               onClick={() => setView('vendors')} 
             />
          </div>
        </section>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, trend, icon, color, onClick }: any) => (
  <div onClick={onClick} className="min-w-[190px] snap-center rounded-[2.5rem] p-7 bg-white shadow-sm border border-slate-200 flex flex-col justify-between h-44 active:scale-95 transition-all cursor-pointer hover:shadow-md">
    <div className={`size-12 rounded-2xl flex items-center justify-center shrink-0 ${color}`}>
      <span className="material-symbols-outlined text-2xl">{icon}</span>
    </div>
    <div>
      <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{title}</p>
      <div className="flex justify-between items-end">
        <h4 className="text-2xl font-black text-slate-900">{value}</h4>
        <span className="text-[10px] font-black text-success">{trend}</span>
      </div>
    </div>
  </div>
);

const QuickActionButton = ({ label, icon, color, onClick }: any) => (
  <button onClick={onClick} className="flex flex-col items-center justify-center gap-4 p-8 rounded-[2.8rem] bg-white border border-slate-200 shadow-sm active:scale-95 group transition-all hover:shadow-lg">
    <div className={`size-14 rounded-[1.8rem] flex items-center justify-center transition-all group-hover:-translate-y-1 ${color}`}>
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <span className="text-[11px] font-black text-slate-700 uppercase tracking-widest">{label}</span>
  </button>
);

const ControlCard = ({ label, desc, icon, onClick }: any) => (
  <button onClick={onClick} className="w-full bg-white p-6 rounded-[2.5rem] border border-slate-200 shadow-sm flex items-center gap-5 active:scale-[0.98] transition-all text-left group">
    <div className="size-14 rounded-3xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-purple-50 group-hover:text-purple-600 transition-all">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <div className="flex-1">
      <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-0.5">{label}</h4>
      <p className="text-[11px] font-bold text-slate-400 leading-tight">{desc}</p>
    </div>
    <span className="material-symbols-outlined text-slate-300">chevron_right</span>
  </button>
);

export default AdminHome;
