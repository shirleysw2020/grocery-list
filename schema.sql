/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

Drop database if exists grocery_list;
-- create and use database
CREATE DATABASE grocery_list;
USE grocery_list;

CREATE TABLE groceries (
  name varchar(50),
  quantity INT
);

INSERT INTO groceries (name, quantity) VALUES ('coffee', 1);
INSERT INTO groceries (name, quantity) VALUES ('chocolate', 3);
INSERT INTO groceries (name, quantity) VALUES ('steak', 1);
INSERT INTO groceries (name, quantity) VALUES ('cereal', 2);
INSERT INTO groceries (name, quantity) VALUES ('paper towels', 2);