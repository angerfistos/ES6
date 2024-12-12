import displayedTotal from './display-total.js';
import {deleteProduct} from '../services/product.js';
import modal from './modal.js';

const table = ` 
  <div class="listing" >
    <h1 class="title"></h1>
    <table class="shopping-list">
        <thead class="thead">
            <tr class="trhead">
                <th>Catégorie</th>
                <th>Produit</th>
                <th>Prix</th>
                <th>Quantité</th>
                <th>Sous-total</th>
                <th></th>
            </tr>
        </thead>
        <tbody class="tbody">
        </tbody>
    </table>
    <div class="displayTotal"></div>
        <button class="btnOpenModal btn-primary"></button>
        <button class="btnOpenCategory btn-primary"></button>
  </div> 
  <div class= "relative">
  ${modal()}
  </div>
`;

function displayedTable(productList, productBody){
  productList.map((product) => {
    const productLine = document.createElement('tr');
    productLine.setAttribute('class', 'product-line');
    productLine.innerHTML = `
      <td>${product.category}</td>
      <td>${product.product}</td>
      <td>${product.price}</td>
      <td>${product.quantity}</td>
      <td>${product.subTotal}</td>
      <td>
          <button class="btn btn-delete">X</button>
      </td>`;
    productBody.appendChild(productLine);
  });
}; // variable permmetant d'inséré chaque produit

function createTable(list, totalElement){
     // on recupere la liste de course    
    const productBody = document.querySelector('.tbody');
    productBody.innerHTML = '';
    const productList = Array.from(Object.values(list.products)); // cree un array de array de chaque categories
    
    const pl = productList
      .flatMap((products, index) => {
        products.category = Object.keys(list.products)[index]; // on recupere le nom de la categorie
        products.map((product) => {
          product.category = products.category; // on insere dans le nouveau tableau le nom de la categorie sur chaque produit
          return product;
        });
        return products;
      })
      .map((p) => {
        p.subTotal = list.subTotal(p); // on insere dans le nouveau tableau le sous total de chaque produit
        return p;
      })
      .sort((productA, productB) =>
        productA.category.toLowerCase().localeCompare(productB.category.toLowerCase()),
      );
      
    displayedTable(pl, productBody);
    displayedTotal(list, totalElement);
    deleteProduct(list, totalElement);
  };

export {
  table,
  createTable,
};