// Escreva uma função em JavaScript que conte quantas vezes um caractere aparece em
// uma string. Tanto o caractere quanto a string devem ser fornecidos pelo usuário.

function contarOcorrencias(string, caractere) {
  // Verifica se o caractere fornecido é válido
  if (caractere.length !== 1) {
    throw new Error("O caractere deve ser um único caractere.");
  }

  let contagem = 0;

  // Converte a string para um array de caracteres e itera sobre cada caractere
  for (let i = 0; i < string.length; i++) {
    if (string[i] === caractere) {
      contagem++;
    }
  }

  return contagem;
}

// Exemplo de uso da função
const stringUsuario = prompt("Digite a string:");
const caractereUsuario = prompt("Digite o caractere que deseja contar:");

try {
  const resultado = contarOcorrencias(stringUsuario, caractereUsuario);
  alert(
    `O caractere '${caractereUsuario}' aparece ${resultado} vez(es) na string.`
  );
} catch (erro) {
  alert(erro.message);
}
