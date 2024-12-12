import { Application } from "./mainClass.js";
/**
 * Vous allez effectuer une requête vers l'api suivante:
 * https://jsonplaceholder.typicode.com/todos
 *
 * Cette api va vous retourner une liste de Todos avec un title, id, userId et une booléenne completed
 *
 * Afficher cette liste dans l'html et plus précisement dans une liste ul.
 * Elle se présentera de la manière suivante:
 * 1. Delectus aut autem - pas fait
 * 2. Delectus aut autem - fait
 */

const list = document.querySelector("ul");
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((data) => data.json())
  .then((result) =>
    result.map(
      (todo) =>
        `<li>${todo.title} - ${todo.completed ? "Fait" : "Pas Fait"}</li>`
    )
  )
  .then((todos) => (list.innerHTML = todos.join("")))
  .catch((err) => console.error(err));

const app = new Application("https://jsonplaceholder.typicode.com/todos");
app.init();
