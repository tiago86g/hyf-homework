const express = require('express');
const router = express.Router();

const meals = require('../data/meals-with-review.js');

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const mealById = meals.find(m => m.id === id);
  const allIds = meals.map(m => m.id);

  if (allIds.includes(id)) {
    res.send(mealById);
  } else {
    res.send(meals);
  }
});

router.get('/', (req, res) => {
  const { maxPrice, title, createdAfter, limit } = req.query;

  if (req.originalUrl === '/meals') {
    res.send(meals);
  }
  if (maxPrice) {
    newMeals = meals.filter(m => m.price <= parseInt(maxPrice));
    res.send(newMeals); //meals?maxPrice=90
  }
  if (title) {
    newMeals = meals.find(m => m.title.includes(title));
    res.send(newMeals); //meals?title=Bacon
  }
  if (limit) {
    newMeals = meals.slice(0, limit);
    res.send(newMeals); //meals?limit=2
  }
  if (createdAfter) {
    newMeals = meals.filter(
      m => Date.parse(m.createdAt) > Date.parse(createdAfter)
    );
    res.send(newMeals); //meals?createdAfter=2019-12-08
  } else {
    res.status(404).send(`Your query in not valid`);
  }
});
module.exports = router;
