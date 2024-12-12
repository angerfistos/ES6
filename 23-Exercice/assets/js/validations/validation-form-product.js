import {validationFormProductArray} from '../components/form-product';
import ValidationBase from './validation-base';

export default class ValidationFormProduct extends ValidationBase{
 constructor(newProduct) {
  super(newProduct)
 }
 validationProductTypeExist(products){
  return this.validationTypeExist(products, "product");
 }

validationFormProduct(){
  const ressource = validationFormProductArray()
  return this.validationFormInput(ressource);
  
};
}