// commencons par la theorie (voir obsidian)

// !!! VERIFIER QU ILS ONT INSTALLER NODEJS ET LIVE SERVER !!!

/* affichage de string à l'ancienne */

var maxime = "maxime";
var age = 15;
var string = "Bonjour, je m'appelle " + maxime + " et j'ai " + age + " ans";

document.getElementById("output").innerHTML = string;

//ce genre de syntaxe est très lourde et peu lisible, c'est pour cela que l'on utilise les templates string

var templateString = `Bonjour, je m'appelle ${maxime} et j'ai ${age} ans`;

document.getElementById("outputTemplateString").innerHTML = templateString;

//ce qui fait que lorsqu'on a des données plus complexe cela est plus lisible

const user = {
    firstName : "Andy",
    job : "Developpeur",
    city : "Madrid",
    bio : "Si il pleut pas, c'est qu'il fera beau",
}

const markup = `
    <h1>
        ${user.firstName}
        <em>from ${user.city}</em>
    </h1>
    <p class="toto">
        ${user.job}
    </p>
    <p>
        ${user.bio}
    </p>
`;
document.getElementById("outputUser").innerHTML = markup;