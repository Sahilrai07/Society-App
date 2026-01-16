
import React from 'react';

interface ResidentProfileProps {
  onLogout: () => void;
  setView: (view: string) => void;
}

const ResidentProfile: React.FC<ResidentProfileProps> = ({ onLogout, setView }) => {
  return (
    <div className="animate-in slide-in-from-right duration-300">
      <div className="bg-[#1f3a60] pt-14 pb-28 px-6 text-center rounded-b-[4.5rem] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
        <div className="absolute -top-20 -left-20 size-64 bg-accent opacity-10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="inline-block relative">
            <div 
              className="size-32 rounded-[3rem] border-4 border-white shadow-2xl bg-cover bg-center mb-5 mx-auto -rotate-2 hover:rotate-0 transition-transform duration-500"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop")' }}
            />
            <button className="absolute -bottom-1 -right-1 size-11 rounded-2xl bg-accent text-white border-4 border-[#1f3a60] flex items-center justify-center shadow-lg active:scale-90 transition-all">
              <span className="material-symbols-outlined text-lg">photo_camera</span>
            </button>
          </div>
          <h2 className="text-3xl font-black text-white tracking-tight">Arav Sharma</h2>
          <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Primary Resident • Owner</p>
        </div>
      </div>

      <div className="px-6 -mt-16 space-y-6">
        <section className="bg-white rounded-[2.5rem] p-8 shadow-2xl shadow-slate-200/50 border border-slate-100 flex justify-between">
           <div className="text-center flex-1 border-r border-slate-100">
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Members</p>
             <p className="text-xl font-black text-slate-900">04</p>
           </div>
           <div className="text-center flex-1 border-r border-slate-100">
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Vehicles</p>
             <p className="text-xl font-black text-slate-900" onClick={() => setView('vehicles')}>02</p>
           </div>
           <div className="text-center flex-1">
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Balance</p>
             <p className="text-xl font-black text-accent" onClick={() => setView('bills')}>₹3.5k</p>
           </div>
        </section>

        <section className="space-y-3">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3 mb-2">My Information</p>
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
            <ProfileMenuItem icon="group" label="Family Directory" />
            <ProfileMenuItem icon="directions_car" label="My Vehicles" onClick={() => setView('vehicles')} />
            <ProfileMenuItem icon="groups" label="Manage Visitors" onClick={() => setView('visitors')} />
            <ProfileMenuItem icon="campaign" label="My Complaints" onClick={() => setView('complaints')} />
            <ProfileMenuItem icon="verified_user" label="Security Settings" />
          </div>
        </section>

        <section className="space-y-3 pb-10">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3 mb-2">Support</p>
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
            <ProfileMenuItem icon="help" label="Help Center" onClick={() => setView('helpdesk')} />
            <ProfileMenuItem icon="description" label="Society Bylaws" />
            <button 
              onClick={onLogout}
              className="w-full flex items-center gap-5 px-7 py-6 hover:bg-red-50 transition-colors group"
            >
              <div className="size-11 rounded-2xl bg-error/10 text-error flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-xl">logout</span>
              </div>
              <span className="text-sm font-black text-error uppercase tracking-widest">Logout Account</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

const ProfileMenuItem = ({ icon, label, onClick }: any) => (
  <button onClick={onClick} className="w-full flex items-center justify-between px-7 py-6 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors group">
    <div className="flex items-center gap-5">
      <div className="size-11 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:text-accent group-hover:bg-accent/10 transition-all">
        <span className="material-symbols-outlined text-xl">{icon}</span>
      </div>
      <span className="text-sm font-bold text-slate-700">{label}</span>
    </div>
    <span className="material-symbols-outlined text-slate-300 group-hover:translate-x-1 transition-transform">chevron_right</span>
  </button>
);

export default ResidentProfile;
