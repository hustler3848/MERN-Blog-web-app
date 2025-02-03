import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import postsRoutes from './routes/posts.route.js';
import tagsRoute from './routes/tags.route.js'
import commentRoutes from './routes/comment.route.js'
import cookieParser from 'cookie-parser';

dotenv.config();


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("DataBase connected succesfully")
}).catch((err)=> {
    console.log(err);
})

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api', tagsRoute)
app.use('/api/comment', commentRoutes)
app.use((err, req, res, next)=>{
    const statusCode = err.StatusCode || 500;
    const message = err.message ;
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});