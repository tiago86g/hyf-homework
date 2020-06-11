const express = require("express");
const app = express();

const reservationsJson = require("../data/reservations.json"); //here you require the data from a JSON file


//here you get a random reservation
const indexRandomReservations = Math.floor(Math.random()* reservationsJson.length);
const randomReservation = reservationsJson[indexRandomReservations];

// here you send the response to the index.js
app.get("/", (request, response) => {
    response.send(randomReservation);
});
module.exports = app; 