import { Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function CommentSection({ postId }) {
  const { currentUserOfBloggingApp } = useSelector(
    (state) => state.userOfBloggingApp
  );

  // GETTING COMMENTS
  const [Comments, setComments] = useState([]);
  const [loadingComments, setloadingComments] = useState(true);
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`/api/comment/get/${postId}`);
        if (!res.ok) throw new Error("Failed to fetch comments");
        if (res.ok) {
          const data = await res.json();
          setComments(data.data);
          console.log("data: ", data.data);

          setloadingComments(false);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchComments();
  }, [postId]);

  // POSTING A COMMENT
  const [commentForm, setCommentForm] = useState({
    post: postId,
    commentWriter: {
      _id: currentUserOfBloggingApp ? currentUserOfBloggingApp._id : "",
      username: currentUserOfBloggingApp ? currentUserOfBloggingApp._id : "",
      profilePic: currentUserOfBloggingApp ? currentUserOfBloggingApp._id : "",
    },
  });
  const [sendingComment, setsendingComment] = useState(false);
  const [Error, setError] = useState(null);
  const [commentMsg, setCommentMsg] = useState("");
  const handleChangeinCommentForm = (e) => {
    setCommentForm({ ...commentForm, [e.target.id]: e.target.value });
    setCommentBtnDisabled(false);
  };
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(commentForm).length == 0) {
      return;
    }
    try {
      console.log("Sending Comment", commentForm);
      setsendingComment(true);
      const res = await fetch("/api/comment/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(commentForm),
        credentials: "include",
        withCredentials: true,
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
      }
      if (res.ok) {
        const audio = new Audio("/commentAudio.mp3");
        setsendingComment(false);
        setCommentMsg(true);
        audio.play();
        setTimeout(() => {
          setCommentMsg(false);
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="comment">
      {commentMsg && (
        <div className="w-[300px] border-black z-999 duration-700 shadow-lg fixed top-20 z-20 right-10 text-start mb-4 p-4 bg-green-100 text-green-800 rounded-lg">
          <p>
            Changes Saved <strong>Successfully</strong>!!!
          </p>
        </div>
      )}
      <div className="flex commentHeader flex-row items-center justify-start w-full">
        <h2 className="uppercase dark:text-white bg-zinc-200 text-black dark:bg-gray-900 pl-4 py-1 pr-5 dmSans rounded-sm font-bold text-xs flex flex-row items-center justify-center">
          Post a Comment
        </h2>
        <hr className="h-[3px] flex-grow md:w-2/3 bg-rose-500 dark:bg-red-700" />
      </div>
      <div className="commentBox my-4 border border-neutral-300 dark:border-neutral-700 rounded-md p-4">
        {currentUserOfBloggingApp ? (
          <>
            <div className="flex flex-row items-start gap-4 justify-start">
              <img
                src={currentUserOfBloggingApp.profilePic}
                className="h-[42px]  w-[42px] rounded-full object-cover"
                alt=""
              />
              <p className="dmSans text-sm font-bold">
                Comment as:{" "}
                <span className="inter text-rose-500 font-medium text-sm">
                  {currentUserOfBloggingApp.username}
                </span>
              </p>
            </div>
            <form className="ml-0 mt-4 lg:mt-1 sm:ml-16">
              <input
                type="text"
                placeholder="Enter a comment"
                id="content"
                onChange={handleChangeinCommentForm}
                className="bg-transparent w-full Funnel outline-none  border-b-slate-200 dark:border-b-neutral-700 focus:outline-none focus: border-t-0 border-x-0 ring-0 text-xs "
              />
              <button
                type="submit"
                title="Comment"
                disabled={!commentForm.content}
                onClick={handleCommentSubmit}
                className={` ${
                  commentForm.content
                    ? "bg-blue-500 hover:bg-white hover-border border border-blue-500 hover:text-blue-500"
                    : "cursor-not-allowed bg-gray-400 border hover:bg-gray-400 hover:text-white border-gray-500"
                } text-xs Faculty  text-white px-3 mt-3 py-2 rounded-sm  transition-all duration-200`}
              >
                {sendingComment ? <Spinner size="md" /> : "Comment"}
              </button>
            </form>
          </>
        ) : (
          <Link
            className="text-xs Faculty bg-blue-500 text-white px-3 mt-3 py-2 rounded-sm hover:bg-white hover-border border border-blue-500 hover:text-blue-500 transition-all duration-200"
            to={"/login"}
          >
            Sign in to comment
          </Link>
        )}
      </div>

      {Comments.length == 0 ? (
        <div className="comments inter text-sm flex flex-col gap-2 my-4 border border-neutral-300 dark:border-neutral-700 rounded-md p-4">
          No comments Be the first to comment
        </div>
      ) : (
        <div className="comments flex flex-col gap-2 my-4">
          {Comments.map((Comment) => (
            <div
              key={Comment._id}
              className=" border border-neutral-300 dark:border-neutral-700 rounded-md p-4"
            >
              <div className="PicAndName flex flex-row items-center gap-4 justify-start">
                <img
                  src={
                    Comment.commentWriter.profilePic ||
                    "https://avatar.iran.liara.run/public"
                  }
                  className="h-[42px]  w-[42px] rounded-full object-cover"
                  alt={Comment.commentWriter.username}
                />
                <div className="flex flex-col gap-1">
                  <p className="dmSans text-sm font-bold">
                    {Comment.commentWriter.username}
                  </p>
                  <p className="dmSans text-xs font-normal opacity-70">
                    {new Date(Comment.createdAt).toLocaleString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
                  </p>
                </div>
              </div>
              <div className="commentContent my-2">
                <p className="inter text-sm  font-normal opacity-90 mt-4 lg:mt-1 pl-0 sm:pl-14">
                  {Comment.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CommentSection;
