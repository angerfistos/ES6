//le try catch est la pour vérifier si notre code fonctionne sinon il renvoie une erreur
const addition = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw new Error("Les deux paramètres doivent être des nombres");
  }
};

//voici la version ou cela fonctionne
try {
  const result = addition(1, 2);
  console.log("addition", result);
} catch (err) {
  console.error(err);
}

//voici la version ou cela ne fonctionne pas
try {
  const result = addition(1, "boulet");
  console.log(result);
} catch (error) {
  console.log("erreur de boulet dans l'addition");
  console.error(error);
} finally {
  console.log("fin de l'addition, on passe a autre chose");
} // nous pouvons ici aussi utiliser le finally qui sera executé dans tous les cas

// l'async await nous permet d'introduire le try-catch pour gérer les erreurs
//comme avec les then des promise nous pouvons nous passez des catch finaux.

//les fonctions asyncrhone avec try catch
//montrer ici quand il n'y a pas d'async sur la soustraction si il y a une erreur le code s'arrete et ne va pas plus loin
const soustraction = async (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  } else {
    throw new Error("number, chieur");
  }
};

const result1 = soustraction(1, 2);
const result2 = soustraction(1, "boulet");
const tryCatchMethod = async (result) => {
  try {
    await result;
    console.log(result);
  } catch (error) {
    console.log("erreur de boulet dans la soustraction");
    console.error(error);
  } finally {
    console.log("prout, on passe a autre chose");
  }
};
tryCatchMethod(result1);
tryCatchMethod(result2);

async function getUrl(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("erreur");
    console.error(err);
  }
}

getUrl("http://no-such-url");
getUrl("https://jsonplaceholder.typicode.com/todos");

async function getUrlThrowError(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    throw new Error("tu te fous de mon gueule");
  } catch (err) {
    console.log("erreur");
    console.error(err);
  }
}

getUrlThrowError("http://no-such-url");
getUrlThrowError("https://jsonplaceholder.typicode.com/todos");
