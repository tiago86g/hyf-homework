// 1 - Flight booking fullname function
function getFullname(firstname, surname, useFormalName) {
  let fullName;
  if (!firstname || !surname) {
    alert(`Hey, ${firstname} ${surname} please provide a valid name`);
    return; //firstname and surname are mandatory.
  }

  if (useFormalName == true) {
    fullName = `Lord ${firstname} ${surname}`; // useFormalName is optional
  } else {
    fullName = `${firstname} ${surname}`;
  }
  console.log(fullName);
  return;
}

const fullName1 = getFullname('Tiago', 'Gonçalves', true);
const fullName2 = getFullname('Charlotte', 'Kaare', false);
const fullName3 = getFullname('Diego', 'Gonçalves');

// 2- Event application
function getEventWeekday(eventDay) {
  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const todayDayOfTheMonth = new Date().getDate();
  const todayMonth = months[new Date().getMonth()];

  const todayWeekDayNumber = new Date().getDay();
  const today = weekDays[todayWeekDayNumber];
  const eventWeekdayNumber = (todayWeekDayNumber + eventDay) % weekDays.length;
  const eventWeekdayDay = weekDays[eventWeekdayNumber];
  console.log(
    `Today is ${today}, (${todayMonth}, ${todayDayOfTheMonth}) and the event will be in ${eventDay} days, on a ${eventWeekdayDay}`
  );
}

getEventWeekday(10);
getEventWeekday(21);

// 3- Weather wear
function chooseClothes(temperature) {
  if (temperature < 0) {
    return 'Wear a warm coat and a scarf';
  } else if (temperature < 10 && temperature >= 0) {
    return 'Wear a jacket';
  } else if (temperature < 20 && temperature >= 10) {
    return 'Wear a long sleeve shirt';
  } else if (temperature < 30 && temperature >= 20) {
    return 'Wear a t-shirt';
  } else if (temperature < 40 && temperature >= 30) {
    return 'Wear your trunks';
  } else if (temperature >= 40) {
    return "Don't wear anything";
  }
}

const clothesToWear = chooseClothes(14);
console.log(clothesToWear);

// 4 - Student manager
const class07Students = [];
function addStudentToClass(studentName) {
  if (studentName === '') {
    console.log(`Please insert a name`);
  } else if (
    !class07Students.includes(studentName) &&
    studentName === 'Margareth II'
  ) {
    class07Students.push(studentName);
    return class07Students;
  } else if (
    !class07Students.includes(studentName) &&
    class07Students.length < 6
  ) {
    class07Students.push(studentName);
    return class07Students;
  } else if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`);
  } else if (class07Students.length > 6) {
    console.log(`Sorry, ${studentName} our class is already full`);
  }
}

function getNumberOfStudents() {
  const totalStudents = class07Students.length;
  console.log(totalStudents);
}

addStudentToClass('Tiago Goncalves');
addStudentToClass('Charlotte Kaare');
addStudentToClass('Charlotte Kaare');
addStudentToClass('Theo Kaare-Goncalves');
addStudentToClass('Diego Goncalves');
addStudentToClass('Vanessa Goncalves');
addStudentToClass('Vera Lucia');
addStudentToClass('Margareth II');
addStudentToClass('Antonio Roberto');
getNumberOfStudents();
console.log('Class 07', class07Students);

// 5 - addCandy function
let boughtCandyPrices = [];
const candyPrice = {
  Sweet: 0.5,
  Chocolate: 0.7,
  Toffee: 1.1,
  ChewingGum: 0.03
};
const amountToSpend = Math.floor(Math.random()) * 100;
let total;

function addCandy(candyType, weight) {
  if ((canIBuy = false)) {
    console.log('You need more money!', canIBuy);
    return boughtCandyPrices;
  } else if (candyType === 'Sweet') {
    const addPrice = weight * candyPrice.Sweet;
    boughtCandyPrices.push(addPrice);
    console.log('All done. this is your cart', boughtCandyPrices);
    return boughtCandyPrices;
  } else if (candyType === 'Chocolate') {
    const addPrice = weight * candyPrice.Chocolate;
    boughtCandyPrices.push(addPrice);
    console.log('All done. this is your cart', boughtCandyPrices);
    return boughtCandyPrices;
  } else if (candyType === 'Toffee') {
    const addPrice = weight * candyPrice.Toffee;
    boughtCandyPrices.push(addPrice);
    console.log('All done. this is your cart', boughtCandyPrices);
    return boughtCandyPrices;
  } else if (candyType === 'Chewing-gum') {
    const addPrice = weight * candyPrice.ChewingGum;
    boughtCandyPrices.push(addPrice);
    console.log('All done. this is your cart', boughtCandyPrices);
    return boughtCandyPrices;
  }
}

addCandy('Sweet', 10);
addCandy('Chocolate', 10);
addCandy('Toffee', 80);
addCandy('Chewing-gum', 280);

function canBuyMoreCandy() {
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    total += boughtCandyPrices[i];
  }
  if (total < amountToSpend) {
    console.log('You can buy more, so please do!');
  } else {
    console.log('Enough candy for you!');
  }
}
canBuyMoreCandy();
