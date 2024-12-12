// set des attributs et ajouter des valeur 

let box = document.getElementById("demo");
let img = document.getElementById("myImg");
let input = document.getElementById("bouquetinInput");

box.innerText = img.alt;
img.setAttribute("width", 500); //prend % aussi si valeur entre guillement

input.value = "BANNNNNNNGER"; // ajoute une valeur dans l'input

let inputValue = input.value; // recupere la valeur de l'input
console.log(inputValue + " c'est clair");