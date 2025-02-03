import React from "react";
import { useState } from "react";
import Header from "../../Components/Header";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../firebase";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [tags, setTags] = useState([]);
  const [imgFile, setImgFile] = useState(null);
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [imgFileUrl, setImgFileUrl] = useState(null);
  const [imgUploadProgress, setImgUploadProgress] = useState(null);
  const [imgUploadError, setImgUploadError] = useState(null);
  const [publishError, setPublishError] = useState(null);
  const [postUploadedMsg, setpostUploadedMsg] = useState("");
  const { currentUserOfBloggingApp } = useSelector(
    (state) => state.userOfBloggingApp
  );

  const [formData, setFormData] = useState({
    postTitle: "",
    postDescription: "",
    tags: [],
    thumbnail: "",
    user_id: currentUserOfBloggingApp._id,
    auther: currentUserOfBloggingApp.username,
  });

  const handleChange = (newTags) => {
    setTags(newTags);
  };
  const handleAddition = (tag) => {
    setFormData({
      ...formData,
      tags: [...formData.tags, tag.text], // Adding new tag to tags array
    });
  };

  // Handles deleting a tag
  const handleDelete = (i) => {
    const newTags = formData.tags.filter((tag, index) => index !== i);
    setFormData({ ...formData, tags: newTags }); // Update the tags array
  };
  // console.log(formData);
  const handleUploadImage = async () => {
    try {
      if (!file) {
        return;
      }
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImgUploadProgress(progress.toFixed(0));
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
          setImgUploadError("Something went wrong. Please try again.");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImgFileUrl(downloadURL);
            setImgUploadProgress(null);
            setImgUploadError(null);
            setFormData({ ...formData, thumbnail: downloadURL });
            console.log(formData);

            console.log("File available at", downloadURL);
          });
        }
      );
    } catch (error) {
      setImgUploadError(error.message);
      setImgUploadProgress(null);
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/posts/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });
      const data = await res.json();
      if (data.message === false) {
        setPublishError(data.message);
        setTimeout(() => {
          setPublishError(null);
        }, 5000);
      }
      if (!res.ok) {
        setPublishError(data.message);
        setTimeout(() => {
          setPublishError(null);
        }, 5000);
      }
      if (res.ok && data.success) {
        const postSlug = data.postSlug;

        setpostUploadedMsg(true);
        setPublishError(null);
        const audio = new Audio("/postUploadedAudio.mp3");
        audio.play();
        setTimeout(() => {
          navigate(`/posts/${postSlug}`);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      setPublishError("Something went wrong");
    }
  };
  return (
    <>
      <Header />
      <div className="w-full min-h-auto bg-gray-50 dark:bg-slate-900 px-4 ">
        {publishError && (
          <div className="w-[300px] z-999 duration-700 Funnel border-2  shadow-sm shadow-rose-600/100 fixed top-20 z-20 right-5 text-start mb-4 p-4 bg-rose-600 text-white rounded-md">
            <p>*{publishError}*</p>
          </div>
        )}
        {postUploadedMsg && (
          <div className="w-[300px] border-black z-999 duration-700 shadow-lg fixed top-20 z-20 right-10 text-start mb-4 p-4 bg-green-100 text-green-800 rounded-lg">
            <p>
              Post Created <strong>Successfully</strong>!!!
            </p>
          </div>
        )}
        <div className="w-full min-w-md sm:min-w-full md:min-w-xl lg:max-w-4xl bg-white dark:bg-slate-950 rounded-lg overflow-hidden">
          <div className="px-4 py-3 sm:p-6 md:py-3 md:px-6">
            {/* <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-50 mb-6 text-center">
              Create New Post
            </h2> */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  id="title"
                  name="title"
                  onChange={(e) =>
                    setFormData({ ...formData, postTitle: e.target.value })
                  }
                  required
                  className="w-full h-16 text-3xl px-3 py-2 Faculty font-bold tracking-wide text-gray-700 border border-slate-50 dark:bg-slate-950 dark:border-gray-900 dark:border-b-gray-300 dark:text-gray-50 border-b-gray-300 rounded-sm outline-none sm:text-md transition duration-150 ease-in-out"
                  placeholder="Enter post title"
                />
              </div>
              <div>
                <label
                  htmlFor="tags"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-50 mb-1"
                >
                  Tags
                </label>

                <TagsInput
                  className="dark:react-tagsinputForDark Funnel dark:react-tagsinput-inputForDark"
                  placeholder="Add new tag"
                  value={formData.tags}
                  onChange={(tags) => setFormData({ ...formData, tags })} // Update tags array directly
                  handleDelete={handleDelete}
                  handleAddition={handleAddition}
                />
              </div>
              <div className="bg-stone-100 dark:bg-gray-900 flex justify-between items-center px-4 py-3">
                <input
                  type="file"
                  accept=".jpeg,.png,.jpg,.webp"
                  id="image"
                  name="image"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="w-[100px] "
                />

                <button
                  type="button"
                  onClick={handleUploadImage}
                  disabled={!file && imgUploadProgress === null}
                  className="border px-3 py-2 rounded-sm text-sm border-slate-950 bg-white dark:bg-slate-950 dark:border-white hover:bg-black hover:text-white dark:hover:text-gray-900 dark:hover:bg-white transition-all duration-100 font-medium"
                >
                  {imgUploadProgress ? (
                    <div className="h-16 w-16">
                      <CircularProgressbar
                        value={imgUploadProgress}
                        text={`${imgUploadProgress || 0}%`}
                      />
                    </div>
                  ) : (
                    "Upload Thumbnail"
                  )}
                </button>
              </div>
              {imgUploadError && (
                <p className="bg-rose-600 text-white px-3 py-2">
                  {imgUploadError}
                </p>
              )}

              {formData.thumbnail && (
                <img
                  src={formData.thumbnail}
                  className="w-full h-auto object-cover"
                  alt="Uploaded Image"
                />
              )}
              <ReactQuill
                onChange={(value) =>
                  setFormData({ ...formData, postDescription: value })
                }
                placeholder="Write your post content here"
                className="poppins"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-full shadow-md px-2 py-3 border Lexend rounded-lg bg-gray-900 text-white hover:bg-white hover:text-gray-900 transition-colors duration-200 text-base sm:text-lg font-medium"
                >
                  Create Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
