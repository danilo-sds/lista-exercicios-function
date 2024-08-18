// Escreva uma função que encontre a área e o perímetro de um círculo, de acordo com o
// raio fornecido.

let raio = parseFloat(prompt("Digite o valor do raio: "));
const pi = Math.PI;

function calcularArea(r, p) {
  var calcArea = p * r * r;
  return calcArea;
}

function calcularPerimetro(r, pi) {
  var resultPerimetro = 2 * pi * r;
  return resultPerimetro;
}

let resultArea = calcularArea(raio, pi).toFixed(2);
let resultPerimetro = calcularPerimetro(raio, pi).toFixed(2);

alert(`${resultArea}`);
alert(`${resultPerimetro}`);
