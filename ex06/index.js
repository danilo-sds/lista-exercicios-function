// . Escreva uma função que mostre na tela um número fornecido pelo usuário, porém
// invertido. Por exemplo, o usuário fornece o número 875 e a função mostra na tela o
// número 578

let number = prompt("Digite um número para inverter: ");

function inverterNumero(num) {
  return num.toString().split("").reverse().join("");
}

alert(
  `O número informado foi ${number}, invertido fica ${inverterNumero(number)}`
);
