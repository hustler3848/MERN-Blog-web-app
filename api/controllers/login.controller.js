import dotenv from "dotenv";
import User from "../models/user-model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
dotenv.config();
import { errorHandler } from "../utils/error.js";

export const login = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password || username === "" || password === "") {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }
  try {
    const validUser = await User.findOne({ username });
    if (!validUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const passwordValid = bcryptjs.compareSync(password, validUser.password);
    if (!passwordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid password" });
    }

    const token = jwt.sign({ id: validUser._id, isAdmin: validUser.isAdmin }, process.env.JWT_SECRET, {
      expiresIn: "24h", // Token expires in 24 hour
    });
    const { password: pass, ...rest } = validUser._doc;
    res.cookie("access_token", token, {
      httpOnly: true,
      secure: false,
    });
    console.log("Token is: ", token);
    res.status(200).json({
      success: true,
      message: "Login successful",
      token: token,
      user: rest,
    });
    console.log(rest);

  } catch (error) {
    next(error);
  }
};
