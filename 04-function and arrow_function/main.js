//-----------------------function-----------------------

// a savoir : 
// un parametre est ce que l'on spécifie dans la déclaration de la fonction 
// un argument est ce qu'on transmet à la fonction 

//fonction peut prendre des arguments avec une valeur par defaut, si ceux-ci ne sont pas passer il prendra la valeur par defaut
function saySomething(message="something"){ //message = param
    console.log(message);
}

saySomething() // l'argument est indefini (undefined) implicitement
saySomething("Hello world") //hello world = argument

function sayTwoThings(firstThing="something", secondThingIsANumber="something else"){
    console.log(firstThing, secondThingIsANumber);
}

sayTwoThings(42) //attention que la position des arguments sont importants!

sayTwoThings(undefined, 42)// si l'on desire ne pas passer le premier argument on le rendra indéfini

sayTwoThings('The answer to the ultimate question of life, the universe and everything is', 42)

//-----------------------arrow function-----------------------
// On peut utiliser une fonction fléchée à la place d'une fonction de l'antiquité
let laCaftiere=""

//fonction fléchée
const parentFunction= (childFunction) => {

laCaftiere='...Et cherche toujours le bouton de la cafetière'

//nous pouvons aussi passer des fonction anonyme comme parametre avec les fonctions fléchées
    setTimeout(() => {
        console.log('Maxime est un grand backend');
        childFunction();

         //Fonction anonyme auto exécutante
        //Cela peut être utile dans certaines situations où l'on souhaite encapsuler du code pour éviter les collisions avec d'autres variables dans la portée globale.
        (() => {
            console.log(laCaftiere);
        })()
    }, 1000)  

    console.log('Voici Maxime');
}

// const childFunction= () => {
//     console.log('Il expert en dump sql et rm -rf *');
// }

// Lorsqu'on n'a qu'une seule ligne de code, on peut éviter les {} et ne pas spécifier un return

const childFunction=() => console.log('Il expert en drop sql et rm -rf *');

parentFunction(childFunction);

//quelques fonctions flechée

const x = 2
const y = 3
const z = 4

//sans paramètre
const addition = () => x + y + z
console.log(addition());

//avec un paramètre
const multiplication = (a) => a * x
console.log(multiplication(2));

//avec plusieurs paramètres
const soustraction = (a, b) => a - b
console.log(soustraction(5, 2));
