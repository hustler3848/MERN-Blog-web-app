import express from 'express'
import {  continueWithGoogle, signup } from '../controllers/auth.controller.js';
import { login } from '../controllers/login.controller.js';
const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.post('/google', continueWithGoogle)
export default router;