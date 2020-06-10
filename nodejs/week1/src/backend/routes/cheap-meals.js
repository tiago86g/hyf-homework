const mealsWithReview = require('../data/meals-with-review.js');
const cheapMeal = mealsWithReview.filter(meal => meal.price < 100);

module.exports = (req, res) => {
  res.send(cheapMeal);
};
