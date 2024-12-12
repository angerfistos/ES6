const numbers = [10, 20, 30];
// let somme = 0;

// for(var i = 0; i <numbers.length; i++){
//     somme += numbers[i];
//     // somme = somme + numbers[i]
// };

/* ---------------------------- nouvelle methode ---------------------------- */

const somme = numbers.reduce((total, nbr)=>{
    return total + nbr;
},0) // la valeur 0 est la valeur de depart de total

console.log(somme);

/* -------------*//* -------------*//* -------------*/

// exemple avec des strings

const strings = ['La', ' ' ,'chartreuse', ' ', 'est', ' ', 'la', ' ', 'pire', ' ', 'des', ' ', 'couleurs'];
const concat = strings.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
});

console.log(concat);

/* -------------*//* -------------*//* -------------*/

// exemple avec un tableau d'objets

const primaryColors = [
    {
        id:1,
        name:"red"
    },
    {
        id:2,
        name:"burlywood"
    },
    {
        id:3,
        name:"chartreuse"
    }
]

const colors = primaryColors.reduce((tableau, couleur)=>{
    tableau.push(couleur.name);
    return tableau;
},[]);

console.log(colors);
//ici nous avons reduit le tableau d'objet en un tableau de string

/* -------------*//* -------------*//* -------------*/

//Micro exercice D:
const fruits = ["banane", "cerise","pomme","orange","banane","pomme","ananas","cerise","melon","pomme","pomme","figue"];

//a partir du tableau fruits, créer un objet qui contient le nombre de fois qu'apparait chaque fruit dans le tableau


const fruitCount = fruits.reduce((tableau, fruit)=>{
    if(tableau[fruit]){
        tableau[fruit]++;
    }else{
        tableau[fruit] = 1;
    }
    return tableau;
},{});

console.log(test,fruitCount);

//version avec un ternaire

const fruitCount2 = fruits.reduce((tableau, fruit)=>{
    tableau[fruit] ? tableau[fruit]++ : tableau[fruit] = 1;
    return tableau;
}
,{});

console.log(fruitCount2);