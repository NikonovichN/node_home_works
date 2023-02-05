// eslint-disable-next-line @typescript-eslint/no-var-requires
// const pg = require("pg");
import { Sequelize } from "sequelize";

const conString =
  "postgres://tcxhtlqb:nQDQD7xTRplxmBitr1q3aq5QbTpNPZUp@rogue.db.elephantsql.com/tcxhtlqb";
// export const pgClient = pg.Client(conString);

export const sequelize = new Sequelize(conString);
