import PasswordValidator from "password-validator";
import { forgotMessage, badRequestCallback } from "./helpers";

export const userFieldsValidator = (req, res, next) => {
  const parsedBody = req.body;

  if (!parsedBody.login) {
    badRequestCallback(res, forgotMessage("login"));
  } else if (!parsedBody.password) {
    badRequestCallback(res, forgotMessage("password"));
  } else if (!parsedBody.age) {
    badRequestCallback(res, forgotMessage("age"));
  } else if (parsedBody.is_deleted === undefined) {
    badRequestCallback(res, forgotMessage("is_deleted"));
  } else next();
};

export const passwordValidator = (req, res, next) => {
  const { password } = req.body;

  const schema = new PasswordValidator()
    .is()
    .min(8)
    .is()
    .max(100)
    .has()
    .uppercase()
    .has()
    .lowercase()
    .has()
    .digits(2)
    .has()
    .not()
    .spaces()
    .is()
    .not()
    .oneOf(["Password123"]);

  const validated = schema.validate(password, { details: true });

  if (validated === true || (Array.isArray(validated) && !validated.length)) {
    next();
  } else {
    const reason: string = Array.isArray(validated)
      ? validated.map((value) => value["message"]).join("\n")
      : "Something went wrong!";

    badRequestCallback(
      res,
      "Password doesn't match next condition(s):\n" + reason
    );
  }
};

export const userAgeValidator = (req, res, next) => {
  const { age } = req.body;

  if (age < 4 || age > 130) {
    badRequestCallback(res, "Bad request! Please enter correct age!");
  } else {
    next();
  }
};
