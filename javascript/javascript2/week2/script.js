// Flight booking fullname function
function getFullName (firstname, lastname, useFormalName){
    if ((firstname || lastname) && useFormalName){
        name = 'Lord ' + firstname + ' ' + lastname;
        return name;
        // This will run if the user provide a valid name or surname and ask us to use a formal name.


    } else if (!firstname && !lastname){
        alert ('Please insert at least a first name or a last name');
        // This will run in case the user don't provide name and surname


    } else {
        name = firstname + ' ' + lastname;
        return name;
        // This will run if the user provide a valid name or surname and ask us to don't use a formal name.
    }
  }
let fullname = getFullName("Tiago", "Goncalves",true);
console.log(fullname);





// Event application

var currentTime = new Date();
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// var currentWeekday = daysOfTheWeek[currentTime.getDay()];
// console.log("Today is " + currentWeekday);
function getEventWeekday(daysUntilEvent){
    eventWeekday = daysOfTheWeek[(daysUntilEvent + currentTime.getDay()) % (daysOfTheWeek.length)];
    console.log("Your event will be on " + eventWeekday);  
}
getEventWeekday (1);






// Weather wear

function whatToWear (temperature) {
    if (temperature <= -10){
        console.log("Wear your home.");
    } else if (temperature > -10 && temperature < 0){
        console.log("Wear your best winter jacket with gloves, scarf and winter cap.");
    } else if (temperature > 0 && temperature <= 5){
        console.log("Wear a winter jacket and maybe a scarf.");
    } else if (temperature > 5 && temperature <= 10){
        console.log("Wear a jacket and maybe a scarf.");
    } else if (temperature > 10 && temperature <= 18){
        console.log("Wear a jacket.");
    } else if (temperature >18 && temperature <= 30){
        console.log("Don't worry about warm clothes.");
    } else if (temperature >30){
        console.log("You won't need clothes.");
    } 
}
whatToWear(31);






// Student manager


let class07Students = [];

function addStudentToClass(studentName) {
if ((class07Students.length > 5) && studentName !== "Queen"){
    console.log("Cannot add more students to class 07");
    } else if (!studentName){
    console.log("You must add a name");
    } else  if (class07Students.includes (studentName) === true){
    console.log("Student is already in the class");
    } else if (class07Students.length <= 5){
        class07Students.push(studentName);
    } else if (studentName = "Queen"){
        class07Students.push(studentName);
    } 
}

function getNumberOfStudents() {
    let totalInClass07 =  class07Students.length;
    console.log(totalInClass07);
}

addStudentToClass("Ana");
addStudentToClass("Theo");
addStudentToClass("Theo");
addStudentToClass("Charlotte");
addStudentToClass();
addStudentToClass("Julia");
addStudentToClass("Peter");
addStudentToClass("Nina");
addStudentToClass("John");
addStudentToClass("Queen");
addStudentToClass("Diego");

getNumberOfStudents();



// Candy helper





