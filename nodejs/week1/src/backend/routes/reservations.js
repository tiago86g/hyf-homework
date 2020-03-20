const express = require("express");
const app = express();

const reservationsJson = require("../data/reservations.json"); //here you require the data from a JSON file

// here you send the response to the index.js
app.get("/", (request, response) => {
    response.send(reservationsJson);
});
module.exports = app; 