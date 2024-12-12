//cree un exercice avec une callback, deux fonctions fléchées, un anonyme englobée par un setTimeout de 0,5 seconde qui affiche un message de bienvenu a chaque personne dans cette intervale dans la console avec comme let un tableau avec le nom de chaque personne et une const un message de bienvenue

let triptyk = ['Sacha', 'Patrick', 'Maxime', 'Gilles', 'Sebastien']
const message = 'Bienvenue parmis nous, padawan'

const afficherMessage = (message) => message

const afficherNom = (triptyk, afficherMessage) => {
    for (i=0; i<triptyk.length; i++) {
        const fullMessage = `${afficherMessage} ${triptyk[i]}`

        setTimeout(
            () => console.log(fullMessage) , 1+ i * 500) // permet de décaler l'affichage de chaque message de 2 secondes
    }   
}

afficherNom(triptyk, afficherMessage(message))