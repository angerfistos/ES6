import Store from '../services/Store.js';

export default class List extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <h1 class="text-4xl my-8">Liste des livres</h1>
    <ul class="list w-full mt-8 "></ul>
        `;
  }

  generateList = (list) => {
    const store = new Store();

    const books = store.getBooks();
    list.innerHTML = '';

    if (!books.length) {
      list.innerHTML = "Il n'y a pas de livres";
      return;
    }
    for (const book of books) {
      const li = document.createElement('li');
      li.innerHTML = `
      <div class="flex w-1/3 justify-between mt-1">
        <p>${book.title} - ${book.year} || ${book.rating}/10</p>
        <button class="delete-btn text-red-600" id="${book.title}">X</button>
      </div>`;
      list.appendChild(li);
    }
    this.deleteItem();
  };

  deleteItem = () => {
    const list = document.querySelector('.list');
    const deleteBtn = document.querySelectorAll('.delete-btn');
    deleteBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const store = new Store();
        store.deleteOneBook(e.target.id);
        this.generateList(list);
      });
    });
  };
}
