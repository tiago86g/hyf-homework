# Readme

1. Item array removal
   Item array removal
   Remove the item in names that is equal to nameToRemove

2. When will we be there??
   Write a function where you speficy your speed in km/h and how far you have to go in km. The function has to return the time it will take to arrive at your destination. The time should be formatted like this: 3 hours and 34 minutes.

Hint: For formatting your best friend is Google!

3. Series duration of my life
   How much time of my life have i been watching series on tv? Lets find out! Calculate how much time a tv series have taken as a percentage of an average lifespan of 80 years.
   Firstly change the seriesDurations array found above to include your favorite series. Find the duration of a series here: http://tiii.me/
   Create a function that logs out the following text using the seriesDurations array:

Game of thrones took 0.01% of my life
Sopranos took 0.012% of my life
The Wire took 0.007% of my life

In total that is 0.2% of my life

4. Smart-ease - Back to the basics!

NOnoN0nOYes (Note taking app)
You are sitting at a meeting. A person is presenting some interesting thought that you want to write down. You check your bag, but realise that you forgot to bring your notepad. Hmm you check the internet for an online solution. But you need to signup for them all, too bad... Maybe this could be a worthwhile problem so solve. Lets create a simple and easy to use notepad 📝

Save a note
The first thing we will create is the functionality to save a note: Create a variable called notes and assign it to an empty array. Create a function called saveNote. The saveNote has two parameters:
content parameter is a string.
id is a number.

The saveNote function should push an object to the notes array with the keys content and id. Here is an example

The saveNote function should push an object to the notes array with the keys content and id. Here is an example
const notes = [];

    function saveNote(content, id) {
    // write some code here
    }

    saveNote('Pick up groceries', 1);
    saveNote('Do laundry', 2);

    console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

Get a note
Now a user can save a note, but what if a user wants to see a specific note, but only remembers the id? Lets create that functionality for him: Create a function called getNote. The function has one parameter called id. When calling this function with an id it should return the relevant note object that corresponds to the id. If no id is specified or if the id is not a number, log out an error string. Hint: Use a for loop.
function getNote(id) {
// your code here
}

    const firstNote = getNote(1);
    console.log(firstNote); // {content: 'Pick up groceries', id: 1}

Log out notes
Now a user can both save and get a note. What if the user just wants to read all his notes? Lets also create that functionality: Create a function logOutNotesFormatted. When calling the function it should log this string out for every note: "The note with id: 1, has the following note text: "some example note"."
function logOutNotesFormatted() {
// your code here
}

logOutNotesFormatted(); // should log out the text below
// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry
Unique feature
Suddenly you get this great idea for making the note app even better!

Come up with a unique feature you think would make this app better.
