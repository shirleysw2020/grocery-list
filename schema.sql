/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

Drop database if exists grocery_list;
CREATE DATABASE grocery_list;
USE grocery_list;

CREATE TABLE groceries (
  id int NOT NULL auto_increment,
  name varchar(50),
  quantity INT,
  Primary Key (id)
);

INSERT INTO groceries (id, name, quantity) VALUES (1, 'coffee', 1);
INSERT INTO groceries (id, name, quantity) VALUES (2, 'chocolate', 3);
INSERT INTO groceries (id, name, quantity) VALUES (3, 'steak', 2);
INSERT INTO groceries (id, name, quantity) VALUES (5, 'spritzer', 10);