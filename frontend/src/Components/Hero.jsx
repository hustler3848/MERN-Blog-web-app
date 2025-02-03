import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="bg-neutral-900  heroSection text-white sm:pt-24 lg:px-10 min-h-[87vh] sm:min-h-[90vh]">
      <div className="container  mx-auto px-4 sm:px-8 py-10">
        <div className="flex flex-col lg:flex-col items-center justify-center gap-16">
          <div className="lg:w-full items-center flex flex-col justify-center animate__animated animate__fadeInLeft">
            <h1 className="text-4xl sm:text-6xl kanit heroText font-medium text-gray-300 mt-12 md:mt-0 mb-3 sm:mb-6">Di<span className=''>s</span>cov<span className=''>e</span>r <span className='text-green-500 italic'> <span className=''>S</span>tories</span>  That Matter</h1>
            <p className="text-sm sm:text-lg text-gray-300 heroPrimaryText font-thin mb-8 text-center">
              Explore thought-provoking articles, stay informed, and connect with writers who inspire. Your daily dose of meaningful content starts here.
            </p>
            <div className="flex gap-4">
              <a href="#latest" className="-inset-1 bg-gradient-to-tr from-green-600 to-teal-600 text-white text-xs sm:text-sm  font-bold shadow-lg shadow-indigo-700/50 px-6 sm:px-8  py-3 rounded-full hover:shadow-teal-600/100 hover:ring transition-all duration-200">
                Start Reading
              </a>
              <a href="#categories" className="border-teal-500 border text-xs sm:text-sm  px-6 sm:px-8  py-3 rounded-full font-semibold hover:bg-gradient-to-tr hover:from-green-600 hover:to-teal-600 hover:shadow-teal-600/50 hover:ring transition-all duration-200">
                Browse Topics
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 animate__animated animate__fadeInRight">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-600 to-teal-500 rounded-lg blur opacity-35"></div>
              <div className="relative bg-neutral-800 p-8 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-700 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">1000+</h3>
                    <p className="text-sm text-gray-300">Articles</p>
                  </div>
                  <div className="bg-neutral-700 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">500+</h3>
                    <p className="text-sm text-gray-300">Writers</p>
                  </div>
                  <div className="bg-neutral-700 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">50+</h3>
                    <p className="text-sm text-gray-300">Categories</p>
                  </div>
                  <div className="bg-neutral-700 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">100K+</h3>
                    <p className="text-sm text-gray-300">Readers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Hero;