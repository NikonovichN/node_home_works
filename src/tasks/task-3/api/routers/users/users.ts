import { Router } from "express";
import * as middlewares from "../../middlewares";

export const users = (app: Router) => {
  /**
   *  get methods
   */
  app.get("/user/:id", middlewares.findUserById, async (req, res) => {
    res.send({ user: req.user });
  });

  app.get("/users", middlewares.findUserById, async (req, res) => {
    res.send({ users: req.users });
  });

  app.get("/users-by-login", middlewares.getUsersByLogin, async (req, res) => {
    res.send({ users: req.users });
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
  app.delete("/user/:id", middlewares.deleteUser);
};
