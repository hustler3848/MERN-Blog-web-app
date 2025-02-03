import React from "react";

const ProfileSection = () => {
  return (
    <section id="profile" className="w-full min-h-screen bg-[#E5E7EB]">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded border border-gray-200 overflow-hidden">
          {/* Profile Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <img
                src="https://avatar.iran.liara.run/public"
                alt="Profile"
                className="w-24 h-24 rounded-full transition-opacity duration-300 opacity-100"
                loading="lazy"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
                <p className="text-gray-600">Web Developer & Technical Writer</p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2">
                  <span className="text-sm text-gray-500">Joined March 2023</span>
                  <span className="text-sm text-gray-500 hidden sm:inline">•</span>
                  <span className="text-sm text-gray-500">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 border-b border-gray-200">
            <StatItem count="24" label="Posts" />
            <StatItem count="1.2k" label="Followers" border />
            <StatItem count="348" label="Following" />
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button className="px-6 py-3 text-blue-600 border-b-2 border-blue-600">Posts</button>
              <button className="px-6 py-3 text-gray-600 hover:text-gray-800">About</button>
              <button className="px-6 py-3 text-gray-600 hover:text-gray-800">Following</button>
            </nav>
          </div>

          {/* Posts Grid */}
          <div className="p-6">
            <div className="grid gap-6">
              <PostCard
                title="Getting Started with React Hooks"
                timeAgo="2 days ago"
                description="An introduction to React Hooks and how they can simplify your React components..."
                likes="24"
                comments="8"
                tags={["react", "javascript"]}
              />
              <PostCard
                title="CSS Grid Layout Made Simple"
                timeAgo="5 days ago"
                description="A comprehensive guide to using CSS Grid for modern web layouts..."
                likes="32"
                comments="12"
                tags={["css", "webdev"]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Stat Component
const StatItem = ({ count, label, border }) => {
  return (
    <div className={`p-6 text-center ${border ? "border-l border-r border-gray-200" : ""}`}>
      <div className="text-2xl font-bold text-gray-800">{count}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};

// PostCard Component
const PostCard = ({ title, timeAgo, description, likes, comments, tags }) => {
  return (
    <div className="border border-gray-200 rounded p-4 hover:border-gray-300 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <span className="text-sm text-gray-500">{timeAgo}</span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <span className="flex items-center">
            ❤️ {likes}
          </span>
          <span className="flex items-center">
            💬 {comments}
          </span>
        </div>
        <div className="flex space-x-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
