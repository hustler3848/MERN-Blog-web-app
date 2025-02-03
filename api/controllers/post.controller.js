import Posts from "../models/post-model.js";
import Comment from "../models/comment-model.js";

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
    const postSlug = savedPost.slug;
    res.status(201).json({
      success: true,
      postSlug
    });
    console.log(savedPost);

  } catch (error) {
    // next(error);
    console.log(error);

  }
};
export const getPosts = async (req, res) => {
  try {
    const posts = await Posts.find({})
      .sort({ createdAt: -1 })
      .limit(7)
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getPostsByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const userPosts = await Posts.find({ user_id: userId.trim() })
    .sort({ createdAt: -1 })

    if (userPosts.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No posts found for this user.",
      });
    }

    // Again Querying DB for the number of comments in each userPosts and then mapping them into the userPosts object and named the new object as postsWithCommentCounts and sending that object to frontend
    const postsWithCommentCounts = await Promise.all(
      userPosts.map(async (post) => {
        const commentCount = await Comment.countDocuments({ post: post._id }); 
        return { ...post.toObject(), commentCount }; 
      })
    );

    res.status(200).json({
      success: true,
      message: "User posts with comment counts fetched successfully.",
      data: postsWithCommentCounts,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPostBySlug = async (req, res, next) => {
  try {
    const post = await Posts.findOne({ slug: req.params.slug });
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    const commentCount = await Comment.countDocuments({ post: post._id });

    res.json({
      success: true,
      data: {
        post,
        commentCount,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const recentArticles = async (req, res) => {
  try {
    console.log('Fetching recent articles...');
    const recentArticles = await Posts.find({})
      .sort({ createdAt: -1 })
      .limit(1)
    // .select('postTitle tags createdAt thumbnail');

    console.log('Recent articles:', recentArticles);

    // if (recentArticles.length === 0) {
    //   return res.status(404).json({ message: 'Post not found' });
    // }

    const formattedArticles = recentArticles.map((article) => ({
      title: article.postTitle,
      tag: article.tags[0],
      date: article.createdAt,
      thumbnail: article.thumbnail,
    }));

    res.json({ success: true, data: formattedArticles });
  } catch (error) {
    console.error('Error fetching recent articles:', error);
    res.status(500).json({ success: false, error: error.message });
  }
}

export const increaseView = async (req, res) => {
  try {
    const { slug } = req.params.slug
    const post = await Posts.findOneAndUpdate(
      // Case-insensitive slug match
      { slug: { $regex: new RegExp(`^${req.params.slug}$`, "i") } },
      { $inc: { views: 1 } },
      { new: true }
    );
    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }
    res.json({ success: true, views: post.views });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
export const toggleLike = async (req, res) => {
  try {
    const { slug } = req.params;
    const { like } = req.body; // Getting `like: true` or `like: false` from frontend

    const post = await Posts.findOne({ slug });
    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    const updatedPost = await Posts.findOneAndUpdate(
      { slug },
      { $inc: { likes: like ? 1 : -1 } },
      { new: true }
    );

    res.json({ success: true, likes: updatedPost.likes });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}



