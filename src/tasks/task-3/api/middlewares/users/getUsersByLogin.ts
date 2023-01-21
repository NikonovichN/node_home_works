import { Op } from "sequelize";

import { User } from "../../../models/user";

export const getUsersByLogin = async (req, res, next) => {
  const { limit, loginSubString } = req.body;

  const users = await User.findAll({
    limit,
    order: [["login", "DESC"]],
    where: {
      login: {
        [Op.like]: `%${loginSubString}%`,
      },
    },
  });

  req.users = users;

  next();
};
