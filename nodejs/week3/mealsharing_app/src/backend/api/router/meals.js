const express = require('express');
const router = express.Router();
const knex = require('../../database');

router.get('/', async (req, res) => {
  try {
    const {
      maxPrice,
      availableReservations,
      title,
      createAfter,
      limit
    } = req.query;
    if (
      !maxPrice &&
      !availableReservations &&
      !title &&
      !createAfter &&
      !limit
    ) {
      const meals = await knex('meal');
      res.json(meals);
    } else if (maxPrice) {
      const meals = await knex('meal').where('price', '<', maxPrice);
      res.send(meals);
    } else if (title) {
      const meals = await knex('meal')
        .where('title', 'like', `%${title}%`)
        .toSQL()
        .toNative();
      res.send(meals);
    } else if (availableReservations == 'true') {
      meals = await knex('Meal')
        .select(
          knex.raw(
            `Meal.id, Meal.title, Meal.max_reservations, SUM(reservation.number_of_guests) AS total_guests`
          )
        )
        .innerJoin('reservation', 'meal.id', 'reservation.meal_id')
        .groupBy('Meal.id')
        .having(knex.raw(`total_guests < Meal.max_reservations`))
        .catch(e => {
          console.error(e);
        });
      // meals = await knex.raw(
      //   `
      // SELECT Meal.id, Meal.title, Meal.max_reservations,
      // SUM(reservation.number_of_guests) AS total_guests
      // FROM Meal
      // INNER JOIN Reservation ON Reservation.meal_id = Meal.id
      // GROUP BY Meal.id
      // HAVING total_guests < Meal.max_reservations`
      // );
      // meals = await knex('Meal')
      //   .select('Meal.id', 'Meal.title', 'Meal.max_reservations')
      //   .sum({ totalGuests: 'reservation.number_of_guests' })
      //   .innerJoin('reservation', 'meal.id', 'reservation.meal_id')
      //   .groupBy('Meal.id')
      //   .having('totalGuests', '<', 'Meal.max_reservations')
      //   .catch(e => {
      //     console.error(e);
      //   });
      console.log('meals', meals);
      res.send(meals);
    }
    console.log(availableReservations);
  } catch (error) {}
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
