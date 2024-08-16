// Escreva uma função em JavaScript que realize a conversão de uma temperatura
// fornecida em graus Fahrenheit (F) para Celsius (C).

let temp = parseFloat(
  prompt("Transforme uma temperatura de Fahrenheit para Celsius: ")
);

function calcTemperatura(temp) {
  let calc = ((temp - 32) * 5) / 9;
  return calc.toFixed(2);
  /*let calc = temp - 32
     let result =  (calc * 0.5556) 
     return result.toFixed(2)*/
}

alert(`Em Celsius fica ${calcTemperatura(temp)}ºC`);
