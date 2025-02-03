import express from 'express'
import { deleteComment, getComments, postComment } from '../controllers/comment.controller.js'
import { verifyToken } from '../utils/verifyUser.js'
const router = express.Router()

router.get('/get/:postId',getComments)
router.post('/post', verifyToken, postComment)
router.delete('/delete', verifyToken, deleteComment)

export default router