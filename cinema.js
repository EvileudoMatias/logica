const readline = require("readline-sync");

let idade = parseInt(readline.question("Qual sua idade? "));
let estudante = readline.question("Voce é estudante ou idoso? (s/n)");

if (idade >= 16) {
    console.log ("entrada permitida");
    if (estudante.toLowerCase() === "s") {
        console.log("voce tem direito a meia entrada");
    } 
    else {
        console.log("voce paga o valor integral");
    }
} else {
    console.log("Entrada nao permitida para menores de 16 anos");
}   