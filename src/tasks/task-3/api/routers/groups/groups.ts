import { Router } from "express";
import * as middlewares from "../../middlewares";

export const groups = (app: Router) => {
  /**
   *  get methods
   */
  app.get("/groups/:id", middlewares.getGroupById, async (req, res) => {
    res.send(req.user);
  });

  app.get("/groups", middlewares.getAllGroups, async (req, res) => {
    res.send(req.users);
  });

  /**
   *  post methods
   */
  app.post("/groups/:id", [
    middlewares.groupValidator,
    middlewares.updateOrCreateGroup,
    async (req, res) => {
      if (req.isGroupUpdated) {
        res.status(200).send("Ok!");
      } else {
        res.status(404).send("Group not found!");
      }
    },
  ]);

  /**
   *  delete methods
   */
  app.delete("/groups/:id", middlewares.deleteGroup, async (req, res) => {
    if (req.isGroupDeleted) {
      res.status(200).send("Ok!");
    } else {
      res.status(404).send("Group not found!");
    }
  });
};
