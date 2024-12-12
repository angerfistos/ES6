//par defaut, un appel a un fichier js se fait en synchrone et le naviogateur attend la fin de l'execution du fichier pour poursuivre l'affichage de la page
// il est possible de forcer les appels de fichier js en mode en asynchrone

//cela augmente grandement le rendu de la page

//nous allons d'abors abordé la promesse

//definition d'une promesse

//Une promesse est un objet (Promise) qui représente la complétion ou l'échec d'une opération asynchrone.
//Une promesse est un objet qui est renvoyé et auquel on attache des callbacks plutôt que de passer des callbacks à une fonction.

// creation d'une promesse

//la promesse attendra que le code soit executé pour renvoyer le resultat

// si la promesse est rejeté, on passera par la methode reject
const rejectPromise = new Promise((resolve, reject) => {
  //la promesse, promet de renvoyer un resultat par les callback soit par le resolve soit par le reject
  // reject permet de renvoyer l'erreur
  reject(
    "Bruno est un traite, il denonce les joueurs qui jouent avec leur serpent"
  );
});

rejectPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    // nous passerons par ici avec le reject
    console.log("error message");
    throw new Error(error);
  });

console.log("reject", rejectPromise);

//dans la console nous constaterons que la promesse passe par l'état "rejected" et donc par le catch

/*----------------------*/ /*----------------------*/ /*----------------------*/

// si la promesse est resolu, on passera par la methode resolve
const resolvePromise = new Promise((resolve, reject) => {
  resolve("Steve est heureux car personne ne l'a vu jouer avec son serpent");
});

resolvePromise
  .then((result) => {
    console.log("message reussi : ", result);
  })
  .catch((error) => {
    throw new Error(error);
  });

console.log("resolve", resolvePromise);

// /*----------------------*/ /*----------------------*/ /*----------------------*/

//nous pouvons manipuler les resultat de la promesse avec la methode then
const manipulation = new Promise((resolve, reject) => {
  resolve("Le serpent de Steve est tres long");
});

manipulation
  .then((result) => `${result} + " et il est tres beau`) //je manipule le resultat de la promesse
  .then((r) => `${r}. Celui d'Amaury aussi`)
  .then((result) => {
    return `${result}. Bruno est jalou`;
  }) //si moustache pas oublier le return
  .then((result) => {
    throw new Error(result);
  }) // je peux très bien renvoyer une erreur
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("Finish him!")); //permet de faire une action à la fin de la promesse

//nous constatyons que les promesse sont imbriquées les unes dans les autres
// () => {
//     () => {
//         () => {
//             () => {
//             }
//         }
//     }
// }

/*----------------------*/ /*----------------------*/ /*----------------------*/

const posts = [
  {
    title: "J'aime le cours de Patrick et il est beau",
    author: "Maxime",
    id: 1,
  },
  {
    title: "Patrick est un peu Brouillon",
    author: "Franck",
    id: 2,
  },
  {
    title: "Je n'écoute pas ce qui est dit",
    author: "Amand",
    id: 3,
  },
];

const authors = [
  {
    name: "Maxime",
    email: "maxime_unicorn@gmail.com",
    bio: "J'aime les licornes et les barbies",
  },
  {
    name: "Franck",
    email: "vasy.francky@yahoo.be",
    bio: "Je danse le mia",
  },
  {
    name: "Amand",
    email: "Amand.ine@yolo.eu",
    bio: "je suis un flemmard",
  },
];

const getPostById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = posts.find((post) => post.id === id);
      post ? resolve(post) : reject("Aucun post trouvé");
      console.log("post", post);
    }, 2000);
  });
};

getPostById(3); // ici nous avons une promesse qui est reussi
getPostById(4); // ici nous avons une promesse qui est rejeté

const findAuthor = (post, ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const authorDetails = authors.find(
        (author) => author.name === post.author
      );
      authorDetails
        ? resolve(authorDetails)
        : reject("Aucun auteur trouvé pour le post");
      console.log("authorDetails", authorDetails);
    }, ms);
  });
};

findAuthor(posts[0], 2000); // ici nous avons une promesse qui est reussi
findAuthor(posts[4], 3000); // ici nous avons une promesse qui est rejeté

/*----------------------*/ /*----------------------*/ /*----------------------*/
// promise all
// Promise.all est une méthode en JavaScript qui prend un tableau de promesses en tant qu'entrée et retourne une nouvelle promesse.
//Cette nouvelle promesse est résolue avec un tableau de résultats lorsque toutes les promesses du tableau d'entrée sont résolues.
// Si l'une des promesses du tableau d'entrée est rejetée, la promesse retournée par Promise.all est rejetée avec la raison du premier rejet.
const weather = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ temp: 29, conditions: "Ensoleillé mais nuageux" });
  }, 4000);
});

const tweets = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      "J'aime manger des chips à l'oignon",
      "J'ai envie de faire un BBQ",
    ]);
  }, 5000);
});

const screens = new Promise((resolve, reject) => {
  reject("Il n'y a pas d'écrans");
});

Promise.all([weather, tweets]).then((responses) => {
  console.log("promise all");
  console.log(responses);
});

Promise.all([weather, tweets, screens]) // Les promesses vont tomber dans le .catch car il y a un reject.
  .then((responses) => {
    console.log(responses);
  })
  .catch((err) => console.log(err));

//Dès qu'il y a un reject, les autres promesses ne se font pas

/*----------------------*/ /*----------------------*/ /*----------------------*/
// Promise.allSettled
// Promise.allSettled est une méthode en JavaScript qui prend un tableau de promesses en tant qu'entrée et retourne une nouvelle promesse.

Promise.allSettled([weather, tweets, screens]) // Même si une promise est reject, toutes les promises ok se feront
  .then((responses) => {
    console.log("promise allSettled");
    console.log(responses);
  })
  .catch((err) => console.log(err));
