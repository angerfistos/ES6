import {validationFormCategoryArray} from '../components/form-category';
import ValidationBase from './validation-base';

export default class ValidationFormCategory extends ValidationBase{
  constructor(newCategory) {
    super(newCategory);
  }

  validationCategoryTypeExist(categories){
    return this.validationTypeExist(categories, "category");
  }

  validationFormCategory(){
    const resources = validationFormCategoryArray()
    return this.validationFormInput(resources);
  };
}