import React from 'react';
import { recipes } from '../data/mockData';
import { RecipeCard } from './RecipeCard';

interface RecipesSectionProps {
  onRecipeClick: (recipe: any) => void;
}

export const RecipesSection: React.FC<RecipesSectionProps> = ({ onRecipeClick }) => {
  return (
    <section id="recipes-grid" className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-serif font-bold text-secondary-900">Recommended for You</h2>
        <button className="text-primary-900 font-medium hover:underline text-sm flex items-center gap-1">
          View All <i className="bi bi-arrow-right"></i>
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map(recipe => (
          <RecipeCard 
            key={recipe.id} 
            recipe={recipe} 
            onClick={() => onRecipeClick(recipe)} 
          />
        ))}
      </div>
    </section>
  );
};
