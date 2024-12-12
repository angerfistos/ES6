import mandatoryError from '../utils/mandatory-error';
export default class ValidationBase{
  constructor(newResource) {
    this.newResource = newResource;
  }

  validationTypeExist(array, resource){
    const value = this.newResource.get(resource).toLowerCase();
    const arrayLowerCase = array.map((element) => element.toLowerCase());
    if( arrayLowerCase.includes(value)){
      return true
    }
    return false
   }

  validationFormInput(resources){
    const values = resources.map((resource) => {
      const value = this.newResource.get(resource);
      return mandatoryError(value, `.${resource}-error`, resource);
    });
    const isNotOk = values.some((v) => v === undefined);
    if (isNotOk) {
      return false
    }
    return true;
  };
}