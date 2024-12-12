// !!! pour ce faire on va aller sur blague api et se connecter afin de donner un token pour pouvoir acceder a l'api
//on cree une classe Application
class Application {
  constructor(url, token) {
    this.url = url;
    this.token = token;
    this.response = document.querySelector(".container h2");
    this.answer = document.querySelector(".container p");
  }
  //on cree une methode init qui appelle la methode getJoke au debut de l'application
  init() {
    this.getJoke();
  }
//on cree une methode getJoke qui fait un fetch sur l'url de l'api et qui recupere les donnees
  getJoke() {
    fetch(this.url, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    })
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        this.joke = data;
        this.render();
      });
  }
//on cree une methode render qui affiche la blague et la reponse
  render() {
    this.response.innerText = this.joke.joke;
    this.answer.innerText = this.joke.answer;
  }
}
//on cree une instance de la classe Application
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjA3MTkwNzgyNjczODEzNTA0IiwibGltaXQiOjEwMCwia2V5IjoibEEwa3lVc3cybm1UdUhMRXk3WnJsYlAxemF4QWRwczhYRk05R1FkZ3ljZlhocmtTbzkiLCJjcmVhdGVkX2F0IjoiMjAyMy0wMS0xN1QwMTo1MDoyMCswMDowMCIsImlhdCI6MTY3MzkyMDIyMH0.uYcTZpM9SByWVClV0Jrz3U3vQtG18xiUMxKhtQPP5y4";
//on cree une constante url qui contient l'url de l'api
const url = "https://www.blagues-api.fr/api/type/dark/random";
const App = new Application(url, token);

App.init();

document.querySelector(".container button").addEventListener("click", () => {
  App.getJoke();
});
