
import React from 'react';

const ResidentGallery: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const albums = [
    { id: '1', title: 'Diwali Gala 2024', count: 42, img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=300' },
    { id: '2', title: 'Sports Day', count: 128, img: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=300' },
    { id: '3', title: 'Plantation Drive', count: 15, img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=300' },
    { id: '4', title: 'Independence Day', count: 64, img: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=300' },
  ];

  return (
    <div className="animate-in slide-in-from-right duration-300 min-h-screen bg-slate-50">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="size-10 rounded-xl bg-slate-100 flex items-center justify-center active:scale-90 transition-all">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-xl font-black text-slate-900 tracking-tight">Society Gallery</h1>
        </div>
      </header>

      <div className="p-5 grid grid-cols-2 gap-5">
        {albums.map(album => (
          <div key={album.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-200 group cursor-pointer active:scale-95 transition-all">
            <div className="h-40 relative">
              <img src={album.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={album.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="text-sm font-black truncate">{album.title}</h4>
                <p className="text-[9px] font-bold opacity-70 uppercase tracking-widest">{album.count} Photos</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResidentGallery;
