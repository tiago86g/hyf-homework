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
  if (id >= reviews.length || !id || isNaN(id)) {
    res.send(`ID ${id} is not valid `);
  } else {
    delete reviewById.id;
    delete reviewById.mealId;
    res.send(reviewById);
  }
});

module.exports = router;
