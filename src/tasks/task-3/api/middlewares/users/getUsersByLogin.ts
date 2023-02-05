import { Container } from "typedi";
import { UsersService } from "../../../services";

export const getUsersByLogin = async (req, res, next) => {
  const { limit, loginSubString } = req.body;

  const userServiceInstance = Container.get(UsersService);
  req.users = await userServiceInstance.getUsersByLogin(limit, loginSubString);

  next();
};
