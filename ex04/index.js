//. Escreva uma função que retorne a área de um triângulo, a partir dos valores de base e
//altura fornecidos.

let valorBase = parseFloat(prompt("Digite o valor da Base do triângulo: "));
let valorAltura = parseFloat(prompt("Digite o valor da Altura do triângulo: "));

function calcularArea(base, altura) {
  return (base * altura) / 2;
}

alert(`A área do triângulo é ${calcularArea(valorBase, valorAltura)}`);
