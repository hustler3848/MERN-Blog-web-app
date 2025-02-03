import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaPinterest,
  FaPlus,
  FaComment,
  FaComments,
} from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { Spinner } from "flowbite-react";
import Header from "../Header";
import Footer from "../Footer.jsx";
import PopularPostsComponent from "./PopularPostsComponent.jsx";
import VerticalAd from "./VerticalAd.jsx";
import RecentPostsComponent from "./RecentPostsComponent.jsx";
import CommentSection from "./CommentSection.jsx";
import AllTags from "./AllTags.jsx";
import HorizontalAd from "./HorizontalAd.jsx";
import SocialLinks from "./SocialLinks.jsx";

const PostPage = () => {
  const { slug } = useParams();
  const [fetchedPost, setfetchedPost] = useState(null);
  const [commentCount, setcommentCount] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetching IncreaseViews with METHOD PATCH to increase views every time the slug is provided.
  useEffect(() => {
    if (slug) {
      fetch(`/api/posts/${slug}/views`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
        })
        .catch((error) => console.error("Error updating views:", error));
    }
  }, [slug]);
  // Fetches Post content from postSlug
  useEffect(() => {
    if (!slug) return;
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/posts/${slug}`);
        const data = await res.json();
        if (res.ok) {
          setfetchedPost(data.data.post);
          console.log(data);
          setcommentCount(data.data.commentCount);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching fetchedPost:", error);
        setLoading(false);
      }
    };
    fetchPost();

    // console.log("postId: ", fetchedPost._id);
  }, [slug]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Header />
        <Spinner size="xl" />
      </div>
    );

  if (error) return <p>{error}</p>;

  if (!fetchedPost) return <p>No post found.</p>;
  return (
    <>
      <Header />
      <div className="flex flex-col sm:flex-row items-start justify-center gap-8">
        <div className="fetchedPost w-full md:w-3/5 p-4 xl:pl-28 mt-16 ">
          <header>
            <h1 className="poppins text-2xl md:text-3xl font-bold">
              {fetchedPost.postTitle || "Untitled"}
            </h1>
          </header>
          <div className="postInfo flex flex-row items-center justify-between my-4">
            <p className="text-[0.75rem] md:text-[0.8rem] inter">
              By{" "}
              <strong className="text-rose-500">
                {fetchedPost.auther || "Unknown"}
              </strong>{" "}
              -{" "}
              {/* {fetchedPost.createdAt
                ? new Date(fetchedPost.createdAt).toDateString()
                : "Unknown Date"} */}
              {new Date(fetchedPost.createdAt).toLocaleDateString("en-US", {
                weekday: "long",
              })}
              ,{" "}
              {new Date(fetchedPost.createdAt).toLocaleDateString("en-US", {
                month: "short",
              })}{" "}
              {new Date(fetchedPost.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
              })}
              ,{" "}
              {new Date(fetchedPost.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
              })}
            </p>
            <p className="flex flex-row items-center justify-center text-xs opacity-90 gap-2">
              <FaComments size={"13"} color="red" opacity={"0.8"} />
              {commentCount}
            </p>
          </div>
          <HorizontalAd />
          <header>
            <h1 className="dmSans my-3  text-2xl md:text-3xl font-semibold">
              {fetchedPost.postTitle || "Untitled"}
            </h1>
          </header>
          <div className="postDescription">
            <div className="postThumbnail">
              <img
                src={fetchedPost.thumbnail || "default-thumbnail.jpg"}
                alt="postThumbnail"
              />
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    fetchedPost.postDescription ||
                    "<p>No description available.</p>",
                }}
                className="pt-4 mb-6"
              ></div>

              {/* Tags */}
              <div className="tags flex flex-row items-start flex-wrap justify-start gap-2 md:gap-4">
                <p className="px-2 py-1 rounded-sm hover:bg-rose-500 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-rose-500 hover:text-white cursor-pointer text-xs bg-gray-200 transition-all duration-200">
                  Tags
                </p>
                {fetchedPost.tags?.map((tag, index) => (
                  <p
                    key={index}
                    className="px-2 py-1 rounded-sm hover:bg-rose-500 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-rose-500 hover:text-white cursor-pointer text-xs bg-gray-200 transition-all duration-200"
                  >
                    {tag}
                  </p>
                ))}
              </div>

              {/* Social Links */}
              <div className="socialLinks flex flex-row items-start justify-start my-8 gap-1">
                <div className="facebook flex flex-row items-center justify-between gap-4 px-3 rounded-[2px] w-[44px] md:w-[130px] h-[30px] py-1 bg-[#4E69A3]">
                  <FaFacebook color="white" />
                  <span className="text-white text-sm inter hidden md:block">
                    Facebook
                  </span>
                </div>
                <div className="Twitter flex flex-row items-center justify-between gap-4 px-3 rounded-[2px] w-[44px] md:w-[130px] h-[30px] py-1 bg-[#19B4F0]">
                  <FaTwitter color="white" />
                  <span className="text-white text-sm inter hidden md:block">
                    Twitter
                  </span>
                </div>
                <div className="Twitter flex flex-row items-center justify-between gap-4 px-3 rounded-[2px] w-[44px] h-[30px] py-1 bg-[#52C261]">
                  <FaWhatsapp color="white" size={20} />
                </div>
                <div className="Twitter flex flex-row items-center justify-between gap-4 px-3 rounded-[2px] w-[44px] h-[30px] py-1 bg-[#CF373C]">
                  <FaPinterest color="white" size={20} />
                </div>
                <div className="Twitter flex flex-row items-center justify-between gap-4 px-3 rounded-[2px] w-[44px] h-[30px] py-1 bg-gray-400">
                  <CgMail color="white" size={22} />
                </div>
                <div className="Twitter flex flex-row items-center justify-between gap-4 px-3 rounded-[2px] w-[44px] h-[30px] py-1 bg-gray-100">
                  <FaPlus color="gray" size={18} />
                </div>
              </div>
              {/* Comment Section */}
              <CommentSection postId={fetchedPost._id} />
            </div>
          </div>
        </div>
        <div className="rightSide md:pr-4 lg:pr-6 xl:pr-28 mt-20 p-4 flex flex-col md:flex-col md:justify-start w-full sm:w-1/3">
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
};

export default PostPage;
