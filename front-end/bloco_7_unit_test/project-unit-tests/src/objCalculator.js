/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois inteiros e retornar um inteiro.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/

const calculator = {
  add: (element1, element2) => Math.round(element1 + element2),
  mult: (element1, element2) => Math.round(element1 * element2),
  div: (element1, element2) => Math.floor(element1 / element2),
  sub: (element1, element2) => Math.round(element1 - element2),
};

module.exports = calculator;
