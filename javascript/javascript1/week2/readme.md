# Readme

///////// 1 - Flight booking fullname function

// Create a function called getFullname that returns a fullname. It should have two parameters: firstname and surname.

// Formal fullname
// On the flight website the user has the possibility to check a checkbox that indicates if the user wants to be adressed formally. Lets also change getFullname to include support for formal name.

// Create an extra parameter useFormalName that is a boolean. If it is true the function should add a Lord in front of the name.

// What do we do if useFormalName is not given as an argument?
// it will be false
// Remember to consider someone calling the function with an empty string as firstname and lastname.

///////// 2 - Event application
// Another customer has contacted us. He works for a secret company that rimes with foogle. The customer works on their calendar application. They need some functionality to help with writing what weekday an event is held.

// You specify how many days from today an event is being held. The function then figures out what weekday the event is being held. Here is an example:

// Today is Sunday and the event is in 5 days. Therefore the event will be held on a friday.

///////// 3 - Weather wear
// Create a function (that you have to name) that has temperature as parameter. Based on the temperature it should return a string with what the user should wear. You decide what the user should wear based on the temperature.

///////// 4 - Student manager
// A coding school have contacted us to make some functionality for managing their classes. We will create functionality for adding students to a class.

// For this exercise you need to figure out how ////Array.push///// works. Learn about the concept by researching about it.

// addStudentToClass function
// The addStudentToClass should add the studentName to the class07Students array.

// But there are some other requirements:
// There can be only 6 students in a class. If more students are tried to be added, log out the following: "Cannot add more students to class 07".
// The same person cannot be added to the class. If the same person is added to the class, log out the following: 'Student Benjamin is already in the class' where Benjamin is substituted for the studentName.
// We are very fond of our Queen in Denmark, so if the Queen is added to the class she should always get a space. Even if the class has been filled out.
// You cannot add an empty string to a class

// getNumberOfStudents function
// getNumberOfStudents should simply return the number of students in the class.

// Try out all the cases:

// Add some students to the class.
// Add more students than there is space for
// Add a student that is already in the class
// Add the Queen to a full class
// Call the getNumberOfStudents to log out the number of students.

///////// 5 - addCandy function
// Create a function called addCandy. It has two parameters:

// candyType - specifies the candy type. Could be 'sweet, chocolate, toffee or chewing-gum'
// weight - specifies the weigth of the candy in grams
// The function should add the price of the candy to an array called boughtCandyPrices using push
