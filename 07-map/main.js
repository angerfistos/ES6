let triptyk = ['Sacha', 'Patrick', 'Maxime', 'Gilles', 'Sebastien']

// Il existe plusieurs methodes permettant de travailler sur des array
// nous connaissont la méthode for utilisé déjà par nos ancêtres autralopithèques

for(i=0; i<triptyk.length; i++){
    console.log(triptyk[i])
}
/*-----------------*//*-----------------*//*-----------------*/

// mais il existe aussi une méthode plus récente et plus simple à utiliser, la méthode forEach

triptyk.forEach((element) => console.log(element))

// la méthode forEach prend en paramètre une fonction fléchée qui prend en paramètre un element de l'array

/*-----------------*//*-----------------*//*-----------------*/

// A contrario, la méthode map qui permet de créer un nouveau tableau à partir d'un tableau existant

const triptyk2 = triptyk.map((element) => element + ' est un Jedi reconnu dans toute la galaxie')
console.log(triptyk2)

const arrayNumber = [1, 2, 3, 4, 5,]
const newArrayNumber = arrayNumber.map(function(number){return `${number} * 2 = ${number * 2}`}) 

//-------------------------------//

//mais nous avons vu précédemment que nous pouvions utiliser une fonction fléchée

// const newArrayNumber = arrayNumber.map((number) => `${number} * 2 = ${number * 2}`) 

//A partir de maintenant les exemples se feront en fonction fléchée

console.log('newArray', newArrayNumber); 

/*-----------------------------*/

//si l'array function est sur plusieurs lignes, il faut mettre des parenthèses autour de la fonction et return pour retourner la valeur

const newArrayNumber2 = arrayNumber.map((number) => {
    const double = number * 2
    console.log('number', number);
    return `${number} * 2 = ${double}`
})

console.log('newArray2', newArrayNumber2);

// !!! On n'utilise pas de forEach pour créer un nouveau tableau, on utilise map !!!

/*-----------------*//*-----------------*//*-----------------*/

//Micro exercice A: 

// Faites un array contenant toutes les hauteurs 
// ["34px","56px","20px","700px"]

const images = [
    {height: '34px', width: '67px', color:'rgb(127,255,0)'},
    {height: '56px', width: '72px', color:'rgb(222,187,135)'},
    {height: '20px', width: '14px', color:'rgb(25,44,123)'},
    {height: '700px', width: '84px', color:'rgb(4,84,152)'},
]

const heights = images.map((image) => image.height)
console.log(heights)


