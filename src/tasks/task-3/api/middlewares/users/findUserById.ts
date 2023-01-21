import { User } from "../../../models/user";

export const findUserById = async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findOne({ where: { id } });
  req.user = user;
  next();
};
