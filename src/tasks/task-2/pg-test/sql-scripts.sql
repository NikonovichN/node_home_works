/**
  * Used on the official elephantsql site
*/

CREATE SEQUENCE user_id START WITH 1;

CREATE TABLE user_table (
  id int NOT NULL DEFAULT nextval('user_id'),
  login varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  age int NOT NULL,
  isDeleted bit NOT NULL,
  created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


INSERT INTO user_table (login, password, age, isDeleted) VALUES 
('CoolUser', '123', 44, '0'), 
('OneMore', '4324', 12, '0'), 
('Plus One', '097ff', 34, '0'),
('Nice', '9947jllnI', 30, '0'),
('49237', '434r34t', 76, '0'),
('Some new User', '43', 44, '0');