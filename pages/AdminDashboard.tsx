
import React, { useState } from 'react';
import AdminHome from './admin/AdminHome';
import AdminMembers from './admin/AdminMembers';
import AdminFinance from './admin/AdminFinance';
import AdminNotices from './admin/AdminNotices';
import AdminStaff from './admin/AdminStaff';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('home');

  const renderView = () => {
    switch (activeTab) {
      case 'home':
        return <AdminHome setView={setActiveTab} onLogout={onLogout} />;
      case 'members':
        return <AdminMembers />;
      case 'finance':
        return <AdminFinance />;
      case 'notices':
        return <AdminNotices />;
      case 'staff':
        return <AdminStaff onBack={() => setActiveTab('home')} />;
      default:
        return <AdminHome setView={setActiveTab} onLogout={onLogout} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1 pb-24">
        {renderView()}
      </main>

      {/* Bottom Nav for Admin */}
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
              onClick={() => setActiveTab(tab.id)}
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
