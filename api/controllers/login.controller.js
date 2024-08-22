import User from '../models/user-model.js'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { errorHandler } from '../utils/error.js';

export const login = async (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password || username === '' || password === '') {
        next(errorHandler(400, "All fields are required"))
    }

    try {
        const validUser = await User.findOne({ username })
        if (!validUser) {
            next(errorHandler(404, "User Not found"))
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if (!validPassword) {
            return next(errorHandler(400, "Invalid Password"))
        }

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET); 
const { password: pass, ...rest } = validUser._doc;

// Set the JWT token in a cookie and send a JSON response
res.cookie('access_token', token, {
    httpOnly: true, // Ensures the cookie is sent only in HTTP requests
    secure: process.env.NODE_ENV === 'production', // Ensure cookie is sent only over HTTPS in production
    sameSite: 'strict', // Helps prevent CSRF attacks
});

res.status(200).json({
    message: 'Login successful',
    user: rest // Optionally send user data without password
});

        console.log(validUser._id);
        
    } catch (error) {
        next(error)
    }
}