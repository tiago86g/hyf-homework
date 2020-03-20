const express = require('express');
const app = express();

app.get("/", (request, response) => {
    response.send(`<h1>Hello World</h1>`);
  });

// Here is the connection with the others JS files
const useMeals = require('./routes/meals.js');
const useReservations = require('./routes/reservations.js');
const useReviews = require('./routes/reviews.js');

app.use("/meals", useMeals);
app.use("/reservations", useReservations);
app.use("/reviews", useReviews);

// app.use((req, res, next)=> {
//     //date
// })


//Choose the portnumber
app.listen(3000);