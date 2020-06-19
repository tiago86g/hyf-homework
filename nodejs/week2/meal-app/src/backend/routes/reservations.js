const express = require('express');
const router = express.Router();

const reservations = require('../data/reservations.json');

router.get('/', (req, res) => {
  res.send(reservations);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const reservationById = reservations.find(r => r.id === id);
  const allIds = reservations.map(r => r.id);
  if (!allIds.includes(id)) {
    res.send(reservations);
  } else {
    res.send(reservationById);
  }
});
module.exports = router;
