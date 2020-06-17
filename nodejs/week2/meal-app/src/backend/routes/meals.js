const express = require('express');
const router = express.Router();

const meals = require('../data/meals-with-review.js');

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const mealById = meals.find(m => m.id === id);
  if (id >= meals.length || !id || isNaN(id)) {
    res.send(meals);
  } else {
    res.send(mealById);
  }
});

router.get('/', (req, res) => {
  const { maxPrice, title, createdAfter, limit } = req.query;

  res.send(meals);
});
module.exports = router;
