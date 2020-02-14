CREATE DATABASE book_a_room;
USE book_a_room;

CREATE TABLE `user` (
`id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` VARCHAR(255) NOT NULL,
`email` VARCHAR(255) NOT NULL UNIQUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `room` (
`id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
`description` VARCHAR(255) NOT NULL,
`status_id` INT UNSIGNED NOT NULL ,
KEY `fk_status` (`status_id`),
CONSTRAINT `fk_status` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- CREATE TABLE `equipment`(
-- `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
-- `equipmentName` VARCHAR(255) NOT NULL,
-- `description` VARCHAR(255) NOT NULL,
-- `startDate` DATETIME  NULL,
-- `endDate`DATETIME  NULL,
-- `status_id` INT UNSIGNED NOT NULL,
-- KEY `fk_status` (`status_id`),
-- CONSTRAINT `fk_status` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `status` (
`id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` VARCHAR(255) COLLATE utf8mb4_unicode_ci NOT NULL
-- `room_id` INT UNSIGNED NOT NULL, 
-- `equipment_id` INT UNSIGNED NOT NULL, 
-- KEY `fk_room` (`room_id`),
-- KEY `fk_equipment` (`equipment_id`),
-- CONSTRAINT `fk_room` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
-- CONSTRAINT `fk_equipment` FOREIGN KEY (`equipment_id`) REFERENCES `equipment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `booked_room` (
`id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
`startDate` DATETIME NOT NULL,
`endDate`DATETIME NOT NULL,
`room_id` INT UNSIGNED NOT NULL, 
`user_id` INT UNSIGNED NOT NULL, 
KEY `fk_room` (`room_id`),
KEY `fk_user` (`user_id`),
CONSTRAINT `fk_room` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- CREATE TABLE `booked_equipment` (
-- `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
-- `startDate` DATETIME NOT NULL,
-- `endDate`DATETIME NOT NULL,
-- `equipment_id` INT UNSIGNED NOT NULL, 
-- `user_id` INT UNSIGNED NOT NULL, 
-- KEY `fk_equipment` (`equipment_id`),
-- KEY `fk_user` (`user_id`),
-- CONSTRAINT `fk_equipment` FOREIGN KEY (`equipment_id`) REFERENCES `equipment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
-- CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
