
import React, { useState } from 'react';
import { UserRole } from '../types';

interface LoginPageProps {
  onLogin: (role: UserRole) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [role, setRole] = useState<UserRole>('resident');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const images = {
    resident: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUYB9FANon6JTJepxYY-oy9hKBEWerkQYsoSzM4THquu50RwPD31xTP8z0BmyjgsjolcTnTNkm3MvPkYn47ziUAbRMz4G5nFSD8M2e3QGyMWG9BtQn-XVaUt_bTtE5yV05OXGPAhYFAa_yYGDEAv6NoigIwOwJlXgQ5aaiZAlHto4gPtLPqoabIroDtpPiCB-oL35RbT6cUJyh4enPTUVQ0ZVfgbkk3TWybDf06vRsntaKYyJ57WndSz7tIIfbz17DzyMuyXlaQ7w',
    admin: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIb_jxs66Zh5nIxlg4TyaxytFOu5OrLvAkQoChMMc1QrKoypoE7n0uUmTaWDfaBlWidKnyzXmNkaPu-xzOYBNhJV4VLE0B-2sOZwyF4CJJnk1jJmSHPzgRj2TLJQXbWkMVYi4z8VZJ58DElmNVt3m4vrIuZWeeWGo8xjcetSH5Wh2lLy6CMlDxtpX_hok9zryhVQ6csye7Nc1r9tDOEuIaI_OV0zEP-B5c6MDHUjLzQSExqo_uPS5GX0SdC0gy39YgsvJNGIRqkfc',
    guard: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4Cq3D1rw0RJiRsCpin6l54uuJ1PVp6FwCvBEh3gyTAcZ3zoDG73TY7XKRWYiXweN0eI7hscim4AcVcUuG-7ZVVgGkT9B8607-iNA1fa-RgLuFYHQeMbsJcTGHPOz5II6cfM33wWWdYfmS0TMUusFQX5XnN5PRv6wolUyRkF6JQZlBX85VXZqo2Hs98IEI3wBq27oWbwSBpcnu5YYLcwjArkZjOO6YPtB6gxuZeaXYhFDTouqMmaVeTAFS5k7GV51q_w-j42y97p4'
  };

  const labels = {
    resident: 'Welcome Home',
    admin: 'Admin Portal',
    guard: 'Security Access'
  };

  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(role);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#f6f7f8] font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Header Image */}
        <div className="relative h-56 overflow-hidden">
          <img src={images[role]} className="w-full h-full object-cover transition-all duration-500" alt="Login Background" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
            <div className="h-16 w-16 bg-[#1f3a60] rounded-full flex items-center justify-center text-white shadow-lg ring-4 ring-white">
              <span className="material-symbols-outlined text-3xl">
                {role === 'resident' ? 'home' : role === 'admin' ? 'apartment' : 'security'}
              </span>
            </div>
          </div>
        </div>

        <div className="p-8 pt-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">{labels[role]}</h2>
            <p className="text-slate-500 text-sm mt-1">Sign in as {role} to continue</p>
          </div>

          {/* Role Switcher */}
          <div className="flex bg-slate-100 p-1 rounded-xl mb-6">
            {(['resident', 'admin', 'guard'] as UserRole[]).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                  role === r ? 'bg-white text-[#1f3a60] shadow-sm' : 'text-slate-500'
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          <form onSubmit={handleSumbit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase ml-1 tracking-wide">
                {role === 'guard' ? 'Guard ID' : 'Email or Username'}
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                  {role === 'guard' ? 'badge' : 'person'}
                </span>
                <input
                  type="text"
                  required
                  placeholder={role === 'guard' ? 'Ex: G-1024' : 'admin@society.com'}
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Password</label>
                <a href="#" className="text-xs font-bold text-accent hover:underline">Forgot?</a>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">lock</span>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-accent">
                  visibility_off
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1f3a60] hover:bg-[#162b46] text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 mt-4 active:scale-[0.98] transition-all"
            >
              Login
              <span className="material-symbols-outlined">login</span>
            </button>
          </form>

          <div className="mt-8 text-center space-y-4">
            <p className="text-slate-500 text-sm">
              Having trouble? <a href="#" className="text-accent font-bold hover:underline">Contact Support</a>
            </p>
            <div className="flex items-center justify-center gap-2 opacity-40">
               <span className="material-symbols-outlined text-sm">verified_user</span>
               <span className="text-[10px] font-bold uppercase tracking-widest">Secured by Society Connect</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
