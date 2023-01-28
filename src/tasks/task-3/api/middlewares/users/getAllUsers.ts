import { Container } from "typedi";
import { UsersService } from "../../../services";

export const getAllUsers = async (req, res, next) => {
  const userServiceInstance = Container.get(UsersService);
  req.users = await userServiceInstance.getAllUsers();

  next();
};
