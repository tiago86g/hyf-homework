const express = require("express");
const app = express.Router();

const reservationsJson = require("../data/reservations.json"); //here you require the data from a JSON file

// here you send the response to the index.js
app.get("/reservations", (request, response) => {    
    response.send(reservationsJson);
});

app.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const reservation = reservationsJson.find((reservations) => reservations.id === id)
    if (!reservation) {
        res.status(404).send(`Reservation with ID: ${id} not found`)
    }
    res.send(reservation)
});


module.exports = app; 