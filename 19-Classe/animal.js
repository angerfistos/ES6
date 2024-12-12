//l'heritage
//celui-ci designe le fait qu'une classe fille peut heriter des proprietes et methodes d'une classe mere
//par exemple nous avons une classe mere qui s'appelle Animal (nom, nombre de pattes, age)
//et nous avons une classe fille qui s'appelle Dog (race, age max,...)
//la classe Dog herite de la classe Animal

export class Animal {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
    this.stamina = 100;
    this.bide = [];
  }

  info() {
    console.log(`C'est un ${this.nom} !`);
  }

  sleep() {
    this.stamina += 30;
    return this.stamina;
  }
  //on rempli le bide de l'animal
  manger(bouffe) {
    this.bide.push(bouffe);
    return this.bide;
  }

  run() {
    this.stamina -= 50;
    return this.stamina;
  }
  //on vide le bide de l'animal
  poop() {
    this.bide = [];
    return this.bide;
  }
  rond() {
    return "Je fais le tour";
  }
}

class MyDog extends Animal {
  constructor(name, number, race) {
    super(name, number); // le mot clef super permet d'appeler le constructeur de la classe mere et de lui passer les parametres (name = nom de la classe mere, number = age de la classe mere)
    //il est conseiller d'utilisé les meme noms de parametres pour eviter les erreurs
    this.race = race;
  }
  aboyer() {
    "Wouf wouf, la pouf";
  }
  rond() {
    return super.rond() + " et puis je reviens"; //avec super on peut appeler une methode de la classe mere
  }
}

export default MyDog;
