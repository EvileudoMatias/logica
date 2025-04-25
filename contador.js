// Importa a biblioteca readline-sync, que permite ler o que o usuario digita
const readline = require('readline-sync');

// Cria um array vazio para armazenar os números digitados
let numeros = [];

// Digite a variável numero como null (sem valor inicial)
let numero = null;

// Inicia o loop while que vai rodar até o usuário digitar 0
while (numero !== 0) {

    // Pede um número ao usuário
    // readline.question() lê o que o usuário digita (como texto)
    // parseInt() converte esse texto em numero inteiro 
    numero = parseInt(readline.question('digite um numero: '));

    // se o numero for diferente de 0, adiciona no array
    if (numero !== 0) numeros.push(numero);
}

// usa o metodo reduce para somar todos os numeros do array
// acc é o acumulador (soma parcial), val é cada numero do array
// 0 é o valor inicial do acumulador 
let soma = numeros.reduce((acc, val) => acc + val, 0);

// Mostra o resultado final 
console.log('Soma total:', soma);