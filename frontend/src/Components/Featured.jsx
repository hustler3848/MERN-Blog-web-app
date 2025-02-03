import React from "react";

const Featured = () => {
  return (
    <>
      <img
        src="/wave.png"
        className="w-screen object-contain h-auto "
        alt="wave"
      />

      <section id="featured" className="bg-[#1F1327] dmSans min-h-screen py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-white heroText font-bold text-center mb-16 animate__animated animate__fadeIn">
            Featured Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Article 1 */}
            <div className="bg-neutral-900 shadow-lg shadow-teal-900/50 hover:shadow-teal-600/50 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 animate__animated animate__fadeInUp">
              <div className="bg-gray-900 h-48 flex items-center justify-center">
                <span className="text-neutral-400">Featured Image</span>
              </div>
              <div className="p-6">
                <span className="text-purple-500 font-semibold Lexend text-sm">
                  Technology
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3 poppins text-gray-300">
                  The Future of AI in Content Creation
                </h3>
                <p className="text-gray-400 mb-4">
                  Exploring how artificial intelligence is revolutionizing the
                  way we create and consume content...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-neutral-400 rounded-full"></div>
                    <span className="ml-2 text-sm dmSans text-gray-200">
                      John Doe
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">5 min read</span>
                </div>
              </div>
            </div>

            {/* Featured Article 2 */}
            <div className="bg-neutral-900 shadow-lg shadow-green-900/50 hover:shadow-green-600/50 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-gray-900 h-48 flex items-center justify-center">
                <span className="text-neutral-400">Featured Image</span>
              </div>
              <div className="p-6">
                <span className="text-green-400 font-semibold text-sm">
                  Lifestyle
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3 text-gray-300">
                  Mindful Living in a Digital Age
                </h3>
                <p className="text-gray-400 mb-4">
                  Discovering balance and wellness in our increasingly connected
                  world...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-neutral-600 rounded-full"></div>
                    <span className="ml-2 text-sm text-gray-200">
                      Jane Smith
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">4 min read</span>
                </div>
              </div>
            </div>

            {/* Featured Article 3 */}
            <div className="bg-neutral-900 shadow-lg shadow-blue-900/50 hover:shadow-blue-600/50 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="bg-gray-900 h-48 flex items-center justify-center">
                <span className="text-neutral-400">Featured Image</span>
              </div>
              <div className="p-6">
                <span className="text-blue-400 font-semibold text-sm">
                  Business
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3 text-gray-300">
                  Remote Work Revolution
                </h3>
                <p className="text-gray-400 mb-4">
                  How companies are adapting to the new normal of distributed
                  teams...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-neutral-600 rounded-full"></div>
                    <span className="ml-2 text-sm text-gray-200">
                      Mike Johnson
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">6 min read</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <a
              href="#"
              className="inline-block bg-neutral-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-neutral-800 transition-colors duration-300"
            >
              View All Featured
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
