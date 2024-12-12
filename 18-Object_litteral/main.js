// les objets littéraux offrent une alternative aux tableaux pour regrouper des données.

// Si les tableaux permettent d’accéder aux données via une "clé" numérique, l’index, les objets permettent d’y accéder via une "clé" de type string.

// Voici comment vous pourriez stocker les données d’une personne dans un objet,

let person = {
  firstName: "Sacha",
  lastName: "Pignot",
  age: 27,
};

console.log(`${person.firstName} ${person.lastName} à ${person.age} ans`); // affiche Sacha Pignot a 27 ans

//les regles de l'objet litteral sont:

// un object litteral est un objet qui est déclaré directement dans le code sans passer par une classe que nous verrons plus tard
// un object litteral est déclaré entre accolades et contient des paires de clefs et de valeurs
// les clefs sont des chaines de caractères et les valeurs peuvent être de n'importe quel type
// les paires clefs/valeurs sont séparées par des virgules
// les clefs sont séparées des valeurs par des deux points

// exemple de manipulation d'object litteral:

let user = {
  firstName: "Sacha", //paire clef/valeur
  lastName: "Pignot",
  isHuman: true,
  birth: new Date(1992, 11, 17),
  // les objets litteraux peuvent contenir des methodes
  getAge() {
    const date = new Date();
    const year = date.getFullYear();
    return year - this.birth.getFullYear(); //ici birth anticipé par this pointe vers la clef birth de l'objet
  },
  // les objets litteraux peuvent contenir des objets
  favorites: {
    food: "pizza",
    drink: "beer",
    sport: "gladiatorial combat",
  },
  // les objets litteraux peuvent contenir des tableaux
  friends: ["Patrick", "Maxime", "Gilles", "Sebastien"],
  // les objets litteraux peuvent des objets nested
  link: {
    social: {
      facebook: "https://www.facebook.com/sacha.pignot",
      twitter: "https://twitter.com/SachaPignot",
    },
    web: {
      blog: "https://sachapignot.fr",
      portfolio: "https://sachapignot.fr/portfolio",
      cv: "https://sachapignot.fr/cv",
    },
  },
};

// pour accéder à une valeur d'un object litteral on utilise la notation pointée

console.log(user.firstName); // affiche Sacha
console.log(user.lastName); // affiche Pignot

// ou la notation crochetée

console.log(
  `${user["birth"].getDate()}/${user["birth"].getMonth()}/${user[
    "birth"
  ].getFullYear()}`
); // affiche 17/11/1992 )

/*-----------------*/ /*-----------------*/ /*-----------------*/
// on peut aussi utiliser la notation pointée et crochetée pour accéder à une méthode

console.log(user.getAge()); // affiche 27
console.log(user["getAge"]()); // affiche 27

/*-----------------*/ /*-----------------*/ /*-----------------*/
// on peut aussi utiliser la notation pointée et crochetée pour accéder à une valeur d'un objet nested
console.log(user.link.social.facebook); // affiche https://www.facebook.com/sacha.pignot
console.log(user["link"]["social"]["twitter"]); // affiche https://www.facebook.com/sacha.pignot

/*-----------------*/ /*-----------------*/ /*-----------------*/
// Accéder à une valeur d'un tableau dans un objet litteral
const bestFriend = user.friends[0]; // on accède à la première valeur du tableau friends
console.log(bestFriend); // affiche Patrick

// on peut aussi utiliser des methodes pour accédé à des valeurs d'un tableau
const lastFriend = user.friends.find((friend) => friend === "Sebastien");
console.log(lastFriend); // affiche Sebastien

/*-----------------*/ /*-----------------*/ /*-----------------*/
//Accédé a des clefs dans objet litteral
const keys = Object.keys(user);
console.log(keys);
const key = Object.keys(user.link);
console.log(key);

/*-----------------*/ /*-----------------*/ /*-----------------*/
//Accédé a des valeurs dans objet litteral
const values = Object.values(user);
console.log(values);
const value = Object.values(user.favorites);
console.log(value);

/*-----------------*/ /*-----------------*/ /*-----------------*/
// nous pouvons inserer des valeurs dans un objet litteral
const father = "Gilles";
user.father = father; // on ajoute la clef father à l'objet user et on lui affecte la valeur de la variable father
console.log(user); // affiche Gilles

/*-----------------*/ /*-----------------*/ /*-----------------*/
// evidemment nous pouvons aussi modifier une valeur existante

user.friends.push("Amaury"); // on ajoute la valeur Amaury au tableau friends
console.log(user.friends); /*-----------------*/ /*-----------------*/ // affiche ['Patrick','Maxime','Gilles','Sebastien','Amaury']

/*-----------------*/

// cela va aussi avec les methodes, les objets et les objets nested ...
//bref les objets litteraux ont une syntaxe simple et sont très puissants
