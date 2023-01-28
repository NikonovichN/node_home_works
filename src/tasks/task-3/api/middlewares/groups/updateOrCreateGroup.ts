import { Container } from "typedi";
import { GroupService } from "../../../services";

export const updateOrCreateGroup = async (req, res, next) => {
  const groupServiceInstance = Container.get(GroupService);
  req.isGroupUpdated = await groupServiceInstance.updateOrCreateGroup(
    req.params.id,
    req.body
  );

  next();
};
