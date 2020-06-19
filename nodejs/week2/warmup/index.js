const express = require('express');
const app = express();

app.get('/numbers/add', (req, res) => {
  const a = parseInt(req.query.first);
  const b = parseInt(req.query.second);
  res.send(`The sum of ${a} + ${b} = ${a + b}`);
}); // /numbers/add?first=5&second=45

app.get('/numbers/multiply/:first/:second', (req, res) => {
  const a = parseInt(req.params.first);
  const b = parseInt(req.params.second);
  res.send(`The product of ${a} x ${b} = ${a * b}`);
}); // /numbers/multiply/9/3

const port = 3000;
const date = new Date();
app.listen(port, () =>
  console.log(
    `You are at >>>localhost:${port}<<< at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  )
);
