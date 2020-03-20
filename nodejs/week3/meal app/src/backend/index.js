const express = require("express");
const app = express();
const path = require('path');

const router = express.Router();
app.use(express.urlencoded({ extended: true }));// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.json());// Parse JSON bodies (as sent by API clients)


const mealsRouter = require("./api/meals");
const reservationsRouter = require("./api/reservations");
const reviewsRouter = require("./api/reviews");


// For week4 no need to look into this!
// Serve the built client html
// const buildPath = path.join(__dirname, "./../frontend");
// app.use(express.static(buildPath));


router.use("/meals", mealsRouter);
router.use("/reservations", reservationsRouter);
router.use("/reviews", reviewsRouter);

app.use("/api", router);

// For week4 no need to look into this!
// Ensures that the client router works on reload aswell.
// Sends all requests back to index.html where the routing lib takes over
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "./../frontend/index.html"), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on port ${port}!`));
