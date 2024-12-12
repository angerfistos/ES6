let count = 0;
document.getElementById("name").setAttribute("placeholder", "Hello world")

let submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
    event.preventDefault();     
});
submit.addEventListener("click", createLi);

let list = document.createElement("ul");
list.setAttribute("id", "list");
document.getElementById("wrapper").appendChild(list);

function createLi() {
    
    let valeur = document.getElementById("name").value;

    if (valeur == "" || valeur == " ") {
        alert("attention, champs vide!");
    }
    else{
        let listItem = document.createElement("li");
        let deleteItem = document.createElement("button");

        listItem.setAttribute("id", "listItem");
        listItem.innerText = valeur;
        deleteItem.setAttribute("id", "delItem");
        deleteItem.innerText = "X";
        
        count += 1; 
        document.getElementById("list").appendChild(listItem).appendChild(deleteItem);
        
        list.style.boxShadow = "8px 12px 20px 6px grey";
        
        deleteItem.addEventListener("click", function () {
            listItem.parentNode.removeChild(listItem); 
            count -= 1;
            if (count < 1) {
                list.style.boxShadow = "";
            }
        });

        document.getElementById("name").value = "";        
    }
}