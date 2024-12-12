/**
 * Créer une classe "rectangle", celle-ci va recevoir deux arguments: hauteur et largeur
 * Créer un getter qui retourne l'aire de notre rectangle en appelant une méthode de notre classe calcArea qui fait le calcul de l'aire
 * Ensuite instancier la classe pour me créer un carré de 10x10 et afficher son aire
 */

class Rectangle {
  constructor(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.hauteur * this.largeur;
  }
}

class Square extends Rectangle {
  constructor(cote) {
    super(cote, cote);
  }

  get area() {
    return super.calcArea();
  }
}
const rectangle = new Rectangle(10, 15);
console.log("rectangle", rectangle.area);
const square = new Square(10);
console.log("square", square.area);
