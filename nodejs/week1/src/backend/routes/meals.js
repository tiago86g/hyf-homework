const mealsWithReview = require('../data/meals-with-review.js');

module.exports =
  ('/',
  (req, res) => {
    res.send(mealsWithReview);
  });
