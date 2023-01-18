-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema gamesisw
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema gamesisw
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `gamesisw` DEFAULT CHARACTER SET utf8 ;
USE `gamesisw` ;

-- -----------------------------------------------------
-- Table `gamesisw`.`game`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gamesisw`.`game` (
  `idgame` INT NOT NULL AUTO_INCREMENT,
  `gamename` VARCHAR(100) NOT NULL,
  `platform` VARCHAR(500) NOT NULL,
  `trailer` VARCHAR(500),
  `relasedate` VARCHAR(500) NOT NULL,
  `price` INT NOT NULL,
  `rate` INT,
  PRIMARY KEY (`idgame`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gamesisw`.`image`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gamesisw`.`image` (
  `idimage` INT NOT NULL AUTO_INCREMENT,
  `img` VARCHAR(500) NOT NULL,
  `game` INT NOT NULL,
  PRIMARY KEY (`idimage`),
  INDEX `fk_image_game_idx` (`game` ASC),
  CONSTRAINT `fk_image_game`
    FOREIGN KEY (`game`)
    REFERENCES `gamesisw`.`game` (`idgame`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gamesisw`.`kind`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gamesisw`.`kind` (
  `idkind` INT NOT NULL AUTO_INCREMENT,
  `namekind` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`idkind`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gamesisw`.`kind_of_game`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gamesisw`.`kind_of_game` (
  `game` INT NOT NULL,
  `kind` INT NOT NULL,
  PRIMARY KEY (`game`, `kind`),
  INDEX `fk_game_has_kind_kind1_idx` (`kind` ASC),
  INDEX `fk_game_has_kind_game1_idx` (`game` ASC),
  CONSTRAINT `fk_game_has_kind_game1`
    FOREIGN KEY (`game`)
    REFERENCES `gamesisw`.`game` (`idgame`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_game_has_kind_kind1`
    FOREIGN KEY (`kind`)
    REFERENCES `gamesisw`.`kind` (`idkind`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gamesisw`.`login`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gamesisw`.`login` (
  `idlogin` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100) NOT NULL,
  `password` VARCHAR(500) NOT NULL,
  `name` VARCHAR(500) NOT NULL,
  `active` INT NOT NULL,
  PRIMARY KEY (`idlogin`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gamesisw`.`ordine`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gamesisw`.`ordine` (
  `idorder` INT NOT NULL AUTO_INCREMENT,
  `idgame` INT NOT NULL,
  `date` VARCHAR(100) NOT NULL,
  `idlogin` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idorder`))
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
