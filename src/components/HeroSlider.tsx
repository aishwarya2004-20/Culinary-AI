import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: "Taste the world, your way.",
    subtitle: "Discover authentic global recipes adapted instantly to your dietary needs.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    badge: "AI-Personalized"
  },
  {
    id: 2,
    title: "Master Italian Classics.",
    subtitle: "Join live cooking classes with renowned chefs from Rome and Naples.",
    image: "https://images.unsplash.com/photo-1498579150354-977475b7e0b3?auto=format&fit=crop&w=1200&q=80",
    badge: "Live Classes"
  },
  {
    id: 3,
    title: "Healthy & Delicious.",
    subtitle: "Explore our new Keto and Vegan bundles curated for your lifestyle.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
    badge: "New Bundles"
  }
];

export const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => window.clearTimeout(timer);
  }, [current]);

  return (
    <section className="pt-24 pb-8 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 to-secondary-900/40 z-10"></div>
            <img src={slide.image} alt={slide.title} crossOrigin="anonymous" className="w-full h-full object-cover" />
            
            <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-16 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-500/20 text-accent-500 text-sm font-bold w-max mb-6 backdrop-blur-sm border border-accent-500/30">
                <i className="bi bi-stars"></i> {slide.badge}
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-4 animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-lg text-gray-200 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                {slide.subtitle}
              </p>
              <button className="w-max px-8 py-4 rounded-xl bg-primary-500 text-white font-bold hover:bg-primary-600 transition-all shadow-lg shadow-primary-500/30 flex items-center gap-2">
                Explore Now <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        ))}

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${idx === current ? 'bg-primary-500 w-8' : 'bg-white/50 hover:bg-white'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
