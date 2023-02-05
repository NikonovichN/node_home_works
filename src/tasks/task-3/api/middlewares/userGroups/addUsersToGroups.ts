import { Container } from "typedi";
import { UserGroupsService } from "../../../services";

export const addUsersToGroups = async (req, res, next) => {
  const userGroupsServiceInstance = Container.get(UserGroupsService);
  await userGroupsServiceInstance.addUsersToGroup(
    req.body.groupId,
    req.body.userId
  );

  next();
};
