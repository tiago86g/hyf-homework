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
