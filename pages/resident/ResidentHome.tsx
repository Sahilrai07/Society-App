
import React from 'react';

interface ResidentHomeProps {
  setView: (view: string) => void;
}

const ResidentHome: React.FC<ResidentHomeProps> = ({ setView }) => {
  return (
    <div className="flex flex-col animate-in fade-in duration-500 pb-10 bg-slate-50">
      {/* Dynamic Header */}
      <header className="sticky top-0 z-40 bg-[#1f3a60] text-white p-6 shadow-2xl rounded-b-[3.5rem] border-b border-white/10">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <div 
              className="size-16 rounded-[2rem] border-4 border-white/20 bg-cover bg-center shadow-xl rotate-3 hover:rotate-0 transition-all duration-500 cursor-pointer"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop")' }}
              onClick={() => setView('profile')}
            />
            <div>
              <p className="text-[10px] font-black opacity-60 uppercase tracking-[0.2em]">Galaxy Heights • B-402</p>
              <h1 className="text-2xl font-black leading-tight tracking-tight">Hi, Arav!</h1>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setView('emergency')} className="size-12 flex items-center justify-center bg-error rounded-2xl shadow-lg shadow-error/30 active:scale-90 transition-all">
              <span className="material-symbols-outlined text-white text-3xl">emergency</span>
            </button>
          </div>
        </div>
        
        {/* Today's Status Summary */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          <SummaryBadge icon="local_taxi" label="Cab" value="Expected" color="bg-orange-500/20" />
          <SummaryBadge icon="water_drop" label="Water" value="Normal" color="bg-blue-500/20" />
          <SummaryBadge icon="bolt" label="Power" value="Stable" color="bg-amber-500/20" />
          <SummaryBadge icon="package" label="Parcel" value="2 Gate" color="bg-emerald-500/20" />
        </div>
      </header>

      <div className="p-5 space-y-8">
        {/* Quick Access Grid */}
        <section>
          <div className="flex justify-between items-end mb-4 px-2">
            <h2 className="text-xl font-black text-slate-900 tracking-tight">Quick Actions</h2>
            <button onClick={() => setView('feed')} className="text-[10px] font-black text-accent uppercase tracking-widest bg-accent/10 px-3 py-1.5 rounded-xl">View Feed</button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <IconAction icon="groups" label="Visitors" color="bg-blue-50 text-blue-600" onClick={() => setView('visitors')} />
            <IconAction icon="person_apron" label="Staff" color="bg-rose-50 text-rose-600" onClick={() => setView('domestic_help')} />
            <IconAction icon="pets" label="Pets" color="bg-amber-50 text-amber-600" onClick={() => setView('pets')} />
            <IconAction icon="storefront" label="Market" color="bg-orange-50 text-orange-600" onClick={() => setView('marketplace')} />
          </div>
        </section>

        {/* Featured Content Hub */}
        <section className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <HubCard 
              title="Community Feed" 
              desc="What's happening?" 
              icon="forum" 
              color="bg-gradient-to-br from-indigo-600 to-blue-700" 
              onClick={() => setView('feed')} 
            />
            <HubCard 
              title="Society Polls" 
              desc="Vote on 2 items" 
              icon="ballot" 
              color="bg-gradient-to-br from-amber-500 to-orange-600" 
              onClick={() => setView('polls')} 
            />
          </div>
        </section>

        {/* Financial Snapshot */}
        <section className="relative h-48 rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/20 group cursor-pointer" onClick={() => setView('bills')}>
          <div className="absolute inset-0 bg-[#1f3a60]" />
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
            <div className="flex justify-between items-start">
              <div>
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-3 inline-block">Maintenance</span>
                <h3 className="text-3xl font-black leading-tight">₹3,500 <span className="text-sm font-bold opacity-60">due Oct 30</span></h3>
              </div>
              <div className="size-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <span className="material-symbols-outlined text-3xl">account_balance_wallet</span>
              </div>
            </div>
            <button className="bg-white text-[#1f3a60] w-full py-4 rounded-2xl text-xs font-black shadow-2xl active:scale-[0.98] transition-all tracking-widest">PAY NOW</button>
          </div>
        </section>

        {/* Discover Community */}
        <section className="space-y-4">
          <h2 className="text-xl font-black text-slate-900 tracking-tight px-2">Discover Community</h2>
          <div className="grid grid-cols-2 gap-4">
            <SecondaryHubCard title="Documents" icon="folder_special" onClick={() => setView('documents')} />
            <SecondaryHubCard title="Gallery" icon="photo_library" onClick={() => setView('gallery')} />
            <SecondaryHubCard title="Helpdesk" icon="support_agent" onClick={() => setView('helpdesk')} />
            <SecondaryHubCard title="Subscriptions" icon="shopping_bag" onClick={() => setView('subscriptions')} />
          </div>
        </section>

        {/* Services & Amenities */}
        <section>
          <div className="grid grid-cols-2 gap-4">
            <ServiceCard title="Pool Side" desc="06 AM Open" icon="pool" onClick={() => setView('amenities')} img="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=300" />
            <ServiceCard title="Events" desc="Gala Night" icon="celebration" onClick={() => setView('events')} img="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=400" />
          </div>
        </section>
      </div>
    </div>
  );
};

