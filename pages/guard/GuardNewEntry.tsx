
import React, { useState, useRef } from 'react';

const GuardNewEntry: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setStep(2);
    } catch (err) {
      console.error("Camera access denied", err);
      // Fallback or alert
      setStep(2); 
    }
  };

  const handleFinish = () => {
    setLoading(true);
    setTimeout(() => {
      onComplete();
    }, 1500);
  };

  return (
    <div className="animate-in slide-in-from-bottom duration-300 h-full flex flex-col">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40">
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">New Visitor Entry</h1>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Step {step} of 2</p>
      </header>

      <div className="flex-1 overflow-y-auto p-5 space-y-6">
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right duration-300">
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Visitor Type</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Delivery', 'Guest', 'Service'].map(t => (
                    <button key={t} className="py-3 px-2 rounded-2xl bg-white border border-slate-200 text-xs font-bold text-slate-600 hover:border-emerald-600 hover:text-emerald-600 transition-all active:scale-95">
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Name / Vendor</label>
                <input type="text" placeholder="Ex: Rahul Kumar / Amazon" className="w-full p-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all" />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Flat Number</label>
                <input type="text" placeholder="Ex: B-402" className="w-full p-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all" />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                <input type="tel" placeholder="+91" className="w-full p-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all" />
              </div>
            </div>

            <button onClick={startCamera} className="w-full bg-slate-900 text-white font-black py-4 rounded-[2rem] flex items-center justify-center gap-3 active:scale-95 transition-all shadow-xl shadow-slate-900/20">
              NEXT: PHOTO <span className="material-symbols-outlined">camera_alt</span>
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right duration-300 flex flex-col h-full">
            <div className="aspect-square w-full rounded-[2.5rem] bg-slate-200 overflow-hidden relative border-4 border-white shadow-xl">
               <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="size-48 border-2 border-white/50 rounded-full border-dashed" />
               </div>
               <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <button className="size-16 rounded-full bg-white shadow-xl border-4 border-slate-200 flex items-center justify-center active:scale-90 transition-all">
                     <span className="material-symbols-outlined text-3xl text-slate-900">photo_camera</span>
                  </button>
               </div>
            </div>

            <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest">Capturing visitor photo for safety records</p>

            <button 
              disabled={loading}
              onClick={handleFinish} 
              className={`w-full bg-emerald-600 text-white font-black py-4 rounded-[2rem] flex items-center justify-center gap-3 active:scale-95 transition-all shadow-xl shadow-emerald-600/20 mt-auto ${loading ? 'opacity-70 cursor-wait' : ''}`}
            >
              {loading ? 'SYNCING...' : 'FINISH ENTRY'} 
              {!loading && <span className="material-symbols-outlined">done_all</span>}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GuardNewEntry;
