import React from 'react';
import { HeroSlider } from './HeroSlider';
import { CategoryPills } from './CategoryPills';
import { RecipesSection } from './RecipesSection';
import { Reviews } from './Reviews';

interface HomeViewProps {
  onRecipeClick: (recipe: any) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onRecipeClick }) => {
  return (
    <div className="animate-fade-in">
      <HeroSlider />
      <CategoryPills />
      <RecipesSection onRecipeClick={onRecipeClick} />
      <Reviews />
    </div>
  );
};
