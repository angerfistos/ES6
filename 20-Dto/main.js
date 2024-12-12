//Un objet de transfert de données (DTO, Data Transfer Object) est un objet qui transporte des données entre des processus. Il permet de faciliter la communication entre deux systèmes (comme une API et votre serveur) sans risquer d’exposer des informations sensibles.

//vous pouvez avoir besoin du nom et de la photo d’un collaborateur pour lui accorder l’accès à votre entreprise. Vous devez fournir ces données pour obtenir une correspondance, mais vous n’avez pas besoin de transmettre d’autres informations sur le collaborateur qui figurent dans votre base de données. Un DTO peut transférer uniquement les informations requises.

// Un DTO ne doit contenir que des données, et pas une logique métier. Il s’agit d’un petit objet simple qui ne doit réaliser qu’une seule tâche.

// Un bon DTO doit :

//     Éviter le code standard. Créez chaque DTO en partant de zéro.
//     Être facile à créer. Les DTO ne doivent pas être si complexes que vous peinez à les écrire. (Un tel code est facile à pirater.)
//     Être lisible. Tout le monde doit être en mesure d’analyser votre code.

// Les DTO sont utiles dans les systèmes avec appels à distance, car ils contribuent à en réduire le nombre.

// Les DTO sont également utiles lorsque le modèle de domaine est composé de nombreux objets différents et que le modèle de présentation a besoin de toutes leurs données en même temps, ou ils peuvent même réduire les allers-retours entre le client et le serveur.

// Avec les DTO, nous pouvons créer différentes vues à partir de nos modèles de domaine, ce qui nous permet de créer d'autres représentations du même domaine mais en les optimisant en fonction des besoins des clients sans affecter la conception de notre domaine. Une telle flexibilité constitue un outil puissant pour résoudre des problèmes complexes.

class User {
  constructor(firstname, lastname, age, email, website) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.email = email;
    this.website = website;
  }
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}
const user = new User(
  "Patrick",
  "Pagnoulle",
  6,
  (email = "Pat@email.com"),
  (website = "https://pat.fr")
);
const address = new Address("rue de la paix", "Paris", "France");

const userDto = {
  name: user.firstname,
  age: user.age,
  email: user.email,
  address: {
    street: address.street,
    city: address.city,
    country: address.country,
  },
};

console.log(userDto);
