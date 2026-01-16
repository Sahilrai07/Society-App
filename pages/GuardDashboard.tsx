
import React, { useState } from 'react';

interface GuardDashboardProps {
  onLogout: () => void;
}

const GuardDashboard: React.FC<GuardDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('visitors');

  return (
    <div className="flex flex-col min-h-screen pb-24 bg-gray-50">
      <header className="sticky top-0 z-40 bg-white p-4 flex justify-between items-center border-b border-gray-100 shadow-sm">
        <h2 className="text-xl font-black text-slate-900 tracking-tight">
          {activeTab === 'visitors' ? 'Gate Entry Log' : 'Vehicle Log'}
        </h2>
        <div className="flex items-center gap-3">
          <button className="p-2 text-slate-500 hover:text-accent relative">
            <span className="material-symbols-outlined text-2xl">notifications</span>
            <span className="absolute top-2 right-2 size-2 bg-error rounded-full"></span>
          </button>
          <button onClick={onLogout} className="p-2 text-slate-500 hover:text-accent">
            <span className="material-symbols-outlined text-2xl">logout</span>
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        {/* Search Bar */}
        <div className="p-4 bg-white">
          <div className="relative flex items-center bg-slate-100 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-accent/20 transition-all">
            <span className="material-symbols-outlined absolute left-4 text-slate-400">search</span>
            <input 
              type="text" 
              placeholder={`Search ${activeTab}...`} 
              className="w-full pl-12 pr-4 py-3 bg-transparent border-none outline-none text-sm font-medium"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 px-4 pb-4 overflow-x-auto no-scrollbar bg-white">
          {['All', 'Pending', 'Approved', 'Denied'].map((f) => (
            <button key={f} className={`h-9 px-5 rounded-lg text-sm font-bold transition-all ${
              f === 'All' ? 'bg-accent text-white shadow-md' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
            }`}>
              {f}
            </button>
          ))}
        </div>

        <div className="p-4 space-y-3">
           <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Today, 24 Oct</p>
           
           {/* Card 1 */}
           <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 space-y-4">
             <div className="flex justify-between">
                <div className="flex gap-3">
                  <div 
                    className="size-14 rounded-full bg-slate-200 bg-cover bg-center shadow-inner"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDewHVKXt0x_mTFuhNp8eu94jvneaBwbor_v4IE_sOmfYgGdR8zijS6rdrxxnPc55G_9Jb7G_JOJlmBz1LpWNRcURxAZ4P1CIujJf-K3IyygK9GPB9scc5YvR-nFaKuUeldDCFyb_tb7nrx61pzb-E_VAqVi27PGqFQe1kEqaXaBn2Iz3xNlJoNju4xrinZ7c8ilZF_yAuFD4t_A7Y0Pqdz9U_yYJWJVe8arD-PFMPyzywynT4wn046O-Ph4cDZM-1scI-1g-bk_lg")'}}
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 leading-tight">Ramesh Kumar</h4>
                    <div className="flex items-center gap-1.5 mt-1 text-slate-400">
                      <span className="material-symbols-outlined text-[16px]">local_shipping</span>
                      <p className="text-xs font-medium uppercase tracking-wide">Delivery • Zomato</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-black bg-success/10 text-success px-2 py-1 rounded uppercase tracking-wider block mb-1">Approved</span>
                  <p className="text-[10px] font-bold text-slate-400">10:42 AM</p>
                </div>
             </div>
             <div className="flex justify-between items-center pl-16">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Visiting</p>
                  <p className="text-sm font-bold text-slate-700">Flat B-101</p>
                </div>
                <button className="bg-accent text-white font-bold text-xs px-4 py-2 rounded-lg active:scale-95 transition-all shadow-md shadow-accent/20">
                  Mark Entry
                </button>
             </div>
           </div>

           {/* Card 2: Pending */}
           <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 space-y-4">
             <div className="flex justify-between">
                <div className="flex gap-3">
                  <div 
                    className="size-14 rounded-full bg-slate-200 bg-cover bg-center shadow-inner"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAvVNXmC89K5yU-JjW0u4E4VYiK9NL3xM382h5-F-fKccYhEap4oZOwkbzVxkAGYJ8syx_hKZnxxnzrcRv66-mISlnSnPtlb_eM3WlYjNVREh04S5r4t21DRMP9oypoiyopioCSeiaxuUHOn5xiugSxaOGXeTPFZFNx0cITym7nGWc8uFOSs0-fqX3oqFHQ3s8s3OO7rZKlgYSvhOCTe1DKJnjyRvBJvRmeVJROknzwUbsG0Wtg_uUs4MpIJoTic675nGUJlWSkNYk")'}}
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 leading-tight">Suresh Singh</h4>
                    <div className="flex items-center gap-1.5 mt-1 text-slate-400">
                      <span className="material-symbols-outlined text-[16px]">person</span>
                      <p className="text-xs font-medium uppercase tracking-wide">Guest</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-black bg-warning/10 text-warning px-2 py-1 rounded uppercase tracking-wider block mb-1">Pending</span>
                  <p className="text-[10px] font-bold text-slate-400">10:35 AM</p>
                </div>
             </div>
             <div className="flex justify-between items-center pl-16">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Visiting</p>
                  <p className="text-sm font-bold text-slate-700">Flat C-304</p>
                </div>
                <div className="flex gap-2">
                   <button className="size-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:text-accent">
                      <span className="material-symbols-outlined text-xl">call</span>
                   </button>
                   <button className="h-9 px-4 rounded-lg bg-slate-100 text-slate-900 font-bold text-xs hover:bg-slate-200 transition-all">
                      Remind
                   </button>
                </div>
             </div>
           </div>

           {/* Card 3: Denied */}
           <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 space-y-4 opacity-70">
             <div className="flex justify-between">
                <div className="flex gap-3">
                  <div className="size-14 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                    <span className="material-symbols-outlined text-3xl">local_taxi</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 leading-tight">Uber Cab</h4>
                    <div className="flex items-center gap-1.5 mt-1 text-slate-400">
                      <span className="material-symbols-outlined text-[16px]">pin_drop</span>
                      <p className="text-xs font-medium uppercase tracking-wide">MH-02-AB-1234</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-black bg-error/10 text-error px-2 py-1 rounded uppercase tracking-wider block mb-1">Denied</span>
                  <p className="text-[10px] font-bold text-slate-400">09:15 AM</p>
                </div>
             </div>
             <div className="flex justify-between items-center pl-16">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Visiting</p>
                  <p className="text-sm font-bold text-slate-700">Flat A-902</p>
                </div>
                <span className="text-[10px] font-bold italic text-error">Entry Denied by Resident</span>
             </div>
           </div>
        </div>
      </main>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-6 size-14 rounded-full bg-accent text-white shadow-xl shadow-accent/40 flex items-center justify-center active:scale-95 transition-all z-40">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>

      {/* Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-slate-100 pb-safe px-4 pt-2 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.05)] z-50">
        <div className="flex justify-between items-center h-16">
          {[
            { id: 'visitors', icon: 'groups', label: 'Visitors' },
            { id: 'deliveries', icon: 'local_shipping', label: 'Deliveries' },
            { id: 'vehicles', icon: 'directions_car', label: 'Vehicles' },
            { id: 'settings', icon: 'settings', label: 'Settings' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center gap-1 w-16 transition-all duration-300 ${
                activeTab === tab.id ? 'text-accent' : 'text-slate-400'
              }`}
            >
              <span className={`material-symbols-outlined text-[26px] ${activeTab === tab.id ? 'filled' : ''}`}
                    style={{ fontVariationSettings: activeTab === tab.id ? "'FILL' 1" : "'FILL' 0" }}>
                {tab.icon}
              </span>
              <span className="text-[10px] font-bold tracking-tight">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default GuardDashboard;
