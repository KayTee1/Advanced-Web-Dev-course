class Book {
  title = "Harry Potter and the Sorcerer's Stone";
  author = "J.K. Rowling";
  getSummary() {
    return `Title: ${this.title}, Author: ${this.author}`;
  }
}
const book = new Book();
console.log(book.getSummary());
