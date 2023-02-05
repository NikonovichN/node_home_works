// eslint-disable-next-line @typescript-eslint/no-var-requires
// const pg = require("pg");
import { Sequelize } from "sequelize";
import config from "../config";

export const sequelize = new Sequelize(config.dbClient);
