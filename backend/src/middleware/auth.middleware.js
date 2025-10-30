import { VerifyToken } from "../utils/helper.js";
import User from "../models/user.model.js";

export const AuthMiddleware = async (req, res, next) => {
    const token = req.cookies.Accepttoken;
    if (!token) {
        return res.status(401).send("Access Denied. No Token Provided.");
    }
    try {
        const verified = VerifyToken(token);
        const user = await User.findById(verified.id);
        if (!user) {
            return res.status(401).send("Access Denied. User not found.");
        }
        req.user = user;
        next();
    } catch (err) {
        res.status(400).send("Invalid Token.");
    }
}
