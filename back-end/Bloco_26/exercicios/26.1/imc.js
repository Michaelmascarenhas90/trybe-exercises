const readline = require('readline-sync');

const pesoEmKg = readline.question('Qual seu peso?');
const alturaAoQuadrado = readline.questionFloat('Qual a sua altura?');


console.log(`Seu IMC atual é: ${ pesoEmKg/(alturaAoQuadrado * 2) }!`);
