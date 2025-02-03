/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import { Link } from "react-router-dom";
import { FaEdit,  } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { IoDocuments } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { SiSimpleanalytics } from "react-icons/si";
import DashPosts from "./Components/Dashboard/DashPosts";
import { RiDraftLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import DashProfile from "./Components/Dashboard/DashProfile";
import { useSelector } from "react-redux";
import Analytics from "./Components/Dashboard/Analytics";
import Settings from "./Components/Dashboard/Settings";
import Drafts from "./Components/Dashboard/Drafts";
import DashBoard from "./Components/Dashboard/DashBoard";
import CreatePost from "./Components/Posts/CreatePost";
// import Profile from "./Components/Dashboard/Profile";

function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const { currentUserOfBloggingApp } = useSelector(
    (state) => state.userOfBloggingApp
  );

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div>
      <Header />
      <div className="grid min-h-screen w-full overflow-y-hidden mt-16 lg:grid-cols-[250px_1fr]">
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <div className="flex w-full h-full max-h-[90vh] flex-col gap-2">
            <div className="flex-1 fixed w-[250px] py-2">
              <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                  to="http://localhost:5173/dashboard?tab=dashboard"
                  className={`justify-between whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none hover:bg-neutral-100 dark:hover:bg-gray-600 h-10 flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                    tab === "dashboard"
                      ? "bg-neutral-300 dark:bg-gray-800 hover:bg-neutral-300 dark:hover:bg-gray-800"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <RxDashboard />{" "}
                    <p className="font-semibold text-md">Dashboard</p>
                  </div>
                </Link>
                <Link
                  to="http://localhost:5173/dashboard?tab=create-post"
                  className={`justify-start whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-neutral-100 dark:hover:bg-gray-600 hover:text-accent-foreground h-10 flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                    tab === "create-post"
                      ? "bg-neutral-300 dark:bg-gray-800 hover:bg-neutral-300 dark:hover:bg-gray-800"
                      : ""
                  }`}
                >
                  <FaEdit></FaEdit> CreatePost
                </Link>
                <Link
                  to="http://localhost:5173/dashboard?tab=posts"
                  className={`justify-start whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-neutral-100 dark:hover:bg-gray-600 hover:text-accent-foreground h-10 flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                    tab === "posts"
                      ? "bg-neutral-300 dark:bg-gray-800 hover:bg-neutral-300 dark:hover:bg-gray-800"
                      : ""
                  }`}
                >
                  <IoDocuments></IoDocuments> Posts
                </Link>
                <Link
                  to="http://localhost:5173/dashboard?tab=Drafts"
                  className={`justify-start whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-neutral-100 dark:hover:bg-gray-600 hover:text-accent-foreground h-10 flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                    tab === "Drafts"
                      ? "bg-neutral-300 dark:bg-gray-800 hover:bg-neutral-300 dark:hover:bg-gray-800"
                      : ""
                  }`}
                >
                  <RiDraftLine /> Drafts
                </Link>
                <Link
                  to="http://localhost:5173/dashboard?tab=profile"
                  className={`justify-between whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none hover:bg-neutral-100 dark:hover:bg-gray-600 h-10 flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                    tab === "profile"
                      ? "bg-neutral-300 dark:bg-gray-800 hover:bg-neutral-300 dark:hover:bg-gray-800"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <FaUser></FaUser>{" "}
                    <p className="font-semibold text-md">Profile</p>
                  </div>
                  <div className="Badge px-3 py-1 text-xs border border-black dark:border-white rounded-full dark:bg-slate-950">
                    {currentUserOfBloggingApp.isAdmin ? "Admin" : "User"}
                  </div>
                </Link>
                <Link
                  to="http://localhost:5173/dashboard?tab=analytics"
                  className={`justify-start whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-neutral-100 dark:hover:bg-gray-600 hover:text-accent-foreground h-10 flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                    tab === "analytics"
                      ? "bg-neutral-300 dark:bg-gray-800 hover:bg-neutral-300 dark:hover:bg-gray-800"
                      : ""
                  }`}
                >
                  <SiSimpleanalytics /> Analytics
                </Link>
                <Link
                  to="http://localhost:5173/dashboard?tab=settings"
                  className={`justify-start whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-neutral-100 dark:hover:bg-gray-600 hover:text-accent-foreground h-10 flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                    tab === "settings"
                      ? "bg-neutral-300 dark:bg-gray-800 hover:bg-neutral-300 dark:hover:bg-gray-800"
                      : ""
                  }`}
                >
                  <GoGear /> Settings
                </Link>

                <div className="py-4 border-t fixed bottom-0 border-gray-200">
                  <div className="flex items-center">
                    <img
                      src={currentUserOfBloggingApp.profilePic}
                      alt="User"
                      className="w-8 h-8 object-cover rounded-full"
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-700">{currentUserOfBloggingApp.username}</p>
                      <p className="text-xs text-gray-500">{currentUserOfBloggingApp.email}</p>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* <DashProfile /> */}
        {tab === "profile" && <DashProfile />}
        {/* <Posts /> */}
        {tab === "posts" && <DashPosts />}
        {/* <Analytics /> */}
        {tab === "analytics" && <Analytics />}
        {/* <Settings /> */}
        {tab === "settings" && <Settings />}
        {/* Drafts */}
        {tab === "Drafts" && <Drafts />}
        {/* DashBoard */}
        {tab === "dashboard" && <DashBoard />}
        {/* Create Post */}
        {tab === "create-post" && <CreatePost />}
      </div>
    </div>
  );
}

export default Dashboard;
