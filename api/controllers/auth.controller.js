import User from '../models/user-model.js'
import bcryptjs from 'bcryptjs'
import dotenv from 'dotenv'
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken'
dotenv.config()

export const signup = async (req, res, next) => {
    console.log(req.body);
    // res.json({message: "welcome to register"})
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        next(errorHandler(400, "All fields are required"))
    }
    console.log("password: ", password);
    const hashedPassword = await bcryptjs.hash(password, 10)
    console.log("Hashed password: ", hashedPassword);
    const newUser = new User({ username: username, email: email, password: hashedPassword });
    try {
        await newUser.save();
        res.json('Signup Successfull')
        console.log(req.body)
    } catch (error) {
        console.log(error)
    }

}


