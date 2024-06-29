import { errorHandler } from "../utils/error.js";
import User from "../models/user-model.js";

export const deleteUser = async (req, res, next ) => {
    console.log(req.user);
    console.log(req.user.id);
    if(req.user.id !== req.params.userId){
        return next(errorHandler(403, 'you are not allowed to delete this user'));
    } 
    try {
        await User.findByOneAndDelete(req.params.userId)
        res.status(200).json({message: "User deleted"})
    } catch (error) {
        next(error)
    }
}