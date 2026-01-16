
import React, { useState, useEffect } from 'react';
import { UserRole } from './types';
import SplashScreen from './pages/SplashScreen';
import LoginPage from './pages/LoginPage';
import ResidentDashboard from './pages/ResidentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import GuardDashboard from './pages/GuardDashboard';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<UserRole | null>(null);

  useEffect(() => {
    // Simulate loading splash screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
  };

  if (loading) return <SplashScreen />;

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {userRole === 'resident' && <ResidentDashboard onLogout={handleLogout} />}
      {userRole === 'admin' && <AdminDashboard onLogout={handleLogout} />}
      {userRole === 'guard' && <GuardDashboard onLogout={handleLogout} />}
    </div>
  );
};

export default App;
