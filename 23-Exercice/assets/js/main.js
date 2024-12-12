import { shoppingList } from './mock/shoppingList';
import { openProductForm, openCategoryForm } from './services/modal';
import {table, createTable} from './components/table';
import listDto from './dtos/list-dto';

const body = document.querySelector('body');
body.innerHTML = table;
document.querySelector('.title').innerHTML = shoppingList.title;

const btnOpenModal = document.querySelector('.btnOpenModal');
const btnOpenCategory = document.querySelector('.btnOpenCategory');
const totalElement = document.querySelector('.displayTotal');

btnOpenModal.innerHTML = 'Ajouter un produit';
btnOpenCategory.innerHTML = 'Ajouter une catégorie';

//Création de la liste
const list = listDto()

//Affichage
createTable(list, totalElement);
openProductForm(list, {
  btnOpenModal,
  btnOpenCategory,
  totalElement
});
openCategoryForm(list, {
  btnOpenModal,
  btnOpenCategory,
  totalElement
});