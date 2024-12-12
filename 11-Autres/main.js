//il existe d'autres méthode plus ou moins utilisées sur les arrays comme every, some, sort, etc...

const triptyk = [{
    name: 'Sacha',
    age: 30
}, {
    name: 'Patrick',
    age: 20
}, {
    name: 'Maxime',
    age: 15
}, {
    name: 'Gilles',
    age: 40
}, {
    name: 'Sebastien',
    age: 10
}]


/* -------------------------- some -------------------------- */


let adultPresent = triptyk.some((t)=>{
    return t.age >=18;
}) // on verifie si il y a des adulte qui sont présent dans le tableau
console.log(adultPresent); //true
/* -------------------------- every -------------------------- */


let oldEnough = triptyk.every(function(t){
    return t.age> 12;
}) // on verifie si tout le monde est majeur
console.log(oldEnough); //false

//ces deux méthodes retournent toujours une booleenne

/* -------------------------- sort -------------------------- */

//la méthode sort permet de trier un tableau en fonction d'une clef

let sortByAge = triptyk.sort((a,b)=>{
    return a.age - b.age;
}).map(t=>console.log(`${t.name} à ${t.age}`)) // on trie le tableau en fonction de l'ageet on l'affiche grace à la méthode map

/* -------------------------- flat-------------------------- */

// la méthode flat permet d'aplatir un tableau, c'est a dire qu'elle va supprimer les tableaux imbriqués

let array = [1,2,3,[4,5,6]];

let flatArray = array.flat(); // on peut aplatir un tableau avec la méthode flat
console.log(flatArray);

let array2 = [1,2,3,[4,5,6,[7,8,9]]];

let flatArray2 = array.flat(2); // on peut aplatir un tableau avec la méthode flat, on peut lui passer en paramètre le nombre de niveau que l'on souhaite aplatir
console.log(flatArray2)

/* -------------------------- flatMap -------------------------- */

// la méthode flatMap permet d'aplatir un tableau et d'appliquer une fonction sur chaque élément du tableau
// cette methode est équivalente à faire un map puis un flat

let arrayOfStrings = ['Salut les filles', "on ne parle pas de bruno" , 'jacques a dit'];

let arrayOfWords = arrayOfStrings.flatMap((s)=>{
    return s.split(' ');
})

console.log(arrayOfWords);

