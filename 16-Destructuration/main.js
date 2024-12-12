const person = {
    firstName: "Patrick",
    lastName: "Sébastien",
    hobby: "Kicker",
    achievement: "Nothing",
    github: "laynmdream",
  };
  
  // const first = person.firstName;
  // const last = person.lastName;
  
  // la destructuration permet de récupérer les valeurs d'un objet dans des variables
  const { firstName, lastName, github } = person;
  
  console.log(firstName, lastName, github);
  

/* ----------------------- destructuration de nested object ---------------------- */

  const seb = {
    firstName: "Sébastien",
    lastName: "Cardon",
    hobby: "Kicker",
    achievement: "Nothing",
    links: {
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
      },
      web: {
        blog: "https://remadex.github.io",
        github: "https://github.com/remadex",
      },
    },
  };
  
  const { twitter, facebook } = seb.links.social;
  
  console.log(twitter);
  
  // On peut renommer les variables
  const { github: git, blog: website } = seb.links.web;
  console.log(git, website);
  
  // On peut définir des valeurs par défaut si la valeur n'existe pas ou si elle est undefined
  const { hobby = "Boire de la bière", beer = "Westveleteren" } = seb;
  
  console.log(hobby, beer);
  
  const speed = undefined;
  //const mySpeed = speed || 760;
  const mySpeed = speed ?? 880;
  console.log("mySpeed", mySpeed);
  
  
  // || vient vérifier si la valeur est undefined, null ou false. Si c'est le cas il prend la valeur par défaut
  // ?? vient vérifier si la valeur est undefined ou null. Si c'est le cas il prend la valeur par défaut

  
  // On vérifie si la clé size existe et si la clé height sur size existe. Si elle n'existe pas (undefined) retourne la valeur par défaut
  const sizeOfSeb = seb.size?.height ?? "185cm";
  console.log(sizeOfSeb);
  const sebou = Object.values(seb)
  console.log('sebou', sebou)
  
//!! que ca ne modifie pas l'objet déjà défini

  /* ----------------------- destructuration de array ---------------------- */

const utilisateur = ["Olivia", "Simo Rickquo", 123, "Mons","café"]
const [prenom, nom, id, ville,boisson] = utilisateur;

console.log(prenom,nom, boisson);

const valeurs =[123, 456, 789]
const [a,b,c] = valeurs;

 /* -------------------------------------------------------------------------- */
// Swapping

let champion = "Esteban";
let challenger = "Zaib";

// let temp = champion;
// champion = challenger;
// challenger = temp;

[champion, challenger] = [challenger, champion];

console.log(champion, challenger);

/* ---------------------- destructuration des function ---------------------- */

  const convertCurrency = (amount) => {
    const converted = {
      USD: amount * 1.12,
      GBP: amount * 0.9,
      RUB: amount * 0.00001,
      YEN: amount * 121.75,
    };
  
    return converted;
  };
  
  console.log(convertCurrency(1));
  
  const { USD: dollar, RUB: rouble } = convertCurrency(124);
  
  console.log('convertCurrency', dollar, rouble);
  
/*  ---------------------- destructuration des function avec alias ---------------------- */

  const formation = {
      name: "Développeur Fullstack",
      description: "Formation parfaite pour rater sa vie",
      students: ['Leïla', 'David', 'Martin']
  };
  
  //ici la variable name est renommée en forma par alias ca permet dans certains cas rendre le code plus lisibles 
  const getStudents = ({ students, name: forma}) => {
      return `Les étudiant "${students.join('-')}" font la formation ${forma}`;
  }
  
  console.log(getStudents(formation));

  /* ----------------------- rest operator ---------------------- */

//   L'opérateur de repos (rest operator) en JavaScript est représenté par trois points de suspension (...). Cet opérateur permet de rassembler les éléments restants d'un objet ou d'un tableau. Il peut être utilisé dans les paramètres de fonction ou lors de la décomposition (destructuring) d'objets ou de tableaux.

// !!! le rest operator doit toujours être le dernier élément de la destructuration

const team = ["Gilles","Stephane", "Vincent", "Amaury","Romain","Sebastien", "Maxime","Joelle"];

// exemple avec un tableau
const [boss, support, ...employes] = team;
console.log(boss,support, employes);

// exemple avec une fonction
const vatCalculator = (vat, ...montants)=>{
    return montants.map(montant => montant*vat);    
}

console.log(vatCalculator(0.06, 188, 90, 25, 1,10))

//exemple avec un objet

const user = {
    firstname: 'Sacha',
    age: 30,
    job: 'Développeur',
}

const { firstname, age, ...rest } = user;
console.log(`${firstname} à ${age} et est ${rest.job}`);


/* --------------------------------------------- */

//Micro exercice D:
// avec la destructuration , créer 3 variables : menu( qui correspond à name), size et sauce 
// apres le faire aussi avec les sauces
const mcDo = {
  name : "CBO (chicken Bacon Onions)",
  size : "large",
  sauce: ["frite", "andalouse", "mayo"]
}

const {name, size, sauce} = mcDo;
console.log(name, size, sauce);

const [frite, andalouse, mayo] = sauce;
console.log(frite, andalouse, mayo);



