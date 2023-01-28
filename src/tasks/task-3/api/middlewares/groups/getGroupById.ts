import { Container } from "typedi";
import { GroupService } from "../../../services";

export const getGroupById = async (req, res, next) => {
  const groupServiceInstance = Container.get(GroupService);
  req.user = await groupServiceInstance.findGroupById(req.params.id);

  next();
};
