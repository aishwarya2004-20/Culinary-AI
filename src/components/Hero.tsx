import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero-section" data-visual-editor-id="hero" className="pt-28 pb-12 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-500/10 text-accent-600 text-sm font-medium">
            <i className="bi bi-stars"></i>
            <span>AI-Personalized for your Vegan Diet</span>
          </div>
          
          <h1 id="hero-title" data-visual-editor-id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-secondary-900 leading-tight">
            Taste the world, <br/>
            <span className="text-primary-900 italic">your way.</span>
          </h1>
          
          <p className="text-lg text-secondary-500 max-w-lg leading-relaxed">
            Discover authentic global recipes adapted instantly to your dietary needs and local ingredients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button id="cta-explore" className="px-8 py-4 rounded-xl bg-primary-900 text-white font-medium hover:bg-primary-800 transition-all shadow-lg shadow-primary-900/20 flex items-center justify-center gap-2">
              <i className="bi bi-compass"></i>
              Explore Cuisines
            </button>
            <button id="cta-fridge" className="px-8 py-4 rounded-xl bg-white border border-gray-200 text-secondary-900 font-medium hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
              <i className="bi bi-basket"></i>
              What's in my fridge?
            </button>
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-md mx-auto md:max-w-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-100 to-accent-100 rounded-full blur-3xl opacity-50"></div>
          <img 
            id="hero-image"
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" 
            alt="Delicious global food" 
            crossOrigin="anonymous"
            className="relative z-10 w-full h-auto rounded-2xl shadow-2xl object-cover aspect-[4/3]"
          />
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <i className="bi bi-check-circle-fill text-xl"></i>
            </div>
            <div>
              <p className="text-xs text-secondary-500 font-medium">Substitutes Found</p>
              <p className="text-sm font-bold text-secondary-900">100% Vegan Match</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
