// exportation d'une constante
export const url = "https://triptyk.eu"

// exportation d'une fonction
export const myUrl = (lien) =>{
    const currentUrl = lien ?? "https://www.amazon.fr/";
    return currentUrl;
}

// exportation par defaut
export default {
    user: "Aurelie",
    pwd: "prompt",
}
