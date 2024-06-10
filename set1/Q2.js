/* Write an ES6 function that takes an array of strings and returns an array with all the strings
capitalised using the map method. */

const capitalizeArray = (arrOfStrings) =>
  arrOfStrings.map((str) => str.toUpperCase());

const myArray = ["apple", "banana", "cherry"];
console.log(capitalizeArray(myArray));
// Output: ["APPLE", "BANANA", "CHERRY"]
