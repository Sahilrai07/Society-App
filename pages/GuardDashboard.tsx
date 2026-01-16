
import React, { useState } from 'react';
import GuardHome from './guard/GuardHome';
import GuardNewEntry from './guard/GuardNewEntry';
import GuardSOS from './guard/GuardSOS';

interface GuardDashboardProps {
  onLogout: () => void;
}

const GuardDashboard: React.FC<GuardDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('home');

  const renderView = () => {
    switch (activeTab) {
      case 'home':
        return <GuardHome onLogout={onLogout} />;
      case 'entry':
        return <GuardNewEntry onComplete={() => setActiveTab('home')} />;
      case 'sos':
        return <GuardSOS />;
      default:
        return <GuardHome onLogout={onLogout} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1 pb-24">
        {renderView()}
      </main>

      <nav className="fixed bottom-0 w-full bg-white border-t border-slate-100 pb-safe px-4 pt-2 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.05)] z-50">
        <div className="flex justify-between items-center h-16">
          {[
            { id: 'home', icon: 'shield_person', label: 'Gate' },
            { id: 'entry', icon: 'add_circle', label: 'New Entry' },
            { id: 'sos', icon: 'emergency_share', label: 'SOS' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center gap-1 w-16 transition-all duration-300 ${
                activeTab === tab.id ? 'text-emerald-600 scale-110' : 'text-slate-400'
              }`}
            >
              <span className={`material-symbols-outlined text-[26px] ${activeTab === tab.id ? 'filled' : ''}`}
                    style={{ fontVariationSettings: activeTab === tab.id ? "'FILL' 1" : "'FILL' 0" }}>
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
