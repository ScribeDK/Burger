CREATE DATABASE `Burgers_DB`;

USE Burgers_DB;

CREATE TABLE `Products` (
  `itemID` int NOT NULL AUTO_INCREMENT,
  `burgerName` varchar(100) NOT NULL,
  `devoured` boolean DEFAULT false,
  `date` varchar(100) NOT NULL,
  PRIMARY KEY (`itemID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;