import express from 'express'
import { getPosts,createPost } from "../controllers/post.controller.js";   
import { verifyToken } from '../utils/verifyUser.js'
import { getPostsByUser } from '../controllers/post.controller.js';

const router = express.Router()
router.get('/getposts', getPosts)
router.post("/create", verifyToken, createPost);
router.get("/getPostsByUser/:userId", getPostsByUser);

export default router

