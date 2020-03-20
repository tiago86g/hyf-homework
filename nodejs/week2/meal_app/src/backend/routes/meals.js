const express = require("express");
const app = express.Router();

const mealsJson = require("../data/meals.json"); //here you require the data from a JSON file

// here you send the response to the index.js
// app.get("/", (request, response) => {
//     response.send (mealsJson);
// });

app.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const especificMeal = mealsJson.find((mealItems) => mealItems.id === id)
    if (!especificMeal) {
        res.status(404).send(`Meal with ID: ${id} not found`);
    }
    res.send(especificMeal);
    // console.log("called with", req.params);
    // console.log("especificMeal", especificMeal);
});


app.get('/', (req, res) => {
    let meal = {};
    const maxPrice = req.query.maxPrice  // /meals?maxPrice=90
    const title = req.query.title;  // api/meals?title="Indian platter"
    const createdAfter = req.query.createdAfter;  // api/meals?createdAfter=2019-04-05
    const limit = req.query.limit;  // api/meals?limit=4
     
    if (req.originalUrl === '/meals') {
        res.send(mealsJson)
        //  http://localhost:3000/meals
    } 
    if (maxPrice){
        let meal = mealsJson.filter((mealItem) => mealItem.price < Number(maxPrice));
        res.send(meal);
        // console.log("max price", meal);
        //  http://localhost:3000/meals?maxPrice=100
    } else if (title) {
        let meal = mealsJson.filter((mealItem) => mealItem.price.includes(title));
        res.send(meal);
        // console.log("title", meal);
        // http://localhost:3000/meals?title=indian
    } else if (createdAfter){
        let meal = mealsJson.filter((mealItems) => Date.parse(mealItems.createdAt) > Date.parse(createdAfter));
        res.send(meal);
        // console.log("createdAfter", meal);
        // http://localhost:3000/meals?createdAfter=2019-12-07
    } else if (limit){
        let meal = mealsJson.slice(0, limit);
        res.send(meal);
        // console.log("limit", meal);
        // http://localhost:3000/meals?limit=2
    } else {
        res.status(404).send(`Meal not found, check your queries`);
    }
});

module.exports = app; 