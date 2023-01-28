import { Container } from "typedi";
import { GroupService } from "../../../services";

export const getAllGroups = async (req, res, next) => {
  const groupServiceInstance = Container.get(GroupService);
  req.users = await groupServiceInstance.getAllGroups();

  next();
};
