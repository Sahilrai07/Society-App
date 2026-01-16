
import React, { useState } from 'react';
import AdminHome from './admin/AdminHome.tsx';
import AdminMembers from './admin/AdminMembers.tsx';
import AdminFinance from './admin/AdminFinance.tsx';
import AdminNotices from './admin/AdminNotices.tsx';
import AdminStaff from './admin/AdminStaff.tsx';
import AdminComplaints from './admin/AdminComplaints.tsx';
import AdminFacilities from './admin/AdminFacilities.tsx';
import AdminAnalytics from './admin/AdminAnalytics.tsx';
import AdminInventory from './admin/AdminInventory.tsx';
import AdminCommittee from './admin/AdminCommittee.tsx';
import AdminVendors from './admin/AdminVendors.tsx';
import AdminParking from './admin/AdminParking.tsx';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('home');
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

  const renderView = () => {
    switch (activeView) {
      case 'home':
        return <AdminHome setView={pushView} onLogout={onLogout} />;
      case 'members':
        return <AdminMembers />;
      case 'finance':
        return <AdminFinance />;
      case 'notices':
        return <AdminNotices />;
      case 'staff':
        return <AdminStaff onBack={popView} />;
      case 'complaints':
        return <AdminComplaints onBack={popView} />;
      case 'facilities':
        return <AdminFacilities onBack={popView} />;
      case 'analytics':
        return <AdminAnalytics onBack={popView} />;
      case 'inventory':
        return <AdminInventory onBack={popView} />;
      case 'committee':
        return <AdminCommittee onBack={popView} />;
      case 'vendors':
        return <AdminVendors onBack={popView} />;
      case 'parking':
        return <AdminParking onBack={popView} />;
      default:
        return <AdminHome setView={pushView} onLogout={onLogout} />;
    }
  };

  const setBaseTab = (view: string) => {
    setActiveTab(view);
    setViewStack([view]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 overflow-hidden">
      <main className="flex-1 pb-24 relative overflow-y-auto">
        {renderView()}
      </main>

      <nav className="fixed bottom-0 w-full bg-white border-t border-slate-100 pb-safe px-4 pt-2 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.05)] z-50">
        <div className="flex justify-between items-center h-16">
          {[
            { id: 'home', icon: 'dashboard', label: 'Home' },
            { id: 'members', icon: 'group', label: 'Members' },
            { id: 'finance', icon: 'account_balance_wallet', label: 'Finance' },
            { id: 'notices', icon: 'campaign', label: 'Notices' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setBaseTab(tab.id)}
              className={`flex flex-col items-center justify-center gap-1 w-16 transition-all duration-300 ${
                activeTab === tab.id ? 'text-purple-600 scale-110' : 'text-slate-400'
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

export default AdminDashboard;
