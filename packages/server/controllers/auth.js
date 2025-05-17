import ErrorResponse from "../utils/ErrorResponse.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Sign Up
export const signUp = asyncHandler(async (req, res) => {});

// Sign In
export const signIn = asyncHandler(async (req, res) => {});

// Log Out
export const logOut = asyncHandler(async (req, res) => {});

// Generate JWT
const generateJWT = (res, userId) => {
    const secret = process.env.JWT_SECRET;
    const payload = { userId: userId, userRole: userRole };
    const tokenOptions = { expiresIn: "6d" };
    const token = jwt.sign(payload, secret, tokenOptions);
    const isProduction = process.env.NODE_ENV === "production";
    const cookieOptions = {
        httpOnly: true,
        sameSite: isProduction ? "None" : "Lax",
        secure: isProduction,
    };
    res.cookie("authToken", token, cookieOptions);
};
