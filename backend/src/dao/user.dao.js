import User from "../models/user.model.js";

export const findUserByEmail = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

export const createUser = async (username, password, email) => {
  const newUser = new User({
    username: username,
    email: email,
    password: password,
  });
  await newUser.save();
  return newUser;
};
