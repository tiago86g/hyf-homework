// 1. Item array removal
let names = [
  'Peter',
  'Ahmad',
  'Yana',
  'kristina',
  'Rasmus',
  'Samuel',
  'katrine',
  'Tala'
];
const nameToRemove = 'Ahmad';
const result = names.filter(item => item !== nameToRemove);
names = result;

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

// 2. When will we be there??
const travelInformation = {
  speed: 50,
  destinationDistance: 432
};
function timeToTrave() {
  const speed = travelInformation.speed;
  const distance = travelInformation.destinationDistance;
  const totalHours = distance / speed;
  const hours = Math.floor(distance / speed);
  const minutes = Math.floor((totalHours - hours) * 60);
  return `${hours} hours and ${minutes} minutes`;
}
const travelTime = timeToTrave(travelInformation);
console.log(travelTime); // 4 hours and 42 minutes

// 3. Series duration of my life
const seriesDurations = [
  {
    title: 'Game of thrones',
    days: 3,
    hours: 1,
    minutes: 0
  },
  {
    title: 'Sopranos',
    days: 3,
    hours: 14,
    minutes: 0
  },
  {
    title: 'The Wire',
    days: 2,
    hours: 12,
    minutes: 0
  }
];
function addSerie(serie) {
  seriesDurations.push(serie);
}

addSerie({
  title: 'Black Mirror',
  days: 0,
  hours: 19,
  minutes: 15
});
addSerie({
  title: '3%',
  days: 0,
  hours: 19,
  minutes: 30
});

function totalSeriesInLife(list) {
  const lifeInMinutes = 80 * 525948.766;
  list.map((serie, index) => {
    const totalSerieInMinutes =
      serie.minutes + serie.hours * 60 + serie.days * 1440;
    const percentageOfLife =
      (totalSerieInMinutes / lifeInMinutes - 1) * 100 + 100;

    console.log(
      `${serie.title} took ${percentageOfLife.toFixed(3)}% of my life`
    );
  });
}
totalSeriesInLife(seriesDurations);

// 4. Smart-ease - Back to the basics!
let notes = [];
function saveNote(content, id) {
  notes.push({ content: content, id: id });
  console.log(notes);
}
saveNote('Pick up groceries', 1);
saveNote('Do laundry', 2);

function getNote(id) {
  return notes.filter(item => item.id === id);
}
const firstNote = getNote(1);
console.log('firstNote', firstNote);
const secundNote = getNote(2);
console.log('secundNote', firstNote);

function logOutNotesFormatted() {
  notes.map(item => {
    id = item.id;
    content = item.content;
    console.log(
      `The note with id:${id}, has the following note text: ${content}`
    );
  });
}
logOutNotesFormatted();

function deleteNote(list, id) {
  const updatedNotes = list.filter(note => note.id != id);
  notes = updatedNotes;
  return notes;
}
deleteNote(notes, 1);
console.log('notes after delete one item', notes);

// 5. CactusIO-interactive (Smart phone usage app) optional
const activities = [{ date: '6/7/2020', activity: 'Youtube', duration: 30 }];
const totalActivities = activities.length;
const time = [];
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};
const today = new Date().toLocaleDateString('en-US');

function addActivity(activity, duration) {
  date = today;
  for (let i = 0; i < activities.length; i++) {
    time.push(activities[i].duration);
  }
  let totalTime = time.reduce((a, b) => a + b, 0);
  if (totalTime > 360 || duration > 360) {
    return console.log(
      'You have reached your limit, no more smartphoning for you!'
    );
  } else {
    activities.push({ date: date, activity: activity, duration: duration });
    return;
  }
}
addActivity('Youtube', 30);
addActivity('Facebook', 390);
addActivity('Instagram', 40);
addActivity('Whatapp', 40);

console.log(activities);

function showStatus() {
  if (activities.length > 0) {
    const totalActivities = activities.length;
    let totalTime = time.reduce((a, b) => a + b, 0);
    console.log(
      `You have added ${totalActivities} activities. They amount to ${totalTime} min. of usage. Your limit is 360 min`
    );
  } else {
    console.log(`Add some activities before calling showStatus`);
  }
}
showStatus();

function showActivities(date) {
  //date = today;
  if (activities.length > 0) {
    current = activities.filter(item => item.date == date);
    console.log(current);
  } else {
    console.log("You don't have any activity");
  }
}
showActivities(today);
