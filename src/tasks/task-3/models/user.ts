import { DataTypes, Model, InferAttributes } from "sequelize";
import Container from "typedi";
import { sequelize } from "../loaders/pgelephant";

export interface IUser extends Model<InferAttributes<IUser>, IUser> {
  id: number;
  login: string;
  password: string;
  age: number;
  is_deleted: boolean;
  created_at: string;
  updated_at: string;
}

export const User = sequelize.define<IUser>(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    login: DataTypes.TEXT,
    password: DataTypes.TEXT,
    age: DataTypes.INTEGER,
    is_deleted: DataTypes.BOOLEAN,
    created_at: DataTypes.TEXT,
    updated_at: DataTypes.TEXT,
  },
  {
    tableName: "user_table",
    timestamps: false,
  }
);

Container.set("userModel", User);
