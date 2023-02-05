import { Router } from "express";
import { groups } from "./routers/groups";
import { userGroups } from "./routers/user-groups";
import { users } from "./routers/users";

export * from "./middlewares";

export default () => {
  const app = Router();
  users(app);
  groups(app);
  userGroups(app);
  return app;
};
