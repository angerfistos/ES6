//Set

//Set permet de definir une liste d'éléments uniques (pas de doublons), il prend comme paramètre un tableau

let arrayOfNumbers = [1, 2, 2, 10, 45, 45, 6, 7, 4, 10 , 10, 10, 10, 5, 10, 10, 10, 7, 5];

console.log('array of number', arrayOfNumbers);
let setOfNumbers = new Set(arrayOfNumbers);
console.log('set ofs number', setOfNumbers);

//le Set n'accepte pas les arrayFunctions
// setOfNumbers.map((number) => {
//     console.log(number);
// }) // provoque une erreur

//Pour parcourir un Set, on utilise la boucle for of
for(let number of setOfNumbers) {
    console.log(number);
}

// il n'est pas non plus possible de récupérer un élément du Set par son index
console.log(setOfNumbers[0]); // revoit undefined

// les methodes du Set
// add() permet d'ajouter un élément au Set
setOfNumbers.add(100);
console.log('j ajoute 100', setOfNumbers);

// delete() permet de supprimer un élément du Set
setOfNumbers.delete(100);
console.log('je supprime 100', setOfNumbers);

// has() permet de vérifier si un élément est présent dans le Set
console.log('le set contient 100', setOfNumbers.has(100)); // revoit false

// size permet de connaitre le nombre d'éléments dans le Set
console.log('le set contient', setOfNumbers.size, 'éléments');

// le set avec un tableau d objets

let arrayOfObjects = [

    {
        name: 'toto',
        age: 20
    },
    {
        name: 'titi',
        age: 25
    },
    {
        name: 'tata',
        age: 30
    },
    {
        name: 'tata',
        age: 35
    },
    {
        name: 'tata',
        age: 30
    }
];
// ne fonctionne que sur des tableau de primitives
// donc string, number, boolean, null, undefined, symbol
console.log('array of objects', arrayOfObjects);

let setOfObjects = new Set(arrayOfObjects);

console.log('set of objects', setOfObjects); // ne supprime pas les doublons


// attention que la méthode est sensible à la casse 
let arrayOfStrings= ['Amaury','Greg', 'Patrick', 'Audrey', 'audrey', 'Amand', 'Amaury']
let setOfStrings = new Set(arrayOfStrings);
console.log('set of strings', setOfStrings);

let goodSetString = new Set(arrayOfStrings.map((string) => string.toLowerCase()));
console.log('good set of strings', goodSetString);

// pour convertir un Set en tableau, on utilise la méthode Array.from()

let arrayOfStringsFromSet = Array.from(goodSetString);
arrayOfStringsFromSet.map((string) => console.log(string));

