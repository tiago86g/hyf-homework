// Age-ify (A future age calculator)

const yearOfBirth = 1986;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;

console.log(`You will be ${age} years old in ${yearFuture}`); 
    

  

// Goodboy-Oldboy (A dog age calculator)

let dogYearOfBirth = 2016;
let dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;
    
if (shouldShowResultInDogYears){
futureAgeInDogYears = dogYear * 7;
console.log(`Your dog will be ${futureAgeInDogYears} dog years old in 2027`);
} else {
    console.log(`Your dog will be ${dogYear} human years old in 2027`);
}
  

    

// Housey pricey (A house price estimator)

let widePeter = 8;
let deepPeter = 10;
let highPeter = 10;
let houseSizeInM3Peter = (widePeter * deepPeter * highPeter)
let gardenSizeInM2Peter = 100;
let houseOfferPeter = 2500000;

let housePricePeter = houseSizeInM3Peter * 2.5 * 1000 + gardenSizeInM2Peter * 300;
console.log(`Peter should pay ${housePricePeter}`);

if(houseOfferPeter<housePricePeter){
    console.log("Peter is makinig a good business!");
} else {
    console.log("Peter is paying too much...");
}


const wideJulia = 5;
const deepJulia = 11;
const highJulia = 8;
const houseSizeInM3Julia = (wideJulia * deepJulia * highJulia)
const gardenSizeInM2Julia = 70;
const houseOfferJulia =  1000000;

let housePriceJulia = houseSizeInM3Julia * 2.5 * 1000 + gardenSizeInM2Julia * 300;
console.log(`Julia should pay ${housePriceJulia}`);   

if(houseOfferJulia<housePriceJulia){
    console.log("Julia is makinig a good business!");
} else {
    console.log("Julia is paying too much...");
}




//Ez Namey (Startup name generator) Optional

let firstWords = ["Easy", "Awesome", "Corporate", "Crazy", "Amazing", "Super", "Blue", "Green", "Fantastic", "Tender"];
let secondWords = ["Corporate", "Travel", "Life", "Love", "Connection", "Car", "Food", "Friend", "Toy", "Help" ]
let startupName = [(firstWords[Math.floor(Math.random() * 10) + 0]) + " " + secondWords[Math.floor(Math.random() * 10) + 0]];

console.log("Your startup name will be... " + startupName);