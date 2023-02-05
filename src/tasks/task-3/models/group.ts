import { DataTypes, Model, InferAttributes } from "sequelize";
import Container from "typedi";
import { sequelize } from "../loaders/pgelephant";

export type Permission = "READ" | "WRITE" | "DELETE" | "SHARE" | "UPLOAD_FILES";

export const permissionTypes = [
  "READ",
  "WRITE",
  "DELETE",
  "SHARE",
  "UPLOAD_FILES",
];

export interface IGroup extends Model<InferAttributes<IGroup>, IGroup> {
  id: number;
  name: string;
  permissions: Array<Permission>;
}

export const Group = sequelize.define<IGroup>(
  "groups",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.TEXT,
    permissions: DataTypes.ARRAY(DataTypes.TEXT),
  },
  {
    tableName: "groups_table",
    timestamps: false,
  }
);

Container.set("groupModel", Group);
