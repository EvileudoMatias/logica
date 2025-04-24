const readline = require("readline-sync");

let peso = Number(readline.question("qual seu peso? "));
let altura = Number(readline.question("qual sua altura? "));
let resultado = peso/(altura*altura);

console.log('Seu imc:' + " "+ resultado.toFixed(2))

if (resultado <= 18){
    console.log('abaixo do peso')
}
else if (resultado >= 18 && resultado <= 24){
    console.log('Parabens! Peso normal')
}
else if (resultado >= 24 && resultado <=40){
    console.log('Cuidado!! Acima do peso')
}
else {
    console.log('Cuidado!! Obesidade morbida')
}