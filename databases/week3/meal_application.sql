CREATE DATABASE meal_application;
USE meal_application;

CREATE TABLE `Meal` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `location` VARCHAR(255) NOT NULL,
  `when` DATETIME NOT NULL,
  `max_reservations` INT UNSIGNED NOT NULL,
  `price` DECIMAL NOT NULL,
  `created_date` DATETIME NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Reservation` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `number_of_guests` INT UNSIGNED NOT NULL,
  `meal_id` INT UNSIGNED NOT NULL,
  `created_date` DATETIME NOT NULL,
  KEY `fk_Meal` (`meal_id`),
  CONSTRAINT `fk_Meal` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`)  ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Review` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `review_meal_id` INT UNSIGNED NOT NULL,
  `stars` INT(5) UNSIGNED NOT NULL,
  `created_date` DATETIME NOT NULL,
  KEY `fk_Meal` (`review_meal_id`),
  CONSTRAINT `fk_review_meal` FOREIGN KEY (`review_meal_id`) REFERENCES `Meal` (`id`)  ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- meal data
-- ('id', 'title', 'description', 'location', 'when', 'max_reservations', 'price', 'created-date') 
INSERT INTO Meal VALUE (null, 'bacon&cheese burger', 'burger, bacon and cheese', 'TGI Fridays', '2020-02-19 18:00', 20, 69, '2020-02-19 9:00');
INSERT INTO Meal VALUE (null, 'cezar salad', 'letuce, tomatos, cezas dressing', 'Dalle Valle', '2020-02-19 19:00', 20, 69, '2020-02-09 9:00');
INSERT INTO Meal VALUE (null, 'steak and garlic fries', 'ribeye steak and garlic fries', 'TGI Fridays', '2020-02-20 18:00', 20, 69, '2020-01-19 9:00');
INSERT INTO Meal VALUE (null, 'icecream', 'icecram cream and chocolate', 'McDonalds', '2020-02-20 18:00', 5, 49, '2020-01-19 9:00');


-- Reservation data
-- ('id', 'number_of_guests', 'meal_id', 'created_date')
INSERT INTO Reservation VALUE (null, 7, 2 ,'2020-02-21 19:00');
INSERT INTO Reservation VALUE (null, 2, 1 ,'2020-02-21 19:00');
INSERT INTO Reservation VALUE (null, 3, 3 ,'2020-02-21 19:00');
INSERT INTO Reservation VALUE (null, 1, 3 ,'2020-02-21 19:00');
INSERT INTO Reservation VALUE (null, 5, 2 ,'2020-02-21 19:00');
INSERT INTO Reservation VALUE (null, 4, 1 ,'2020-02-21 19:00');

-- Review data
-- ('id', 'title', 'description', 'review_meal_id', 'stars', 'created_date')
INSERT INTO Review VALUE (null, 'good and cheap', 'It was a very good and cheap meal', 1, 4, '2020-02-23 20:00');
INSERT INTO Review VALUE (null, 'juyce steak', 'Very good meal', 3, 5, '2020-02-21 08:00');
INSERT INTO Review VALUE (null, 'It has meat', 'The meal is not an option if you want a vegetarian meal', 2, 1, '2020-02-20 13:00');


-- ------ QUERIES ------
-- MEAL --
-- Get all meals
SELECT * FROM meal;

-- Add a new meal
INSERT INTO Meal VALUE (null, 'pizza', 'cheese, tomatos and oregano', 'PizzaPark', '2020-02-20 18:00', 8, 105, '2020-01-19 15:00');

-- Get a meal with any id, fx 1
SELECT * FROM Meal
WHERE id = 2;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal
SET price = 250, max_reservations = 12
WHERE id = 3;

-- Delete a meal with any id, fx 1
DELETE FROM Meal
WHERE id = 5;

-- REREVATION --
-- Get all reservations
SELECT * FROM Reservation;

-- Add a new reservation
INSERT INTO Reservation VALUE (null, 2, 4 ,'2020-02-28 18:30');

-- Get a reservation with any id, fx 1
SELECT * FROM Reservation
WHERE id = 4;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Reservation
SET meal_id = 4
WHERE id = 1;

-- Delete a reservation with any id, fx 1
DELETE FROM Reservation
WHERE id = 5;

-- REVIEW --
-- Get all reviews
SELECT * FROM Review;

-- Add a new review
INSERT INTO Review VALUE (null, 'Nice food', 'The food was great', 4, 4, '2020-02-20 13:00');

-- Get a review with any id, fx 1
SELECT * FROM Review
WHERE id = 1;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Review
SET review_meal_id = 4
WHERE id = 3;

-- Delete a review with any id, fx 1
DELETE FROM Review
WHERE id = 4;

-- FUNCTIONALITY --
-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM Meal
WHERE price < 100;

-- Get meals that still has available reservations
SELECT Meal.id, Meal.title, Meal.max_reservations, SUM(reservation.number_of_guests) AS total_guests
FROM Meal
INNER JOIN Reservation ON Reservation.meal_id = Meal.id
GROUP BY Meal.id
HAVING total_guests < Meal.max_reservations;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM Meal 
WHERE title LIKE '%cheese%';

-- Get meals that has been created between two dates
SELECT * FROM Meal
WHERE created_date BETWEEN '2020/01/20' AND '2020/02/20';

-- Get only specific number of meals fx return only 5 meals
SELECT * FROM Meal
LIMIT 3;

-- Get the meals that have good reviews
SELECT Meal.title, Meal.id, Review.review_meal_id, Review.stars
FROM Meal
INNER JOIN Review ON Meal.id = Review.review_meal_id
WHERE Review.stars > 3;

-- Get reservations for a specific meal sorted by created_date
SELECT Meal.id, Meal.title, Reservation.created_date, Reservation.id as Reservation_id
FROM Meal
INNER JOIN Reservation ON Reservation.meal_id = Meal.id
WHERE Meal.id = 4
ORDER BY Reservation.created_date;

-- Sort all meals by average number of stars in the reviews
SELECT Meal.title, AVG(Review.stars) AS average_ratting
FROM Review
INNER JOIN Meal ON Review.review_meal_id = Meal.id
GROUP BY Meal.title
ORDER BY average_ratting DESC;