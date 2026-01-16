
import React from 'react';

const ResidentAmenities: React.FC = () => {
  const amenities = [
    { id: '1', name: 'Swimming Pool', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=400&auto=format&fit=crop', available: '06 AM - 10 PM' },
    { id: '2', name: 'Community Hall', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=400&auto=format&fit=crop', available: 'By Booking' },
    { id: '3', name: 'Badminton Court', image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=400&auto=format&fit=crop', available: '05 AM - 11 PM' },
    { id: '4', name: 'Mini Theatre', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=400&auto=format&fit=crop', available: 'Weekends Only' },
  ];

  return (
    <div className="animate-in slide-in-from-right duration-300">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-10">
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Book Amenities</h1>
        <p className="text-slate-400 text-sm font-medium">Enjoy community facilities</p>
      </header>

      <div className="p-4 space-y-6">
        <div className="grid grid-cols-1 gap-6">
          {amenities.map((item) => (
            <div key={item.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 group">
              <div className="h-48 relative">
                <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={item.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-5 left-6 right-6 flex justify-between items-end">
                   <div>
                     <h3 className="text-xl font-black text-white">{item.name}</h3>
                     <p className="text-white/80 text-xs font-bold uppercase tracking-widest">{item.available}</p>
                   </div>
                   <button className="bg-white text-slate-900 size-10 rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-all">
                     <span className="material-symbols-outlined">calendar_month</span>
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

export default ResidentAmenities;
