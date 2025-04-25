const readline = require("readline-sync");

// let nota1 = Number(readline.question('Primeira nota: '));
// let nota2 = Number(readline.question('Segunda nota: '));
// let nota3 = Number(readline.question('Terceira nota: '));
// function media() {
//     return (nota1 + nota2 + nota3) / 3;
// }
// console.log(media().toFixed(2));

let nota1 = Number(readline.question('Primeira nota: '));
let nota2 = Number(readline.question('Segunda nota: '));
let nota3 = Number(readline.question('Terceira nota: '));
let media = (nota1+nota2+nota3)/3;

console.log('A média é: ' + media.toFixed(2));

if (media<=6) {
    console.log('REPROVADO!!!')
}
else {
    console.log("APROVADO!!")
}
