//async est une fonction asynchrone qui renvoie une promesse a partir du mot clé await

//construction d'une fonction asynchrone

//une fonction asynchrone débute avec le mot clé async
async function myFunction() {
  return "Hello";
}

myFunction().then((result) => console.log(result));

//avec une arrow function
const myOtherFunction = async () => {
  return "world";
};

myOtherFunction().then((result) => console.log(result));

//il est possible d'englober celle-ci avec un try catch une promesse

const mythirdFunction = async () => {
  return Promise.resolve("Amand - in - game");
};

mythirdFunction().then((result) => console.log(result));

//donc ici avec le async nous nous assurons de renvoyer une promesse.

// avec le async il y a un mot clef supplémentaire qui est le await
//celui-ci ne fonctionne que dans la fonction asynchrone

const awaitFunction = async () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Amaury, await this!"), 1000);
  });
  let result = await promise; // la fonction fait une pause jusqu'à ce que la promesse soit résolue et renvoie le résultat
  console.log(result);
};

awaitFunction();

//la syntaxe est bcp plus elegante que celle des promise.then
//attention le await ne fonctionne que dans une fonction asynchrone
// retirer l'async pour montré

//repronons notre exercice avec les placeholder
// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(data => data.json())
//     .then(result => result.map(todo => `<li>${todo.title} - ${todo.completed ? "Fait" : "Pas Fait"}</li>`))
//     .then(todos => list.innerHTML = todos.join(''))
//     .catch(err => console.error(err));

//transformons le en async await
const list = document.querySelector("ul");
async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  const todos = data.map(
    (todo) => `<li>${todo.title} - ${todo.completed ? "Fait" : "Pas Fait"}</li>`
  );
  list.innerHTML = todos.join("");
}
//ici nous demontrons l'elgance de cette sybntaxe async await par rapport a la syntaxe promise.then qui rend le code plus lisible
getTodos();
