
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
import ResidentEvents from './resident/ResidentEvents';
import ResidentPolls from './resident/ResidentPolls';
import ResidentDomesticHelp from './resident/ResidentDomesticHelp';
import ResidentDocuments from './resident/ResidentDocuments';
import ResidentEmergency from './resident/ResidentEmergency';
import ResidentSubscriptions from './resident/ResidentSubscriptions';
import ResidentGallery from './resident/ResidentGallery';
import ResidentFeed from './resident/ResidentFeed';
import ResidentPets from './resident/ResidentPets';

const ResidentDashboard: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
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
      case 'home': return <ResidentHome setView={pushView} />;
      case 'bills': return <ResidentBills />;
      case 'complaints': return <ResidentComplaints />;
      case 'amenities': return <ResidentAmenities />;
      case 'profile': return <ResidentProfile onLogout={onLogout} setView={pushView} />;
      case 'visitors': return <ResidentVisitors onBack={popView} />;
      case 'marketplace': return <ResidentMarketplace onBack={popView} />;
      case 'vehicles': return <ResidentVehicles onBack={popView} />;
      case 'helpdesk': return <ResidentHelpdesk onBack={popView} />;
      case 'events': return <ResidentEvents onBack={popView} />;
      case 'polls': return <ResidentPolls onBack={popView} />;
      case 'domestic_help': return <ResidentDomesticHelp onBack={popView} />;
      case 'documents': return <ResidentDocuments onBack={popView} />;
      case 'emergency': return <ResidentEmergency onBack={popView} />;
      case 'subscriptions': return <ResidentSubscriptions onBack={popView} />;
      case 'gallery': return <ResidentGallery onBack={popView} />;
      case 'feed': return <ResidentFeed onBack={popView} />;
      case 'pets': return <ResidentPets onBack={popView} />;
      default: return <ResidentHome setView={pushView} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 overflow-hidden">
      <main className="flex-1 pb-24 relative overflow-y-auto">
        {renderView()}
      </main>
      <BottomNav activeTab={viewStack[0]} setActiveTab={setBaseTab} />
    </div>
  );
};

export default ResidentDashboard;
