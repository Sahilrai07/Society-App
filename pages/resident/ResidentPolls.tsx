
import React from 'react';

const ResidentPolls: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="animate-in slide-in-from-right duration-300">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40 flex items-center gap-4">
        <button onClick={onBack} className="size-10 rounded-xl bg-slate-100 flex items-center justify-center active:scale-90 transition-all">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-black text-slate-900 tracking-tight">Community Polls</h1>
      </header>

      <div className="p-5 space-y-6">
        <div className="bg-white p-7 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
           <div>
              <span className="text-[10px] font-black text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg uppercase mb-3 inline-block">Active Poll</span>
              <h3 className="text-lg font-black text-slate-900 leading-snug">Should we upgrade the gym with new treadmills next month?</h3>
           </div>
           
           <div className="space-y-3">
              <PollOption label="Yes, Definitely" percent={74} selected />
              <PollOption label="No, Not Required" percent={26} />
           </div>

           <div className="pt-4 border-t border-slate-50 flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <span>218 Votes</span>
              <span>Ends in 2 days</span>
           </div>
        </div>
      </div>
    </div>
  );
};

const PollOption = ({ label, percent, selected }: any) => (
  <button className={`w-full p-4 rounded-2xl border-2 text-left relative overflow-hidden transition-all ${
    selected ? 'border-amber-500 bg-amber-50/30' : 'border-slate-50 bg-slate-50'
  }`}>
    <div className="relative z-10 flex justify-between items-center">
       <span className={`text-sm font-bold ${selected ? 'text-amber-700' : 'text-slate-600'}`}>{label}</span>
       <span className="text-xs font-black">{percent}%</span>
    </div>
    <div className={`absolute left-0 top-0 h-full transition-all duration-1000 ${
      selected ? 'bg-amber-100' : 'bg-slate-200'
    }`} style={{ width: `${percent}%` }} />
  </button>
);

export default ResidentPolls;
