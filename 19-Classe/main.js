import MyDog, { Animal } from "./animal.js"; // On importe la classe Dog depuis le fichier Dog.js

//une classe est la definition de la structure d'un objet.
//elle defini les proprietes disponibles, leur type  et leur accessibilité.
//la classe defini egalement les methodes disponibles pour l'objet.

// pour cree une classe nous devons la definir avec le mot clef class suivi du nom de la classe
class Dog {
  // la creation d'un objet de classe se fait a partir du constructeur
  // Le constructeur est obligatoire dans une classe
  // Il permet de définir les propriétés de l'objet

  constructor(nom, race, age) {
    this.nom = nom; // On va attacher au contexte une nouvelle PROPRIETE "nom" qui contient la valeur de ce que l'on reçoit
    this.race = race; // le mot clef this fait reference a l'intance de l'objet en cours de construction
    this.age = age;

    //a montrer avec le setter
    this.proprietaire = "Patrick"; // On va attacher au contexte une nouvelle PROPRIETE "proprietaire" qui contient la valeur "Patrick"
    //cette propriete est accessible en lecture seule car elle n'a pas de setter
  }

  aboyer() {
    // On crée une méthode attachée à la classe
    console.log(`Le chien ${this.nom} est entrain d'aboyer`);
  }

  caliner() {
    console.log(`Je t'aime maitre`);
    this.aboyer();
  }
  //le getter sont des methodes qui permettent de recuperer une propriete de l'objet
  get proprio() {
    return this.proprietaire;
  }

  //le setter sont des methodes qui permettent de modifier une propriete de l'objet
  set nickname(value) {
    this.nick = value;
  }
  //
  get nickname() {
    return this.nick;
  }

  get humanAge() {
    return this.age * 7;
  }
}

//pour instancier un objet de classe nous devons utiliser le mot clef new suivi du nom de la classe

const rex = new Dog("Rex", "Berger Allemand", 5); // On crée un objet de classe Dog
console.log(rex); // On affiche l'objet
//nous pouvons acceder aux proprietes de l'objet avec la notation pointee
console.log(rex.nom); // On affiche le nom de l'objet

//nous pouvons aussi modifier les proprietes de l'objet
rex.nom = "Rexou"; // On modifie le nom de l'objet
console.log(rex.nom);

//grace au getter nous pouvons acceder a la valeur de la propriete
const proprietaire = rex.proprio;
console.log(proprietaire);

//grace au setter nous pouvons modifier la valeur de la propriete
rex.nickname = "Rexouille";
console.log(rex.nickname);

console.log(rex.humanAge); // un getter peut etre une methode qui retourne une valeur modifiée

//l'utilisation des methodes ne focntionne pas comme les fonctions classiques
rex.aboyer(); //nous devons d'abors acceder a l'objet puis a la methode
rex.caliner();

/*-----------------*/ /*-----------------*/ /*-----------------*/
const poupette = new MyDog("Poupette", 5, "Caniche"); // On crée un objet de classe Dog
console.log(poupette); // On affiche l'objet
poupette.aboyer();
console.log(poupette.run()); //nous pouvons utiliser les methodes de la classe mere grace a l'heritage
console.log(poupette.sleep());
console.log(poupette.sleep());
console.log(poupette.sleep());
console.log(poupette.manger("croquettes"));
console.log(poupette.manger("chaussures"));
console.log(poupette.poop());

console.log(poupette.rond());

const elephant = new Animal("Dumbo", 5);
console.log(elephant);
elephant.info();
//elephant.aboyer(); //nous ne pouvons pas utiliser les methodes de la classe fille sur la classe mere

/*-----------------*/ /*-----------------*/ /*-----------------*/
//nous pouvons etendre les classes natives de javascript comme Array, String, Map, Set, ...

class CollectionDeManga extends Array {
  constructor(name, ...items) {
    //le mot clef ... permet de recuperer un nombre indeterminé de parametres et de les stocker dans un tableau
    super(...items);
    this.name = name;
  }

  get title() {
    return this.name + " officiel";
  }

  add(manga) {
    this.push(manga);
  }
}

const mangas = new CollectionDeManga(
  "Les mangas de Seb",
  { name: "One Piece", rating: 10 },
  { name: "DBZ", rating: 8 }
);
console.log(mangas);

class WithString extends String {
  constructor(name, ...items) {
    super(items.join(", "));
    this.name = name;
  }
}

const string = new WithString("test", "Amaury", "Patrick", "Maxime");
console.log(string.name);
console.log(string);
console.log("array", string.valueOf());

class OnTheMap extends Map {
  constructor(name, ...items) {
    super(items);
    this.name = name;
  }
}

const test2 = new OnTheMap(
  "test2",
  [0, "Amaury"],
  [1, "Patrick"],
  [2, "Maxime"]
);
console.log(test2);

class OnTheSet extends Set {
  constructor(name, ...items) {
    super(items);
    this.name = name;
  }
}

const test3 = new OnTheSet("test3", "Amaury", "Patrick", "Maxime", "Amaury");
const array = Array.from(test3);
console.log(array);
