import React from 'react';

interface RecipeCardProps {
  recipe: any;
  onClick: () => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick }) => {
  return (
    <div 
      id={`recipe-card-${recipe.id}`}
      data-visual-editor-id={`recipe-${recipe.id}`}
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          crossOrigin="anonymous"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-primary-900 flex items-center gap-1 shadow-sm">
          <i className="bi bi-stars"></i> {recipe.match} Match
        </div>
        <button className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-secondary-500 hover:text-red-500 transition-colors shadow-sm">
          <i className="bi bi-heart"></i>
        </button>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold text-accent-600 uppercase tracking-wider">{recipe.cuisine}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
          <span className="text-xs text-secondary-500 flex items-center gap-1">
            <i className="bi bi-clock"></i> {recipe.time}
          </span>
        </div>
        
        <h3 className="text-xl font-serif font-bold text-secondary-900 mb-2 group-hover:text-primary-900 transition-colors">
          {recipe.title}
        </h3>
        
        <p className="text-sm text-secondary-500 line-clamp-2 mb-4 flex-grow">
          {recipe.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {recipe.tags.map((tag: string, idx: number) => (
            <span key={idx} className="px-2 py-1 bg-gray-50 text-secondary-500 text-xs rounded-md border border-gray-100">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
