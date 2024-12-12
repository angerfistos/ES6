/* ----------------------------- Spread Operator ---------------------------- */

const featured =  ["Margaritta","4 fromages", "Hawaï","Regina"]
const specialty = ["Nutella","Banane","Moule frite", "Fricadelle"]

const pizzas = [...featured, "vegan", ...specialty];

console.log('Pizzas', pizzas);

// 
const newPizzas = [...pizzas];
newPizzas.push("booléan")
console.log('newPizza',newPizzas);

/*--------------*//*--------------*//*--------------*/
const user = {
    username: "Esteboeuf",
    profil: "Salut les sagouins",
};

const userUpdate = {
    ...user,
    passion : "javascript",
    abra: "abra"
}
console.log('userUpdate', userUpdate);

const personneQueJadore = document.querySelectorAll("#people p");
console.log(personneQueJadore);

//ceci ne marchera pas
// let myArray = personneQueJadore.map(toto => toto)
// console.log(myArray);

const myArray = [...personneQueJadore];
console.log(myArray);


const pizza = {
    name: "cannibale",
    size: "medium",
    ingredients: ['sauce tomate','boeuf', 'poulet', 'merguez', ' sauce barbecue'],
}

const ingredients = [... pizza.ingredients]
console.log(ingredients);

/* ----------------------------------- Exo ---------------------------------- */

// A l'aide de la décomposition (spread) recréez un nouvel objet qui va se présent comme suit

// const truc = {
//     firstName : "Zaib",
//     lastName : "malAuDos",
//     job : "kiné",
//     adress: {
//         street : "Rue de la jungle",
//         number : 4,
//         city : "Faille de l'invocateur"
//     }
// }


const userInfo = {
    firstName : "Zaib",
    lastName : "malAuDos",
    job : "kiné",
}
const userAdress = {
    street : "Rue de la jungle",
    number : 4,
    city : "Faille de l'invocateur"
}

const gens = {
    ...userInfo,
    adress: {...userAdress}
}