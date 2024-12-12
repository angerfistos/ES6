import { addCategory} from './category';
import { addProduct } from './product';
import {formCategory} from '../components/form-category';
import formProduct from '../components/form-product';

const openModal = (list, string, btnAndmodal) => {
  const modal = document.querySelector('.modal');
  const {
    btnOpenModal,
    btnOpenCategory,
    totalElement,
  } = btnAndmodal;
  btnOpenModal.style.display = 'none';
  btnOpenCategory.style.display = 'none';
  if (string === 'category') {
    modal.innerHTML = formCategory;
    modal.setAttribute('modal-hidden', false);
    addCategory(list, modal, btnOpenModal, btnOpenCategory);
  }
  if (string === 'product') {
    modal.innerHTML = formProduct;
    modal.setAttribute('modal-hidden', false);
    addProduct(list, btnOpenModal, btnOpenCategory, modal, totalElement);
  }
};

function displayingModalAndButtons(modal, btnOpenModal, btnOpenCategory){
  btnOpenCategory.style.display = 'block';
  btnOpenModal.style.display = 'block';
  modal.setAttribute('modal-hidden', true);
};

function closeModal(btnOpenModal, btnOpenCategory){
  const modal = document.querySelector('.modal');
  const btnCloseModal = document.querySelector('.btnCloseModal');
  btnCloseModal.addEventListener('click', (e) => {
    e.preventDefault();
    
    displayingModalAndButtons(modal, btnOpenModal, btnOpenCategory);
  });
};

function openProductForm(list, btnAndmodal){
  const { btnOpenModal } = btnAndmodal;
  btnOpenModal.addEventListener('click', (e) => { 
    e.preventDefault();
    openModal(list, 'product', btnAndmodal);
  });
};

function openCategoryForm(list, btnAndmodal){
  const { btnOpenCategory } = btnAndmodal;
  btnOpenCategory.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(list, 'category', btnAndmodal);
  });
};
export {displayingModalAndButtons, closeModal, openProductForm, openCategoryForm};