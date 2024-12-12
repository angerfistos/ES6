//Map

//le Map permet de construire une structure de données qui associe une clé à une valeur pour former une sorte de dictionnaire

//création d'un Map

let myMap = new Map(); // ici n'ayant aucun argument, le Map est vide

//on peut aussi créer un Map à partir d'un tableau de tableau

let myMap2 = new Map([
  ["name", "toto"],
  ["age", 20],
]);
console.log("youhou", myMap2);

//on peut aussi créer un Map à partir d'un tableau
let team = ["Amaury", "Audrey", "Redha", "Maxime"];

let myMap3 = new Map(team.map((name, index) => [index, name]));
console.log(myMap3);

//les methodes d'array ne fonctionnent pas sur les Map
// myMap3.map((value, key) => {
//     console.log(key, value);
// })

//pour parcourir un Map, on utilise les boucles for each ou for of

//for each
console.log("forEach");
myMap3.forEach((value, key) => {
  console.log(key, value);
});

//for of
console.log("for of");
for (let [key, value] of myMap3) {
  console.log(key, value);
}

// pour récupérer une valeur dans un Map, on utilise la méthode get()
console.log("get");
console.log(myMap3.get(0));

// pour ajouter une valeur dans un Map, on utilise la méthode set()

myMap3.set(4, "Greg"); // il faut toujours une clé et une valeur
console.log("set", myMap3);

myMap3.set(4, "Patrick"); // si on ajoute une clé déjà existante, la valeur est remplacée
console.log("set", myMap3);

myMap3.set("theOne", "Denis");
console.log("set", myMap3);

// pour supprimer une valeur dans un Map, on utilise la méthode delete()
myMap3.delete(3);
console.log("Maxime s en va", myMap3);

// pour vérifier si une clé existe dans un Map, on utilise la méthode has()

console.log("Maxime est parti", myMap3.has(3)); // revoit false

// pour connaitre le nombre d'éléments dans un Map, on utilise la propriété size
console.log("il reste", myMap3.size, "personnes dans l équipe");
