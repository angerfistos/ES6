//npm init
//npm install json-server
//package.json dans script  "server": "json-server --watch db.json --port 3000"
//filler db.json

//fetch all data
const cards = () =>
  fetch("http://localhost:3000/cards").then((response) =>
    response.json().then((data) => {
      console.log("all elements", data);
      data.map((card) => {
        const line = document.createElement("li");
        line.innerHTML = `
    <p>${card.first_name} ${card.last_name}</p>
    <img src="${card.imageUrl}" alt="${card.first_name} ${card.last_name}" width="100" />
    <p>${card.comment}</p>
    `;
        list.appendChild(line);
      });
    })
  );
cards();
const list = document.querySelector(".list");
const oneCard = document.querySelector(".one");

//fetch one data
const card = () =>
  fetch("http://localhost:3000/cards/1")
    .then((response) => response)
    .then((data) => data.json())
    .then((card) => {
      console.log("one element", card);
      oneCard.innerHTML = `
    <p>${card.first_name} ${card.last_name}</p>
    <img src="${card.imageUrl}" alt="${card.first_name} ${card.last_name}" width="100" />
    <p>${card.comment}</p>
    `;
    });
card();

//fetch post
const newCard = () => {
  fetch("http://localhost:3000/cards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      number: 336,
      first_name: "Bruno",
      last_name: "Pipo",
      imageUrl: "https://www.lescrados.com/images/crados2/336.jpg",
    }),
  });
};

const btnPost = document.getElementById("btn-post");
btnPost.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");
  newCard();
});

//fetch patch
const patchCard = () => {
  fetch("http://localhost:3000/cards/4", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      comment: "Pour avoir de bonnes notes, Bruno connaît la musique.",
    }),
  });
};

const btnPatch = document.getElementById("btn-patch");
btnPatch.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");
  patchCard();
});

//fetch delete
const deleteCard = () => {
  fetch("http://localhost:3000/cards/4", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const btnDelete = document.getElementById("btn-delete");
btnDelete.addEventListener("click", () => {
  console.log("click");
  deleteCard();
});
