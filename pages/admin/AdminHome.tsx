
import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';

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
    <div className="animate-in fade-in duration-500">
      <header className="sticky top-0 z-40 bg-white p-5 flex justify-between items-center border-b border-gray-100 shadow-sm">
        <div className="flex items-center gap-4">
           <div 
            className="size-10 rounded-2xl bg-purple-600 flex items-center justify-center text-white shadow-lg"
          >
            <span className="material-symbols-outlined">shield_with_heart</span>
          </div>
          <div>
            <p className="text-[10px] font-black text-purple-600 uppercase tracking-widest leading-none mb-1">Admin Control</p>
            <h1 className="text-lg font-black text-slate-900 leading-none">Sunrise Heights</h1>
          </div>
        </div>
        <button onClick={onLogout} className="size-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
          <span className="material-symbols-outlined">logout</span>
        </button>
      </header>

      <div className="p-5 space-y-6">
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-black text-slate-900 tracking-tight">Overview</h2>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Oct 2024</span>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x -mx-5 px-5">
             <StatCard 
               title="Dues Collected" 
               value="₹4.5L" 
               trend="+12%" 
               icon="payments"
               iconColor="text-purple-600 bg-purple-50"
               onClick={() => setView('finance')}
             />
             <StatCard 
               title="Active Members" 
               value="482" 
               trend="98%" 
               icon="group"
               iconColor="text-blue-600 bg-blue-50"
               onClick={() => setView('members')}
             />
             <StatCard 
               title="Complaints" 
               value="12" 
               trend="-4" 
               icon="report_problem"
               iconColor="text-orange-600 bg-orange-50"
             />
          </div>
        </section>

        <section className="bg-white rounded-[2.5rem] p-7 shadow-sm border border-slate-100">
           <div className="flex justify-between items-end mb-6">
             <div>
               <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Collection Trend</p>
               <h3 className="text-2xl font-black text-slate-900">Revenue</h3>
             </div>
             <button onClick={() => setView('finance')} className="text-[10px] font-black text-purple-600 uppercase tracking-widest bg-purple-50 px-3 py-1.5 rounded-xl">Details</button>
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
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-black text-slate-900 tracking-tight">Quick Controls</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <QuickActionButton label="Post Notice" icon="campaign" color="text-purple-600 bg-purple-50" onClick={() => setView('notices')} />
            <QuickActionButton label="Manage Staff" icon="engineering" color="text-blue-600 bg-blue-50" onClick={() => setView('staff')} />
            <QuickActionButton label="Visitor Policy" icon="policy" color="text-orange-600 bg-orange-50" />
            <QuickActionButton label="Facility Booking" icon="event_available" color="text-emerald-600 bg-emerald-50" />
          </div>
        </section>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, trend, icon, iconColor, onClick }: any) => (
  <div onClick={onClick} className="min-w-[200px] snap-center rounded-[2rem] p-6 bg-white shadow-sm border border-slate-100 flex flex-col justify-between h-40 active:scale-95 transition-all cursor-pointer">
    <div className={`size-11 rounded-2xl flex items-center justify-center shrink-0 ${iconColor}`}>
      <span className="material-symbols-outlined text-xl">{icon}</span>
    </div>
    <div>
      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">{title}</p>
      <div className="flex justify-between items-end">
        <h4 className="text-2xl font-black text-slate-900">{value}</h4>
        <span className="text-[10px] font-black text-success">{trend}</span>
      </div>
    </div>
  </div>
);

const QuickActionButton = ({ label, icon, color, onClick }: any) => (
  <button onClick={onClick} className="flex flex-col items-center justify-center gap-3 p-6 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group active:scale-95">
    <div className={`size-12 rounded-2xl flex items-center justify-center transition-all ${color}`}>
      <span className="material-symbols-outlined text-2xl">{icon}</span>
    </div>
    <span className="text-xs font-bold text-slate-700 tracking-tight uppercase">{label}</span>
  </button>
);

export default AdminHome;
