import PasswordValidator from "password-validator";
import { badRequestCallback } from "./helpers";

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
