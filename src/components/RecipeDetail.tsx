import React from 'react';

interface RecipeDetailProps {
  recipe: any;
  onBack: () => void;
}

export const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe, onBack }) => {
  return (
    <div id="recipe-detail-view" className="pt-24 pb-12 px-4 sm:px-6 max-w-4xl mx-auto animate-fade-in">
      <button 
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-secondary-500 hover:text-primary-900 transition-colors font-medium"
      >
        <i className="bi bi-arrow-left"></i> Back to Discover
      </button>

      <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
        {/* Video Placeholder / Hero Image */}
        <div className="relative h-64 sm:h-80 md:h-96 bg-secondary-900 group cursor-pointer">
          <img src={recipe.image} alt={recipe.title} crossOrigin="anonymous" className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
              <i className="bi bi-play-fill text-3xl text-white ml-1"></i>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-primary-50 text-primary-900 text-sm font-bold rounded-lg">{recipe.cuisine}</span>
                <span className="flex items-center gap-1 text-sm text-secondary-500"><i className="bi bi-clock"></i> {recipe.time}</span>
                <span className="flex items-center gap-1 text-sm text-secondary-500"><i className="bi bi-fire"></i> {recipe.calories}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-secondary-900">{recipe.title}</h1>
            </div>
            <button className="px-6 py-3 bg-primary-900 text-white rounded-xl font-medium hover:bg-primary-800 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary-900/20">
              <i className="bi bi-bookmark"></i> Save Recipe
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="md:col-span-1 bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-secondary-900 mb-4 flex items-center gap-2">
                <i className="bi bi-magic text-primary-500"></i> AI Substitutes
              </h3>
              <ul className="space-y-4">
                <li className="flex flex-col gap-1">
                  <span className="text-sm text-secondary-500 line-through">Chicken Breast</span>
                  <span className="text-sm font-medium text-green-600 flex items-center gap-1"><i className="bi bi-arrow-return-right"></i> Extra Firm Tofu</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-sm text-secondary-500 line-through">Heavy Cream</span>
                  <span className="text-sm font-medium text-green-600 flex items-center gap-1"><i className="bi bi-arrow-return-right"></i> Coconut Milk</span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-bold text-secondary-900 mb-4 text-xl">Instructions</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-900 flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <p className="text-secondary-500 pt-1">Prepare the substitute ingredients. Press the tofu to remove excess water and cut into bite-sized cubes.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-900 flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <p className="text-secondary-500 pt-1">Heat olive oil in a large pan over medium heat. Add the tofu and cook until golden brown on all sides.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
