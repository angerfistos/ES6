// d'abors fabriquer le html

let text = document.getElementById("myText");

text.style.marginTop = "200px";// on peut changer les propriétés css directement
text.setAttribute("style", "margin-left: 50px ; font-size: 24px"); // on peut aussi changer les propriétés css directement qui prendra le dessus sur la propriété du dessus

text.classList.add("orange"); // rajoute une classe css à l'élément
text.classList.remove("orange"); // retire une classe css à l'élément
text.classList.toggle("orange"); // rajoute si elle n'existe pas ou la retire si il la.

