const express = require('express');
const router = express.Router();
const knex = require('../../database');

router.get('/', async (req, res) => {
  const meals = await knex('meal');
  res.json(meals);
});

router.get('/:id', async (req, res) => {
  const mealById = await knex('meal')
    .select()
    .where('meal.id', parseInt(req.params.id));
  res.json(mealById);
});

router.post('/', async (req, res) => {
  const newMeal = ({
    title,
    description,
    price,
    max_reservations,
    when,
    location,
    created_date
  } = req.body);
  await knex('meal').insert(newMeal);

  const meals = await knex('meal');
  res.json(meals);
});

router.put('/:id', async (req, res) => {
  await knex('meal')
    .where({ id: req.params.id })
    .update({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      max_reservations: req.body.max_reservations,
      when: req.body.when,
      location: req.body.location
    });
  res.send(req.params.id);
});

router.delete('/:id', async (req, res) => {
  await knex('meal')
    .where('meal.id', parseInt(req.params.id))
    .del();
  res.json(req.params.id);
});

module.exports = router;
