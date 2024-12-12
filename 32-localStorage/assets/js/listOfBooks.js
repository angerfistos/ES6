import List from './components/list.js';
import Header from './components/header.js';
//import Store from './services/Store.js';

customElements.define('main-list', List);
customElements.define('main-header', Header);

const list = document.querySelector('.list');
const listing = new List();
listing.generateList(list);
