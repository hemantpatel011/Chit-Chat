import bcrypt from "bcrypt";
import { generateAuthToken } from "../config/auth.js";
import User from "../models/userModel.js";

export const userRegister = async (req, res, next) => {
  const { fullName, email, phone } = req.body;

  // Validate Input
  if (!fullName || !email || !phone) {
    const error = new Error("All fields are required");
    error.statusCode = 400;
    return next(error);
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("User already exists");
      error.statusCode = 409;
      return next(error);
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10); // here 10 automatically generates a salt (salt is a random string)

    const profilePicture = `https://placehold.co/400X400?text=${fullName
      .charAt(0)
      .toUpperCase()}`;

    // Create New User
    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
      profilePicture,
    });

    if (!newuser) {
      const error = new Error("User registration failed");
      error.statusCode = 500;
      return next(error);
    }

    res.status(201).json({
      message: "User Registration Successful",
    });
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

export const userLogin = async (req, res, next) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    const error = new Error("Email and password are required");
    error.statusCode = 400;
    return next(error);
  }
  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      return next(error);
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      const error = new Error("Invalid password");
      error.statusCode = 401;
      return next(error);
    }
    // Create JWT
    generateAuthToken(user._id, res);

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profilePicture: user.profilePicture,
      },
    });
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

export const userLogout = async(req, res, next) => {
   try{
      res.cookie("authToken","",{
        httpOnly: true,
        expires: new Date(0), //Set expiration to the past
      });
      //send response
      res.status(200).json({
        message: "Logout Successful",
      });

   }catch(error){
    error.statusCode = 500;
    next(error);
   }
};
