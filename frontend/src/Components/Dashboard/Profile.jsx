/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { AiOutlineComment, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);

  const filePickerRef = useRef();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      console.log(imageFile);
      setImageFileUrl(URL.createObjectURL(file));
    }

  //   useEffect(() => {
  //     if (imageFile) {
  //       uploadImage();
  //     }
  //   }, [imageFile]
  // );

  //   const uploadImage = async () => {
  //     console.log("uploading image");
  //   };
    return (
      <div className="Profile flex flex-col w-full min-h-screen bg-gray-100 dark:bg-gray-900">
        <main className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <form className="space-y-3 col-span-1 md:col-span-2">
            <section className="bg-white dark:bg-gray-800 rounded-sm shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg space-x-3 font-medium text-gray-900 dark:text-gray-100">
                  Profile Settings
                </h2>
              </div>
              <div
                className=" h-[120px] w-fit flex flex-row items-center rounded-full justify-start border-none overflow-hidden "
                onClick={() => {
                  filePickerRef.current.click();
                }}
              >
                <input
                  type="file"
                  className="hidden"
                  onChange={handleImageChange}
                  id=""
                  ref={filePickerRef}
                />
                <img
                  itemType="file"
                  accept="image/*"
                  src={imageFileUrl || currentUser.profilePic}
                  className="hover:scale-110 transition-all duration-200 px-6 pt-6 w-auto h-[120px] object-cover pb-3"
                  alt="Your Image"
                />
              </div>
              <div className="p-6 space-y-8">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 bg-stone-100 text-black dark:bg-slate-800 dark:text-zinc-300 file:text-sm file:font-medium placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                      id="name"
                      defaultValue={currentUser.username}
                    />
                  </div>
                  <div>
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border-none px-3 py-2 text-sm ring-offset-background file:border-0 bg-stone-100 text-black dark:bg-slate-800 dark:text-zinc-300 file:text-sm file:font-medium placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                      id="email"
                      type="email"
                      defaultValue={currentUser.email}
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="bio"
                  >
                    Bio
                  </label>
                  <textarea
                    className="flex min-h-[80px] w-full rounded-md border-none border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-htmlForeground bg-stone-100 text-black dark:bg-slate-800 dark:text-zinc-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="bio"
                    rows="3"
                    defaultValue="I am a passionate blogger and web developer."
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-htmlForeground hover:bg-primary/90 h-10 px-4 py-2">
                    Save Changes
                  </button>
                </div>
              </div>
            </section>
            <section className="bg-white w-full lg:w-[75vw] dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  Blog Posts
                </h2>
              </div>
              <div className="p-3 space-y-8">
                <div className="flex flex-col cursor-pointer p-3 rounded-md transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-slate-800 lg:flex-row items-start gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src="https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      width="120"
                      height="80"
                      alt="Blog Post Thumbnail"
                      className="rounded-lg aspect-square transition-all duration-300 hover:scale-120 object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <Link
                      to="/"
                      className="text-lg font-medium text-gray-900 dark:text-gray-100"
                    >
                      The Future of Web Development
                    </Link>
                    <Link className="text-gray-500 dark:text-gray-400 line-clamp-2">
                      In this blog post, we explore the latest trends and
                      technologies shaping the future of web development. From
                      the rise of serverless architectures to the increasing
                      importance of accessibility and perhtmlFormance, we dive
                      into the key considerations htmlFor modern web
                      applications.ess architectures to the increasing
                      importance of accessibility and perhtmlFormance, we dive
                      into the key
                    </Link>
                    <div className="flex items-center justify-between mt-4">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Published on May 15, 2023
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <AiOutlineEye />
                          <span>1.2K</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <AiOutlineComment />
                          <span>42</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <AiOutlineHeart />
                          <span>120</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col cursor-pointer p-3 rounded-md transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-slate-800 lg:flex-row items-start gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src="https://miro.medium.com/v2/resize:fit:1200/1*JdkEvoNMusSGEuuqUZ0OLg.jpeg"
                      width="120"
                      height="80"
                      alt="Blog Post Thumbnail"
                      className="rounded-lg object-cover aspect-square "
                    />
                  </div>
                  <div className="flex-1">
                    <Link className="text-lg font-medium text-gray-900 dark:text-gray-100">
                      Mastering React Hooks
                    </Link>
                    <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                      In this comprehensive guide, we dive deep into the world
                      of React Hooks, exploring their power and versatility.
                      From state management to side effects, we cover the
                      essential hooks and demonstrate how to leverage them to
                      build more efficient and maintainable React applications.
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Published on April 20, 2023
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <AiOutlineEye />
                          <span>800</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <AiOutlineComment />
                          <span>28</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <AiOutlineHeart />
                          <span>80</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </form>
          <div className="space-y-8">
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  Analytics
                </h2>
              </div>
              <div className="p-6  gap-6">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-sm p-4 flex flex-col items-center justify-center">
                  <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                    2.3K
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">
                    Total Views
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-sm p-4 flex flex-col items-center justify-center">
                  <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                    120
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">
                    Total Likes
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-sm p-4 flex flex-col items-center justify-center">
                  <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                    42
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">
                    Total Comments
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  };
}

export default Profile;
