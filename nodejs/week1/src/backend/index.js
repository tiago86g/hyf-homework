// // One way to it
// app.get("/especify-an-url-path", (req, res) => {
//     res.send("here you write")
// });

// // Another way is with the functions outside
// const keyWord = (req, res) => {
//     res.send("here you also write")
// }
// app.get("/url-path", keyWord)


const express = require('express');
const app = express();

// Here is the connection with the others JS files
const useMeals = require("./routes/meals.js");
const useCheapMeals = require("./routes/cheap-meals.js");
const useLargeMeals = require("./routes/large-meals.js");
const useMeal = require("./routes/meal.js");
const useReservations = require("./routes/reservations.js");
const useReservation = require("./routes/reservation.js")



app.use("/meals", useMeals);
app.use("/cheap-meals", useCheapMeals);
app.use("/large-meals", useLargeMeals);
app.use("/meal", useMeal);
app.use("/reservations", useReservations);
app.use("/reservation", useReservation);

//Choose the portnumber
app.listen(3000);