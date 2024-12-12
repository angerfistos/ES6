/**
 *  
Vous allez créer une fonction breath (avec un paramètre qui sera la durée) qui va retourner une promesse.
Dans cette promesse, vous devrez vérifier si la durée est de - de 500, si c'est le cas, alors vous effectuez un reject avec le message suivant et vous l'affichez:
"Perdu pas assez longtemps"
Dans le cas où c'est + de 500, vous faites un setTimeout (de la durée reçue en paramètre) où vous ferez un resolve avec le message suivant et vous l'affichez:
"Respiration retenue pendant: ${duration}ms !"

Les durées à vérifier dans l'ordre sont :
1200
2000
580
700
220
1800
 */

const breath = (duration) => {
  return new Promise((resolve, reject) => {
    if (duration < 500) reject("Perdu pas assez longtemps");
    setTimeout(() => {
      resolve(`Respiration retenue pendant: ${duration}ms !`);
    }, duration);
  });
};

breath(1200)
  .then((result) => {
    console.log(result);
    return breath(2000);
  })
  .then((result) => {
    console.log(result);
    return breath(580);
  })
  .then((result) => {
    console.log(result);
    return breath(700);
  })
  .then((result) => {
    console.log(result);
    return breath(220);
  })
  .then((result) => {
    console.log(result);
    return breath(1800);
  })
  .catch((err) => console.error(err));
//.finally(() => console.log("Tout est terminé ici"));
