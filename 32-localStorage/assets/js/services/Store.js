export default class Store {
  getBooks() {
    let books;

    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books')); // Je recupère et je parse (convertis en tableau/object)
    }
    return books;
  }

  addBook({ name, year, rating }) {
    const books = this.getBooks();

    books.push({
      title: name,
      year,
      rating,
    });

    localStorage.setItem('books', JSON.stringify(books)); // Je set les livres et je les convertis en string
  }

  deleteOneBook(title) {
    const books = this.getBooks();
    const updatedBooks = books.filter((book) => book.title !== title); // Je filtre les livres pour ne pas avoir celui qui correspond au titre
    localStorage.setItem('books', JSON.stringify(updatedBooks)); // Je set les livres et je les convertis en strings
  }

  deleteBooks() {
    localStorage.removeItem('books');
  }
}
