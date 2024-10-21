import express from 'express'
import { getPosts,createPost } from "../controllers/post.controller.js";   
import { verifyToken } from '../utils/verifyUser.js'
import { get } from 'http'
import { create } from 'domain';

const router = express.Router()
router.get('/getposts', getPosts)
router.post("/create", verifyToken, createPost);

export default router

