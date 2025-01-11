/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEye,
  FaComment,
  FaThumbsUp,
  FaTrash,
  FaEdit,
  FaExpand,
  FaCross,
  FaClosedCaptioning,
} from "react-icons/fa";
import { AiOutlineX } from "react-icons/ai";
import { useSelector } from "react-redux";

function DashPosts() {
  const [dialogBoxOpen, setdialogBoxOpen] = useState(false);
  const [userPosts, setUserPosts] = useState([]);
  const [realPost, setRealPost] = useState({});
  const { currentUserOfBloggingApp } = useSelector(
    (state) => state.userOfBloggingApp
  );
  const [threeDotsClicked, setThreeDotsClicked] = useState(false);

  const handleDialogBox = () => {
    setdialogBoxOpen(!dialogBoxOpen);
  };
  const handleThreeDotsClick = () => {
    setThreeDotsClicked(!threeDotsClicked);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/posts/getposts?userId=${currentUserOfBloggingApp._id}`
        );
        const data = await res.json();
        // console.log(data);
        if (res.ok) {
          setUserPosts(data);
          

        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUserOfBloggingApp.isAdmin) {
      fetchPosts();
    }
  }, [currentUserOfBloggingApp._id]);
  
  return (
    <div className="posts flex flex-col">
      <main className="flex flex-1 flex-col gap-4 py-4 md:py-2.5 p-1 sm:p-6 md:gap-8 ">
        <div className="w-full h-full">
          <div className="flex items-center justify-between px-6 pb-4">
            <h2 className="text-2xl font-bold">All Posts</h2>
            <Link
              to="/posts/create"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-black
                  text-white h-9 rounded-md px-3"
            >
              Create a Post 
            </Link>
          </div>

          {/* <div className="mt-4 border dark:border-gray-800 shadow-sm rounded-lg">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&amp;_tr]:border-b dark:border-gray-800">
                  <tr className="border-b dark:border-gray-800 transition-colors hover:bg-neutral-100 dark:hover:bg-slate-900 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      S.N
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Thumbnail
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Title
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      Published on 
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      Status
                    </th>
                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="[&amp;_tr:last-child]:border-0">
                  <tr className="border-b dark:border-gray-800 transition-colors hover:bg-neutral-100 dark:hover:bg-slate-900 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                      1
                    </td>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <img
                        src="https://img-c.udemycdn.com/course/750x422/3653014_734b_2.jpg"
                        alt=""
                        className="h-12 w-12 rounded object-cover"
                      />
                    </th>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                      The Importance of Blogging
                    </td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      May 1, 2023
                    </td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      Published
                    </td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right"></td>
                  </tr>
                  <tr className="border-b dark:border-gray-800 transition-colors dark:hover:bg-slate-900 hover:bg-neutral-100 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                      2
                    </td>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <img
                        src="https://img-c.udemycdn.com/course/750x422/3653014_734b_2.jpg"
                        alt=""
                        className="h-12 w-12 rounded object-cover"
                      />
                    </th>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                      10 Tips for Effective SEO
                    </td>

                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      April 15, 2023
                    </td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      Draft
                    </td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right"></td>
                  </tr>
                  <tr className="border-b dark:border-gray-800 transition-colors dark:hover:bg-slate-900 hover:bg-neutral-100 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                      3
                    </td>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <img
                        src="https://img-c.udemycdn.com/course/750x422/3653014_734b_2.jpg"
                        alt=""
                        className="h-12 w-12 rounded object-cover"
                      />
                    </th>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                      <Link>The Future of Content Marketing</Link>
                    </td>

                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      March 30, 2023
                    </td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      Scheduled
                    </td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>  */}
          {dialogBoxOpen && (
            <div className="w-screen fixed top-0 left-0 z-10 sm:px-2 h-screen bg-gray-400 dark:bg-slate-800 opacity-90">
              <div
                className={`z-20 flex gap-2 px-6 py-7 rounded-md bg-white dark:bg-black w-[405px] absolute top-[+15%] sm:top-[30%] sm:left-[+40%]  lg:top-[30%]  opacity-100  flex-col`}
              >
                <div
                  className=" z-20 absolute w-fit p-3 top-0 right-0 cursor-pointer"
                  onClick={handleDialogBox}
                >
                  <AiOutlineX className="z-20 text-md" color="red" />
                </div>
                <p className="font-semibold pt-5">
                  Are you sure you want to Delete this post ?
                </p>
                <div className="w-full items-start flex flex-row justify-between">
                  <button
                    type="button"
                    // onClick={handleDeleteUser}
                    className="mt-8 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors dark:bg-rose-700 dark:text-white hover:dark:bg-rose-900 text-white bg-rose-600 hover:bg-primary/90 px-4 py-2"
                  >
                    Delete Post
                  </button>
                  <button
                    type="button"
                    onClick={handleDialogBox}
                    className={` mt-8 px-4 text-sm  py-2 rounded border bg-slate-800 text-white font-semibold`}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
          {userPosts.length === 0 ? (
            <div className="w-full h-full flex flex-col items-center justify-center">
              <p className="text-center">You havenot created any posts yet.</p>
            </div>
          ) : (
            <div className="posts flex flex-col gap-4 border-t px-1 sm:px-3 py-4">
              {userPosts.map((post) => (
                <div
                  key={post._id}
                  className="post px-2 sm:px-4 py-2 sm:py-4 border shadow-xs hover:bg-stone-50 hover:shadow-md transition-all dark:border-gray-800 dark:hover:bg-slate-900 flex flex-row justify-between"
                >
                  <div className="leftSide flex items-center justify-start gap-5">
                    <div className="img overflow-hidden rounded-lg">
                      <img
                        src={post.thumbnail}
                        alt={post.postTitle}
                        className="hover:scale-125 transition-all overflow-hidden duration-300 w-20 h-16 object-cover rounded-lg"
                      />
                    </div>
                    <div className="titleAndDates flex flex-col justify-evenly gap-2 items-start">
                      <div className="title">
                        <Link
                          to={`/dashboard/posts/edit/${post.slug}`}
                          className="text-[16px] font-semibold line-clamp-2"
                        >
                          {post.postTitle}
                        </Link>
                      </div>
                      <div className="datesAndTags flex flex-row gap-2 justify-center items-center">
                        <p className="text-sm">Published ~ April 15, 2023</p>
                        <div className="tags hidden md:flex flex-row items-center gap-2 text-[12px]">
                          {post.tags.map((tag, index) => (
                            <p
                              key={index}
                              className="border dark:border-white rounded-[32px] px-[10px] py-[4px]"
                            >
                              {tag}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rightSide flex flex-row justify-between gap-4 pb-0 sm:pb-1.5">
                    <div className="h-full flex flex-col justify-between">
                      <div className="profile hidden md:flex flex-row items-center justify-center gap-2">
                        <p className="text-[16px] font-semibold cursor-pointer hover:underline">
                          {post.auther}
                        </p>
                        <img
                          src={currentUserOfBloggingApp.profilePic}
                          alt={post.auther}
                          className="rounded-full w-6 h-6 object-cover"
                        />
                      </div>
                      <div className="viewsCommentsAndOther flex flex-row gap-2 items-end justify-end">
                        <div className="views flex flex-row items-center gap-1">
                          <FaEye size="16" />
                          <p className="text-xs">100</p>
                        </div>
                        <div className="comments flex flex-row items-center gap-1">
                          <FaComment size="16" />
                          <p className="text-xs">6</p>
                        </div>
                        <div className="likes flex flex-row items-center gap-1">
                          <FaThumbsUp size="15" className="mb-1" />
                          <p className="text-xs">23</p>
                        </div>
                      </div>
                    </div>
                    <div className="actions hidden md:flex h-full px-4 border-l-2 flex-col items-center justify-between">
                      <FaEdit cursor={"pointer"} size="17" />
                      <FaTrash
                        cursor={"pointer"}
                        onClick={() => handleDialogBox(post._id)}
                        size="17"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default DashPosts;
