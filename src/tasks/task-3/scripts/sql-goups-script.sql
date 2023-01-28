/**
  * Used on the official elephantsql site
*/

CREATE SEQUENCE group_id START WITH 1;

CREATE TABLE groups_table (
  id int NOT NULL DEFAULT nextval('group_id'),
  name varchar(255) NOT NULL,
  permissions varchar(255)[] NOT NULL
);


INSERT INTO groups_table (name, permissions) VALUES 
('Administrator', ARRAY['READ', 'WRITE', 'DELETE', 'SHARE', 'UPLOAD_FILES']),
('Moderator', ARRAY['READ', 'WRITE', 'SHARE', 'UPLOAD_FILES']),
('Writer', ARRAY['READ', 'WRITE', 'SHARE', 'UPLOAD_FILES']),
('Reader', ARRAY['READ', 'SHARE']);
