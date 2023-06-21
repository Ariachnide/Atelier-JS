const userFirstValue = parseInt(prompt("Veuillez saisir une première valeur :"));
const userOperator = prompt("Veuillez choisir un opérateur :");
const userSecondValue = parseInt(prompt("Veuillez saisir une deuxième valeur :"));

function compute(firstValue, operator, secondValue) {
    switch(operator) {
        case "+":
            console.log(firstValue + secondValue);
            return;
        case "-":
            console.log(firstValue - secondValue);
            return;
        case "*":
            console.log(firstValue * secondValue);
            return;
        case "/":
            console.log(firstValue / secondValue);
            return;
        default:
            console.error("L'opérateur saisi est invalide.");
            return;
    }
}

if (isNaN(userFirstValue) || isNaN(userSecondValue)) {
    console.error("Toutes les valeurs saisies ne sont pas des nombres !");
} else {
    compute(userFirstValue, userOperator, userSecondValue);
}
