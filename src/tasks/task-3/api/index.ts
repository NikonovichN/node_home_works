import { Router } from "express";
import { users } from "./routers/users";

export default () => {
  const app = Router();
  users(app);
  return app;
};
