import React from 'react';

const LatestPosts = () => {
  return (
    <>
    
      <img src="/whiteWave2.png" className='w-full h-60' alt="" />
      
    <section id="latest" className="bg-[#f2f2f2] pt-2 pb-10">
      <div className="container dmSans mx-auto px-4 sm:px-10">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl text-gray-800 poppins mr-6 font-bold animate__animated animate__fadeIn">Latest Posts</h2>
          {/* <div className="flex-1 hr">
          <hr className='bg-red-500 max-w-full w-full h-1' />
          </div> */}
          <div className="gap-2 px-6 hidden md:flex">
            <button id="prev-btn" className="p-2 rounded-full border border-neutral-900 hover:bg-neutral-300">
              <svg className="w-6 h-6" fill="black" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button id="next-btn" className="p-2 rounded-full border border-neutral-900 hover:bg-neutral-300">
              <svg className="w-6 h-6" fill="black" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="overflow-x-scroll scrollbar-hide py-6 xl:overflow-hidden ">
          <div id="posts-container" className="flex gap-6 transition-transform duration-300">
            {/* Post 1 */}
            <div className="min-w-[300px] group hover:cursor-pointer md:min-w-[350px] bg-white transition-all duration-300 rounded-lg overflow-hidden shadow-lg animate__animated animate__fadeInRight">
              <div className="bg-neutral-200 h-48 group-hover:scale-105 transition-all duration-300 rounded-t-lg flex items-center  justify-center">
                <span className="text-neutral-900">Post Image</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-900 text-xs Lexend font-medium px-2.5 py-0.5 rounded">New</span>
                  <span className="text-gray-600 text-sm">2 hours ago</span>
                </div>
                <h3 className="text-xl font-bold h-auto text-slate-800 group-hover:text-sky-500 transition-all duration-300 mb-2 poppins">The Rise of No-Code Development</h3>
                <p className="text-gray-700 h-[72px] mb-4">Exploring how no-code platforms are transforming the tech industry...</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-neutral-800 rounded-full"></div>
                    <span className="ml-2 text-neutral-900 text-sm">Alex Turner</span>
                  </div>
                  <span className="text-sm text-gray-700">8 min read</span>
                </div>
              </div>
            </div>

            {/* Post 2 */}
            <div className="min-w-[300px] group hover:cursor-pointer md:min-w-[350px] bg-white overflow-hidden transition-all duration-300 rounded-lg shadow-lg animate__animated animate__fadeInRight">
              <div className="bg-neutral-200 group-hover:scale-105 overflow-hidden transition-all duration-300 h-48 rounded-t-lg flex items-center justify-center">
                <span className="text-neutral-900">Post Image</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-100 text-green-900 text-xs font-medium px-2.5 py-0.5 rounded">Trending</span>
                  <span className="text-gray-600 text-sm">5 hours ago</span>
                </div>
                <h3 className="text-xl font-bold h-auto text-slate-800 group-hover:text-green-500 transition-all duration-300 poppins mb-2">Sustainable Living Guide</h3>
                <p className="text-gray-700 h-[72px] mb-4">Simple steps towards a more eco-friendly lifestyle...</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-neutral-800 rounded-full"></div>
                    <span className="ml-2 text-gray-800 text-sm">Emma Green</span>
                  </div>
                  <span className="text-sm text-gray-700">6 min read</span>
                </div>
              </div>
            </div>

            {/* Post 3 */}
            <div className="min-w-[300px] md:min-w-[350px] bg-white group hover:cursor-pointer overflow-hidden  rounded-lg shadow-lg animate__animated animate__fadeInRight">
              <div className="bg-neutral-200 group-hover:scale-105 transition-all duration-300 h-48 rounded-t-lg flex items-center justify-center">
                <span className="text-neutral-900">Post Image</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-purple-100 text-purple-900 text-xs font-medium px-2.5 py-0.5 rounded">Featured</span>
                  <span className="text-gray-600 text-sm">12 hours ago</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 h-auto group-hover:text-purple-500 transition-all duration-300 poppins mb-2">Future of Remote Work</h3>
                <p className="text-gray-700 h-[72px] mb-4">How companies are adapting to the new normal...</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-neutral-800 rounded-full"></div>
                    <span className="ml-2 text-gray-800 text-sm">David Chen</span>
                  </div>
                  <span className="text-sm text-gray-700">10 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default LatestPosts;