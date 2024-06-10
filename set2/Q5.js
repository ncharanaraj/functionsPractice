/**Write an ES6 function which takes out the names of the students whose first letter starts with ‘A’. */
const studentName = [
  "Ram",
  "Anjali",
  "Arpit",
  "Bhanu Kumar",
  "Jaya",
  "Ankit",
  "shayam",
];
// Your code here

const getStudentNames = (studentNames) =>
  studentNames.filter((studentName) => studentName[0].toUpperCase() === "A");

const studentNames = getStudentNames(studentName);

console.log(studentNames);
// Output: ["Anjali", "Arpit", "Ankit"]
