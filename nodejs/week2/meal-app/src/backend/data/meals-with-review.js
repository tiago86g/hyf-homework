const mealsJson = require('../data/meals.json');
const reviewsJson = require('../data/reviews.json');

const mealsWithReview = mealsJson.map(meal => {
  meal.review = reviewsJson.filter(review => review.mealId === meal.id);
  return meal;
});

module.exports = mealsWithReview;
