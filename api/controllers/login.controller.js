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
            httpOnly: true,
            secure: true,
            sameSite: 'None',
        });
        console.log("Token is: ", token);
        res.status(200).json({
            message: 'Login successful',
            id: validUser._id
        });
        console.log(validUser._id);
    } catch (error) {
        next(error)
    }
}