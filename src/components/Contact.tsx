import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 max-w-6xl mx-auto animate-fade-in">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
        
        {/* Contact Info Side */}
        <div className="md:w-2/5 bg-secondary-900 text-white p-10 md:p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-900 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-serif font-bold mb-2">Get in Touch</h2>
            <p className="text-gray-400 mb-12">We'd love to hear from you. Our friendly team is always here to chat.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-envelope text-primary-500"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Chat to us</h4>
                  <p className="text-sm text-gray-400 mb-1">Our friendly team is here to help.</p>
                  <a href="mailto:hello@culinaryai.com" className="text-sm font-medium hover:text-primary-500 transition-colors">hello@culinaryai.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-geo-alt text-primary-500"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Office</h4>
                  <p className="text-sm text-gray-400 mb-1">Come say hello at our HQ.</p>
                  <p className="text-sm font-medium">100 Culinary Ave, Food District<br/>San Francisco, CA 94103</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-telephone text-primary-500"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-sm text-gray-400 mb-1">Mon-Fri from 8am to 5pm.</p>
                  <a href="tel:+15550000000" className="text-sm font-medium hover:text-primary-500 transition-colors">+1 (555) 000-0000</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 mt-12 relative z-10">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-colors"><i className="bi bi-twitter-x"></i></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-colors"><i className="bi bi-instagram"></i></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-colors"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>

        {/* Form Side */}
        <div className="md:w-3/5 p-10 md:p-12">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-secondary-900 mb-2">First name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="First name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary-900 mb-2">Last name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="Last name" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-secondary-900 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="you@company.com" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-secondary-900 mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none" placeholder="Leave us a message..."></textarea>
            </div>
            
            <button type="submit" className="w-full py-4 rounded-xl bg-primary-900 text-white font-bold hover:bg-primary-800 transition-colors shadow-lg shadow-primary-900/20">
              Send Message
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
};
