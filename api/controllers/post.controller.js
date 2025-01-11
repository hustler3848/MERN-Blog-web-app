import Posts from "../models/post-model.js";
import mongoose from "mongoose";

export const createPost = async (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(401).json({ message: "You are not Admin" });
  }
  if (!req.body.postTitle || !req.body.postDescription) {
    return res.status(400).json({ message: "Title and content are required" });
  }
  const slug = req.body.postTitle
    .toLowerCase()
    .split(" ")
    .join("-")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, "-");
  const newPost = new Posts({
    ...req.body,
    slug
  });
  try {
    const savedPost = await newPost.save();
    res.status(201).json({
      success: true,
      post: savedPost,
    });
    console.log(savedPost);
    
  } catch (error) {
    // next(error);
    console.log(error);
    
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Posts.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getPostsByUser = async (req, res) => {
  const userId = req.params.userId;  
  try {
    const { userId } = req.params;

    console.log("Received UserID:", userId);
    console.log("Type of UserID:", typeof userId);

    const userPosts = await Posts.find({ user_id: userId.trim() });

    console.log("Query Sent to MongoDB:", { user_id: userId.trim() });
    console.log("Fetched Posts:", userPosts);

    if (userPosts.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No posts found for this user.",
      });
    }

    res.status(200).json({
      success: true,
      message: "User posts fetched successfully.",
      data: userPosts,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




