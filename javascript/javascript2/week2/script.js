////// DOBLING OF ODD NUMBERS

let numbers = [1, 2, 3, 4];
const newNumbers = numbers
    .filter(oddNumbers => oddNumbers % 2 !== 0)
    .map(oddNumbers => oddNumbers * 2)

//   .filter(function(evenNumbers){
//       if (evenNumbers % 2 !== 0) return true;
//       else return false;
//     //   return evenNumbers  % 2 !== 0;
//   })
//   .map(function(evenNumbers){
//       return evenNumbers * 2;
//   })
console.log("The doubled numbers are", newNumbers);