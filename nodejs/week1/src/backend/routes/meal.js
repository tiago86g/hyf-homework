const mealsWithReview = require('../data/meals-with-review.js');
const indexRandomMeal = Math.floor(Math.random() * mealsWithReview.length);
const randomMeal = mealsWithReview[indexRandomMeal];

module.exports =
  ('/',
  (req, res) => {
    res.send(randomMeal);
  });
