import express from "express";
import { Op } from "sequelize";

import { User } from "./models";
import {
  userAgeValidator,
  userFieldsValidator,
  passwordValidator,
} from "./validators";

const port = 3000;
const app = express();

/**
 *  use methods
 */
app.use(express.json());

/**
 *  get methods
 */
app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ where: { id } });

  res.send(user);
});

app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

app.get("/users-by-login", async (req, res) => {
  const { limit, loginSubString } = req.body;

  const filteredUsers = await User.findAll({
    limit,
    order: [["login", "DESC"]],
    where: {
      login: {
        [Op.like]: `%${loginSubString}%`,
      },
    },
  });

  res.send(filteredUsers);
});

/**
 *  post methods
 */
app.post("/user/:id", [
  userFieldsValidator,
  passwordValidator,
  userAgeValidator,
  async (req, res) => {
    const { id } = req.params;

    const [, created] = await User.findOrCreate({
      where: { id },
      defaults: req.body,
    });

    if (!created) {
      await User.update(req.body, { where: { id } });
    }

    res.status(200).send("Ok!");
  },
]);

/**
 *  delete methods
 */
app.delete("/user/:id", async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({ where: { id } });

  if (user) {
    await User.update({ is_deleted: true }, { where: { id } });

    res.status(200).send("Ok!");
  } else {
    res.status(404).send("User not found!");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
