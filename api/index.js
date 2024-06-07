import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose';
// import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("DataBase connected succesfully")
}).catch((err)=> {
    console.log(err);
})
const app = express()

app.use(express.json())
app.listen(4000, () => {
    console.log('Server is runnning on port 3000');
})

// app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)