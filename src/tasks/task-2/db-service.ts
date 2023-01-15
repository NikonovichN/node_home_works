// eslint-disable-next-line @typescript-eslint/no-var-requires
const pg = require("pg");

const conString =
  "postgres://tcxhtlqb:nQDQD7xTRplxmBitr1q3aq5QbTpNPZUp@rogue.db.elephantsql.com/tcxhtlqb";
export const pgClient = pg.Client(conString);
