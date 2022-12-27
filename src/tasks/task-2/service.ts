import express from "express";
import { User } from "../..";
import { defaultUsers } from "./default-user";

const port = 3000;
const app = express();

const users: Array<User> = [...defaultUsers];

/**
 *  use methods
 */
app.use(express.json());

/**
 *  get methods
 */
app.get("/user/:id", (req, res) => {
  const user = users.find((usr) => usr.id === req.params.id) ?? "User not find";

  res.send(user);
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users-by-login", (req, res) => {
  const { limit, loginSubString } = req.body;

  const filteredUsers = users
    .filter((user) =>
      user.login
        .toLocaleLowerCase()
        .includes(loginSubString.toLocaleLowerCase())
    )
    .sort()
    .slice(0, limit);

  res.send(filteredUsers);
});

/**
 *  post methods
 */
app.post("/user/:id", (req, res) => {
  const index = users.findIndex((usr) => usr.id === req.params.id);

  if (index >= 0) {
    users[index] = req.body;
  } else {
    users.push(req.body);
  }

  res.status(500).send("Ok!");
});

/**
 *  delete methods
 */
app.delete("/user/:id", (req, res) => {
  const index = users.findIndex((usr) => usr.id === req.params.id);

  if (index >= 0) {
    const user = users[index];
    user.isDeleted = true;
    users[index] = user;

    res.status(200).send("Ok!");
  } else {
    res.status(404).send("User not found!");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
