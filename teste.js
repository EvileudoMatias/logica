// let numero = [1, 5, 8, 9, 22, 30];
// let par = [];
// for(let i = 0; i < numero.length; i++){
//     let j = numero[i]*2
//     par.push(j);
//     console.log(i);
//     console.log(par);
// }
const readline = require("readline-sync");

console.log('insira tres numero aleatorios')

let numeros = [];
let resultado = []
for(let i=1; i <= 3; i++){
let numero = Number(readline.question('informe o numero ' + i +': '));
numeros.push(numero);
}
for(let i=0; i < numeros.length; i++){

    let numero = numeros[i]*numeros[i];
    resultado.push(numero);
    
}
console.log(resultado);