/////////////// 1 - Age-ify (A future age calculator)
const yearOfBirth = 1986;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;
console.log(`You will be ${age} years old in ${yearFuture}`);

/////////////// 2 - Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2014;
const dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;

if ((shouldShowResultInDogYears = true)) {
  dogYear = dogYear * 7;
  console.log(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}`);
} else {
  console.log(
    `Your dog will be ${dogYear} human years old in ${dogYearFuture}`
  );
}

/////////////// 3 - Housey pricey (A house price estimator)
const volumeInMetersPeter = 8 * 10 * 10;
const gardenSizeInM2Peter = 100;
const houseOfferPeter = 2500000;
let housePricePeter =
  volumeInMetersPeter * 2.5 * 1000 + gardenSizeInM2Peter * 300;

let priceEvaluationPeter;
if (housePricePeter < houseOfferPeter) {
  priceEvaluationPeter = 'Peter is paying too much';
} else {
  priceEvaluationPeter = 'Peter is paying too little';
}
console.log(priceEvaluationPeter);

console.log(
  `Peter's house value is ${housePricePeter} and Peter is paying ${houseOfferPeter}`
);

const volumeInMetersJulia = 5 * 11 * 8;
const gardenSizeInM2Julia = 70;
const houseOfferJulia = 100000;
let housePriceJulia =
  volumeInMetersJulia * 2.5 * 1000 + gardenSizeInM2Julia * 300;

let priceEvaluationJulia;
if (housePriceJulia < houseOfferJulia) {
  priceEvaluationJulia = 'Julia is paying too much';
} else {
  priceEvaluationJulia = 'Julia is paying too little';
}
console.log(priceEvaluationJulia);

console.log(
  `Julia's house value is ${housePriceJulia} and Julia is paying ${houseOfferJulia}`
);

/////////////// 4 - Ez Namey (Startup name generator) Optional
const firstWords = [
  'Easy',
  'Awesome',
  'Corporate',
  'Crazy',
  'Funny',
  'Smart',
  'Super',
  'The',
  'Brave',
  'True'
];

const secondWords = [
  'Startup',
  'Corporation',
  'Company',
  'Frinsds',
  'Design',
  'Code',
  'Brothers',
  'Sisters',
  'Coffee',
  'Food'
];

let firstRandomWords = firstWords[Math.floor(Math.random() * 10) + 0];
let secondRamdomWords = secondWords[Math.floor(Math.random() * 10) + 0];

console.log(
  `Your new stsrtup name is ${firstRandomWords} ${secondRamdomWords}`
);
