DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
  burger_name VARCHAR(50) UNIQUE NOT NULL,
  devoured BOOL NOT NULL DEFAULT 0
);