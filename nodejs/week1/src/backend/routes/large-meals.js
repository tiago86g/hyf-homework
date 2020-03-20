const express = require("express");
const app = express();

const mealsJson = require("../data/meals.json"); //here you require the data from a JSON file
const reviewsJson = require("../data/reviews.json"); //here you require the data from a JSON file

// Here you map the meals and matches the meal id with the reviews mealId
const mealsWithReviews = mealsJson.map(item => {
    item.reviews = reviewsJson.filter(element => element.mealId === item.id)
    return item;
});

//here you filter using the maximun number of guests per each meal
const largeMeals = mealsWithReviews.filter(item => item.maxNumberOfGuests > 5);

// here you send the response to the index.js
app.get("/", (request, response) => {
    response.send(largeMeals);
});
module.exports = app; 