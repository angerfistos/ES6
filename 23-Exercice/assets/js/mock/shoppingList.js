//creer une liste de course avec un objet litteral qui contient une liste de produit avec leur price et leur quantité et une methode qui calcule le total de la liste de course et l'affiche en HTMl, faite un affichage propre

//voici la liste de course:
// products:{
//     Fruits:[
//         {product : 'pomme', price : 0.5, quantity: 2},
//         {product : 'poire', price : 0.7, quantity: 3},
//     ],
//     vegetables:[
//         {product : 'carotte', price : 1, quantity: 2},
//         {product : 'patate', price : 5.30, quantity: 1},
//     ],
//     drinks:[
//         {product : 'coca', price : 2.49, quantity: 2},
//         {product : 'orangina', price : 2.25, quantity: 3},
//     ],
//} 
export let shoppingList = {
  title: 'Ma liste de course',
  products: {
    fruits: [
      { product: 'pomme', price: 0.5, quantity: 2 },
      { product: 'poire', price: 0.7, quantity: 3 },
    ],
    vegetables: [
      { product: 'carotte', price: 1, quantity: 2 },
      { product: 'patate', price: 5.3, quantity: 1 },
    ],
    drinks: [
      { product: 'coca', price: 2.49, quantity: 2 },
      { product: 'orangina', price: 2.25, quantity: 3 },
    ],
  },
};
