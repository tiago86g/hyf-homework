const express = require('express');
const router = express.Router();
const reviews = require('../data/reviews.json');

router.get('/', (req, res) => {
  reviews.map(r => {
    delete r.id;
    delete r.mealId;
  });
  res.send(reviews);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const reviewById = reviews.find(m => m.id === id);
  const allIds = reviews.map(r => r.id);
  if (!allIds.includes(id)) {
    res.send(reviews);
  } else {
    delete reviewById.id;
    delete reviewById.mealId;
    res.send(reviewById);
  }
});

module.exports = router;
