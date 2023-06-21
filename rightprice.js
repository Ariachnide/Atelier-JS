const playerName = prompt("Quel est votre nom ?");

const random = Math.floor(Math.random() * 100) + 1;

let roll = prompt("Veuillez choisir un nombre entre 1 et 100");

while (parseInt(roll) !== random) {
    if (roll > random) {
        roll = prompt("C'est moins !");
    } else if (roll < random) {
        roll = prompt("C'est plus !");
    }
}

alert("Bien joué ! " + playerName + " a gagné !");