const SummaryBadge = ({ icon, label, value, color }: any) => (
  <div className={`flex items-center gap-2 px-4 py-3 rounded-2xl backdrop-blur-md border border-white/10 min-w-fit ${color}`}>
    <span className="material-symbols-outlined text-sm">{icon}</span>
    <div className="flex flex-col">
      <span className="text-[8px] font-black uppercase opacity-60 leading-none">{label}</span>
      <span className="text-[10px] font-bold leading-none mt-1">{value}</span>
    </div>
  </div>
);

const IconAction = ({ icon, label, color, onClick }: any) => (
  <button onClick={onClick} className="flex flex-col items-center gap-2 group active:scale-90 transition-all">
    <div className={`size-16 rounded-[1.8rem] flex items-center justify-center shadow-lg transition-all group-hover:shadow-xl group-hover:-translate-y-1 ${color}`}>
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{label}</span>
  </button>
);

const HubCard = ({ title, desc, icon, color, onClick }: any) => (
  <button onClick={onClick} className={`${color} p-6 rounded-[2.8rem] text-white text-left flex flex-col justify-between h-44 shadow-2xl shadow-black/10 active:scale-95 transition-all relative overflow-hidden group`}>
    <span className="material-symbols-outlined absolute -right-6 -bottom-6 text-9xl opacity-20 group-hover:scale-110 group-hover:rotate-12 transition-transform">{icon}</span>
    <div className="size-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
      <span className="material-symbols-outlined text-2xl">{icon}</span>
    </div>
    <div>
      <h4 className="font-black text-lg leading-tight">{title}</h4>
      <p className="text-[11px] font-bold opacity-80 uppercase tracking-widest mt-1">{desc}</p>
    </div>
  </button>
);

const SecondaryHubCard = ({ title, icon, onClick }: any) => (
  <button onClick={onClick} className="bg-white p-5 rounded-[2.2rem] border border-slate-200 shadow-sm flex items-center gap-4 active:scale-95 transition-all text-left">
    <div className="size-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
      <span className="material-symbols-outlined text-xl">{icon}</span>
    </div>
    <span className="text-xs font-black text-slate-700 uppercase tracking-widest leading-none">{title}</span>
  </button>
);

const ServiceCard = ({ title, desc, icon, img, onClick }: any) => (
  <div onClick={onClick} className="relative h-48 rounded-[3rem] overflow-hidden group cursor-pointer shadow-xl active:scale-[0.98] transition-all">
    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.85)), url("${img}")` }} />
    <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
      <div className="size-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
        <span className="material-symbols-outlined text-2xl">{icon}</span>
      </div>
      <div>
        <h4 className="text-xl font-black leading-tight">{title}</h4>
        <p className="text-[11px] font-bold text-white/70 uppercase tracking-widest">{desc}</p>
      </div>
    </div>
  </div>
);

export default ResidentHome;
