
import React, { useState, useRef } from 'react';

const GuardNewEntry: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [visitorType, setVisitorType] = useState('Delivery');
  const [vehicleType, setVehicleType] = useState('None');
  const [parkingStatus, setParkingStatus] = useState('Drop-off');
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
      // Proceed to step 2 anyway for demo purposes
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
    <div className="animate-in slide-in-from-bottom duration-300 h-full flex flex-col bg-slate-50">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40 flex justify-between items-center shadow-sm">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Gate Entry</h1>
          <p className="text-emerald-600 text-[10px] font-black uppercase tracking-widest">Step {step} of 2 • Registration</p>
        </div>
        <div className="flex gap-1">
          {[1, 2].map((i) => (
            <div key={i} className={`h-1.5 w-6 rounded-full transition-all duration-500 ${step === i ? 'bg-emerald-600 w-10' : 'bg-slate-200'}`} />
          ))}
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-5 space-y-8">
        {step === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right duration-300">
            {/* Basic Info */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Visitor Type</label>
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                  {['Delivery', 'Guest', 'Service', 'Cab', 'Staff'].map(t => (
                    <button 
                      key={t} 
                      onClick={() => setVisitorType(t)}
                      className={`py-3 px-6 rounded-2xl text-xs font-black transition-all whitespace-nowrap border-2 ${
                        visitorType === t ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-600/20' : 'bg-white border-slate-100 text-slate-500'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full p-4 rounded-2xl bg-white border border-slate-100 outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all text-sm font-bold" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Flat No.</label>
                  <input type="text" placeholder="Ex: B-402" className="w-full p-4 rounded-2xl bg-white border border-slate-100 outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all text-sm font-bold" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                <input type="tel" placeholder="+91 00000 00000" className="w-full p-4 rounded-2xl bg-white border border-slate-100 outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all text-sm font-bold" />
              </div>
            </div>

            {/* Vehicle Details Section */}
            <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-5">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-600">directions_car</span>
                Vehicle Information
              </h3>
              
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Vehicle Type</label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { id: 'None', icon: 'block' },
                    { id: 'Bike', icon: 'motorcycle' },
                    { id: 'Car', icon: 'directions_car' },
                    { id: 'Auto', icon: 'electric_rickshaw' }
                  ].map(v => (
                    <button 
                      key={v.id} 
                      onClick={() => setVehicleType(v.id)}
                      className={`flex flex-col items-center justify-center gap-1 p-3 rounded-2xl border-2 transition-all ${
                        vehicleType === v.id ? 'border-emerald-600 bg-emerald-50 text-emerald-600' : 'border-slate-50 bg-slate-50 text-slate-400'
                      }`}
                    >
                      <span className="material-symbols-outlined text-xl">{v.icon}</span>
                      <span className="text-[9px] font-black uppercase">{v.id}</span>
                    </button>
                  ))}
                </div>
              </div>

              {vehicleType !== 'None' && (
                <div className="space-y-4 animate-in fade-in slide-in-from-top duration-300">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Vehicle Number</label>
                    <input type="text" placeholder="MH 01 AB 1234" className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all text-lg font-black tracking-widest uppercase" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Parking Status</label>
                    <div className="flex gap-2">
                      {['Drop-off', 'Visitor Parking', 'Internal'].map(p => (
                        <button 
                          key={p} 
                          onClick={() => setParkingStatus(p)}
                          className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-tight transition-all ${
                            parkingStatus === p ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-50 text-slate-500'
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button onClick={startCamera} className="w-full bg-slate-900 text-white font-black py-5 rounded-[2rem] flex items-center justify-center gap-3 active:scale-95 transition-all shadow-xl shadow-slate-900/20 group">
              NEXT: SECURITY PHOTO 
              <span className="material-symbols-outlined transition-transform group-hover:rotate-12">camera_alt</span>
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right duration-300 flex flex-col h-full">
            <div className="aspect-square w-full rounded-[3rem] bg-slate-900 overflow-hidden relative border-4 border-white shadow-2xl">
               <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover opacity-80" />
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="size-64 border-2 border-emerald-500/30 rounded-full border-dashed animate-pulse" />
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
               </div>
               <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <button className="size-20 rounded-full bg-white shadow-2xl border-[6px] border-emerald-600/20 flex items-center justify-center active:scale-90 transition-all">
                     <div className="size-12 rounded-full border-4 border-slate-900" />
                  </button>
               </div>
               <div className="absolute top-6 right-6 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">
                 REC LIVE
               </div>
            </div>

            <div className="text-center space-y-1">
              <p className="text-sm font-black text-slate-900 uppercase tracking-widest">Verify Identity</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Photo required for high-security clearance</p>
            </div>

            <div className="flex gap-4 mt-auto">
               <button onClick={() => setStep(1)} className="flex-1 py-4 rounded-[2rem] bg-white border border-slate-200 text-slate-500 font-black text-xs uppercase active:scale-95 transition-all">
                 Back
               </button>
               <button 
                disabled={loading}
                onClick={handleFinish} 
                className={`flex-[2] bg-emerald-600 text-white font-black py-4 rounded-[2rem] flex items-center justify-center gap-3 active:scale-95 transition-all shadow-xl shadow-emerald-600/20 ${loading ? 'opacity-70 cursor-wait' : ''}`}
              >
                {loading ? 'SYNCING DATA...' : 'VERIFY & ENTER'} 
                {!loading && <span className="material-symbols-outlined">verified_user</span>}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GuardNewEntry;
