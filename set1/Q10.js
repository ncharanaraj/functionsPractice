/* Write an ES6 function that takes an array of objects with the properties name, age and city, and
returns an array with only the objects that have a city property of "Indore" and age greater than
70. */

const filterByCityAndAge = (peoples) =>
  peoples.filter((people) => people.city === "Indore" && people.age > 70);

const people = [
  { name: "Ridhima", age: 75, city: "Indore" },
  { name: "Akshay", age: 60, city: "Delhi" },
  { name: "Udit", age: 80, city: "Indore" },
  { name: "Venki", age: 80, city: "Bangalore" },
];
const filteredPeople = filterByCityAndAge(people);
console.log(filteredPeople);
//output [{ name: 'Ridhima', age: 75, city: 'Indore' },{ name: 'Udit', age: 80, city: 'Indore' }]
