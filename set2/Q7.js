/**Write an ES6 function that takes an array of numbers and returns the first number that is
divisible by 7. */

const numbers = [1, 2, 3, 21, 14, 7];
// Your code here

const getIsDivisibleBy7 = (numArr) => numArr.find((num) => num % 7 === 0);

const isDivisibleBy7 = getIsDivisibleBy7(numbers);

console.log(isDivisibleBy7);
// Output: 21
