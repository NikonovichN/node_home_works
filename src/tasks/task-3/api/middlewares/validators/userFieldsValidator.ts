import { badRequestCallback, forgotMessage } from "./helpers";

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
