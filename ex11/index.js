//Escreva uma função que verifica se um número fornecido pelo usuário em um prompt é primo ou não.
let numberInfo = parseInt(prompt("Digite um número: "));

function verificarNumero(num) {
  if (num % 2 == 1) {
    return num;
  }
}

let result = verificarNumero(numberInfo);

console.log(result);
