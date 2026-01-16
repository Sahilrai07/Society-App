
import React, { useState } from 'react';
import BottomNav from '../components/BottomNav';
import ResidentHome from './resident/ResidentHome';
import ResidentBills from './resident/ResidentBills';
import ResidentComplaints from './resident/ResidentComplaints';
import ResidentAmenities from './resident/ResidentAmenities';
import ResidentProfile from './resident/ResidentProfile';
import ResidentVisitors from './resident/ResidentVisitors';
import ResidentMarketplace from './resident/ResidentMarketplace';
import ResidentVehicles from './resident/ResidentVehicles';
import ResidentHelpdesk from './resident/ResidentHelpdesk';

interface ResidentDashboardProps {
  onLogout: () => void;
}

const ResidentDashboard: React.FC<ResidentDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('home');

  const renderView = () => {
    switch (activeTab) {
      case 'home':
        return <ResidentHome setView={setActiveTab} />;
      case 'bills':
        return <ResidentBills />;
      case 'complaints':
        return <ResidentComplaints />;
      case 'amenities':
        return <ResidentAmenities />;
      case 'profile':
        return <ResidentProfile onLogout={onLogout} setView={setActiveTab} />;
      case 'visitors':
        return <ResidentVisitors onBack={() => setActiveTab('home')} />;
      case 'marketplace':
        return <ResidentMarketplace onBack={() => setActiveTab('home')} />;
      case 'vehicles':
        return <ResidentVehicles onBack={() => setActiveTab('home')} />;
      case 'helpdesk':
        return <ResidentHelpdesk onBack={() => setActiveTab('home')} />;
      default:
        return <ResidentHome setView={setActiveTab} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1 pb-24">
        {renderView()}
      </main>
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default ResidentDashboard;
