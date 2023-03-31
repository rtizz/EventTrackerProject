-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema diydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `diydb` ;

-- -----------------------------------------------------
-- Schema diydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `diydb` DEFAULT CHARACTER SET utf8 ;
USE `diydb` ;

-- -----------------------------------------------------
-- Table `location`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `location` ;

CREATE TABLE IF NOT EXISTS `location` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `project`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `project` ;

CREATE TABLE IF NOT EXISTS `project` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `task` VARCHAR(45) NOT NULL,
  `description` TEXT NULL,
  `diy` TINYINT NULL,
  `interior` TINYINT NULL,
  `est_cost` DOUBLE NULL,
  `actual_cost` DOUBLE NULL,
  `date_entered` DATETIME NULL,
  `date_started` DATETIME NULL,
  `date_finished` DATETIME NULL,
  `location_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_home_projects_location_idx` (`location_id` ASC),
  CONSTRAINT `fk_home_projects_location`
    FOREIGN KEY (`location_id`)
    REFERENCES `location` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS diy@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'diy'@'localhost' IDENTIFIED BY 'password';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'diy'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `location`
-- -----------------------------------------------------
START TRANSACTION;
USE `diydb`;
INSERT INTO `location` (`id`, `name`) VALUES (1, 'Entry Way');
INSERT INTO `location` (`id`, `name`) VALUES (2, 'Office');
INSERT INTO `location` (`id`, `name`) VALUES (3, 'Guest Bathroom');
INSERT INTO `location` (`id`, `name`) VALUES (4, 'Guest Bedroom');
INSERT INTO `location` (`id`, `name`) VALUES (5, 'Dining Area');
INSERT INTO `location` (`id`, `name`) VALUES (6, 'Kitchen');
INSERT INTO `location` (`id`, `name`) VALUES (7, 'Laundry Room');
INSERT INTO `location` (`id`, `name`) VALUES (8, 'Pantry');
INSERT INTO `location` (`id`, `name`) VALUES (9, 'Living Room');
INSERT INTO `location` (`id`, `name`) VALUES (10, 'Master Bedroom');
INSERT INTO `location` (`id`, `name`) VALUES (11, 'Master Closet');
INSERT INTO `location` (`id`, `name`) VALUES (12, 'Master Bathroom');
INSERT INTO `location` (`id`, `name`) VALUES (13, 'Front Yard');
INSERT INTO `location` (`id`, `name`) VALUES (14, 'Back Yard');
INSERT INTO `location` (`id`, `name`) VALUES (15, 'Deck');
INSERT INTO `location` (`id`, `name`) VALUES (16, 'Garden');
INSERT INTO `location` (`id`, `name`) VALUES (17, 'FirePit');
INSERT INTO `location` (`id`, `name`) VALUES (18, 'Patio');
INSERT INTO `location` (`id`, `name`) VALUES (19, 'Driveway');

COMMIT;


-- -----------------------------------------------------
-- Data for table `project`
-- -----------------------------------------------------
START TRANSACTION;
USE `diydb`;
INSERT INTO `project` (`id`, `task`, `description`, `diy`, `interior`, `est_cost`, `actual_cost`, `date_entered`, `date_started`, `date_finished`, `location_id`) VALUES (1, 'Sod Replacement', 'Replace dead patches of grass', 0, 0, 2500.00, NULL, '2022-10-31', '2023-02-15', '2023-03-31', 14);
INSERT INTO `project` (`id`, `task`, `description`, `diy`, `interior`, `est_cost`, `actual_cost`, `date_entered`, `date_started`, `date_finished`, `location_id`) VALUES (2, 'Garden Perimeter path', 'Create a 3\' path surrounding garden for aesthetics', 1, 0, 300.00, NULL, '2023-01-31', NULL, NULL, 16);
INSERT INTO `project` (`id`, `task`, `description`, `diy`, `interior`, `est_cost`, `actual_cost`, `date_entered`, `date_started`, `date_finished`, `location_id`) VALUES (3, 'Replace Sprinkler Controller', 'Current is outdated and analog, needs to be updated to digital.', 1, 0, 150.00, NULL, NULL, NULL, NULL, 14);
INSERT INTO `project` (`id`, `task`, `description`, `diy`, `interior`, `est_cost`, `actual_cost`, `date_entered`, `date_started`, `date_finished`, `location_id`) VALUES (4, 'Paint Master Bathroom', 'Wife not happy with color and wants to change it', 1, 1, 200.00, NULL, NULL, NULL, NULL, 12);
INSERT INTO `project` (`id`, `task`, `description`, `diy`, `interior`, `est_cost`, `actual_cost`, `date_entered`, `date_started`, `date_finished`, `location_id`) VALUES (5, 'Paint Master Bedroom', 'In need of color update', 1, 1, 300.00, NULL, NULL, NULL, NULL, 10);
INSERT INTO `project` (`id`, `task`, `description`, `diy`, `interior`, `est_cost`, `actual_cost`, `date_entered`, `date_started`, `date_finished`, `location_id`) VALUES (6, 'Stain/Weatherproof Deck', 'Had to wait a year for wood to dry. Deck ready for stain to protect against rain', 1, 0, 25.00, NULL, NULL, NULL, NULL, 15);
INSERT INTO `project` (`id`, `task`, `description`, `diy`, `interior`, `est_cost`, `actual_cost`, `date_entered`, `date_started`, `date_finished`, `location_id`) VALUES (7, 'Replace Bath/Shower', 'Outdated prefit tub shower needs to be updated with walk in shower to increase home value', 0, 1, 7000.00, NULL, NULL, NULL, NULL, 12);

COMMIT;

