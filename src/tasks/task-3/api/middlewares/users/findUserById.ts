import { Container } from "typedi";
import { UsersService } from "../../../services";

export const findUserById = async (req, res, next) => {
  const userServiceInstance = Container.get(UsersService);
  req.user = await userServiceInstance.findUserById(req.params.id);

  next();
};
