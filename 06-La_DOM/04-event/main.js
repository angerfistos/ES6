// d'abors fabriqué le html
let btn = document.getElementById("btn");
let box = document.getElementById("box");

let isVisible = true;

btn.addEventListener("click", function () { //fonction anonyme dnas le bouton (pas de nom)
    if (isVisible) {
        box.style.display = "none";
        isVisible = false;
    } else {
        box.style.display = "block";
        isVisible = true;
    }
})


box.addEventListener("copy", messageAfterCopy)
function messageAfterCopy(event) {
    console.log(event);
    console.log("tu as copié quelque chose");
    box.removeEventListener("Copy", messageAfterCopy);
    
}
