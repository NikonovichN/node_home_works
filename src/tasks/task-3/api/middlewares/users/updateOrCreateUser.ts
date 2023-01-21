import { User } from "../../../models/user";

export const updateOrCreateUser = async (req, res, next) => {
  const { id } = req.params;

  const [, created] = await User.findOrCreate({
    where: { id },
    defaults: req.body,
  });

  if (!created) {
    await User.update(req.body, { where: { id } });
  }

  next();
};
