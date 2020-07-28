/*  Execute this file from the command line by typing:
 *    sqlite3 items.db < schema.sql
 *  to create the database and the tables.*/

Drop database if exists
create database groceries
use groceries

CREATE TABLE groceries (
  Name varchar(50),
  Quantity INT
);

-- INSERT INTO groeries ()
-- VALUES()