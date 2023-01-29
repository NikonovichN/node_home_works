import { Model, InferAttributes, DataTypes } from "sequelize";
import Container from "typedi";
import { sequelize } from "../loaders/pgelephant";
import { Group, User } from "./index";

export interface IUserGroups
  extends Model<InferAttributes<IUserGroups>, IUserGroups> {
  nameGroup: string;
  nameUser: string;
  groupId: number;
  userId: number;
}

export const UserGroups = sequelize.define<IUserGroups>(
  "user-groups",
  {
    nameGroup: DataTypes.TEXT,
    nameUser: DataTypes.TEXT,
    groupId: {
      type: DataTypes.INTEGER,
      references: {
        model: Group,
        key: "id",
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    tableName: "user_groups_table",
    timestamps: false,
  }
);

User.belongsToMany(Group, { through: "user-groups" });
Group.belongsToMany(User, { through: "user-groups" });

Container.set("userGroupsModel", UserGroups);
