import { User } from "../../../models/user";

export const getAllUsers = async (req, res, next) => {
  const users = await User.findAll();
  req.users = users;
  next();
};
