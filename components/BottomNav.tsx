
import React from 'react';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', icon: 'home', label: 'Home' },
    { id: 'bills', icon: 'receipt_long', label: 'Bills' },
    { id: 'complaints', icon: 'campaign', label: 'Complaints' },
    { id: 'profile', icon: 'person', label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 pb-safe px-4 pt-2 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.05)] z-50">
      <div className="flex justify-between items-center h-16">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center justify-center gap-1 w-16 transition-all duration-300 ${
              activeTab === tab.id ? 'text-accent scale-110' : 'text-slate-400'
            }`}
          >
            <span className={`material-symbols-outlined text-[26px] ${activeTab === tab.id ? 'filled' : ''}`} 
                  style={{ fontVariationSettings: activeTab === tab.id ? "'FILL' 1" : "'FILL' 0" }}>
              {tab.icon}
            </span>
            <span className={`text-[10px] font-bold tracking-tight ${activeTab === tab.id ? 'opacity-100' : 'opacity-60'}`}>
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
