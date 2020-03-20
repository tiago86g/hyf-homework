// GET /numbers/add?first=<number here>&second=<number here>. In response send sum (first + second).
// GET /numbers/multiply/<first number here>/<second number here>. in response send multiplication (first * second).
// Example: going to localhost:3000/numbers/add?first=3&second=7 should respond with 10

const express = require('express');
const app = express();

app.get('/numbers/add', (req, res) => {
    const sum = Number(req.query.first) + Number(req.query["second"]);
    res.send(`${sum}`);
}); // http://localhost:4000/numbers/add?first=5&second=7    //12


app.get('/numbers/multiply/:first/:second', (req, res) => {
    console.log("req.params", req.params);
    const product = Number(req.params.first) * Number(req.params.second);
    res.send(`${product}`);
}); // http://localhost:4000/numbers/multiply/4/5    //20



//Choose the portnumber
app.listen(4000);