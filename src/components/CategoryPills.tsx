import React from 'react';
import { categories } from '../data/mockData';

export const CategoryPills: React.FC = () => {
  return (
    <section id="categories-section" className="py-6 px-4 sm:px-6 max-w-6xl mx-auto overflow-x-auto hide-scrollbar">
      <div className="flex items-center gap-3 min-w-max">
        {categories.map((cat, index) => (
          <button 
            key={cat.id}
            id={`category-${cat.id}`}
            className={`px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium transition-all ${
              index === 0 
                ? 'bg-secondary-900 text-white shadow-md' 
                : 'bg-white text-secondary-500 border border-gray-200 hover:border-primary-500 hover:text-primary-900'
            }`}
          >
            <i className={`bi ${cat.icon}`}></i>
            {cat.name}
          </button>
        ))}
      </div>
    </section>
  );
};
