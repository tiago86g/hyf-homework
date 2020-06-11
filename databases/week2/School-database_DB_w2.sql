CREATE DATABASE school;
USE school;

-- Create a new database containing the following tables:
-- Class: with the columns: id, name, begins (date), ends (date)
CREATE TABLE `class`
(
`id` int
(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` VARCHAR
(180) NOT NULL,
`begins` DATETIME NOT NULL,
`ends` DATETIME NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE `student`
(
`id` int
(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` varchar
(255) NOT NULL,
`email` varchar
(255) NOT NULL UNIQUE,
`phone` varchar
(255) NULL,
`class_id` int
(10) unsigned NOT NULL,
CONSTRAINT `fk_class_id` FOREIGN KEY
(`class_id`) REFERENCES `class`
(`id`) ON
DELETE CASCADE ON
UPDATE CASCADE
) ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- students
-- ('id', 'name', 'email', 'phone', 'class_id') 
INSERT INTO student
VALUES(NULL, 'Tiago Gonçalves', 'tiago86g@gmail.com', 42594575, 1);
INSERT INTO student
VALUES(NULL, 'Afrouz Hakimzadeh', 'afrouz@gmail.com', 12345678, 2);
INSERT INTO student
VALUES(NULL, 'Ghofrane', 'ghofrane@gmail.com', 87654321, 1);
INSERT INTO student
VALUES(NULL, 'Bengü Mochi Özakıncı', 'bengu@gmail.com', 24348746, 3);
INSERT INTO student
VALUES(NULL, 'Luciana Caruso', 'luch@gmail.com', 79848746, 2);

-- classes
-- ('id', 'name', 'begins', 'ends')
INSERT INTO class
VALUES(1, 'frontend', '2020-02-01 00:00:00', '2020-07-31 20:59:00');
INSERT INTO class
VALUES(2, 'backend', '2019-10-01 00:00:00', '2020-06-31 20:59:00');
INSERT INTO class
VALUES(3, 'final project', '2019-06-01 00:00:00', '2020-04-31 20:59:00');

-- If you are done with the above tasks, you can continue with these advanced tasks:
-- Create an index on the name column of the student table.
CREATE INDEX index_name
ON student (name);

-- Add a new column to the class table named status which can only have the following values: 
-- not-started, ongoing, finished (hint: enumerations).
ALTER TABLE class ADD COLUMN status ENUM
('not-started', 'ongoing', 'finished'); 


