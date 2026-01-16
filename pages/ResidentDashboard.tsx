
import React, { useState } from 'react';
import BottomNav from '../components/BottomNav.tsx';
import ResidentHome from './resident/ResidentHome.tsx';
import ResidentBills from './resident/ResidentBills.tsx';
import ResidentComplaints from './resident/ResidentComplaints.tsx';
import ResidentAmenities from './resident/ResidentAmenities.tsx';
import ResidentProfile from './resident/ResidentProfile.tsx';
import ResidentVisitors from './resident/ResidentVisitors.tsx';
import ResidentMarketplace from './resident/ResidentMarketplace.tsx';
import ResidentVehicles from './resident/ResidentVehicles.tsx';
import ResidentHelpdesk from './resident/ResidentHelpdesk.tsx';
import ResidentEvents from './resident/ResidentEvents.tsx';
import ResidentPolls from './resident/ResidentPolls.tsx';
import ResidentDomesticHelp from './resident/ResidentDomesticHelp.tsx';
import ResidentDocuments from './resident/ResidentDocuments.tsx';
import ResidentEmergency from './resident/ResidentEmergency.tsx';
import ResidentSubscriptions from './resident/ResidentSubscriptions.tsx';
import ResidentGallery from './resident/ResidentGallery.tsx';
import ResidentFeed from './resident/ResidentFeed.tsx';
import ResidentPets from './resident/ResidentPets.tsx';

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
