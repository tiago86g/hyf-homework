const express = require('express');
const router = express.Router();

const reservations = require('../data/reservations.json');

router.get('/', (req, res) => {
  res.send(reservations);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= reservations.length || !id || isNaN(id)) {
    res.send(reservations);
  } else {
    const specificReservation = reservations.find(r => r.id === id);
    res.send(specificReservation);
  }
});
module.exports = router;
