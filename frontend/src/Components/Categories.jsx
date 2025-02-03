import React from 'react';

const Categories = () => {
  return (
    <section id="categories" className="bg-neutral-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate__animated animate__fadeIn">Explore Categories</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Technology */}
          <div className="bg-neutral-800  rounded-lg p-6 text-center transition-transform duration-300 hover:-translate-y-2 animate__animated animate__fadeInUp">
            <div className="bg-purple-600 group-hover:bg-purple-300  w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-md sm:text-xl font-semibold mb-2">Technology</h3>
            <p className="text-gray-400 text-xs sm:text-sm">150+ articles</p>
          </div>

          {/* Lifestyle */}
          <div className="bg-neutral-800 rounded-lg p-6 text-center transition-transform duration-300 hover:-translate-y-2 animate__animated animate__fadeInUp" style={{ animationDelay: '0.1s' }}>
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 className="text-md sm:text-xl font-semibold mb-2">Lifestyle</h3>
            <p className="text-gray-400 text-xs sm:text-sm">120+ articles</p>
          </div>

          {/* Business */}
          <div className="bg-neutral-800 rounded-lg p-6 text-center transition-transform duration-300 hover:-translate-y-2 animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-md sm:text-xl font-semibold mb-2">Business</h3>
            <p className="text-gray-400 text-xs sm:text-sm">200+ articles</p>
          </div>

          {/* Culture */}
          <div className="bg-neutral-800 rounded-lg p-6 text-center transition-transform duration-300 hover:-translate-y-2 animate__animated animate__fadeInUp" style={{ animationDelay: '0.3s' }}>
            <div className="bg-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
              </svg>
            </div>
            <h3 className="text-md sm:text-xl font-semibold mb-2">Culture</h3>
            <p className="text-gray-400 text-xs sm:text-sm">90+ articles</p>
          </div>

          {/* Science */}
          <div className="bg-neutral-800 rounded-lg p-6 text-center transition-transform duration-300 hover:-translate-y-2 animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
            </div>
            <h3 className="text-md sm:text-xl font-semibold mb-2">Science</h3>
            <p className="text-gray-400 text-xs sm:text-sm">180+ articles</p>
          </div>

          {/* Health */}
          <div className="bg-neutral-800 rounded-lg p-6 text-center transition-transform duration-300 hover:-translate-y-2 animate__animated animate__fadeInUp" style={{ animationDelay: '0.5s' }}>
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 className="text-md sm:text-xl font-semibold mb-2">Health</h3>
            <p className="text-gray-400 text-xs sm:text-sm">140+ articles</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-block bg-white text-neutral-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">View All Categories</a>
        </div>
      </div>
    </section>
  );
};

export default Categories;