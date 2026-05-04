import React from 'react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="main-footer" className="w-full pt-16 pb-8 mt-12 bg-secondary-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center text-white">
                <i className="bi bi-egg-fried text-xl"></i>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight">
                Culinary<span className="text-primary-500">AI</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Making the world's cuisines accessible, personalized, and enjoyable for everyone through AI.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Platform</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><button onClick={() => onNavigate('home')} className="hover:text-primary-500 transition-colors">Discover Recipes</button></li>
              <li><button onClick={() => onNavigate('gallery')} className="hover:text-primary-500 transition-colors">Photo Gallery</button></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Live Classes</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Premium Bundles</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Careers</a></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-primary-500 transition-colors">Contact</button></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3"><i className="bi bi-envelope text-primary-500"></i> hello@culinaryai.com</li>
              <li className="flex items-center gap-3"><i className="bi bi-telephone text-primary-500"></i> +1 (555) 000-0000</li>
              <li className="flex items-start gap-3"><i className="bi bi-geo-alt text-primary-500 mt-1"></i> 100 Culinary Ave,<br/>San Francisco, CA</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© 2025 CulinaryAI. All rights reserved.</p>
          <p className="text-center text-xs text-gray-500">
            Powered by <a href="https://websparks.ai" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline font-medium">WebSparks AI</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
