// Escreva uma função que permita contar o número de vogais contidas em uma string
// fornecida pelo usuário. Por exemplo, o usuário informa a string “Beterraba”, e a função
// retorna o número 4 (há 4 vogais nessa palavra).

let palavra = prompt("Digite uma palavra para contar as vogais: ");

function contarVogais(str) {
  //Converte para minúsculo
  str = str.toLowerCase();

  //Inicia o contador de vogais
  var contador = 0;

  //Conjunto de vogais para a regra
  const vogais = "aeiou";

  for (let i = 0; i < str.length; i++) {
    if (vogais.includes(str[i])) {
      contador++;
    }
  }
  return contador;
}

let numeroVogais = contarVogais(palavra);
alert(`Sua palavra é ${palavra} e contém ${numeroVogais} vogais`);
