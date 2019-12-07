const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
let longest;
function findTheShortest(word) {
  //option 1
  console.log(
    danishWords.reduce(function(a, b) {
      return a.length <= b.length ? a : b;
    })
  );
  //option 2
  danishWords.sort(function(a, b) {
    return a.length - b.length;
  });
  console.log(danishWords[0]);
}
findTheShortest(danishWords); // returns 'ø'

//////// FUNCTION TO GET THE AVERAGE

const housePrices = [
  3000000,
  3500000,
  1300000,
  40000000,
  100000000,
  8000000,
  2100000
];
// const housePrices = [1,2,3,4,5];

function getAverage(array) {
  sum = housePrices.reduce((previous, current) => (current += previous));
  avg = sum / housePrices.length;
  console.log(`this is AVERAGE ${avg}`);
}
getAverage(housePrices);

//////// FUNCTION TO GET THE MEDIAN
function getMedian(array) {
  //option 1
  let average = housePrices.reduce(
    (previous, current) => previous + current / housePrices.length,
    0
  );

  //option 2
  housePrices.sort((a, b) => a - b);
  let lowMiddle = Math.floor((housePrices.length - 1) / 2);
  let highMiddle = Math.ceil((housePrices.length - 1) / 2);
  console.log(lowMiddle);
  console.log(highMiddle);

  let median = (housePrices[lowMiddle] + housePrices[highMiddle]) / 2;
  console.log(median);

  console.log(`this is MEDIAN ${median}`);
  console.log(`this is AVERAGE ${average}`);

  //Printing it in my HTML document
  let mydiv = document.createElement("div"); //create the div
  document.body.appendChild(mydiv); //inserting the div in my HTML

  let firstH1 = document.createElement("h1"); //create the h1
  mydiv.appendChild(firstH1); // inserting the h1 inside of the DIV
  firstH1.setAttribute("id", "median"); //setting the id to the H1 inside of the DIV
  document.getElementById("median"); //calling the element with id "median"
  firstH1.innerText = `this is the median ${median}`; //inserting the result of let median inside

  let secundH1 = document.createElement("h1");
  mydiv.appendChild(secundH1);
  secundH1.setAttribute("id", "average");
  secundH1.innerText = `this is the average ${average}`;
}

getMedian(danishWords);










