import { createUser, findUserByEmail } from '../dao/user.dao.js';
import jwt from 'jsonwebtoken';
import { SignToken } from '../utils/helper.js';

export const RegisterUser = async (username, passowrd, email) => {
    const user = await findUserByEmail(email);   
    if (user) throw new Error('User already exists');
    const newUser = await createUser(username, passowrd, email);
    let token = await SignToken({ id: newUser._id})
    return token;
}

export const LoginUser = async (email, password) => {
    const user = await findUserByEmail(email);   
    if (!user) throw new Error('User does not exist');
    if (user.password !== password) throw new Error('Invalid password');
    let token = SignToken({ id: user._id})
    return token
}