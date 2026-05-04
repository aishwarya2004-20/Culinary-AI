import React, { useState } from 'react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  user: { name: string; email: string } | null;
  onOpenAuth: (mode: 'signin' | 'signup') => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, user, onOpenAuth, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Discover' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav id="main-navbar" className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm h-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        <div onClick={() => handleNav('home')} className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-primary-900 flex items-center justify-center text-white">
            <i className="bi bi-egg-fried text-xl"></i>
          </div>
          <span className="font-serif text-2xl font-bold text-secondary-900 tracking-tight">
            Culinary<span className="text-primary-900">AI</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <button key={link.id} onClick={() => handleNav(link.id)} className={`font-medium transition-colors ${currentView === link.id ? 'text-primary-900 border-b-2 border-primary-900 pb-1' : 'text-secondary-500 hover:text-primary-900'}`}>
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <button className="hidden md:flex w-10 h-10 rounded-full hover:bg-gray-100 items-center justify-center text-secondary-900 transition-colors">
            <i className="bi bi-search text-lg"></i>
          </button>
          
          {user ? (
            <div className="flex items-center gap-3">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-bold text-secondary-900 leading-none">{user.name}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary-50 border-2 border-primary-100 flex items-center justify-center text-primary-900 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" alt="Profile" crossOrigin="anonymous" className="w-full h-full object-cover" />
              </div>
              <button onClick={onLogout} className="w-10 h-10 rounded-full hover:bg-red-50 flex items-center justify-center text-red-500 transition-colors" title="Logout">
                <i className="bi bi-box-arrow-right text-lg"></i>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2 sm:gap-3">
              <button onClick={() => onOpenAuth('signin')} className="hidden sm:block px-4 py-2 text-secondary-900 font-medium hover:text-primary-900 transition-colors">
                Log in
              </button>
              <button onClick={() => onOpenAuth('signup')} className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-primary-900 text-white text-sm sm:text-base font-medium hover:bg-primary-800 transition-colors shadow-md shadow-primary-900/20">
                Sign up
              </button>
            </div>
          )}

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-2xl text-secondary-900 ml-1">
            <i className={`bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-100 shadow-lg p-4 flex flex-col gap-4 animate-fade-in">
          {navLinks.map(link => (
            <button key={link.id} onClick={() => handleNav(link.id)} className={`text-left font-medium p-2 rounded-lg ${currentView === link.id ? 'bg-primary-50 text-primary-900' : 'text-secondary-500'}`}>
              {link.label}
            </button>
          ))}
          {!user && (
            <button onClick={() => { onOpenAuth('signin'); setIsMobileMenuOpen(false); }} className="text-left font-medium p-2 rounded-lg text-secondary-500">
              Log in
            </button>
          )}
        </div>
      )}
    </nav>
  );
};
