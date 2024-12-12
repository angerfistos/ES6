//A partir de la liste de course ci-dessous, creez un tableau HTML qui affiche la liste de course avec le price et la quantité. Triez le tableau par price croissant. Affichez le total du panier.

//variables
let products = [
    { name: 'Pommes', price: 0.5, quantity: 4 },
    { name: 'Bananes', price: 1, quantity: 2 },
    { name: 'Lait', price: 2.49, quantity: 2 },
    { name: 'Pain', price: 2.50, quantity: 1 },
    { name: 'Oeufs', price: 5.79, quantity: 1, cantegory: 'alimentation' },
  ];

let isOpenModalForm = false;
const keys = products.map(product => { 
  return Object.keys(product)
}).flat()

const keysOfHeader = keys.filter((item, index, keysOfHeader) => {
  return keysOfHeader.indexOf(item) === index
})

console.log(keysOfHeader);


// messages d'erreur
const errorText = `Veuillez remplir tous les champs`
const errorProductName = `Ce produit existe déjà`
// formulaire
const markup = `
  <form style="margin-top: 2em; display: flex; flex-direction: column; width: 10em">
    <label for="name">Nom</label>
    <input type="text" name="name" id="name">
    <label for="price">Prix</label>
    <input type="number" name="price" id="price">
    <label for="quantity">Quantité</label>
    <input type="number" name="quantity" id="quantity">
    <button id="submit" type="submit" id="addProduct" style="margin-top:1em">Ajouter</button>
  </form>
`
// elements HTML
//create
const errorDiv = document.createElement('div');
const btnOpenForm = document.createElement('button');
//set attribute
errorDiv.setAttribute('id', 'error');
//get element
const displayList = document.getElementById('displayList');
const displayTotal = document.getElementById('displayTotal');
const displayTable = document.getElementById('displayTable');
const formModal=document.getElementById('form');
//style
btnOpenForm.innerHTML = 'Ajouter un produit';
btnOpenForm.style.marginTop = '1em';
errorDiv.style.color = 'red';
errorDiv.style.marginTop = '1em';
errorDiv.style.marginBottom = '1em';  
//append   
document.body.appendChild(errorDiv)
document.body.appendChild(btnOpenForm);

//fonctions
//fonction qui affiche la liste de course
const list= () => { 
  products.sort((a, b) => a.price - b.price) // et on trie par price croissant
          .map(product =>
              {
                let li = document.createElement('li')
                li.innerHTML =
                `${product.name} - Prix: ${product.price} € - Quantité: ${product.quantity}`  
                return displayList.appendChild(li); // !!! return obligatoire pour afficher le résultat
              }); 
  // affichage du total
  const total = products.reduce((total, product) => total + product.price * product.quantity, 0);
  displayTotal.innerHTML = `Total: ${total} €`;
}

//fonction qui affiche le tableau
const table = () => {
  displayTable.classList.add('table');
  const thead = document.createElement('thead');
  thead.classList.add('header');
  const tbody = document.createElement('tbody');
  tbody.classList.add('body');
  thead.innerHTML = `
    <tr>
      ${keysOfHeader.map(key => `<th>${key}</th>`).join('')}
    </tr>
  `
  tbody.innerHTML = products.map(product => {
    return `
      <tr>
        ${keysOfHeader.map(key => `<td>${product[key]? product[key]: ''}</td>`).join('')}
      </tr>
    `
  }).join('')

  displayTable.appendChild(thead)
  displayTable.appendChild(tbody)
}

// ouverture-fermeture du formulaire
const openModal = () => {
  btnOpenForm.addEventListener('click', () => {
    isOpenModalForm = !isOpenModalForm;
    modal(isOpenModalForm);
    
  });
}
//fonction qui affiche le formulaire
const modal = (isOpenModalForm) => {
  if (isOpenModalForm) {    
    formModal.innerHTML = markup;
    btnOpenForm.innerHTML = 'Annuler';
    saveForm();
  } 
  if (!isOpenModalForm) {
    formModal.innerHTML = '';
    errorDiv.innerHTML = '';
    btnOpenForm.innerHTML = 'Ajouter un produit';
  }
}

const testElementOfTheForm=(name, price, quantity, isProductNameExist)=>{
  //vérification que le nom du produit n'existe pas déjà
  if(isProductNameExist){   
    errorDiv.innerHTML = errorProductName;
    document.body.appendChild(errorDiv)
    return 
  }
  // vérification que les champs ne sont pas vides
  if (name==='' || price===0 || quantity===0){ 
    errorDiv.innerHTML = errorText;
    return  
  }  
  //sinon on ajoute les valeurs dans le tableau
  else {
    products.push({name, price, quantity}); // ajout des valeurs dans le tableau
    displayList.innerHTML = '';
    displayTable.innerHTML = '';
    formModal.innerHTML = '';
    btnOpenForm.innerHTML = 'Ajouter un produit';
    isOpenModalForm = false;
    modal(isOpenModalForm)
    list();
    //table(); //haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
  }
}

//fonction qui sauvegarde les données du formulaire
const saveForm=()=>{
  const submitBtn= document.getElementById('submit');
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    errorDiv.innerHtml = '';
    // récupération des valeurs du formulaire
    const name = document.getElementById('name').value;
    const price = Number(document.getElementById('price').value);
    const quantity = Number(document.getElementById('quantity').value);
    //cree une booléenne qui vérifie si le nom du produit existe déjà
    const isProductNameExist = products.some(product => product.name === name)
    // vérification que le nom du produit n'existe pas déjà
    testElementOfTheForm(name, price, quantity, isProductNameExist)
  })
}

// appel de la fonction qui affiche la liste de course au depart
list();
//table(); //haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

// appel de la fonction qui ouvre et ferme le formulaire
openModal();
