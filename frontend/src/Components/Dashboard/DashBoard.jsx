import React from 'react'
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

function DashBoard() {
  return (
    <section id="dashboard" className="w-full min-h-screen overflow-y-scroll scrollbar-hide  p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-stone-100">Dashboard</h1>
          <p className="text-gray-600 dark:text-stone-200">Welcome back to your writing space</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Stats */}
          <div className="bg-slate-50 shadow-sm dark:bg-slate-900  shadow-gray-200 p-6 rounded border dark:border-opacity-0 border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-stone-100 mb-4">Published Posts</h3>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-gray-800 dark:text-stone-200">0</span>
              <span className="text-green-500 text-sm flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                +0 this week
              </span>
            </div>
          </div>

          <div className="bg-slate-50 shadow-sm dark:bg-slate-900  shadow-gray-200 p-6 rounded border dark:border-opacity-0 border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-stone-100 mb-4">Total Views</h3>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-gray-800 dark:text-stone-200">0</span>
              <span className="text-green-500 text-sm flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                +0% this month
              </span>
            </div>
          </div>

          <div className="bg-slate-50 shadow-sm dark:bg-slate-900  shadow-gray-200 p-6 rounded border dark:border-opacity-0 border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-stone-100 mb-4">Drafts</h3>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-gray-800 dark:text-stone-200">0</span>
              <button className="text-blue-600 text-sm hover:text-blue-700">View all</button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 dark:text-stone-100">Recent Posts</h2>
          <div className="bg-white rounded border hidden border-gray-200 dark:border-gray-800">
            <div className="divide-y divide-gray-200 dark:divide-gray-800 dark:bg-slate-950">
              <div className="p-4 dark:bg-slate-950 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-stone-100">Getting Started with React</h3>
                    <p className="text-gray-600 text-sm mt-1 dark:text-stone-200">Published 2 days ago • 5 min read</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-500 hover:text-black">
                    <FiEdit className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-black">
                      <RiDeleteBinLine className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-4 dark:bg-slate-950 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-stone-100">CSS Grid Layout Guide</h3>
                    <p className="text-gray-600 text-sm mt-1 dark:text-stone-200">Published 5 days ago • 8 min read</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-500 hover:text-black">
                    <FiEdit className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-black">
                    <RiDeleteBinLine className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p>No Recent Posts.</p>
        </div>
{/* 
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Quick Draft</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Open Editor</button>
          </div>
          <div className="bg-white rounded border border-gray-200 p-4">
            <input type="text" placeholder="Post title" className="w-full mb-4 p-2 border border-gray-200 rounded focus:outline-none focus:border-blue-500" />
            <textarea placeholder="Start writing..." rows="4" className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:border-blue-500"></textarea>
            <div className="mt-4 flex justify-end">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">Save Draft</button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default DashBoard