import { Container } from "typedi";
import { UsersService } from "../../../services/Users";

export const deleteUser = async (req, res, next) => {
  const userServiceInstance = Container.get(UsersService);
  req.isUserDeleted = await userServiceInstance.deleteUser(req.params.id);

  next();
};
