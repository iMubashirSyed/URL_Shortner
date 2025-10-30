import { nanoid } from "nanoid"
import { CookieOptions } from "../config/config.js";
import jwt from "jsonwebtoken";

export const generateNanoId = (length) => {
    return nanoid(length);
}

export const SignToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5m' });
}

export const VerifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}