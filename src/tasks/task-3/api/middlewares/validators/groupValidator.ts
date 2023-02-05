import { permissionTypes } from "../../../models";
import { badRequestCallback } from "./helpers";

export const groupValidator = (req, res, next) => {
  const { name, permissions } = req.body;

  if (name === String) {
    badRequestCallback(res, "Bad request! Please enter correct name of group!");
  } else if (!Array.isArray(permissions)) {
    badRequestCallback(
      res,
      `Bad request! Please add correct permissions of group!`
    );
  } else if (permissions.length === 0 || isCorrectPermissions(permissions)) {
    const reason = `Bad request! Please add correct permissions for group! Permissions can be: \n ${permissionTypes.join(
      "\n"
    )}`;

    badRequestCallback(res, reason);
  } else {
    next();
  }
};

const isCorrectPermissions = (permissions: Array<string>): boolean => {
  return permissions
    .map((permission) => permissionTypes.includes(permission))
    .includes(false);
};
