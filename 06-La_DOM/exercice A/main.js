var datas = [
    {
        "src" : "images/monstre1.jpg",
        "title" : "Boule verte",
        "alt" : "Monstre poilu vert"
    },
    {
        "src" : "images/monstre2.jpg",
        "title" : "Tentaculos",
        "alt" : "Pieuvre bleue à rayures"
    },
    {
        "src" : "images/monstre3.jpg",
        "title" : "Monstre à sucette",
        "alt" : "Monstre à sucette"
    },
    {
        "src" : "images/monstre4.jpg",
        "title" : "Triglobuleux",
        "alt" : "Monstre à 3 zieux"
    },
    {
        "src" : "images/monstre5.jpg",
        "title" : "Diablotin",
        "alt" : "Diable rouge"
    },
    {
        "src" : "images/monstre6.jpg",
        "title" : "Chewbacca rose",
        "alt" : "Monstre poilu rose"
    }
];

let thumbnails = document.querySelector(".thumbnails");
thumbnails.setAttribute("style", "cursor : pointer; width: 900px; height : 150px; margin : auto; margin-Top : 150px; display : flex ")
let preview = document.getElementById("preview");
preview.setAttribute("style", "position : relative ; width: 380px; height: 380px; margin : 15px auto");
let box = []

function printImg(affImg) {
    document.getElementById("preview").innerHTML = "";
    //preview.parentNode.removeChild(); !! attention enleve le parent aussi this
    let hTitre = document.createElement("h2");
    let btn = document.createElement("button");
    let imgChoice = document.createElement("img");

    hTitre.setAttribute("style", "text-align : center; margin:0");
    imgChoice.setAttribute("style", "width: 100%; margin:0");
    
    hTitre.innerText = datas[affImg].title;
    imgChoice.src = datas[affImg].src;  

    btn.setAttribute("style", "cursor : pointer; width: 30px; height : 30px; position : absolute; bottom:-40; right : 0");
    btn.innerText = "X";
    btn.addEventListener("click", function () {
        document.getElementById("preview").innerHTML = "";
    });
        
    preview.appendChild(hTitre).appendChild(imgChoice);
    preview.appendChild(btn);  
}

for (let i = 0; i < datas.length; i++) {
    box[i] = document.createElement("img");
    box[i].setAttribute("style", "width: 150px; height : 150px ");
    box[i].setAttribute("alt", datas[i].alt);
    box[i].setAttribute("onClick", "printImg("+i+")");
    document.querySelector(".thumbnails").appendChild(box[i]).src = datas[i].src;
 
};

// for (let i = 0; i < datas.length; i++) {
//     box[i] = document.createElement("img");
//     box[i].setAttribute("style", "width: 150px; height : 150px; ; margin : auto");
//     box[i].setAttribute("alt", datas[i].alt);
//     document.querySelector(".thumbnails").appendChild(box[i]).src = datas[i].src;

//     box[i].addEventListener("click", function() {
//         document.getElementById("preview").innerHTML = "";
//         let hTitre = document.createElement("h2");
//         let btn = document.createElement("button");
//         let imgChoice = document.createElement("img");

//         hTitre.setAttribute("style", "text-align : center; margin:0");
//         hTitre.innerText = datas[i].title;
        
//         imgChoice.setAttribute("style", "width: 100%; margin:0");
//         imgChoice.src = datas[i].src;  

//         btn.setAttribute("style", "cursor : pointer; width: 30px; height : 30px; position : absolute; bottom:-40; right : 0");
//         btn.innerText = "X";
//         btn.addEventListener("click", function () {
//             document.getElementById("preview").innerHTML = "";
//         });
            
//         preview.appendChild(hTitre).appendChild(imgChoice);
//         preview.appendChild(btn);
   
//     });
// };
