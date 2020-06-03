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
