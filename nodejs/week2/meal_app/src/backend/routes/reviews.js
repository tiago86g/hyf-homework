const express = require("express");
const app = express.Router();

const reviewsJson = require("../data/reviews.json") //here you require the data from a JSON file

app.get("/:id", (req, res) => {
    console.log("called with", req.params)
    const id = Number(req.params.id);
    const review = reviewsJson.find((reviews) => reviews.id === id)
    if (!review) {
        res.status(404).send(`Review with ID: ${id} not found`)
    }
    res.send(review)
});

// here you send the response to the index.js
app.get("/", (request, response) => {
    response.send (reviewsJson);
});


module.exports = app; 