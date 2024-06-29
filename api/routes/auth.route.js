import express from 'express'
import {  continueWithGoogle, signup } from '../controllers/auth.controller.js';
import { updateUser } from '../controllers/update.controller.js';
import { login } from '../controllers/login.controller.js';
import { verifyToken } from '../utils/utils.js';
import { deleteUser } from '../controllers/deleteUser.controller.js';
const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.post('/google', continueWithGoogle)
router.put('/update/:userId', verifyToken, updateUser)
router.delete('/delete/:userId', verifyToken, deleteUser)
export default router;