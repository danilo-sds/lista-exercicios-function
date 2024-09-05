//Escreva uma função que verifica se um número fornecido pelo usuário em um prompt é primo ou não.

let numberClient = parseInt(
  prompt("Digite um número para verificar se é primo")
);

function verificarNumeroPrimo(num) {
  if (num % 2 == 1) {
    alert(`O número é primo!`);
  } else if (num % 2 == 0) {
    alert(`O número é par!`);
  } else {
    alert(`Por favor, informe um número certo!`);
  }
}

verificarNumeroPrimo(numberClient);
