const express = require("express");
const app = express();


const calculator = function (request, response) {
    const numbersStringfied = Object.values(request.query);
        console.log("numbersStringfied", numbersStringfied);
    const merged = [].concat.apply([], numbersStringfied);
    const numbersArray = merged.map(Number);
        console.log("numbersArray", numbersArray);
        console.log("params", request.params);

    if (request.params.operation === 'add') {
        const result = numbersArray.reduce((total, value) => total + value);
            console.log("sum", result);
        response.send(`The result os the SUM operation with the values ${numbersStringfied} is <b>${result}</b>`);
    } else if (request.params.operation === 'subtract'){
        const result = numbersArray.reduce((total, value) => total - value);
            console.log("sub", result)
        response.send(`The result os the SUB operation with the values ${numbersStringfied} is <b>${result}</b>`);
    } else if (request.params.operation === 'multiply'){
        const result = numbersArray.reduce((total, value) => total * value);
            console.log("mult", result)
        response.send(`The result os the MULT operation with the values ${numbersStringfied} is <b>${result}</b>`);
    } else if (request.params.operation === 'divide') {
        const result = numbersArray.reduce((total, value) => total / value);
            console.log("div", result)
        response.send(`The result os the DIV operation with the values ${numbersStringfied} is <b>${result}</b>`);
    }
}
app.get('/calculator/:operation', calculator);



const PORT = 3000;
app.listen(PORT,() =>{
    console.log(`Server using port ${PORT}`);    
})

///////////////////


