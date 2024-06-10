/* Given employee’s data, write an ES6 function which greets them with a personalized message
for onboarding. */

const employeeData = [
  { name: "ram", dept: "marketer" },
  { name: "Radha", dept: "SDE" },
  { name: "shyam", dept: "finance professional" },
];
// Your code here

const getGreetEmployeeMessages = (employees) =>
  employees.map(
    ({ name, dept }) => `Hi ${name} we are glad to have you as a ${dept}`
  );

const greetEmployeeMessages = getGreetEmployeeMessages(employeeData);

console.log(greetEmployeeMessages);
