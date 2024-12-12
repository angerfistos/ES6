// Le Scope

//- la portée global : est la portée qui est visible dans toutes les autres portées
//- la portée local : La portée locale est une caractéristique des variables qui les rend locales 
//  c'est-à-dire, le nom de la variable est lié à sa valeur seulement à l'intérieur d'une portée qui n'est pas la portée globale.
//- la portée de block : la variable n'est liée qu'au block conditionnel

//exemple :

//On déclare deux variables globales
let x = 5;
var y = 10;

//On définit une première fonction qui utilise les variables globales
function portee1(){
    
   console.log(
    `Depuis portee1() : x = ${x} et y = ${y}`)
}
//On définit une deuxième fonction qui définit des variables locales
function portee2(){
    let a = 1;
    var b = 2;
    console.log(
        `Depuis portee2() : a = ${a} et b = ${b}`)
}

//On définit une troisième fonction qui définit également des variables locales
function portee3(){
    x = 20;
    let y = 40;
    console.log(
        `Depuis portee3() : x = ${x} et y = ${y}`)
}

//On pense bien à exécuter nos fonctions !
portee1();
portee2();
portee3();

//On tente d'afficher des variables globales puis locales depuis l'espace global
// console.log(
//     `Depuis l'espace global : a = ${a} et b = ${b}`); //attention ici ca plantes car a et b sont des variables locales
console.log(
        `Depuis l'espace global : x = ${x} et y = ${y}`);


//variable constante non modifiable apres déclaration
const presentation = 'La belle équipe'
const triptyk =['Sacha', 'Patrick', 'Maxime', 'Gilles', 'Sebastien']

console.log(presentation);
for(i=0; i<triptyk.length; i++) {
    console.log(triptyk[i])
};

//comme nous avont déclaré la variable team en const, nous ne pouvons pas la modifier

// triptyk= ['Jean'] // provoque une erreur

//mais nous pouvons modifier le contenu de la variable dans le cas d'un tableau
triptyk.push('Amaury') 


presentation.replace('équipe', 'famille') // ne modifie pas la variable presentation mais ne provoquera pas d'erreur !!!

triptyk.map(t =>
    t==='Sacha'? 'Simon': 'Sacha'
)
// ne modifie pas le tableau triptyk mais ne provoquera pas d'erreur !!!

console.log(presentation);
console.log(triptyk);

function presentationDUnTexte() {

    var texte ="On ne badine pas avec la sécurité" 
    let team= ['Jean', 'Paul', 'Jacques']

    console.log(texte);
    team.push('Brigitte')

    for(i=0; i<team.length; i++) {
        console.log(team[i])
    };

}

presentationDUnTexte();
//la variable texte var est une variable globale, elle est accessible en dehors de la fonction
texte = "Elle est ou la poulette"
console.log(texte);

//team.push('Marie') 
// provoquera une erreur car team est déclaré dans le scope de la fonction presentationDUnTexte
//console.log(team)