//creer une liste de course avec un objet litteral qui contient une liste de produit avec leur price et leur quantité et une methode qui calcule le total de la liste de course et l'affiche en HTMl, faite un affichage propre. il doit y avoir deux formulaires un pour ajouter un produit et un pour ajouter une catégorie de produit. les produits doivent etre triés par catégorie dans le tableau d'affichage. chaque produit doit avoir un bouton pour le supprimer de la liste de course. le total doit etre mis a jour a chaque suppression de produit.

//voici la liste de course:
// products:{
//     fruits:[
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
import {
  markup,
  newProduct,
  newCategory,
  displayedTable,
  displayedTotal,
  displayingModalAndButtons,
} from './displayedElements';

let shoppingList = {
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
  // subTotal:() => {
  //     return Object.values(shoppingList.products).flatMap(productType => {
  //         return productType.flatMap(product => {
  //            const subTotal= product.price * product.quantity
  //             return subTotal.toFixed(2);
  //         });
  //     });
  // },
  subTotal: () =>
    Object.values(shoppingList.products).flatMap((productType) =>
      productType.map((product) => (product.price * product.quantity).toFixed(2)),
    ),
  // total:() => {
  //     return Object.values(shoppingList.products).reduce((subTotal, productType) => {
  //         const total = productType.reduce((total, product) => {
  //             return total + product.price * product.quantity;
  //         }, 0);
  //         return subTotal + total;
  //     }, 0).toFixed(2);
  // }

  total: () =>
    Object.values(shoppingList.products)
      .reduce(
        (subTotal, productType) =>
          subTotal +
          productType.reduce(
            (total, product) => total + product.price * product.quantity,
            0,
          ),
        0,
      )
      .toFixed(2),
};

const body = document.querySelector('body');
body.innerHTML = markup;
document.querySelector('.title').innerHTML = shoppingList.title;

const btnOpenModal = document.querySelector('.btnOpenModal');
const btnOpenCategory = document.querySelector('.btnOpenCategory');
const modal = document.querySelector('.modal');
const displayTotal = document.querySelector('.displayTotal');

btnOpenModal.innerHTML = 'Ajouter un produit';
btnOpenCategory.innerHTML = 'Ajouter une catégorie';

const deleteProduct = () => {
  const btnDeleteProduct = document.querySelectorAll('.btn-delete');
  btnDeleteProduct.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const productLine = e.target.parentNode.parentNode;
      const category = productLine.children[0].innerHTML;
      const productName = productLine.children[1].innerHTML;
      const index = shoppingList.products[category].findIndex(
        (p) => p.product === productName,
      );
      shoppingList.products[category].splice(index, 1);
      createTable();
      displayedTotal(shoppingList, displayTotal);
    });
  });
};

const createTable = () => {
  const productBody = document.querySelector('.tbody');
  productBody.innerHTML = '';
  shoppingList.total();
  const productList = Array.from(Object.values(shoppingList.products))
    .flatMap((products, index) => {
      products.category = Object.keys(shoppingList.products)[index];
      products.map((product) => {
        product.category = products.category;
        return product;
      });
      return products;
    })
    .map((p, index) => {
      p.subTotal = shoppingList.subTotal()[index];
      return p;
    })
    .sort((productA, productB) =>
      productA.category.toLowerCase().localeCompare(productB.category.toLowerCase()),
    );
  displayedTable(productList, productBody);
  displayedTotal(shoppingList, displayTotal);
  deleteProduct();
};

const openModal = (string) => {
  btnOpenModal.style.display = 'none';
  btnOpenCategory.style.display = 'none';
  if (string === 'category') {
    modal.innerHTML = newCategory;
    addCategory();
  }
  if (string === 'product') {
    modal.innerHTML = newProduct;
    addProduct();
  }
};

const closeModal = () => {
  const btnCloseModal = document.querySelector('.btnCloseModal');
  btnCloseModal.addEventListener('click', (e) => {
    e.preventDefault();
    displayingModalAndButtons(modal, btnOpenModal, btnOpenCategory);
  });
};

const openProductForm = () => {
  btnOpenModal.addEventListener('click', (e) => {
    e.preventDefault();
    openModal('product');
  });
};

const openCategoryForm = () => {
  btnOpenCategory.addEventListener('click', (e) => {
    console.log(e);
    e.preventDefault();
    openModal('category');
  });
};

const choiceCategory = () => {
  const category = document.getElementById('category');
  const categories = Object.keys(shoppingList.products);
  categories.map((c) => {
    const option = document.createElement('option');
    option.setAttribute('value', c);
    option.innerHTML = c;
    category.add(option);
    return c;
  });
};

const addProduct = () => {
  const formData = document.forms.namedItem('add-product');
  closeModal();
  choiceCategory();
  formData.addEventListener('submit', (e) => {
    e.preventDefault();
    const newProduct = new FormData(e.target);
    const { category, product, price, quantity } = getFormValues(newProduct);
    shoppingList.products[category].push({ product, price, quantity });
    displayingModalAndButtons(modal, btnOpenModal, btnOpenCategory);
    createTable();
    displayedTotal(shoppingList, displayTotal);
  });
};

const getFormValues = (newProduct) => {
  const category = newProduct.get('category');
  const product = newProduct.get('product');
  const price = Number(newProduct.get('price'));
  const quantity = Number(newProduct.get('quantity'));
  return { category, product, price, quantity };
};

const addCategory = () => {
  closeModal();
  const formData = document.forms.namedItem('add-category');

  formData.addEventListener('submit', (e) => {
    e.preventDefault();
    const newCategory = new FormData(e.target);
    const name = newCategory.get('category');
    const categories = Object.keys(shoppingList.products);
    if (categories.includes(name)) {
      alert('Cette catégorie existe déjà');
      return;
    }
    displayingModalAndButtons(modal, btnOpenModal, btnOpenCategory);
    shoppingList.products[name] = [];
  });
};

//Affichage
console.log(shoppingList);
createTable();
openProductForm();
openCategoryForm();

//
