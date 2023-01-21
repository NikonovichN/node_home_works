import { Router } from "express";
import * as middlewares from "../../middlewares";

export const users = (app: Router) => {
  /**
   *  get methods
   */
  app.get("/user/:id", middlewares.findUserById, async (req, res) => {
    res.send(req.user);
  });

  app.get("/users", middlewares.getAllUsers, async (req, res) => {
    res.send(req.users);
  });

  app.get("/users-by-login", middlewares.getUsersByLogin, async (req, res) => {
    res.send(req.users);
  });

  /**
   *  post methods
   */
  app.post("/user/:id", [
    middlewares.userFieldsValidator,
    middlewares.passwordValidator,
    middlewares.userAgeValidator,
    middlewares.updateOrCreateUser,
    async (req, res) => {
      res.status(200).send("Ok!");
    },
  ]);

  /**
   *  delete methods
   */
  app.delete("/user/:id", middlewares.deleteUser, async (req, res) => {
    if (req.isUserDeleted) {
      res.status(200).send("Ok!");
    } else {
      res.status(404).send("User not found!");
    }
  });
};
