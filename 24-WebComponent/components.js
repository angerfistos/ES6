import Footer from "./components/footer.js";
import Header from "./components/header.js";
//customElement est une méthode de l'objet window qui permet de définir un élément personnalisé
customElements.define('main-header', Header);
customElements.define('main-footer', Footer)

// etapes : 
// 1. Créer un fichier components.js pour le composant
// 2. on cree un dossier components dans lequel on mettra tous les composants
// 3. on crée un fichier pour chaque composant (footer.js, header.js)
// 4. on importe les composants dans components.js (import Footer from "./components/footer.js";)
// 5. on les déclare avec customElements.define('main-footer', Footer)
// 6. dans index.html
//on y place
//  <main-header name="accueil"></main-header>
//  <main-footer current="home"></main-footer>
// 7. on cree un second html u nom de contact.html
//on y place
//  <main-header name="contact"></main-header>
//  <main-footer current="contact"></main-footer>

//les name seront passe dans goulagwe selon que lon soit sur la page d'accueil ou de contact les current seront passes dans le footer pour changer la couleur du lien actif et montre sur quelle page on se trouve