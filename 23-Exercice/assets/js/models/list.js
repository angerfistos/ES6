import {Products} from './product.js';

export class List extends Products{
  constructor(title, products = {}){
    super(products)
    this.title = title;
  }

  total(){
    return Object.values(this.products)
      .reduce(
        (subTotal, productType) =>
          subTotal +
          productType.reduce(
            (total, product) => total + product.price * product.quantity,
            0,
          ),
        0,
      )
      .toFixed(2);
  }

  categoriesList(){
    return Object.keys(this.products);
  }

  productNamesListByCategory(category){
    return this.products[category].map((product) => product.product);
  }
}