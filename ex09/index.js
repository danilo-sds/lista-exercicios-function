// Escreva uma função que calcule e retorne o fatorial de um número inteiro fornecido
// pelo usuário.

let numberInfo = parseInt(
  prompt("Digite um número inteiro para calcular o seu fatorial: ")
);

function calcularFatorial(number) {
  if (number == 0) {
    return 1;
  } else {
    return number * calcularFatorial(number - 1);
  }
}

let result = calcularFatorial(numberInfo);

alert(`O número fatorial de ${numberInfo} é ${result}`);
