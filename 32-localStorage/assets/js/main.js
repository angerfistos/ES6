import Store from './services/Store.js';
import Accueil from './components/accueil.js';
import Header from './components/header.js';

customElements.define('main-home', Accueil);
customElements.define('main-header', Header);

const form = document.querySelector('form');
const store = new Store();

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(this.year.value);
  if (!this.year.value || !this.name.value || !this.rating.value) {
    alert('Il manque un champs');
    return;
  }

  store.addBook({
    name: this.name.value,
    year: this.year.value,
    rating: this.rating.value,
  });
  this.reset();
});

document.getElementById('deleteAllBooks').addEventListener('click', () => {
  store.deleteBooks();
});
