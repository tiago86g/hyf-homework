const express = require('express');
const app = express();

const mealRouter = require('./routes/meal.js');
const mealsRouter = require('./routes/meals.js');
const cheapMealsRouter = require('./routes/cheap-meals.js');
const largeMealRouter = require('./routes/large-meals.js');
const reservationRouter = require('./routes/reservation.js');
const reservationsRouter = require('./routes/reservations.js');

app.get('/meal', mealRouter);
app.get('/meals', mealsRouter);
app.get('/cheap-meals', cheapMealsRouter);
app.get('/large-meals', largeMealRouter);
app.get('/reservarion', reservationRouter);
app.get('/reservations', reservationsRouter);

app.get('/', (req, res) => {
  res.send(`
  <h1>Meal app</h1>
  <ul>
    <li><a href='/meals'>get all meals</a></li>
    <li><a href='/cheap-meals'>get cheap meals</a></li>
    <li><a href='/large-meals'>get large meals</a></li>
    <li><a href='/meal'>get single meal</a></li>
    <li><a href='/reservations'>get all reservations</a></li>
    <li><a href='/reservation'>get single reservation</a></li>
  </ul>
`);
});

const port = 4001;
app.listen(port, () => console.log(`You are using localhost:${port}`));
