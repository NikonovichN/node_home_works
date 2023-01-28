import { Router } from "express";
import { groups } from "./routers/groups";
import { users } from "./routers/users";

export default () => {
  const app = Router();
  users(app);
  groups(app);
  return app;
};
