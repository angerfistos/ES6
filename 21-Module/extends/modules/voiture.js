import Vehicule from "./vehicule.js";

export default class Voiture extends Vehicule {
    constructor(model, speedMax, type = "voiture", wheels = 4) { // On définit des valeurs par défaut
        super(type, wheels);
        this.model = model;
        this.speedMax = speedMax;
    }

    infoOnModel() {
        return `C'est une ${this.type} modèle ${this.model} et elle va jusqu'à ${this.speedMax}km/h avec ces ${this.wheels} roues`;
    }
} 