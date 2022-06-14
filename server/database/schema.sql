
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema default_schema
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema meal-planner
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `meal-planner` ;

-- -----------------------------------------------------
-- Schema meal-planner
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `meal-planner` DEFAULT CHARACTER SET utf8 ;
USE `meal-planner` ;

-- -----------------------------------------------------
-- Table `meal-planner`.`USER`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `meal-planner`.`USER` ;

CREATE TABLE IF NOT EXISTS `meal-planner`.`USER` (
  `USERNAME` VARCHAR(50) NOT NULL,
  `FIRSTNAME` VARCHAR(25) NOT NULL,
  `LASTNAME` VARCHAR(45) NOT NULL,
  `EMAIL` VARCHAR(45) NOT NULL,
  `SPOONACULAR_PASSWORD` VARCHAR(45) NOT NULL,
  `SPOONACULAR_HASH` VARCHAR(45) NOT NULL,
  `HASH` VARCHAR(45) NOT NULL,
  `ID_USER` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID_USER`),
  UNIQUE INDEX `EMAIL_UNIQUE` (`EMAIL` ASC) VISIBLE,
  UNIQUE INDEX `USERNAME_UNIQUE` (`USERNAME` ASC) VISIBLE,
  UNIQUE INDEX `USER_ID_UNIQUE` (`ID_USER` ASC) VISIBLE);


-- -----------------------------------------------------
-- Table `meal-planner`.`DIET_TYPES`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `meal-planner`.`DIET_TYPES` ;

CREATE TABLE IF NOT EXISTS `meal-planner`.`DIET_TYPES` (
  `TYPE` INT NOT NULL,
  `ID_TYPE` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID_TYPE`),
  UNIQUE INDEX `TYPE` (`type` ASC) VISIBLE,
  UNIQUE INDEX `TYPE_ID_UNIQUE` (`ID_TYPE` ASC) VISIBLE);


-- -----------------------------------------------------
-- Table `meal-planner`.`DIET_INTOLERANCES`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `meal-planner`.`DIET_INTOLERANCES` ;

CREATE TABLE IF NOT EXISTS `meal-planner`.`DIET_INTOLERANCES` (
  `ID_INTOLERANCE` INT NOT NULL,
  `INTOLERANCE` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`ID_INTOLERANCE`),
  UNIQUE INDEX `INTOLERANCE_ID_UNIQUE` (`ID_INTOLERANCE` ASC) VISIBLE);


-- -----------------------------------------------------
-- Table `meal-planner`.`USER_INTOLERANCES`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `meal-planner`.`USER_INTOLERANCES` ;

CREATE TABLE IF NOT EXISTS `meal-planner`.`USER_INTOLERANCES` (
  `idUSER_INTOLERANCES` INT NOT NULL,
  PRIMARY KEY (`idUSER_INTOLERANCES`),
    FOREIGN KEY (`INTOLERANCE_ID`)
    REFERENCES `meal-planner`.`DIET_INTOLERANCES` (`ID_INTOLERANCE`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    FOREIGN KEY (`USER_ID`)
    REFERENCES `meal-planner`.`USER` (`ID_USER`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `meal-planner`.`USER_DIETTYPES`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `meal-planner`.`USER_DIETTYPES` ;

CREATE TABLE IF NOT EXISTS `meal-planner`.`USER_DIETTYPES` (
  `idUSER_DIETTYPES` INT NOT NULL,
  PRIMARY KEY (`idUSER_DIETTYPES`),

    FOREIGN KEY (`USER_ID`)
    REFERENCES `meal-planner`.`USER` (`ID_USER`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,

    FOREIGN KEY (`TYPE_ID`)
    REFERENCES `meal-planner`.`DIET_TYPES` (`ID_TYPE`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `meal-planner`.`DAILY_GOALS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `meal-planner`.`DAILY_GOALS` ;

CREATE TABLE IF NOT EXISTS `meal-planner`.`DAILY_GOALS` (
  `id_daily_goals` INT NOT NULL,
  `TOTAL_CARBOHYDRATES` INT NULL,
  `MIN_CARBS_PER_MEAL` INT NULL,
  `MAX_CARBS_PER_MEAL` VARCHAR(45) NULL,
  `TOTAL_PROTEIN` VARCHAR(45) NULL,
  `MIN_PROTEIN_PER_MEAL` VARCHAR(45) NULL,
  `MAX_PROTEIN_PER_MEAL` VARCHAR(45) NULL,
  `TOTAL_FAT` VARCHAR(45) NULL,
  `MIN_FAT_PER_MEAL` VARCHAR(45) NULL,
  `MAX_FAT_PER_MEAL` VARCHAR(45) NULL,
  `TOTAL_CALORIES` VARCHAR(45) NULL,
  `MIN_CALORIES_PER_MEAL` VARCHAR(45) NULL,
  `MAX_CALORIES_PER_MEAL` VARCHAR(45) NULL,
  PRIMARY KEY (`id_daily_goals`),

    FOREIGN KEY (`USER_ID`)
    REFERENCES `meal-planner`.`USER` (`ID_USER`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
