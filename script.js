const firstValue = parseInt(prompt("Veuillez saisir une première valeur :"));
const operator = prompt("Veuillez choisir un opérateur :");
const secondValue = parseInt(prompt("Veuillez saisir une deuxième valeur :"));

if (isNaN(firstValue) || isNaN(secondValue)) {
    console.error("Toutes les valeurs saisies ne sont pas des nombres !");
} else {
    switch(operator) {
        case "+":
            console.log(firstValue + secondValue);
            break;
        case "-":
            console.log(firstValue - secondValue);
            break;
        case "*":
            console.log(firstValue * secondValue);
            break;
        case "/":
            console.log(firstValue / secondValue);
            break;
        default:
            console.error("L'opérateur saisi est invalide.");
            break;
    }
}
