import { DataTypes } from "sequelize";
import { sequelize } from "../loaders/pgelephant";

export const User = sequelize.define(
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
