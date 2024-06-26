/* Write an ES6 function that takes an array of objects representing books and returns an array
with only the titles of each book. */

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "Pride and Prejudice", author: "Jane Austen" },
];
// Your code here

const getBookTitles = (books) => books.map((book) => book.title);

const titles = getBookTitles(books);
console.log(titles);
