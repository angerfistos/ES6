//01 - dans le HTML ecrire la dive bonjourno avc l'id Toto
// afficher

//02 - dans le JS cree avec le getElementById
let div = document.getElementById("toto");
// la variable = va dans le document relier prendre un element par l'ID
console.log(div);
console.log('italians said :', div.innerText); //retourne bonjourno

div.innerText = "It's meeeee"; //replace bonjourno par "It's meeeee"

let secondDiv = document.getElementById("haaaaa");
secondDiv.innerHTML = "<h1>Haaaaaaa</h1>"; //modife et interprete le HTML 
console.log(secondDiv.innerHTML);

secondDiv.style.color = "chartreuse";
secondDiv.style.backgroundColor = "burlywood";
secondDiv.classList.add("error"); // ajoute un nom dans la classe

console.log(secondDiv);

// ------------------------ boucle d'éléments-----------------------------
//03 - dans le HTML ecrire 3 balises p
let p = document.getElementsByTagName("p"); //recupere les balises a partir du nom de celle-ci

console.log("avant les for", p);

//change la couleur de la balise
for (item of p) { 
    item.style.color = "orange"; 
}
for (let i = 0; i < p.length; i++) { 
    p[0].style.color = "blue";
    p[1].style.fontSize = "1.3rem"; //aggir sur la taille de la police de la seconde balise
}
console.log("apres les for",p);


let classes = document.getElementsByClassName("test"); //recupere les balises a partir de la classe de celle-ci
console.log(classes);

for (item of classes) {
    console.log("item");
    item.style.color = "fuchsia";
}

// ------------------------ querySelectorAll -----------------------------
//04 - dans le HTML ecrire une nav avec 3 li et 3 a
let link = document.querySelectorAll("nav > ul > li > .link "); //retourne toutes les balises qui correspondent a la requete
console.log(link); 