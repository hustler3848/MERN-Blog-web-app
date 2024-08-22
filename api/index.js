import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import authRoutes from './routes/auth.route.js'
import userRoutes from './routes/user.route.js'
import cookieParser from 'cookie-parser';
dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("DataBase connected succesfully")
}).catch((err)=> {
    console.log(err);
})
const app = express()
app.use(cors({
    origin: 'http://localhost:5173', // Replace with the actual origin of your frontend
    credentials: true // Allow cookies to be sent and received
}));
app.use(express.json())
app.use(cookieParser())
app.listen(3000, () => {
    console.log('Server is runnning on port 3000');
})

app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use((err, req, res, next)=>{
    const statusCode = err.StatusCode || 500;
    const message = err.message ;
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})
