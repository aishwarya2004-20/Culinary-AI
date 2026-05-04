import React from 'react';
import { galleryImages } from '../data/mockData';

export const Gallery: React.FC = () => {
  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 max-w-6xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary-900 mb-4">Culinary Inspiration</h1>
        <p className="text-secondary-500 max-w-2xl mx-auto text-lg">A visual journey through the world's most vibrant and delicious cuisines, crafted by our community.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {galleryImages.map((img, idx) => (
          <div key={idx} className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-100 cursor-pointer">
            <img 
              src={img} 
              alt={`Gallery image ${idx + 1}`} 
              crossOrigin="anonymous"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div className="text-white">
                <div className="flex items-center gap-2 mb-1">
                  <i className="bi bi-heart-fill text-primary-500"></i>
                  <span className="font-medium text-sm">{(Math.random() * 500 + 100).toFixed(0)} likes</span>
                </div>
                <p className="text-sm text-gray-200 line-clamp-1">Community Creation</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button className="px-8 py-3 rounded-xl border-2 border-secondary-900 text-secondary-900 font-bold hover:bg-secondary-900 hover:text-white transition-colors">
          Load More
        </button>
      </div>
    </div>
  );
};
