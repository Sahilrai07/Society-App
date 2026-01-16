
import React from 'react';

const SplashScreen: React.FC = () => {
  return (
    <div className="relative flex h-screen w-full flex-col justify-between items-center bg-[#1f3a60] overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -left-20 w-48 h-48 bg-blue-400 opacity-10 rounded-full blur-3xl"></div>
      
      <div className="flex-1"></div>
      
      <div className="flex flex-col items-center gap-6 z-10 px-6">
        <div className="flex items-center justify-center p-6 bg-white/10 rounded-3xl backdrop-blur-sm ring-1 ring-white/20 shadow-xl animate-float">
          <span className="material-symbols-outlined text-6xl text-white">apartment</span>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-white text-3xl font-bold tracking-tight">Smart Society</h1>
          <p className="text-white/80 text-base font-normal tracking-wide">Your Home, Connected.</p>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col justify-end items-center pb-12 w-full gap-8 z-10">
        <div className="flex flex-col items-center gap-3 w-48">
          <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-white w-1/3 rounded-full animate-pulse"></div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-white/40 text-xs font-light tracking-widest uppercase">Powered by TechSolutions</p>
          <p className="text-white/30 text-[10px] font-light">v1.0.2</p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
