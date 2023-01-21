import { Container } from "typedi";
import { UsersService } from "../../../services/Users";

export const updateOrCreateUser = async (req, res, next) => {
  const userServiceInstance = Container.get(UsersService);
  req.users = await userServiceInstance.updateOrCreateUser(
    req.params.id,
    req.body
  );

  next();
};
