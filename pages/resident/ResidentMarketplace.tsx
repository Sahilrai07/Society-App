
import React from 'react';

const ResidentMarketplace: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const items = [
    { id: '1', title: 'IKEA Office Chair', price: '₹2,500', img: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?q=80&w=200', seller: 'Flat A-202' },
    { id: '2', title: 'Baby Stroller', price: '₹4,200', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=200', seller: 'Flat C-101' },
    { id: '3', title: 'Used PS4 Games', price: '₹800', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=200', seller: 'Flat B-402' },
    { id: '4', title: 'Mountain Bike', price: '₹7,500', img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=200', seller: 'Flat D-504' },
  ];

  return (
    <div className="animate-in slide-in-from-right duration-300">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="size-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 active:scale-90 transition-all">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <h1 className="text-xl font-black text-slate-900 tracking-tight">Marketplace</h1>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Buy & Sell Community</p>
          </div>
        </div>
        <button className="size-10 rounded-xl bg-[#1f3a60] text-white flex items-center justify-center shadow-lg active:scale-90 transition-all">
          <span className="material-symbols-outlined">add</span>
        </button>
      </header>

      <div className="p-5">
        <div className="grid grid-cols-2 gap-5">
          {items.map(item => (
            <div key={item.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 group">
              <div className="h-32 bg-slate-200 overflow-hidden relative">
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={item.title} />
                <div className="absolute top-2 right-2 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[9px] font-black uppercase tracking-widest text-slate-900 shadow-sm">
                   {item.seller}
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-xs font-bold text-slate-900 truncate mb-1">{item.title}</h4>
                <div className="flex justify-between items-center">
                   <p className="text-sm font-black text-accent">{item.price}</p>
                   <button className="size-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 active:scale-90 transition-all">
                     <span className="material-symbols-outlined text-sm">chat_bubble</span>
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResidentMarketplace;
