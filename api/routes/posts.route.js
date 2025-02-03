import express from 'express'
import { getPosts,createPost, getPostBySlug, increaseView } from "../controllers/post.controller.js";   
import { verifyToken } from '../utils/verifyUser.js'
import { getPostsByUser } from '../controllers/post.controller.js';
import { recentArticles } from '../controllers/post.controller.js';

const router = express.Router()
router.get('/getposts', getPosts)
router.post("/create", verifyToken, createPost);
router.get("/getPostsByUser/:userId", getPostsByUser);
router.get("/:slug", getPostBySlug); // Fetch post by slug
router.get("/recent-posts", recentArticles)
router.patch("/:slug/views", increaseView)


export default router

