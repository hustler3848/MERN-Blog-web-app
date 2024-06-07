/* eslint-disable no-unused-vars */
import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa"
import { Link } from "react-router-dom"

function Footer() {
  return (
<footer className="bg-gray-900 text-gray-400 py-16 md:py-24 lg:py-32">
  <div className="container min-w-screen px-4 md:px-6">
    <div className="w-full grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 gap-16">
      <div className="flex flex-col items-start">
        <a className="inline-flex items-center mb-6" href="#" rel="ugc">
          
        <Link
        to="/"
        className=" self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="text-center px-2 mx-1 rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
          Blog{" "}
        </span>
        App
      </Link>
        </a>
        <p className="text-sm leading-relaxed">
          Welcome to our blogging site, where we share stories, insights, and inspiration.
        </p>
        <div className="flex items-center space-x-4 mt-6">
          <a className="text-gray-400 hover:text-gray-300" href="#" rel="ugc">
            <FaFacebook />
          </a>
          <a className="text-gray-400 hover:text-gray-300" href="#" rel="ugc">
          <FaTwitter />
          </a>
          <a className="text-gray-400 hover:text-gray-300" href="#" rel="ugc">
          <FaInstagram />
          </a>
          <a className="text-gray-400 hover:text-gray-300" href="#" rel="ugc">
          <FaYoutube />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h4 className="text-gray-200 font-semibold mb-4">Quick Links</h4>
          <nav className="space-y-2 flex flex-col">
            <a className="hover:text-gray-300" href="#" rel="ugc">
              Home
            </a>
            <a className="hover:text-gray-300" href="#" rel="ugc">
              About
            </a>
            <a className="hover:text-gray-300" href="#" rel="ugc">
              Blog
            </a>
            <a className="hover:text-gray-300" href="#" rel="ugc">
              Contact
            </a>
          </nav>
        </div>
        <div>
          <h4 className="text-gray-200 font-semibold mb-4">Categories</h4>
          <nav className="space-y-2 flex flex-col">
            <a className="hover:text-gray-300" href="#" rel="ugc">
              Technology
            </a>
            <a className="hover:text-gray-300" href="#" rel="ugc">
              Lifestyle
            </a>
            <a className="hover:text-gray-300" href="#" rel="ugc">
              Travel
            </a>
            <a className="hover:text-gray-300" href="#" rel="ugc">
              Business
            </a>
          </nav>
        </div>
      </div>
      <div>
        <h4 className="text-gray-200 font-semibold mb-4">Newsletter</h4>
        <p className="text-sm leading-relaxed">
          Subscribe to our newsletter to stay up-to-date with the latest news and articles.
        </p>
        <form className="mt-6 flex">
          <input
            className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 bg-gray-800 border-none focus:ring-0 focus:border-none"
            placeholder="Enter your email"
            type="email"
          />
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ml-4"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer