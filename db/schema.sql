DROP DATABASE IF EXISTS Groceries;

CREATE DATABASE Groceries;

USE Groceries;

CREATE TABLE Items (
    id INT AUTO_INCREMENT,
    itemName VARCHAR(255),
    quantity INT,
    PRIMARY KEY (id)
);

INSERT INTO Items (itemName, quantity) VALUES ('Cheese', 5);
INSERT INTO Items (itemName, quantity) VALUES ('Beer', 500);
INSERT INTO Items (itemName, quantity) VALUES ('Crackers', 50);