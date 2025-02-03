import React from 'react';

const Newsletter = () => {
  return (
    <section id="newsletter" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-transparent rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-emerald-500 opacity-90"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl poppins font-bold text-white mb-4 animate__animated animate__fadeIn">Stay in the <span className='text-zinc-100 inter italic'>Loop</span> </h2>
              <p className="text-gray-200 text-md sm:text-lg Lexend mb-8 animate__animated animate__fadeIn">Get the latest articles, insights, and updates delivered directly to your inbox.</p>
            </div>

            <form id="newsletter-form" className="max-w-xl mx-auto animate__animated animate__fadeInUp">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="w-full px-6 py-4 text-sm sm:text-md rounded-full bg-white text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-sky-600 to-teal-600 shadow-lg shadow-teal-500/50 text-sm sm:text-md text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity duration-300"
                >
                  Subscribe
                </button>
              </div>
              
              <div className="text-center mt-6">
                <p className="text-sm text-gray-200">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </form>

            <div className="flex justify-center gap-8 mt-12 text-white">
              <div className="text-center">
                <p className="text-xl sm:text-2xl Lexend font-bold">10k+</p>
                <p className="text-gray-200 text-sm inter sm:text-md">Subscribers</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl Lexend font-bold">Weekly</p>
                <p className="text-gray-200 text-sm inter sm:text-md">Newsletter</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl Lexend font-bold">Free</p>
                <p className="text-gray-200 text-sm  inter sm:text-md">Forever</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;