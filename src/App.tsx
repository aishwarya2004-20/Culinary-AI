import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { RecipeDetail } from './components/RecipeDetail';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { trackAppPageView, identifyAppUser, trackAppEvent } from './utils/trackingHelpers';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedRecipe, setSelectedRecipe] = useState<any | null>(null);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: 'signin' | 'signup' }>({ isOpen: false, mode: 'signin' });

  useEffect(() => {
    identifyAppUser();
    trackAppPageView(`View: ${currentView}`);
  }, [currentView]);

  const handleNavigate = (view: string) => {
    setSelectedRecipe(null);
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRecipeClick = (recipe: any) => {
    setSelectedRecipe(recipe);
    trackAppEvent('view_recipe', { recipe_id: recipe.id, recipe_name: recipe.title });
    trackAppPageView(`Recipe Detail: ${recipe.title}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAuthSuccess = (userData: { name: string; email: string }) => {
    setUser(userData);
    setAuthModal({ ...authModal, isOpen: false });
    identifyAppUser({ email: userData.email, name: userData.name, method: authModal.mode });
    trackAppEvent(authModal.mode === 'signin' ? 'user_login' : 'user_signup');
  };

  const handleLogout = () => {
    setUser(null);
    identifyAppUser(); // Resets to anonymous tracking
    trackAppEvent('user_logout');
  };

  const renderView = () => {
    if (selectedRecipe) return <RecipeDetail recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} />;
    switch (currentView) {
      case 'gallery': return <Gallery />;
      case 'contact': return <Contact />;
      case 'home': default: return <HomeView onRecipeClick={handleRecipeClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-secondary-50 font-sans text-secondary-900 selection:bg-primary-100 selection:text-primary-900 flex flex-col">
      <Navbar 
        currentView={currentView} 
        onNavigate={handleNavigate} 
        user={user}
        onOpenAuth={(mode) => setAuthModal({ isOpen: true, mode })}
        onLogout={handleLogout}
      />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      <Footer onNavigate={handleNavigate} />

      <AuthModal 
        isOpen={authModal.isOpen} 
        initialMode={authModal.mode}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
}

export default App;
