//importation de fonctions
import { user, adrien, createA } from "./user.js";

//le premier est l'import par defaut et le second est l'import avec un alias qui renomme l'import
import aure, { url as blog, myUrl as monUrl } from "./config.js";

//destructuration
import { user as destructuredUser } from "./destructured.js";

const { nom, age, ville, pays } = destructuredUser;
console.log(nom, age, ville, pays);
const newUser = user(
  "Patrick",
  "patrick@gamail.com",
  "https://patladetraque.eu"
);
console.log(newUser);
console.log(blog);
console.log(adrien);
console.log(createA(blog));
console.log(aure);
console.log(newUser.username);
console.log(monUrl());
