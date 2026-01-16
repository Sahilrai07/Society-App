
import React from 'react';

interface ResidentHomeProps {
  setView: (view: string) => void;
}

const ResidentHome: React.FC<ResidentHomeProps> = ({ setView }) => {
  return (
    <div className="flex flex-col animate-in fade-in duration-500">
      <header className="sticky top-0 z-40 bg-[#1f3a60] text-white p-5 shadow-lg rounded-b-[2.5rem]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div 
              className="size-12 rounded-2xl border-2 border-white/20 bg-cover bg-center shadow-inner rotate-3 transition-transform hover:rotate-0"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop")' }}
            />
            <div>
              <p className="text-[10px] font-black opacity-60 uppercase tracking-[0.2em]">Flat B-402</p>
              <h1 className="text-xl font-black leading-tight tracking-tight">Arav Sharma</h1>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="size-10 flex items-center justify-center bg-error rounded-xl shadow-lg shadow-error/20 active:scale-90 transition-all">
              <span className="material-symbols-outlined text-white">emergency</span>
            </button>
            <button className="size-10 flex items-center justify-center bg-white/10 rounded-xl backdrop-blur-md relative border border-white/10 active:scale-90 transition-all">
              <span className="material-symbols-outlined text-2xl">notifications</span>
              <span className="absolute top-2 right-2 size-2.5 bg-error rounded-full ring-2 ring-[#1f3a60]"></span>
            </button>
          </div>
        </div>
      </header>

      <div className="p-5 space-y-8">
        {/* Main Actions Grid */}
        <section>
          <div className="flex justify-between items-end mb-4 px-1">
            <h2 className="text-lg font-black text-slate-900 tracking-tight">Daily Essentials</h2>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <IconAction icon="groups" label="Visitors" color="bg-blue-50 text-blue-600" onClick={() => setView('visitors')} />
            <IconAction icon="directions_car" label="Vehicles" color="bg-purple-50 text-purple-600" onClick={() => setView('vehicles')} />
            <IconAction icon="storefront" label="Market" color="bg-orange-50 text-orange-600" onClick={() => setView('marketplace')} />
            <IconAction icon="support_agent" label="Helpdesk" color="bg-emerald-50 text-emerald-600" onClick={() => setView('helpdesk')} />
          </div>
        </section>

        {/* Feature Highlights */}
        <div className="grid grid-cols-2 gap-4">
            <FeatureCard 
              title="Community Polls" 
              desc="Vote on society decisions"
              icon="ballot" 
              color="bg-amber-500"
              onClick={() => setView('polls')}
            />
            <FeatureCard 
              title="Society Events" 
              desc="Diwali Night & more"
              icon="celebration" 
              color="bg-rose-500"
              onClick={() => setView('events')}
            />
        </div>

        {/* Bills Banner */}
        <section className="relative h-44 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20 group cursor-pointer" onClick={() => setView('bills')}>
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
            style={{ backgroundImage: 'linear-gradient(45deg, rgba(31,58,96,0.95) 0%, rgba(19,127,236,0.6) 100%), url("https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop")' }}
          />
          <div className="relative z-10 p-7 h-full flex flex-col justify-between text-white">
            <div>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest mb-2 inline-block">Finance</span>
              <h3 className="text-2xl font-black leading-tight">Monthly Maintenance</h3>
            </div>
            <div className="flex justify-between items-center">
               <p className="text-3xl font-black tracking-tight">₹3,500</p>
               <button className="bg-white text-[#1f3a60] px-6 py-2.5 rounded-2xl text-xs font-black shadow-lg">PAY NOW</button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section>
          <div className="flex justify-between items-center mb-4 px-1">
            <h2 className="text-lg font-black text-slate-900 tracking-tight">Society Services</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ServiceCard 
              title="Amenities" 
              desc="Book Pool or Hall"
              icon="pool" 
              onClick={() => setView('amenities')}
              img="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=300"
            />
            <ServiceCard 
              title="Complaints" 
              desc="Report an issue"
              icon="campaign" 
              onClick={() => setView('complaints')}
              img="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=300"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

const IconAction = ({ icon, label, color, onClick }: any) => (
  <button onClick={onClick} className="flex flex-col items-center gap-2 group active:scale-90 transition-all">
    <div className={`size-14 rounded-2xl flex items-center justify-center shadow-sm transition-all group-hover:shadow-md ${color}`}>
      <span className="material-symbols-outlined text-[28px]">{icon}</span>
    </div>
    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{label}</span>
  </button>
);

const FeatureCard = ({ title, desc, icon, color, onClick }: any) => (
  <button onClick={onClick} className={`${color} p-5 rounded-[2rem] text-white text-left flex flex-col justify-between h-36 shadow-lg active:scale-95 transition-all relative overflow-hidden`}>
    <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-7xl opacity-20">{icon}</span>
    <div className="size-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
      <span className="material-symbols-outlined">{icon}</span>
    </div>
    <div>
      <h4 className="font-black text-base leading-tight">{title}</h4>
      <p className="text-[10px] font-bold opacity-80 uppercase tracking-wider">{desc}</p>
    </div>
  </button>
);

const ServiceCard = ({ title, desc, icon, img, onClick }: any) => (
  <div onClick={onClick} className="relative h-44 rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-sm active:scale-[0.98] transition-all">
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url("${img}")` }}
    />
    <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
      <div className="size-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
        <span className="material-symbols-outlined text-xl">{icon}</span>
      </div>
      <div>
        <h4 className="text-lg font-black leading-tight">{title}</h4>
        <p className="text-[10px] font-bold text-white/70 uppercase tracking-wider">{desc}</p>
      </div>
    </div>
  </div>
);

export default ResidentHome;
