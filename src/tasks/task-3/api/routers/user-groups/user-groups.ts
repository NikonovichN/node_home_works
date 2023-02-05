import { Router } from "express";
import * as middlewares from "../../middlewares";

export const userGroups = (app: Router) => {
  /**
   *  get methods
   */
  app.get("/user-groups", middlewares.getUserGroupsTable, async (req, res) => {
    res.send(req.userGroups);
  });

  /**
   *  post methods
   */
  app.post(
    "/user-groups/add",
    middlewares.addUsersToGroups,
    async (req, res) => {
      res.send(req.usersToGroups);
    }
  );

  /**
   *  delete methods
   */
};
