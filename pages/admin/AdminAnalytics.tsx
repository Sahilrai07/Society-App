
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const AdminAnalytics: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const visitorData = [
    { day: 'Mon', count: 45 },
    { day: 'Tue', count: 52 },
    { day: 'Wed', count: 38 },
    { day: 'Thu', count: 65 },
    { day: 'Fri', count: 48 },
    { day: 'Sat', count: 92 },
    { day: 'Sun', count: 81 },
  ];

  const maintenanceData = [
    { month: 'Jul', collection: 120000 },
    { month: 'Aug', collection: 145000 },
    { month: 'Sep', collection: 110000 },
    { month: 'Oct', collection: 168000 },
  ];

  return (
    <div className="animate-in slide-in-from-right duration-300 min-h-screen bg-slate-50">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40 flex items-center gap-4">
        <button onClick={onBack} className="size-10 rounded-xl bg-slate-100 flex items-center justify-center active:scale-90 transition-all">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-black text-slate-900 tracking-tight">Society Analytics</h1>
      </header>

      <div className="p-5 space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 gap-4">
          <KPICard title="Visitors" value="1,240" trend="+12%" icon="groups" color="text-blue-600 bg-blue-50" />
          <KPICard title="Revenue" value="₹8.4L" trend="+5%" icon="payments" color="text-purple-600 bg-purple-50" />
          <KPICard title="Incidents" value="4" trend="-2" icon="report" color="text-red-600 bg-red-50" />
          <KPICard title="Efficiency" value="94%" trend="Stable" icon="auto_graph" color="text-emerald-600 bg-emerald-50" />
        </div>

        {/* Charts */}
        <section className="bg-white p-6 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-6">
          <div>
            <h3 className="text-base font-black text-slate-900">Weekly Visitor Traffic</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Guest & Delivery Trends</p>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={visitorData}>
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'bold'}} />
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                <Bar dataKey="count" fill="#6366f1" radius={[6, 6, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="bg-[#1f3a60] p-6 rounded-[2.5rem] shadow-xl text-white space-y-6">
          <div>
            <h3 className="text-base font-black">Collection Growth</h3>
            <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest mt-1">4 Months Maintenance Revenue</p>
          </div>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={maintenanceData}>
                <defs>
                  <linearGradient id="colorColl" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ffffff" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="collection" stroke="#ffffff" fillOpacity={1} fill="url(#colorColl)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>
    </div>
  );
};

const KPICard = ({ title, value, trend, icon, color }: any) => (
  <div className="bg-white p-5 rounded-[2.2rem] border border-slate-200 shadow-sm">
    <div className={`size-10 rounded-xl flex items-center justify-center mb-3 ${color}`}>
      <span className="material-symbols-outlined text-xl">{icon}</span>
    </div>
    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">{title}</h4>
    <div className="flex justify-between items-end mt-1">
      <span className="text-lg font-black text-slate-900">{value}</span>
      <span className={`text-[9px] font-bold ${trend.startsWith('+') ? 'text-success' : trend === 'Stable' ? 'text-slate-400' : 'text-error'}`}>{trend}</span>
    </div>
  </div>
);

export default AdminAnalytics;
