//Fonction callback
//Une fonction de rappel, communément appelée callback, est une fonction passée dans une autre fonction en tant qu'argument, 
// qui est ensuite invoquée à l'intérieur de la fonction externe pour accomplir une sorte de routine ou d'action. (MDN doc)

function salutation(name) {
    alert("Bonjour " + name);
  }
  
function processUserInput(callback) {
var name = prompt("Entrez votre nom.");
callback(name);
}
  
processUserInput(salutation); //on passe dans la fonction processUserInput la fonction salutation en argument
  

//-------------------- autre exemple --------------------

function parentFunction(childFunction) {
    
    setTimeout(function() {
        console.log('Maxime est un grand backend');

        childFunction();
    }, 2000)    
    console.log('Voici Maxime');
}

function childFunction(){
    console.log('Il expert en drop sql et rm -rf *');
}

parentFunction(childFunction);



