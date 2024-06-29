import { errorHandler } from "../utils/error.js";
import User from "../models/user-model.js";
import bcryptjs from 'bcryptjs'

export const updateUser = async (req, res, next) => {
    console.log(req.user);
    console.log(req.user.id);
    if(req.user.id !== req.params.userId){
        return next(errorHandler(403, 'you are not allowed to update this user'));
    }
    if(req.body.password){
        if(req.body.password.length < 6){
            return next(errorHandler(400, 'password must be at least 6 characters'));
        }
        req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    if(req.body.bioGraph){
        if(req.body.bio.length > 200){
            return next(errorHandler(400, 'Bio should be less than 200 words'));
        }
    }
    if(req.body.username){
        if(req.body.username.length < 5 || req.body.username.length > 20){
            return next(errorHandler(400, 'username must be between 5 and 20 characters'));
        }
        if(req.body.username !== req.body.username.toLowerCase()){
            return next(errorHandler(400, 'User name must be lowercase'));
        }
        if(!req.body.username.match(/^[a-zA-Z0-9]+$/)){
            return next(errorHandler(400, 'Username can only contain letters and numbers'));
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.userId, {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    bio: req.body.bio
                },
            }, {new: true});
            const {password, ...rest} = updatedUser._doc;
            res.status(200).json(rest)
        } catch (error) {
            next(error)
        }
    }
}
