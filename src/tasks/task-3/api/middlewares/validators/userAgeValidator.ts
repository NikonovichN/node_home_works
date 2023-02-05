import { badRequestCallback } from "./helpers";

export const userAgeValidator = (req, res, next) => {
  const { age } = req.body;

  if (age < 4 || age > 130) {
    badRequestCallback(res, "Bad request! Please enter correct age!");
  } else {
    next();
  }
};
