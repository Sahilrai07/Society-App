
import React from 'react';

const AdminFinance: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-right duration-300">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40">
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Finance Center</h1>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Revenue & Collections</p>
      </header>

      <div className="p-5 space-y-6">
        <section className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[2.5rem] p-8 text-white shadow-2xl shadow-purple-600/20 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 mb-1">Total Society Fund</p>
            <h2 className="text-4xl font-black tracking-tight mb-6">₹12,45,000</h2>
            <div className="flex gap-3">
               <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10">
                  <p className="text-[9px] font-bold opacity-60 uppercase">Received</p>
                  <p className="text-base font-black">₹4.2L</p>
               </div>
               <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10">
                  <p className="text-[9px] font-bold opacity-60 uppercase">Pending</p>
                  <p className="text-base font-black">₹0.8L</p>
               </div>
            </div>
          </div>
          <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[15rem] opacity-10 rotate-12">account_balance</span>
        </section>

        <section className="space-y-4">
          <h3 className="text-lg font-black text-slate-900 px-1">Upcoming Payments</h3>
          <div className="space-y-3">
             {[
               { month: 'November 2024', status: 'Generating...', color: 'bg-blue-50 text-blue-600' },
               { month: 'October 2024', status: 'In Progress', color: 'bg-green-50 text-green-600' },
               { month: 'September 2024', status: 'Completed', color: 'bg-slate-50 text-slate-400' },
             ].map(bill => (
               <div key={bill.month} className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{bill.month}</h4>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Maintenance Collection</p>
                  </div>
                  <span className={`text-[9px] font-black uppercase px-3 py-1 rounded-full ${bill.color}`}>
                    {bill.status}
                  </span>
               </div>
             ))}
          </div>
        </section>

        <button className="w-full bg-purple-600 text-white font-black py-4 rounded-[2rem] shadow-lg shadow-purple-600/20 flex items-center justify-center gap-2 active:scale-95 transition-all">
          <span className="material-symbols-outlined">add_card</span>
          GENERATE NEW BILLS
        </button>
      </div>
    </div>
  );
};

export default AdminFinance;
