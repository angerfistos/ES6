/**
 * Pour cet exercice vous allez devoir travailler avec l'import/export (et donc créer des fichiers) pour chaque classe que vous allez créer et les exporter pour les instancier dans le fichier main.js
 * Vous allez créer une classe véhicule et une classe voiture
 * La classe voiture va étendre la classe véhicule
 * 
 * Un véhicule devra retourner l'information du type et du nombre de roues
 * Une voiture devra retourner l'information du modèle et de la vitesse maximal
 */

import Voiture from "./modules/voiture.js";


const tuture = new Voiture('Renault Megane 2011', 360);
console.log(tuture.infoOnModel)