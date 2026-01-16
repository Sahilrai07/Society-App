
import React from 'react';

const ResidentBills: React.FC = () => {
  const bills = [
    { id: '1', month: 'October 2024', amount: '₹3,500', status: 'Pending', type: 'Maintenance' },
    { id: '2', month: 'September 2024', amount: '₹3,500', status: 'Paid', type: 'Maintenance' },
    { id: '3', month: 'August 2024', amount: '₹3,500', status: 'Paid', type: 'Maintenance' },
    { id: '4', month: 'July 2024', amount: '₹1,200', status: 'Paid', type: 'Clubhouse' },
  ];

  return (
    <div className="animate-in slide-in-from-right duration-300">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-10">
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Payments & Bills</h1>
        <p className="text-slate-400 text-sm font-medium">Manage your society dues</p>
      </header>

      <div className="p-4 space-y-6">
        {/* Wallet Info */}
        <section className="bg-accent rounded-[2rem] p-6 text-white shadow-xl shadow-accent/20 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Total Outstanding</p>
            <h2 className="text-4xl font-black tracking-tight mb-4">₹3,500</h2>
            <div className="flex gap-2">
              <button className="bg-white text-accent px-6 py-2 rounded-xl text-xs font-black shadow-sm active:scale-95 transition-all">
                PAY TOTAL
              </button>
              <button className="bg-white/20 backdrop-blur-md text-white border border-white/10 px-6 py-2 rounded-xl text-xs font-black active:scale-95 transition-all">
                HISTORY
              </button>
            </div>
          </div>
          <span className="material-symbols-outlined absolute -bottom-6 -right-6 text-[10rem] opacity-10 rotate-12">account_balance_wallet</span>
        </section>

        {/* Bill List */}
        <section className="space-y-4">
          <div className="flex justify-between items-center px-1">
            <h3 className="text-lg font-black text-slate-900">Recent Bills</h3>
            <span className="material-symbols-outlined text-slate-400">filter_list</span>
          </div>

          <div className="space-y-3">
            {bills.map((bill) => (
              <div key={bill.id} className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4 group hover:border-accent/30 transition-all">
                <div className={`size-12 rounded-2xl flex items-center justify-center shrink-0 ${
                  bill.status === 'Paid' ? 'bg-success/10 text-success' : 'bg-error/10 text-error'
                }`}>
                  <span className="material-symbols-outlined">
                    {bill.type === 'Maintenance' ? 'apartment' : 'sports_kabaddi'}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900">{bill.month}</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{bill.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-base font-black text-slate-900">{bill.amount}</p>
                  <span className={`text-[10px] font-black uppercase tracking-widest ${
                    bill.status === 'Paid' ? 'text-success' : 'text-error'
                  }`}>{bill.status}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResidentBills;
