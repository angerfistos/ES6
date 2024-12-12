//from
// le from permet de convertir un objet itérable ou semblable à un tableau en un tableau
let words = document.querySelectorAll('p')

console.log(words);
// ici on recupère les noeuds html

words = Array.from(words); //on convertit la liste de noeud en tableau
console.log(words);

const arrayOfWords = words.map(w => w.innerText); // on recupère le texte de chaque noeud dans un nouveau tableau

console.log(arrayOfWords);

//sur une chaine de caractère

const str = "hello world";
const chars = Array.from(str);//recupère chaque caractère dans un tableau
console.log(chars);

//avec des methodes en callback
const phrase = "Greg danse le mia sur la plage";
const words2 = Array.from(phrase.split(" "), w => w.toUpperCase()); // on split la phrase en tableau et on met en majuscule
// dans cette exempel nous avons utiliser comme premier argument le string avec une methode pour le splitter en un tableau
// le second argument est une fonction map de callback qui va s'appliquer à chaque élément du tableau, cette fonction fait partie de la méthode from

console.log(words2);



//of
// permet de créer un tableau à partir d'un nombre d'arguments variable quelque soit le type ou le nombre d'arguments

const argument = Array.of(3, 45, 3, true, false, "hello", {name: "greg"});
console.log(argument);

//Micro exercice
// a partir de cette phrase creer un tableau avec un mot sur 3 en majuscule

const patrick ="Patrick aime le gras, le gras c'est la vie";

const patrickArray = Array.from(patrick.split(' '), (pat, index) =>{
    if(index % 3 === 0) {
        return pat.toUpperCase();
    }
    return pat;
});
console.log(patrickArray);