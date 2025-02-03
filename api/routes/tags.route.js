import express from 'express'
import { getTags } from '../controllers/tags.controller.js';
const router = express.Router();

// Fetch all unique tags
router.get('/tags', getTags);

export default router