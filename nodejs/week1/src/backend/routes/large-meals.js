const mealsWithReview = require('../data/meals-with-review.js');
const largeMeal = mealsWithReview.filter(meal => meal.maxNumberOfGuests > 10);

module.exports = (req, res) => {
  res.send(largeMeal);
};
