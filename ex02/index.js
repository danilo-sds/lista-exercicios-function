//Escreva uma função que retorne o cubo de um número fornecido pelo usuário.

let number = parseFloat(
  prompt("Digite um número para calcular o cubo desse número: ")
);

function calcularCuboNumero(number) {
  return number * number * number;
}

alert(`O número ${number} ao cubo é ${calcularCuboNumero(number)}`);
