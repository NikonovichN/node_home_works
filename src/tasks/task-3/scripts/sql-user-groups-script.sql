/**
  * Used on the official elephantsql site
*/

CREATE TABLE user_groups_table (
  "nameGroup" varchar(255) NOT NULL,
  "nameUser" varchar(255) NOT NULL,
  PRIMARY KEY ("groupId", "userId"),
  "groupId" INTEGER REFERENCES "groups_table" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  "userId" INTEGER REFERENCES "user_table" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
