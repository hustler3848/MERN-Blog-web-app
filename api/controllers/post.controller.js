import Posts from "../models/post-model.js";

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




