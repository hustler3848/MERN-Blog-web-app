import React from 'react';

const Popular = () => {
  return (
    <section id="popular" className="bg-neutral-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate__animated animate__fadeIn">Popular This Week</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Popular Post */}
          <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg animate__animated animate__fadeInLeft">
            <div className="bg-neutral-700 h-64 flex items-center justify-center">
              <span className="text-neutral-400">Featured Image</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">Trending</span>
                <span className="text-gray-400">15k+ reads</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">The Impact of Artificial Intelligence on Modern Journalism</h3>
              <p className="text-gray-400 mb-4">An in-depth analysis of how AI is reshaping the way we consume and create news in the digital age...</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-neutral-600 rounded-full"></div>
                  <div className="ml-3">
                    <p className="font-semibold">Robert Maxwell</p>
                    <p className="text-sm text-gray-400">Tech Editor</p>
                  </div>
                </div>
                <span className="text-sm text-gray-400">12 min read</span>
              </div>
            </div>
          </div>

          {/* Popular Posts List */}
          <div className="space-y-6 animate__animated animate__fadeInRight">
            {/* Popular Post 1 */}
            <div className="bg-neutral-800 rounded-lg p-4 flex gap-4 hover:bg-neutral-700 transition-colors duration-300">
              <span className="text-4xl font-bold text-neutral-600">01</span>
              <div className="flex-1">
                <span className="text-purple-400 text-sm">Technology</span>
                <h3 className="font-bold mb-2">Web3 and the Future of Internet Privacy</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">8k+ reads</span>
                  <span className="text-sm text-gray-400">8 min read</span>
                </div>
              </div>
            </div>

            {/* Popular Post 2 */}
            <div className="bg-neutral-800 rounded-lg p-4 flex gap-4 hover:bg-neutral-700 transition-colors duration-300">
              <span className="text-4xl font-bold text-neutral-600">02</span>
              <div className="flex-1">
                <span className="text-green-400 text-sm">Productivity</span>
                <h3 className="font-bold mb-2">The Science of Deep Work in a Distracted World</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">6k+ reads</span>
                  <span className="text-sm text-gray-400">6 min read</span>
                </div>
              </div>
            </div>

            {/* Popular Post 3 */}
            <div className="bg-neutral-800 rounded-lg p-4 flex gap-4 hover:bg-neutral-700 transition-colors duration-300">
              <span className="text-4xl font-bold text-neutral-600">03</span>
              <div className="flex-1">
                <span className="text-blue-400 text-sm">Business</span>
                <h3 className="font-bold mb-2">Startup Funding in the Post-Pandemic Era</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">5k+ reads</span>
                  <span className="text-sm text-gray-400">10 min read</span>
                </div>
              </div>
            </div>

            {/* Popular Post 4 */}
            <div className="bg-neutral-800 rounded-lg p-4 flex gap-4 hover:bg-neutral-700 transition-colors duration-300">
              <span className="text-4xl font-bold text-neutral-600">04</span>
              <div className="flex-1">
                <span className="text-yellow-400 text-sm">Health</span>
                <h3 className="font-bold mb-2">Mental Wellness in the Digital Age</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">4k+ reads</span>
                  <span className="text-sm text-gray-400">7 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;