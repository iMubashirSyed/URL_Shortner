import { LoginUser, RegisterUser } from "../services/auth.service.js";

export const registerUser = async (req, res) => {
    const { username, password, email } = req.body;
    const token = await RegisterUser( username, password, email );
    res.cookie("Accepttoken", token, { httpOnly: true });
    res.send("User registered");
    }

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const token = await LoginUser( email, password );
    res.cookie("Accepttoken", token, { httpOnly: true });
    res.send("User logged in");
}
