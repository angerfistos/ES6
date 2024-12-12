/* -------------------------- methode de dinosaure -------------------------- */

var ages = [15, 25, 35, 45, 55,65, 75, 87];

// var filtredAge = [];

// for(var i = 0, j = ages.length; i<j; i++){
//     if(ages[i] > 69){
//         filtredAge.push(ages[i]);
//     }
// }

/* -------------------------- methode moderne -------------------------- */
let triptyk = ['Sacha', 'Patrick', 'Maxime', 'Gilles', 'Sebastien']

// il existe aussi la méthode filter qui permet de créer un nouveau tableau à partir d'un tableau existant en filtrant les éléments

const triptyk2 = triptyk.filter((element) => element.length > 6)

//la methode filter retourne pour chaque element passé dans la condition, true ou false. Si true, l'element est ajouté au nouveau tableau, si false, l'element est ignoré

console.log(`${triptyk2} are the best`)

/*-----------------*//*-----------------*//*-----------------*/

//avec un tableau d'objet

const people = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 15 },
    { name: 'Charlie', age: 35 }
  ];
  
  const adults = people.filter(person => person.age >= 18);
  console.log(adults);

// on peut aussi utiliser filter pour supprimer des éléments d'un tableau sur une clef spécifique. Ici l'on verifie si l'age est supérieur à 30 et si ca retourne faux, on supprime l'élément du tableau

/*-----------------*//*-----------------*//*-----------------*/

//il est possible d'enchaîner les méthodes map et filter et cela sera aussi possible avec les autres méthodes que nous verrons plus tard

const numbers = [1, 2, 3, 4, 5];
const squaredEvenNumbers = numbers.map(num => num * num).filter(num => num % 2 === 0);
console.log(squaredEvenNumbers); 


/*-----------------*//*-----------------*//*-----------------*/

// Micro exercice C:
// filtrer les nombre pair
const number = [12, 4589, 123, 458, 47, 54, 18, 2];
const newNumber = number.filter(n => n % 2=== 0)
console.log(newNumber);

/*-----------------*//*-----------------*//*-----------------*/