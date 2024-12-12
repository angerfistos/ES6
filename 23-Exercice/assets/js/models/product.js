export class Product{
  constructor(product, price, quantity, category){
    this.product = product;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
  }
} 

export class Products {
  constructor(products={}){
    this.products = products; 
  }

  addCategory(category){
    this.products[category] = [];
  }

  categories(categories){
    categories.map((category) => {
      this.products[category] = []
    });
  }
  addProduct(product){
    this.products[product.category].push(product);
  }

  addProducts(products){
    const categories = Object.keys(products);
    categories.map((category) => {
      products[category].map((product) => {
        this.products[category].push(product);
      });
    });
  }

  subTotal(product){
    return (product.price * product.quantity).toFixed(2);    
  }
}