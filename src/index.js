// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// const newNumber = numbers.map(function (number) {
//   return number * 2;
// });

//Filter - Create a new array by keeping the items that return true.
// const newNumber = numbers.filter(function(number){
//     return number > 10;
// });

//Reduce - Accumulate a value by doing something to each item in an array.
// const newNumber = numbers.reduce(function (accumulator, number) {
//   console.log(accumulator);
//   console.log(number);
//   return accumulator + number;
// });
// console.log("Final " + newNumber);

//Find - find the first item that matches from an array.
// const number = numbers.find(function(num){
//     return num<40;
// });
// console.log(number);

//FindIndex - find the index of the first item that matches.
// const number = numbers.findIndex(function (num) {
//   return num > 10;
// });
// console.log(number);

import emojipedia from "./emojipedia";
const meaningArray = emojipedia.map(function (item) {
  return item.meaning.substring(0, 100);
});
console.log(meaningArray);
