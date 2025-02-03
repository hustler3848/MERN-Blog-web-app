import React from 'react';

const Authors = () => {
  return (
    <section id="authors" className="bg-neutral-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate__animated animate__fadeIn">Meet Our Top Authors</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Author 1 */}
          <div className="bg-neutral-800 rounded-xl p-6 text-center hover:transform hover:-translate-y-2 transition-transform duration-300 animate__animated animate__fadeInUp">
            <div className="w-24 h-24 bg-neutral-700 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
            <p className="text-purple-400 text-sm mb-3">Tech Editor</p>
            <p className="text-gray-400 text-sm mb-4">Specialist in AI and emerging technologies</p>
            <div className="flex justify-center gap-4 mb-4">
              <span className="text-gray-400 text-sm">150+ articles</span>
              <span className="text-gray-400 text-sm">50k followers</span>
            </div>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"></path></svg>
              </a>
            </div>
          </div>

          {/* Author 2 */}
          <div className="bg-neutral-800 rounded-xl p-6 text-center hover:transform hover:-translate-y-2 transition-transform duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="w-24 h-24 bg-neutral-700 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-bold mb-2">David Chen</h3>
            <p className="text-green-400 text-sm mb-3">Business Writer</p>
            <p className="text-gray-400 text-sm mb-4">Expert in startups and entrepreneurship</p>
            <div className="flex justify-center gap-4 mb-4">
              <span className="text-gray-400 text-sm">120+ articles</span>
              <span className="text-gray-400 text-sm">45k followers</span>
            </div>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"></path></svg>
              </a>
            </div>
          </div>

          {/* Author 3 */}
          <div className="bg-neutral-800 rounded-xl p-6 text-center hover:transform hover:-translate-y-2 transition-transform duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="w-24 h-24 bg-neutral-700 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-bold mb-2">Emma Wilson</h3>
            <p className="text-blue-400 text-sm mb-3">Lifestyle Editor</p>
            <p className="text-gray-400 text-sm mb-4">Wellness and productivity specialist</p>
            <div className="flex justify-center gap-4 mb-4">
              <span className="text-gray-400 text-sm">200+ articles</span>
              <span className="text-gray-400 text-sm">60k followers</span>
            </div>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"></path></svg>
              </a>
            </div>
          </div>

          {/* Author 4 */}
          <div className="bg-neutral-800 rounded-xl p-6 text-center hover:transform hover:-translate-y-2 transition-transform duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="w-24 h-24 bg-neutral-700 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-bold mb-2">Michael Ross</h3>
            <p className="text-pink-400 text-sm mb-3">Culture Writer</p>
            <p className="text-gray-400 text-sm mb-4">Arts and entertainment expert</p>
            <div className="flex justify-center gap-4 mb-4">
              <span className="text-gray-400 text-sm">180+ articles</span>
              <span className="text-gray-400 text-sm">40k followers</span>
            </div>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"></path></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-block bg-white text-neutral-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">View All Authors</a>
        </div>
      </div>
    </section>
  );
};

export default Authors;