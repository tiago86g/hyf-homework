const express = require('express');
const app = express();

app.use('/meals', require('./routes/meals'));
app.use('/reviews', require('./routes/reviews.js'));
app.use('/reservations', require('./routes/reservations.js'));

const port = 5001;
const date = new Date();
app.listen(port, () =>
  console.log(
    `Using >>>localhost:${port}<<< at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  )
);
