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
let result = names.filter(item => item !== nameToRemove);
names = result;

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
