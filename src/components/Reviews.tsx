import React from 'react';
import { reviews } from '../data/mockData';

export const Reviews: React.FC = () => {
  return (
    <section className="py-16 bg-primary-50/50 border-y border-primary-100/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-900 mb-4">Loved by Home Chefs</h2>
          <p className="text-secondary-500 max-w-2xl mx-auto">Join thousands of food lovers who have transformed their cooking experience with our personalized AI recommendations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map(review => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex text-accent-500 mb-4 text-sm">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p className="text-secondary-800 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={review.avatar} alt={review.name} crossOrigin="anonymous" className="w-12 h-12 rounded-full object-cover border-2 border-primary-100" />
                <div>
                  <h4 className="font-bold text-secondary-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-secondary-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
