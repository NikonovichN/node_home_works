import { Container } from "typedi";
import { UserGroupsService } from "../../../services";

export const getUserGroupsTable = async (req, res, next) => {
  const userGroupsServiceInstance = Container.get(UserGroupsService);
  req.userGroups = await userGroupsServiceInstance.getUserGroupsTable();

  next();
};
