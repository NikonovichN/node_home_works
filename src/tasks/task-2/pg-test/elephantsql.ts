import { pgClient } from "../db-service";

pgClient.connect(function (err) {
  if (err) {
    return console.error("could not connect to postgres", err);
  }

  pgClient.query('SELECT NOW() AS "theTime"', function (err, result) {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows[0].theTime);
    pgClient.end();
  });
});
