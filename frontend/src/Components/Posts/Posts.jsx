import React, { useState, useEffect } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import {
  AiOutlineComment,
  AiOutlineHeart,
  AiOutlineCompress,
} from "react-icons/ai";


function Posts() {
  const [posts, setPosts] = useState([]);
  // const [error, setError] = useState(null);

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await fetch(
            "http://localhost:3000/api/posts/getposts"
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setPosts(data);
        } catch (error) {
          // setError(error.message);
        }
      };

      fetchPosts();
    }, []);
  return (
    <>
      <Header />
      <div className="p-2 md:p-8 flex flex-col justify-center items-center gap-4 bg-transparent transition-all duration-200 ">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col p-6 group hover:cursor-pointer md:flex-row gap-6 w-full bg-slate-100 dark:bg-slate-900 rounded-lg h-auto md:h-auto"
          >
            <div className="img_container px-2 w-auto h-full flex items-center overflow-hidden justify-center">
              <img
                src={post.thumbnail}
                alt="Thumbnail"
                className="transition-all w-auto md:w-[380px] md:h-[180px] bg-white group-hover:scale-125 duration-700 object-cover"
              />
            </div>
            <div className="w-full flex flex-col md:px-4 items-center justify-between gap-6">
              <div className="w-full titleAndDesc group flex flex-col gap-2 items-start justify-start">
                <div className="title">
                  <Link
                    to="/"
                    className="text-lg font-medium group-hover:text-red-600 text-gray-900 dark:text-gray-100"
                  >
                    {post.postTitle}
                  </Link>
                  <br />
                  <Link className="text-gray-500 group-hover:text-red-400 dark:text-gray-400 line-clamp-5 md:line-clamp-3 ">
                    {post.postDescription}
                  </Link>
                </div>
              </div>
              <div className="w-full pubsAndAdditionalInfo flex flex-col md:flex-row justify-start md:justify-between ">
                <div className="publisher">
                  <p className="text-md">
                    - {post.auther} on {post.publishedDate}
                  </p>
                </div>
                <div className="addons flex flex-row gap-3 items-end justify-end md:justify-end">
                  <div className="flex items-center gap-1">
                    <AiOutlineEye />
                    <span>{post.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <AiOutlineComment />
                    <span>{post.comments}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <AiOutlineHeart />
                    <span>{post.Likes}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Posts;
