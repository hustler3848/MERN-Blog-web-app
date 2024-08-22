import express from 'express'
import { updateUser } from '../controllers/update.controller.js';
import { verifyToken } from '../utils/verifyUser.js'
import { deleteUser } from '../controllers/deleteUser.controller.js';

const router = express.Router()

router.put('/update/:userId', verifyToken,updateUser);
router.delete('/delete/:userId', verifyToken, deleteUser)
export default router