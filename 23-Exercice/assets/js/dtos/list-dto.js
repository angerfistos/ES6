import { List } from '../models/list.js';
import { shoppingList } from '../mock/shoppingList.js';

export default function(){
  const list = new List(shoppingList.title)
  list.categories(Object.keys(shoppingList.products))
  list.addProducts(shoppingList.products)
  console.log(list);
  
  return list
}