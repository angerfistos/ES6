import { closeModal } from './modal';
import {
  displayingModalAndButtons,
} from './modal';
import ValidationFormCategory from '../validations/validation-form-category';
import stringError from '../utils/string-error';

export const addCategory = (list, modal, btnOpenModal, btnOpenCategory) => {
  closeModal(btnOpenModal, btnOpenCategory, modal );
  const formData = document.forms.namedItem('add-category');

  formData.addEventListener('submit', (e) => {
    e.preventDefault();
    const newCategory = new FormData(e.target);
    const validatedForm = new ValidationFormCategory(newCategory);
    const isValidForm = validatedForm.validationFormCategory();
    if (!isValidForm) {
      return;
    }
    const name = newCategory.get('category');
    const isExists = validatedForm.validationCategoryTypeExist(list.categoriesList());
    stringError(isExists, name, '.category-error')
    if(isExists){
      return;
    }
    list.addCategory(name);
    displayingModalAndButtons(modal, btnOpenModal, btnOpenCategory);
  });
};