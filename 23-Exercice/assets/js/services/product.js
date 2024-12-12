import { closeModal, displayingModalAndButtons } from './modal.js';
import {categoryOptions} from '../components/form-product.js';
import ValidationFormProduct from '../validations/validation-form-product.js';
import { createTable } from '../components/table.js';
import { Product } from '../models/product.js';
import stringError from '../utils/string-error.js';

export const addProduct = (list, btnOpenModal, btnOpenCategory, modal, totalElement) => {
  const formData = document.forms.namedItem('add-product');
  closeModal(btnOpenModal, btnOpenCategory, modal);
  categoryOptions(list);
  formData.addEventListener('submit', (e) => {
    e.preventDefault();
    const addedProduct = new FormData(e.target);
    const validatedForm = new ValidationFormProduct(addedProduct);
    const isValidForm = validatedForm.validationFormProduct();

    if (!isValidForm) {
      return;
    }
    
    const newProduct = createNewProduct(addedProduct);
    const productList = list.productNamesListByCategory(newProduct.category);
    const isExists = validatedForm.validationProductTypeExist(productList);

    stringError(isExists, newProduct.product, '.product-error')
    if(isExists){
      return;
    }
    list.addProduct(newProduct);
    displayingModalAndButtons(modal, btnOpenModal, btnOpenCategory);
    createTable(list, totalElement);
  });
};

export const createNewProduct = (product) => {
  const newProduct = new Product(
    product.get('product'), 
    Number(product.get('price')), 
    Number(product.get('quantity')), 
    product.get('category'));
  return newProduct;
};

export const deleteProduct = (list, total) => {
  const btnDeleteProduct = document.querySelectorAll('.btn-delete');
  btnDeleteProduct.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const productLine = e.target.parentNode.parentNode;
      const category = productLine.children[0].innerHTML;
      const productName = productLine.children[1].innerHTML;
      const index = list.products[category].findIndex(
        (p) => p.product === productName,
      );
      list.products[category].splice(index, 1);
      createTable(list, total);
    });
  });
};