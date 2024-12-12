export class Categories {
  constructor(categories =[]) {
    this.categories = categories;
  }

  addCategory(category) {
    this.categories.push(category);
  }
}