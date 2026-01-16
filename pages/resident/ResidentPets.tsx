
import React from 'react';

const ResidentPets: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const pets = [
    {
      id: '1',
      name: 'Bruno',
      breed: 'Golden Retriever',
      vaccination: 'Up to date',
      status: 'Registered',
      img: 'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=200'
    }
  ];

  return (
    <div className="animate-in slide-in-from-right duration-300 min-h-screen bg-slate-50">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="size-10 rounded-xl bg-slate-100 flex items-center justify-center active:scale-90 transition-all">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-xl font-black text-slate-900 tracking-tight">Pet Registry</h1>
        </div>
      </header>

      <div className="p-5 space-y-6">
        <div className="bg-amber-100 p-6 rounded-[2.5rem] border border-amber-200 flex items-center gap-5">
          <div className="size-14 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/20 shrink-0">
            <span className="material-symbols-outlined text-3xl">pets</span>
          </div>
          <div>
            <h3 className="text-lg font-black text-amber-900 leading-tight">Friendly Society</h3>
            <p className="text-amber-700 text-[10px] font-black uppercase tracking-widest">Ensuring safety for all</p>
          </div>
        </div>

        <div className="space-y-4">
          {pets.map(pet => (
            <div key={pet.id} className="bg-white p-6 rounded-[2.5rem] border border-slate-200 shadow-sm flex items-center gap-5 group">
              <img src={pet.img} className="size-20 rounded-3xl object-cover shadow-md group-hover:scale-105 transition-transform" alt={pet.name} />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="text-xl font-black text-slate-900">{pet.name}</h4>
                  <span className="text-[9px] font-black uppercase bg-success/10 text-success px-2 py-0.5 rounded-lg">{pet.status}</span>
                </div>
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mt-0.5">{pet.breed}</p>
                <div className="flex items-center gap-1.5 mt-2 text-emerald-600">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  <span className="text-[10px] font-black uppercase tracking-widest">{pet.vaccination}</span>
                </div>
              </div>
            </div>
          ))}
          
          <button className="w-full border-2 border-dashed border-slate-300 p-8 rounded-[2.5rem] text-slate-400 font-black text-xs uppercase tracking-[0.2em] hover:border-amber-500 hover:text-amber-500 transition-all flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-3xl">add_circle</span>
            Add New Pet
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResidentPets;
