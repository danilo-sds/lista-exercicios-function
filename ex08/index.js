// Escreva uma função que informe o retorno de um investimento (montante) com base
// nos valores do capital inicial, tempo em meses e taxa de juros mensal, fornecidos pelo
// usuário.
// Use a fórmula: M = C * (1+i)t
// Onde:
// ▪ C = Capital inicial investido
// ▪ i = Taxa de juros, em percentual
// ▪ t = Tempo do investimento, em meses
// Exiba o resultado com duas casas decimais.

let capitalInicial = parseFloat(prompt("Digite aqui o seu Capital Inicial: "));
let tempoInvestimento = parseInt(
  prompt("Informe por quantos meses o investimento: ")
);
let taxaJuros = parseFloat(prompt("Informe a taxa de juros mensal: "));

let converterTaxa = taxaJuros / 100;
alert(converterTaxa);

function calcularInvestimento(c, m, t) {
  let result = c * (1 + t) ** m;
  return result;
}

let resultado = calcularInvestimento(
  capitalInicial,
  tempoInvestimento,
  converterTaxa
);
alert(`O retorno do investimento é de R$${resultado.toFixed(2)}`);
