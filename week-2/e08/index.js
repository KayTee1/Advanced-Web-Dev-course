import Book from "./book.js";
const book = new Book();

const displayBookDetails = (book) => {
  return book.getInfo();
};

console.log(displayBookDetails(book));
