import { Container } from "typedi";
import { GroupService } from "../../../services";

export const deleteGroup = async (req, res, next) => {
  const groupServiceInstance = Container.get(GroupService);
  req.isGroupDeleted = await groupServiceInstance.deleteGroup(req.params.id);

  next();
};
