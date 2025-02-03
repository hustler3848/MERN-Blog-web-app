import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineX } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useRef } from "react";
import {
  updateStart,
  updateSuccess,
  updateFailure,
  deleteUserStart,
  deleteUserFailure,
  deleteUserSuccess,
  signoutSuccess,
} from "../../redux/user/userSlice";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../firebase";

function DashProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUserOfBloggingApp, error, loading } = useSelector(
    (state) => state.userOfBloggingApp
  );
  const [selectedSection, setSelectedSection] = useState("posts");
  const [dialogBoxOpen, setdialogBoxOpen] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  // const [imageFileUploadProgress, setimageFileUploadProgress] = useState(0);
  const [imageFileUploadProgressError, setimageFileUploadProgressError] =
    useState(null);
  const [formData, setFormData] = useState({});
  // const [profilePicUrl, setProfilePicUrl] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(
    currentUserOfBloggingApp.profilePic
  );
  const [updatedMsg, setUpdatedMsg] = useState(false);
  const [imageUploadMsg, setImageUploadMsg] = useState(false);

  const handleDialogBox = () => {
    setdialogBoxOpen(!dialogBoxOpen);
  };
  const filePickerRef = useRef();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
      console.log(file);
    }
  };
  useEffect(() => {
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile]);
  const uploadImage = async () => {
    // console.log((imageFileUploadProgress, imageFileUploadProgressError));
    console.log("uploading image");
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.error(error);
        setimageFileUploadProgressError(
          "Cannot upload image (file must be less than 2 MB)"
        );
      },
      () => {
        // Completion function
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageFileUrl(downloadURL);
          setImageUploadMsg(true);
          console.log(downloadURL);
          setFormData({ ...formData, profilePic: downloadURL });
          console.log(formData);
        });
      }
    );
  };
  const handleSignOut = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleChangeinForm = (e) => {
    // setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };
  const handleProfileFormSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(formData).length === 0) {
      return setErrorMsg("Change some fields to update");
    }

    try {
      dispatch(updateStart());
      const res = await fetch(
        `http://localhost:3000/api/user/update/${currentUserOfBloggingApp._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          credentials: "include", // Include cookies in the request
          withCredentials: true,
        }
      );

      const data = await res.json();
      if (res.ok) {
        dispatch(updateSuccess(data));
        setUpdatedMsg(true);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
        setFormData({});
        setImageFile(null);
        setimageFileUploadProgressError(null);
        filePickerRef.current.value = null;
        setTimeout(() => {
          setUpdatedMsg(false);
        }, 3000);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      dispatch(updateFailure(error.message));
    }
  };
  const handleDeleteUser = async () => {
    setdialogBoxOpen(!dialogBoxOpen);
    try {
      dispatch(deleteUserStart());
      const res = await fetch(
        `/api/user/delete/${currentUserOfBloggingApp._id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      const data = await res.json();
      if (!res.ok) {
        dispatch(deleteUserFailure(data.message));
      } else {
        dispatch(deleteUserSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  return (
    <section id="profile" className="w-full min-h-screen inter bg-[#f2f2f2]">
      <div className="min-w-4xl">
        <div className="bg-white rounded border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <img
                src={currentUserOfBloggingApp.profilePic}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-md transition-opacity duration-300 opacity-100"
                loading="lazy"
              />
              <div>
                <h1 className="text-xl poppins font-semibold text-gray-800">
                  {currentUserOfBloggingApp.username}
                </h1>
                <p className="text-gray-600 Lexend text-[0.9rem]">
                  Web Developer &amp; Technical Writer
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-2">
                  <span className="text-sm text-gray-500 dmSans">
                    Joined March 2023
                  </span>
                  <span className="text-sm text-gray-500 hidden sm:inline">
                    •
                  </span>
                  <span className="text-sm text-gray-500 dmSans">
                    San Francisco, CA
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 border-b border-gray-200">
            <div className="p-6 text-center" id="el-irw45eek">
              <div className="text-xl font-bold text-gray-600 poppins">24</div>
              <div className="text-sm text-gray-600">Posts</div>
            </div>
            <div
              className="p-6 text-center border-l border-r border-gray-200"
              id="el-pv7d79q2"
            >
              <div className="text-xl font-bold text-gray-600 poppins">
                1.2k
              </div>
              <div className="text-sm text-gray-600">Followers</div>
            </div>
            <div className="p-6 text-center">
              <div
                className="text-xl font-bold text-gray-600 poppins"
                id="el-7q8t9k25"
              >
                348
              </div>
              <div className="text-sm text-gray-600">Following</div>
            </div>
          </div>

          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setSelectedSection("posts")}
                className={`px-4 py-2 dmSans font-semibold text-sm rounded ${
                  selectedSection === "posts"
                    ? "text-blue-500 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Posts
              </button>
              <button
                onClick={() => setSelectedSection("about")}
                className={`px-6 py-3  dmSans font-semibold text-sm ${
                  selectedSection === "about"
                    ? " text-blue-500 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                About
              </button>
              <button
                onClick={() => setSelectedSection("followers")}
                className={`px-4 py-2 rounded dmSans font-semibold text-sm ${
                  selectedSection === "followers"
                    ? "text-blue-500 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Following
              </button>
            </nav>
          </div>

          <div className="p-6">
            {selectedSection === "posts" && <PostsSection />}
            {selectedSection === "about" && <AboutSection />}
            {selectedSection === "followers" && <FollowersSection />}
          </div>
        </div>
      </div>
    </section>
  );
}

const AboutSection = () => {
  const currentUserOfBloggingApp = useSelector(
    (state) => state.userOfBloggingApp.currentUserOfBloggingApp
  );
  return (
    <div className="p-6 bg-white shadow-md dmSans rounded-lg">
    <h2 className="text-xl font-bold mb-2 text-gray-800">About Me</h2>
    <p className="text-gray-600 text-sm">
      Hi! I'm John Doe, a passionate **Web Developer** specializing in 
      **React, Next.js, and Tailwind CSS**. I love building interactive and 
      scalable applications.
    </p>

    {/* Skills */}
    <div className="mt-4">
      <h3 className="text-md font-semibold text-gray-700">Skills</h3>
      <ul className="text-gray-600 text-sm mt-2 space-y-1">
        <li>✅ React & Next.js</li>
        <li>✅ JavaScript (ES6+)</li>
        <li>✅ Tailwind CSS & UI Design</li>
        <li>✅ Backend: Node.js & Express</li>
      </ul>
    </div>

    {/* Contact Info */}
    <div className="mt-4">
      <h3 className="text-md font-semibold text-gray-700">Contact</h3>
      <p className="text-gray-600 text-sm">📍 San Francisco, CA</p>
      <p className="text-gray-600 text-sm">📧 johndoe@example.com</p>
    </div>
  </div>
  );
};

const PostsSection = () => {
  return (
    <div className="grid gap-6">
      <div className="border border-gray-200 rounded p-4 hover:border-gray-300 transition-colors">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-lg font-semibold Funnel text-gray-700">
            Getting Started with React Hooks
          </h2>
          <span className="text-xs text-gray-500">2 days ago</span>
        </div>
        <p className="text-gray-500 text-sm font-light Faculty mb-4">
          An introduction to React Hooks and how they can simplify your React
          components...
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="red"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
              24
            </span>
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="blue"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                ></path>
              </svg>
              8
            </span>
          </div>
          <div className="flex space-x-2">
            <span className="px-3 py-1 bg-red-500 Funnel text-zinc-100 rounded-sm text-center text-xs">
              react
            </span>
            <span className="px-3 py-1 bg-red-500 Funnel text-zinc-100 rounded-sm text-center text-xs">
              javascript
            </span>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 rounded p-4 hover:border-gray-300 transition-colors">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-lg font-semibold Funnel text-gray-700">
            CSS Grid Layout Made Simple
          </h2>
          <span className="text-xs text-gray-500">5 days ago</span>
        </div>
        <p className="text-gray-500 text-sm font-light Faculty mb-4">
          A comprehensive guide to using CSS Grid for modern web layouts...
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="red"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
              32
            </span>
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="blue"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                ></path>
              </svg>
              12
            </span>
          </div>
          <div className="flex space-x-2">
            <span className="px-3 py-1 bg-red-500 Funnel text-zinc-100 rounded-sm text-xs">
              css
            </span>
            <span className="px-3 py-1 bg-red-500 Funnel text-zinc-100 rounded-sm text-xs">
              webdev
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const FollowersSection = () => {
  const followers = [
    { name: "Jane Smith", avatar: "https://i.pravatar.cc/50?img=3" },
    { name: "Michael Johnson", avatar: "https://i.pravatar.cc/50?img=2" },
    { name: "Emily Brown", avatar: "https://i.pravatar.cc/50?img=6" },
    { name: "Chuck Sans", avatar: "https://i.pravatar.cc/50?img=7" },
    { name: "Robert Wilson", avatar: "https://i.pravatar.cc/50?img=4" },
  ];

  return (
    <div className="px-6 py-2 bg-white shadow-md dmSans rounded-lg">
      <h2 className="text-lg font-bold mb-6 text-gray-800 Funnel">Recent Followers: </h2>
      <ul className="space-y-4 text-sm text-gray-600">
        {followers.map((follower, index) => (
          <li key={index} className="flex items-center space-x-4">
            <img
              src={follower.avatar}
              alt={follower.name}
              className="w-10 h-10 rounded-full"
            />
            <span className="text-gray-700 font-medium">{follower.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DashProfile;
