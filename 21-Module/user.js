//fonction qui retourne un objet
const user = (username, email, website) => {
  return {
    username,
    email,
    blog: website,
  };
};

//fonction qui retourne une url
const createMyAvatar = (email) => {
  return `https://gravatar.com/avatar/${email}`;
};

const adrien = {
  username: "Adrien",
  email: "a.rien@mymail.com",
  website: "https://adrien.fr",
};

//exportation des deux fonctions dont la seconde est renommée
export { user, adrien, createMyAvatar as createA };
