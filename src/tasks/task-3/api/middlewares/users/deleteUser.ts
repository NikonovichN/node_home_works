import { User } from "../../../models/user";

export const deleteUser = async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findOne({ where: { id } });

  if (user) {
    await User.update({ is_deleted: true }, { where: { id } });

    res.status(200).send("Ok!");
  } else {
    res.status(404).send("User not found!");
  }

  next();
};
