import React, { useState } from 'react';

interface AuthModalProps {
  isOpen: boolean;
  initialMode: 'signin' | 'signup';
  onClose: () => void;
  onSuccess: (user: { name: string; email: string }) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, initialMode, onClose, onSuccess }) => {
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication success
    onSuccess({ name: mode === 'signup' ? name : 'Foodie User', email });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      <div className="absolute inset-0 bg-secondary-900/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-secondary-900 transition-colors z-10">
          <i className="bi bi-x-lg"></i>
        </button>

        <div className="p-8 sm:p-10">
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary-900 flex items-center justify-center text-white mx-auto mb-4">
              <i className="bi bi-egg-fried text-2xl"></i>
            </div>
            <h2 className="text-2xl font-serif font-bold text-secondary-900">
              {mode === 'signin' ? 'Welcome back' : 'Join CulinaryAI'}
            </h2>
            <p className="text-sm text-secondary-500 mt-2">
              {mode === 'signin' ? 'Enter your details to access your recipes.' : 'Create an account to personalize your experience.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="block text-sm font-medium text-secondary-900 mb-1">Full Name</label>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="John Doe" />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-secondary-900 mb-1">Email</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary-900 mb-1">Password</label>
              <input type="password" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="••••••••" />
            </div>

            <button type="submit" className="w-full py-3.5 mt-2 rounded-xl bg-primary-900 text-white font-bold hover:bg-primary-800 transition-colors shadow-lg shadow-primary-900/20">
              {mode === 'signin' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-secondary-500">
              {mode === 'signin' ? "Don't have an account? " : "Already have an account? "}
              <button onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')} className="text-primary-900 font-bold hover:underline">
                {mode === 'signin' ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
