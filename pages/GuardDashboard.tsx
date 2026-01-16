
import React, { useState } from 'react';
import GuardHome from './guard/GuardHome';
import GuardNewEntry from './guard/GuardNewEntry';
import GuardSOS from './guard/GuardSOS';
import GuardRoster from './guard/GuardRoster';
import GuardCourier from './guard/GuardCourier';
import GuardPatrol from './guard/GuardPatrol';
import GuardParking from './guard/GuardParking';

const GuardDashboard: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const [viewStack, setViewStack] = useState<string[]>(['home']);
  const activeView = viewStack[viewStack.length - 1];

  const pushView = (view: string) => setViewStack([...viewStack, view]);
  const popView = () => {
    if (viewStack.length > 1) {
      const newStack = [...viewStack];
      newStack.pop();
      setViewStack(newStack);
    }
  };

  const setBaseTab = (view: string) => setViewStack([view]);

  const renderView = () => {
    switch (activeView) {
      case 'home': return <GuardHome onLogout={onLogout} setView={pushView} />;
      case 'entry': return <GuardNewEntry onComplete={() => setBaseTab('home')} />;
      case 'sos': return <GuardSOS />;
      case 'roster': return <GuardRoster onBack={popView} />;
      case 'courier': return <GuardCourier onBack={popView} />;
      case 'patrol': return <GuardPatrol onBack={popView} />;
      case 'parking': return <GuardParking onBack={popView} />;
      default: return <GuardHome onLogout={onLogout} setView={pushView} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 overflow-hidden">
      <main className="flex-1 pb-24 relative overflow-y-auto">
        {renderView()}
      </main>
      <nav className="fixed bottom-0 w-full bg-white border-t border-slate-100 pb-safe px-4 pt-2 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.05)] z-50">
        <div className="flex justify-between items-center h-16">
          {[
            { id: 'home', icon: 'shield_person', label: 'Gate' },
            { id: 'entry', icon: 'add_circle', label: 'Entry' },
            { id: 'sos', icon: 'emergency_share', label: 'SOS' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setBaseTab(tab.id)}
              className={`flex flex-col items-center justify-center gap-1 w-16 transition-all duration-300 ${
                activeView === tab.id ? 'text-emerald-600 scale-110' : 'text-slate-400'
              }`}
            >
              <span className={`material-symbols-outlined text-[26px] ${activeView === tab.id ? 'filled' : ''}`}
                    style={{ fontVariationSettings: activeView === tab.id ? "'FILL' 1" : "'FILL' 0" }}>
                {tab.icon}
              </span>
              <span className="text-[10px] font-bold tracking-tight">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default GuardDashboard;
