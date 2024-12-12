let go = document.getElementById("go");
let square = document.getElementById("square");
let reset = document.getElementById("reset");

go.addEventListener("click", letsGo);

function letsGo() {
    console.log("leeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet's gooooooooooo, Brunooooooo!");
}

square.addEventListener("click", createSquare);

function createSquare() {
    let box = document.createElement("div"); //cree un element
    box.style.width = "100px";
    box.style.height = "100px";
    box.style.backgroundColor = "chartreuse";
    box.style.marginTop = "20px"
        
    document.getElementById("preview").appendChild(box); //dans la div d'id preview, ajoute une box enfant

}

reset.addEventListener("click", function () {
    document.getElementById("preview").innerHTML = "";
})