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


export const continueWithGoogle = async (req, res, next) => {
    const {googleUserName, email, imageUrl} = req.body;
    try {
        const user = await User.findOne({email});
        if(user){
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
            const {password, ...rest} = user._doc;
            res.status(200).cookie('access_token', token, {
                httpOnly: true,
            }).json(rest);
        }else{
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hash(generatedPassword, 10);
            const newUser = new User({
                username: googleUserName.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
                email,
                password: hashedPassword,
                profilePic: imageUrl,
            })
            await newUser.save();
            console.log(req.body);
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
            const {password, ...rest} = user._doc;
            res.status(200).cookie('access_token', token, {
                httpOnly: true,
            }).json(rest);
        }
    } catch (error) {
        next(error)
    }
}

