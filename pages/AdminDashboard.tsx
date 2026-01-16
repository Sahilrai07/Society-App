
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('home');

  const chartData = [
    { name: 'Jan', value: 18000 },
    { name: 'Feb', value: 24500 },
    { name: 'Mar', value: 15000 },
    { name: 'Apr', value: 21000 },
    { name: 'May', value: 19000 },
    { name: 'Jun', value: 28000 },
  ];

  return (
    <div className="flex flex-col min-h-screen pb-24 bg-gray-50">
      <header className="sticky top-0 z-40 bg-white p-5 flex justify-between items-center border-b border-gray-100 shadow-sm">
        <div className="flex items-center gap-4">
          <button className="p-1 rounded-full text-slate-900 hover:bg-slate-100">
             <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
          <div>
            <p className="text-[10px] font-black text-accent uppercase tracking-widest leading-none mb-1">Admin Panel</p>
            <h1 className="text-lg font-black text-slate-900 leading-none">Sunrise Apartments</h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative p-2 text-slate-400 hover:text-accent">
            <span className="material-symbols-outlined text-2xl">notifications</span>
            <span className="absolute top-2 right-2 size-2.5 bg-error rounded-full ring-2 ring-white"></span>
          </button>
          <div 
            className="size-9 rounded-full border-2 border-white shadow-sm bg-cover bg-center cursor-pointer"
            onClick={onLogout}
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnvQGhlo-FRagt-GRbZfjnOhnwTmSN1-ZhK7edWD2YRT8WgPU3Ddf77yhfHANkg2fwgtpfX7zfqAYjr3mFlSIVqRj5ReEvTLaa-cvnex3pzWptIf2vi9h3NQ_EzNdCcaiH__2rAu_FJ-48iXKUOvPxtfbnQokw0gx63QnOkn5MXPZTm90k3105Q_w5WFtVibgvx-aynHjrXp-Z2JD2AvFnRueziiX0mgiqBJbVQsP9VWkV8BF_YQEk0J1cLWrP5RE2iBvrdXTHRK4")' }}
          />
        </div>
      </header>

      <main className="flex-1 p-5 space-y-6">
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-1">Overview</h2>
          <p className="text-slate-400 text-sm font-medium">Welcome back, Mr. Sharma</p>
        </section>

        {/* Horizontal Stats */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-5 px-5">
           <StatCard 
             title="Total Collection" 
             value="₹4,50,000" 
             trend="+12%" 
             footer="Target: ₹5,00,000 this month"
             icon="payments"
             iconColor="text-accent bg-blue-50"
           />
           <StatCard 
             title="Total Flats" 
             value="120" 
             trend="96% Occ." 
             footer="115 Occupied • 5 Vacant"
             icon="apartment"
             iconColor="text-purple-600 bg-purple-50"
             neutralTrend
           />
           <StatCard 
             title="Open Complaints" 
             value="5" 
             trend="Action Req." 
             footer="2 Critical • 3 Moderate"
             icon="report_problem"
             iconColor="text-warning bg-orange-50"
             neutralTrend
           />
        </div>

        {/* Maintenance Chart */}
        <section className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
           <div className="flex justify-between items-end mb-6">
             <div>
               <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Monthly Maintenance</p>
               <h3 className="text-3xl font-black text-slate-900">₹24.5L</h3>
             </div>
             <div className="text-right">
               <div className="flex items-center text-success font-black gap-1 justify-end">
                 <span className="material-symbols-outlined text-sm">north_east</span> 8.5%
               </div>
               <p className="text-[10px] font-bold text-slate-400">vs last 6 months</p>
             </div>
           </div>
           
           <div className="h-48 w-full">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                 <Tooltip cursor={{ fill: 'rgba(0,0,0,0.02)' }} content={() => null} />
                 <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }} />
                 <Bar dataKey="value" radius={[6, 6, 6, 6]}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === chartData.length - 1 ? '#137fec' : '#e2e8f0'} />
                    ))}
                 </Bar>
               </BarChart>
             </ResponsiveContainer>
           </div>
        </section>

        {/* Quick Actions Grid */}
        <section>
          <h2 className="text-lg font-black text-slate-900 mb-4 tracking-tight">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <QuickActionButton label="Add Notice" icon="campaign" color="text-accent bg-blue-50 hover:bg-accent" />
            <QuickActionButton label="Verify Pay" icon="payments" color="text-success bg-green-50 hover:bg-success" />
            <QuickActionButton label="Add Member" icon="person_add" color="text-purple-600 bg-purple-50 hover:bg-purple-600" />
            <QuickActionButton label="Visitor Log" icon="assignment" color="text-warning bg-orange-50 hover:bg-warning" />
          </div>
        </section>

        {/* Recent Activity */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-black text-slate-900 tracking-tight">Recent Activity</h2>
            <button className="text-accent text-xs font-bold uppercase">View All</button>
          </div>
          <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
            <ActivityItem 
              title="Payment Received" 
              desc="Ravi Kumar (A-101) • Maintenance" 
              val="+₹2,500" 
              valColor="text-success"
              icon="check_circle"
              iconColor="text-success bg-green-50"
            />
            <ActivityItem 
              title="New Notice Posted" 
              desc="Diwali Event Fund • By Admin" 
              val="2h ago" 
              valColor="text-slate-400"
              icon="campaign"
              iconColor="text-accent bg-blue-50"
            />
            <ActivityItem 
              title="Complaint #405" 
              desc="Leakage in B-Block • Pending" 
              val="High" 
              valColor="text-warning"
              icon="water_drop"
              iconColor="text-error bg-red-50"
              last
            />
          </div>
        </section>
      </main>

      <nav className="fixed bottom-0 w-full bg-white border-t border-slate-100 pb-safe px-4 pt-2 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.05)] z-50">
        <div className="flex justify-between items-center h-16">
          {[
            { id: 'home', icon: 'dashboard', label: 'Home' },
            { id: 'members', icon: 'group', label: 'Members' },
            { id: 'add', icon: 'add', label: '', fab: true },
            { id: 'finance', icon: 'account_balance_wallet', label: 'Finance' },
            { id: 'more', icon: 'grid_view', label: 'More' },
          ].map((tab) => (
            tab.fab ? (
              <button key={tab.id} className="relative -top-6 bg-accent text-white h-14 w-14 rounded-full shadow-lg shadow-accent/30 flex items-center justify-center border-4 border-gray-50 active:scale-95 transition-all">
                <span className="material-symbols-outlined text-2xl">add</span>
              </button>
            ) : (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center gap-1 w-16 transition-all ${
                  activeTab === tab.id ? 'text-accent' : 'text-slate-400'
                }`}
              >
                <span className={`material-symbols-outlined text-2xl ${activeTab === tab.id ? 'filled' : ''}`}>
                  {tab.icon}
                </span>
                <span className="text-[10px] font-bold tracking-tight">{tab.label}</span>
              </button>
            )
          ))}
        </div>
      </nav>
    </div>
  );
};

const StatCard = ({ title, value, trend, footer, icon, iconColor, neutralTrend }: any) => (
  <div className="min-w-[280px] snap-center rounded-3xl p-6 bg-white shadow-sm border border-slate-100 flex flex-col justify-between h-48">
    <div className="flex justify-between items-start">
      <div className={`p-3 rounded-2xl ${iconColor}`}>
        <span className="material-symbols-outlined text-2xl leading-none block">{icon}</span>
      </div>
      <span className={`text-[10px] font-black px-2.5 py-1 rounded-full flex items-center gap-1 uppercase tracking-wider ${
        neutralTrend ? 'bg-slate-100 text-slate-500' : 'bg-success/10 text-success'
      }`}>
        {!neutralTrend && <span className="material-symbols-outlined text-xs">trending_up</span>} {trend}
      </span>
    </div>
    <div>
      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">{title}</p>
      <h4 className="text-3xl font-black text-slate-900 tracking-tight">{value}</h4>
      <p className="text-[10px] font-bold text-slate-400 mt-2 opacity-70">{footer}</p>
    </div>
  </div>
);

const QuickActionButton = ({ label, icon, color }: any) => (
  <button className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group active:scale-95">
    <div className={`size-12 rounded-full flex items-center justify-center transition-all group-hover:text-white ${color}`}>
      <span className="material-symbols-outlined text-2xl">{icon}</span>
    </div>
    <span className="text-xs font-bold text-slate-700 tracking-tight">{label}</span>
  </button>
);

const ActivityItem = ({ title, desc, val, valColor, icon, iconColor, last }: any) => (
  <div className={`flex items-center gap-4 p-4 ${!last ? 'border-b border-slate-50' : ''} hover:bg-slate-50 transition-colors cursor-pointer`}>
    <div className={`size-11 rounded-2xl flex items-center justify-center shrink-0 ${iconColor}`}>
      <span className="material-symbols-outlined text-xl leading-none">{icon}</span>
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-sm font-bold text-slate-900 truncate">{title}</p>
      <p className="text-[10px] font-bold text-slate-400 truncate tracking-tight">{desc}</p>
    </div>
    <span className={`text-xs font-black shrink-0 ${valColor}`}>{val}</span>
  </div>
);

export default AdminDashboard;
