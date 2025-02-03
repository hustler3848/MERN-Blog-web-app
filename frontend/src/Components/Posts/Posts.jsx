import React, { useState, useEffect } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineComment, AiOutlineHeart } from "react-icons/ai";
import { Alert, Spinner } from "flowbite-react";
import Footer from "../Footer";
import VerticalAd from "./VerticalAd";
import RecentPostsComponent from "./RecentPostsComponent";
import AllTags from "./AllTags";
import SocialLinks from "./SocialLinks";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "http://localhost:3000/api/posts/getposts"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching posts:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Header />
        <Spinner size="xl" />
      </div>
    );
  if (error)
    return (
      <div className="flex flex-col justify-center items-center gap-3 min-h-screen">
        <Header />
        <h2 className="dmSans text-5xl opacity-70">Internal Server Error</h2>
        <div className="errormsg px-3 py-2 bg-rose-600 text-white inter rounded">
          {error.message}
          {/* {error.status} */}
        </div>
      </div>
    );
  return (
    <>
      <Header />
      <div className="flex flex-col sm:flex-row items-start justify-center gap-8">
        <div className="w-full md:w-3/5 p-4 xl:pl-28 mt-20 h-auto md:p-2 flex flex-col justify-center items-start gap-4 bg-transparent transition-all duration-200">
          <div className="header flex flex-row items-center justify-start w-full">
            <h2 className="uppercase bg-zinc-200 text-black dark:bg-gray-900 pl-4 py-1 pr-5 dmSans rounded-sm font-bold text-sm flex flex-row items-center justify-center">
              Recent Articles <MdKeyboardDoubleArrowRight />
            </h2>
            <hr className="h-[2px] flex-grow bg-rose-500 " />
          </div>
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col group hover:cursor-pointer md:flex-row gap-2 w-full dark:bg-slate-900 rounded-lg h-auto"
            >
              <div className="img_container w-auto h-full flex items-center overflow-hidden justify-center">
                <img
                  src={post.thumbnail}
                  alt="Thumbnail"
                  className="transition-all w-[380px] h-[180px] bg-white group-hover:scale-105 duration-300 object-cover"
                />
              </div>
              <div className="w-full flex flex-col md:pl-4 md:pr-0 items-start justify-between max-h-full gap-0">
                <div className="title">
                  <Link
                    to={"/posts/" + post.slug}
                    className="text-xl text-left line-clamp-2 font-bold group-hover:text-red-600 text-gray-900 Inter dark:text-gray-100"
                  >
                    <span className="leading-snug poppins">{post.postTitle}</span>
                  </Link>
                  
                </div>
                  {/* <br /> */}
                  <div className="publisher my-2 Funnel">
                    <p className="text-xs">
                      By{" "}
                      <span className="text-rose-500 cursor-text font-bold dmSans">
                        {post.auther}
                      </span>{" "}
                      -{" "}
                      {new Date(post.createdAt).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                <Link className="text-gray-500 line-clamp-2 lg:line-clamp-3 text-[0.8rem] dmSans dark:text-gray-400">
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        post.postDescription ||
                        "<p>No description available.</p>",
                    }}
                    className="p-0"
                  ></div>
                </Link>
                <div className="w-full pubsAndAdditionalInfo flex flex-col md:flex-row justify-start md:justify-between">
                  <div className="addons flex flex-row gap-3 items-end justify-end my-3 md:justify-start">
                    <div className="flex items-center gap-1">
                      <AiOutlineEye size={16} />
                      <span className="text-xs">{post.views}2000</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <AiOutlineComment size={16} />
                      <span className="text-xs">{post.comments}12</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <AiOutlineHeart size={16} />
                      <span className="text-xs">{post.likes}1121</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="rightSide md:pr-4 lg:pr-6 xl:pr-32 mt-20 px-4 lg:p-4 flex flex-col md:flex-col md:justify-start w-full sm:w-1/3">
          <SocialLinks />
          <VerticalAd />
          <RecentPostsComponent />
          <AllTags />
          <VerticalAd />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Posts;
