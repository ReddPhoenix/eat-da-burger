DROP DATABASE IF EXISTS burgers_db;

-- Creates the "burgers_db" database --
CREATE DATABASE burgers_db;

-- Makes it so all of the following code will affect burgers_db --
USE burgers_db;

-- Creates the table "employee" within roster_db --
CREATE TABLE burgers (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN
);

