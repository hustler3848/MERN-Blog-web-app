import React from "react";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
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
import { Alert } from "flowbite-react";

function Settings() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUserOfBloggingApp, error, loading } = useSelector(
    (state) => state.userOfBloggingApp
  );
  const [selectedSection, setSelectedSection] = useState("posts");
  const [dialogBoxOpen, setdialogBoxOpen] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUploadProgress, setimageFileUploadProgress] = useState("");
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
        setimageFileUploadProgress(`Upload is ${progress}% done`);
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
    <section id="settings" className="w-full min-h-screen bg-[#fff]">
       {dialogBoxOpen && (
          <div className="w-screen fixed top-0 left-0 z-10 sm:px-2 h-screen bg-gray-400 dark:bg-slate-800 opacity-90">
            <div
              className={`z-20 flex gap-2 px-6 py-7 rounded-md bg-white dark:bg-black w-[405px] absolute top-[+15%] sm:top-[30%] sm:left-[+40%]  lg:top-[30%]  opacity-100  flex-col`}
            >
              <div
                className=" z-20 absolute w-fit p-3 top-0 right-0 cursor-pointer"
                onClick={handleDialogBox}
              >
                <RxCross2 className="z-20 text-md" color="red" />
              </div>
              <p className="font-semibold pt-5">
                Are you sure you want to Delete your account ?
              </p>
              <div className="w-full items-start flex flex-row justify-between">
                <button
                  type="button"
                  onClick={handleDeleteUser}
                  className="mt-8 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors dark:bg-rose-700 dark:text-white hover:dark:bg-rose-900 text-white bg-rose-600 hover:bg-primary/90 px-4 py-2"
                >
                  Delete Account
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
      {updatedMsg && (
            <div
              className="w-[300px] border-black z-999 duration-700 shadow-lg fixed top-20 z-20 right-10 text-start mb-4 p-4 bg-green-100 text-green-800 rounded-lg"
            >
              <p>
                Changes Saved <strong>Successfully</strong>!!!
              </p>
            </div>
          )}
      <div className="min-w-3xl mx-auto p-4">
        <header className="mb-2">
          <h1 className="text-2xl font-bold text-gray-800 inter">Settings</h1>
          <p className="text-gray-600 Lexend text-[0.9rem] ">
            Manage your account preferences and blog settings
          </p>
        </header>

        <div className="space-y-6">
          
          <div className="bg-white rounded border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 Faculty">
                Profile Settings
              </h2>
              <div className="flex items-start justify-start overflow-hidden gap-2 mb-6">
                <img
                  src={currentUserOfBloggingApp.profilePic}
                  alt="Profile"
                  className="w-32 h-32 object-cover hover:scale-100 scale-125 border transition-all duration-300 rounded-sm mr-4"
                />
                <div>
                  <button
                    onClick={() => {
                      filePickerRef.current.click();
                    }}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded border border-gray-200 hover:bg-gray-200"
                  >
                    Change Photo{" "}
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleImageChange}
                      id=""
                      ref={filePickerRef}
                    />
                  </button>
                  <p className="text-green-600 mt-2">
                    {imageFileUrl && imageFileUploadProgress}
                  </p>
                  {imageFileUrl && imageFileUploadProgress && (
                    <p className="text-green-600 mt-2 text-xs">
                      {imageUploadMsg && <p>Click On Save Changes to Update.</p>}
                    </p>
                  )}
                </div>
              </div>
              {imageFileUploadProgressError && (
                <Alert color="failure">{imageFileUploadProgressError}</Alert>
              )}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Display Name
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                    defaultValue={currentUserOfBloggingApp.username}
                    onChange={handleChangeinForm}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bio
                  </label>
                  <textarea
                    className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                    rows="3"
                    id="BioGraph"
                    defaultValue={currentUserOfBloggingApp.BioGraph}
                    onChange={handleChangeinForm}
                  ></textarea>
                </div>
                
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="px-6 text-sm py-2 bg-gradient-to-t border-2 from-rose-600 to-red-600 shadow-md shadow-slate-400/50 text-white Funnel rounded transition-all duration-200"
                  >
                    Signout
                  </button>
                  <button
                    type="button"
                    onClick={handleProfileFormSubmit}
                    disabled={loading}
                    className="px-6 text-sm py-2 bg-gradient-to-t from-blue-600 to-sky-600 Funnel  text-white shadow-md shadow-slate-400/50 rounded transition-colors duration-200"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Account Settings
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    onChange={handleChangeinForm}
                    className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                    defaultValue={currentUserOfBloggingApp.email}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <button className="text-blue-600 hover:text-blue-700 text-sm">
                    Change Password
                  </button>
                </div>
              </div>
              <div className="flex mt-4 justify-between">
                <button
                  type="button"
                  onClick={handleDialogBox}
                  disabled={loading}
                  className="px-6 text-sm py-2 bg-red-600 Funnel border-2 hover:border-red-500 text-white hover:text-black rounded hover:bg-white transition-colors duration-300"
                >
                  Delete Account
                </button>
                <button
                  type="button"
                  onClick={handleProfileFormSubmit}
                  disabled={loading}
                  className="px-6 text-sm py-2 bg-sky-600 Funnel border-2 hover:border-blue-500 text-white hover:text-black rounded hover:bg-white transition-colors duration-300"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Blog Settings *(Available Soon)
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-700">
                      Email Notifications
                    </h3>
                    <p className="text-sm text-gray-500">
                      Receive emails about new comments and likes
                    </p>
                  </div>
                  <button
                    className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200"
                    role="switch"
                  >
                    <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-700">
                      Make Posts Public
                    </h3>
                    <p className="text-sm text-gray-500">
                      Allow your posts to appear in search results
                    </p>
                  </div>
                  <button
                    className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600"
                    role="switch"
                  >
                    <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-700">
                      Allow Comments
                    </h3>
                    <p className="text-sm text-gray-500">
                      Enable comments on your blog posts
                    </p>
                  </div>
                  <button
                    className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600"
                    role="switch"
                  >
                    <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              // type="button"
              // onClick={handleProfileFormSubmit}
              disabled={loading}
              className="px-6 py-2 bg-red-600 Funnel text-white hover:text-black rounded hover:bg-white transition-colors duration-300"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Settings;
