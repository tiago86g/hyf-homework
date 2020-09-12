const express = require('express');
const app = express();
const bodyParse = require('body-parser');
app.use(bodyParse.json());

app.use((request, response, next) => {
  console.log(`${date}, path: ${request.originalUrl}`);
  next();
});

app.get('/calculator', (req, res) => {
  const method = req.query.method || req.body.method;
  if (req.query) {
    numbers = Object.values(req.query);
    numbers.shift();
    numbers = numbers.map(Number);
  } else if (req.body) {
    numbers = Object.values(req.body);
    numbers.shift();
    numbers = numbers.map(Number);
  }

  if (method == 'addition') {
    result = numbers.reduce((acc, value) => acc + value, 0);
    return res.json(result);
  } else if (method == 'multiplication') {
    result = numbers.reduce((acc, value) => acc * value, 1);
    return res.json(result);
  } else if (method == 'subtration') {
    result = numbers.reduce((acc, value) => acc - value, 0);
    return res.json(result);
  } else if (method == 'division') {
    result = numbers.reduce((acc, value) => acc / value, 1);
    return res.json(result);
  } else
    console.error(
      `Try something like: calculator/?method=addition&first=1&second=2`
    );
});

const port = 3000;
const date = new Date().toLocaleString('en-US', { hour12: false });
app.listen(port, () =>
  console.log(`You are at >>>localhost:${port}<<< at ${date}`)
);
