//////////////////ITEM ARRAY REMOVAL

const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

// Write some code here
names.splice(1, 1); //It will remove Ahmad from the array names
// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']










////////////////// When will we be there??

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };

function timeToArrive(destinationDistance, speed){
    totalTime = speed/destinationDistance; //It will get the total time in hours and a fraction of the hours.
    // console.log(totalTime); 
    
    let timeHours = Math.floor(totalTime); // It will give me the hours
    // console.log(timeHours);

    // It will give me the minute from the fraction of the hour
    let timeMinutes = totalTime - timeHours;
    timeMinutes = timeMinutes*60;
    timeMinutes = Math.floor(timeMinutes);
    // console.log(timeMinutes); 

    let result = {
        minutes: timeMinutes,
        hours: timeHours,
    }   

    return result;
}

let result = timeToArrive (50, 432);

console.log(`${result.hours} hours and ${result.minutes} minutes`);











// ////////////////// Series duration of my life

const lifespanInMinutes = 80 * 525949; // 80 years in minutes
const seriesDurations = [
 {
    title: 'Game of thrones',
    days: 3,
    hours: 1,
    minutes: 0,  
  },
  {
    title: 'Sopranos',
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: 'The Wire',
    days: 2,
    hours: 12,
    minutes: 0,
  }
]

// function to add my favorite serie to the list of series.
function addSerie (serie){
  seriesDurations.push(serie)
}

addSerie ({
  title: 'Black Mirror',
  days: 0,
  hours: 19,
  minutes: 15
});

console.log(seriesDurations);


totalTimeInMinutes = 0;
totalTimeSpentInSeries = 0;

for (let i = 0; i < seriesDurations.length; i++) {

  let daysInMinutes = seriesDurations[i].days * 1440;
  let hoursInMinutes = seriesDurations[i].hours * 60; 
  let totalTimeInMinutes = daysInMinutes + hoursInMinutes + seriesDurations[i].minutes;
  let percentageOfLife = (totalTimeInMinutes / lifespanInMinutes) * 100;  
  totalTimeSpentInSeries = totalTimeSpentInSeries + percentageOfLife;

  console.log(`${seriesDurations[i].title} took ${percentageOfLife.toFixed(3)}% of my life`);
 }

  console.log(("In total I spent"), totalTimeSpentInSeries.toFixed(3),("% of my life in series"));











/////////////////// Add song to database

const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];

let songCounter = 5;
function addSongToDatabase(song){
  song.songId = songCounter;
  songCounter++; //It will increase the number of the songId automatically
  songDatabase.push(song); // It will add the song to the database
};
// The function to add a song to the database will not return anything because it is just adding an object to an array.

addSongToDatabase({
  title: "Racional",
  artist: "Tim Maia"
})

addSongToDatabase({
  title: "Feel good inc.",
  artist: "Gorillaz"
})
console.log(songDatabase);

function getSongByTitle (titleToSearchFor){
  for (let i = 0; i < songDatabase.length; i++){
    if (titleToSearchFor == songDatabase[i]["title"]){
    return songDatabase[i];
  }
  }
}
console.log(getSongByTitle());
console.log(getSongByTitle("Racional"));


const myPlaylist = [];
function addSongToMyPlaylist (titleToSearchFor){
  if (getSongByTitle (titleToSearchFor)){
    myPlaylist.push(getSongByTitle (titleToSearchFor));
  }
}

addSongToMyPlaylist("My baby")
console.log("Here is my playlist", myPlaylist);











////////////////////// Smart-ease - Back to the basics!


let notes = [];
let idCounter = 1;
function addNote (content, id){
  id = idCounter;
  idCounter ++
  notes.push({content, id});
}
addNote({
  content:"First note",
});
addNote({
  content:"Second note",
});

console.log(notes);

function getNoteFromId(id){
  for (let i = 0; i < notes.length; i++){    
    if (id = notes[i].id){
      console.log(notes[i]);
    } else {
      console.log("The id does not match with any note");
    }
  }   
}
getNoteFromId(1)
console.log(notes);

function logOutNotesFormatted(){
  for (let i = 0; i < notes.length; i++){
    console.log('The note with id ' + notes[i].id + ', has the following note text: ' + notes[i].content + '.');    
  }
}
logOutNotesFormatted();

//Unique feature is add the id number automatically. 





